// ═══════════════════════════════════════════════════════════
//  nicheseo-fixes.ts — SEO fixes approved in NicheSEO Pro
//
//  NicheSEO Pro sends each fix its owner approves to /api/nicheseo as
//  signed JSON (app/api/nicheseo/route.ts). The fixes this site takes are
//  stored here, one per page and kind, and read by the page templates:
//
//    meta    a page title and meta description  → withSeoFix()
//    schema  JSON-LD structured data            → <SeoFixSchema />
//
//  Undo deletes the row, so the page goes back to what its template says.
//  The table is made on first use; no migration is needed.
// ═══════════════════════════════════════════════════════════
import type { Metadata } from 'next'
import { db } from '@/lib/db'

export type FixKind = 'meta' | 'schema'
export interface MetaFix { title: string; description: string }
export type SchemaFix = Record<string, unknown>[]

let ready: Promise<void> | null = null
function ensureTable(): Promise<void> {
  if (ready) return ready
  ready = db
    .$executeRawUnsafe(
      `CREATE TABLE IF NOT EXISTS nicheseo_fixes (
         path       TEXT NOT NULL,
         kind       TEXT NOT NULL,
         fix_id     TEXT NOT NULL,
         data       JSONB NOT NULL,
         previous   JSONB,
         applied_at TIMESTAMPTZ NOT NULL DEFAULT now(),
         PRIMARY KEY (path, kind)
       )`
    )
    .then(() => undefined)
    .catch((e: unknown) => {
      ready = null
      throw e
    })
  return ready as Promise<void>
}

/** "/services/local-seo/?x=1#a" → "/services/local-seo". The home page is "/". */
export function normalizePath(raw: string): string {
  let p = String(raw || '/').split(/[?#]/)[0] || '/'
  try {
    if (/^https?:\/\//i.test(p)) p = new URL(p).pathname
  } catch {}
  p = '/' + p.replace(/^\/+/, '')
  return p.length > 1 ? p.replace(/\/+$/, '') : '/'
}

export async function saveFix(path: string, kind: FixKind, fixId: string, data: unknown, previous: unknown) {
  await ensureTable()
  await db.$executeRawUnsafe(
    `INSERT INTO nicheseo_fixes (path, kind, fix_id, data, previous, applied_at)
     VALUES ($1, $2, $3, $4::jsonb, $5::jsonb, now())
     ON CONFLICT (path, kind) DO UPDATE SET fix_id = EXCLUDED.fix_id, data = EXCLUDED.data, previous = EXCLUDED.previous, applied_at = now()`,
    normalizePath(path), kind, fixId, JSON.stringify(data), previous == null ? null : JSON.stringify(previous)
  )
}

/** Undo: removes the fix (only the one with this id, when an id is given). */
export async function removeFix(path: string, kind: FixKind, fixId?: string) {
  await ensureTable()
  if (fixId) await db.$executeRawUnsafe(`DELETE FROM nicheseo_fixes WHERE path = $1 AND kind = $2 AND fix_id = $3`, normalizePath(path), kind, fixId)
  else await db.$executeRawUnsafe(`DELETE FROM nicheseo_fixes WHERE path = $1 AND kind = $2`, normalizePath(path), kind)
}

/** The fixes for one page. Never throws: a database problem leaves the page as its template made it. */
export async function fixesFor(path: string): Promise<{ meta?: MetaFix; schema?: SchemaFix }> {
  try {
    await ensureTable()
    const rows = (await Promise.race([
      db.$queryRawUnsafe(`SELECT kind, data FROM nicheseo_fixes WHERE path = $1`, normalizePath(path)),
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 2000)),
    ])) as { kind: string; data: any }[]
    const out: { meta?: MetaFix; schema?: SchemaFix } = {}
    for (const r of rows) {
      if (r.kind === 'meta' && r.data?.title) out.meta = { title: String(r.data.title), description: String(r.data.description ?? '') }
      if (r.kind === 'schema' && Array.isArray(r.data)) out.schema = r.data
    }
    return out
  } catch {
    return {}
  }
}

/** A page's metadata with an approved title and description in place of the template's. */
export async function withSeoFix(path: string, base: Metadata): Promise<Metadata> {
  const { meta } = await fixesFor(path)
  if (!meta) return base
  //  `absolute`, so the layout's title template ("%s | Searchprex") is not added to a title written whole.
  return {
    ...base,
    title: { absolute: meta.title },
    description: meta.description || base.description,
    openGraph: { ...(base.openGraph ?? {}), title: meta.title, description: meta.description || base.openGraph?.description },
    twitter: { ...(base.twitter ?? {}), title: meta.title, description: meta.description || (base.twitter as any)?.description },
  }
}
