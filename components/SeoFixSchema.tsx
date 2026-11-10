import { fixesFor } from '@/lib/nicheseo-fixes'

/** JSON-LD approved in NicheSEO Pro for this page (lib/nicheseo-fixes.ts). Renders nothing when there is none. */
export default async function SeoFixSchema({ path }: { path: string }) {
  const { schema } = await fixesFor(path)
  if (!schema?.length) return null
  return (
    <>
      {schema.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          data-source="nicheseo"
          // JSON.stringify output, with "<" escaped so the text can never close the script tag.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block).replace(/</g, '\\u003c') }}
        />
      ))}
    </>
  )
}
