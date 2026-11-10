// ═══════════════════════════════════════════════════════════
//  /api/nicheseo — fixes approved in NicheSEO Pro, by webhook
//
//  NicheSEO Pro signs each request: X-NicheSEO-Signature is
//  "sha256=" + HMAC-SHA256(NICHESEO_WEBHOOK_SECRET, "<timestamp>.<body>").
//  Anything unsigned, signed with another secret or older than five
//  minutes is refused. The secret is shown once in NicheSEO Pro (Site
//  Health → Connections → Developer connection) and set as the
//  NICHESEO_WEBHOOK_SECRET environment variable on Vercel.
//
//  Events: ping (the connection test), fix.apply and fix.undo. This site
//  takes title/meta description ("meta") and structured data ("schema");
//  any other kind of fix is refused with a reason, so NicheSEO Pro never
//  counts it as done. After a change the page is revalidated, and NicheSEO
//  Pro reads the live page to confirm the change is there.
// ═══════════════════════════════════════════════════════════
import crypto from 'node:crypto'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'
import { normalizePath, removeFix, saveFix } from '@/lib/nicheseo-fixes'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const json = (body: unknown, status = 200) => NextResponse.json(body, { status })

function signatureOk(secret: string, timestamp: string, body: string, signature: string): boolean {
  const ts = Number(timestamp)
  if (!secret || !Number.isFinite(ts) || Math.abs(Date.now() / 1000 - ts) > 300) return false
  const expected = 'sha256=' + crypto.createHmac('sha256', secret).update(`${timestamp}.${body}`).digest('hex')
  return signature.length === expected.length && crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
}

export async function POST(req: Request) {
  const secret = process.env.NICHESEO_WEBHOOK_SECRET?.trim() ?? ''
  if (!secret) return json({ error: 'This site has no webhook secret set yet.' }, 503)
  const body = await req.text()
  if (!signatureOk(secret, req.headers.get('x-nicheseo-timestamp') ?? '', body, req.headers.get('x-nicheseo-signature') ?? '')) {
    return json({ error: 'Bad or expired signature.' }, 401)
  }

  let e: any
  try {
    e = JSON.parse(body)
  } catch {
    return json({ error: 'The body is not JSON.' }, 400)
  }
  if (e.event === 'ping') return json({ ok: true })
  if (e.event !== 'fix.apply' && e.event !== 'fix.undo') return json({ error: `Unknown event "${e.event}".` }, 400)

  const path = normalizePath(e.path ?? e.page ?? '/')
  const fix = e.fix ?? {}
  try {
    if (fix.type === 'meta') {
      if (e.event === 'fix.apply') {
        const title = String(fix.title ?? '').trim()
        const description = String(fix.description ?? '').trim()
        if (!title || title.length > 120 || description.length > 320) return json({ error: 'The title or description is empty or too long.' }, 422)
        await saveFix(path, 'meta', String(fix.id ?? ''), { title, description }, e.previous ?? null)
      } else {
        await removeFix(path, 'meta', fix.id ? String(fix.id) : undefined)
      }
    } else if (fix.type === 'schema') {
      if (e.event === 'fix.apply') {
        const blocks = Array.isArray(fix.jsonld) ? fix.jsonld.filter((b: any) => b && typeof b === 'object' && b['@type']) : []
        if (!blocks.length) return json({ error: 'No structured data in the fix.' }, 422)
        await saveFix(path, 'schema', String(fix.id ?? ''), blocks, null)
      } else {
        await removeFix(path, 'schema', fix.id ? String(fix.id) : undefined)
      }
    } else {
      //  H1, body text, image alt text and links live in the page templates and the CMS here.
      return json({ error: `This site applies title, meta description and structured data fixes. Apply this ${fix.type ?? 'fix'} in the site's CMS or code.` }, 422)
    }
  } catch (err: any) {
    console.error('[nicheseo webhook]', err?.message ?? err)
    return json({ error: 'The fix could not be saved. Try again in a minute.' }, 500)
  }

  //  The next visit renders the page with the change, so NicheSEO Pro's live check sees it.
  revalidatePath(path)
  return json({ ok: true, path, applied: e.event === 'fix.apply' })
}
