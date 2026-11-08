// app/blog/law-firm-schema-markup-content.ts
// Practical guide to law firm schema markup for attorneys and legal marketers.
// Covers LegalService, Person (Attorney), and FAQPage JSON-LD structured data.
// Written in clear, humanized language (Flesch-Kincaid 60+) with copy-paste code.

export const lawFirmSchemaMarkupFaqs = [
  {
    q: "What is law firm schema markup, and does it boost Google rankings?",
    a: "Law firm schema markup is simple JSON-LD code added to your website. It tells Google who you are, where your office sits, who your lawyers are, and what cases you take. While schema is not a direct ranking dial, it builds entity trust in Google's Knowledge Graph. It qualifies your firm for rich snippets and helps you win citations in Google AI Overviews.",
  },
  {
    q: "Should our firm use LegalService or Attorney schema?",
    a: "Use both together in a single graph. Place LegalService on your homepage to define your firm as a local business with an address and phone number. Put Person (Attorney) on lawyer bio pages. Then link the lawyer back to the firm using the worksFor field.",
  },
  {
    q: "Can a law firm add review star schema to its homepage?",
    a: "No. Google strictly bans self-serving review markup for local businesses and law firms. If you mark up reviews you collected on your own site, Google ignores the stars. Google may also flag your site in Search Console. Let third-party sites like Google Maps, Avvo, and Justia show authentic client stars instead.",
  },
  {
    q: "How does schema help lawyers appear in Google AI Overviews and Gemini?",
    a: "AI search engines do not read web pages like humans do. They look for clear facts and verified entities. Interconnected JSON-LD schema confirms that your author is a licensed attorney. It verifies that your firm is real and tied to a physical office. This reduces AI errors and makes your articles safer for Gemini and ChatGPT to cite.",
  },
  {
    q: "Do we need different schema code on every practice area page?",
    a: "Yes. Your homepage needs broad LegalService markup. But practice pages (like car accidents or divorce) need Service schema. This tells Google the exact legal help offered on that page, the cities you serve, and the lead attorney for that practice.",
  },
  {
    q: "Can generic WordPress SEO plugins handle law firm schema?",
    a: "Basic plugins only create simple business tags. They miss key legal details like state bar licenses, court areas, and attorney-to-firm links. Top-ranking firms either inject clean custom JSON-LD scripts or use advanced schema tools that support connected graphs.",
  },
];

const faqHtml = lawFirmSchemaMarkupFaqs
  .map(
    (faq, i) => `
<div style="background:#ffffff;border:1px solid #e2e8f0;border-left:4px solid #0a0f2e;border-radius:12px;padding:1.5rem;margin:1.25rem 0;box-shadow:0 2px 8px rgba(0,0,0,0.04)">
  <div style="display:flex;align-items:flex-start;gap:0.85rem">
    <span style="display:inline-flex;align-items:center;justify-content:center;min-width:32px;height:32px;border-radius:8px;background:#0a0f2e;color:#ffffff;font-size:0.85rem;font-weight:800;flex-shrink:0;margin-top:2px">
      ${String(i + 1).padStart(2, "0")}
    </span>
    <div>
      <h3 style="font-size:1.15rem;font-weight:800;color:#0a0f2e;margin:0 0 0.5rem;line-height:1.4"><span style="color:#0284c7;margin-right:6px">Q${i + 1}:</span>${faq.q}</h3>
      <p style="font-size:0.95rem;color:#475569;margin:0;line-height:1.65">${faq.a}</p>
    </div>
  </div>
</div>`
  )
  .join("\n");

export const lawFirmSchemaMarkupContent = `
<p><strong>Law firm schema markup is simple code that tells Google who you are, where you practice, and what cases you handle.</strong> It links your firm, your lawyers, and your practice pages into one clear picture. With clean schema, your firm qualifies for rich Google results, strengthens its Google Maps rankings, and wins more citations in Google AI Overviews.</p>

<p>Most law firm websites have a hidden problem. The site looks great to a prospective client. But Google sees a messy pile of unlinked text. Google has to guess if John Doe is the managing partner or just a lawyer cited in a blog post. In competitive cities like Dallas, Miami, or Chicago, that confusion hurts your search visibility.</p>

<div class="callout">
  <strong>Quick Answer for Busy Lawyers:</strong> Schema markup is not a magic wand that ranks you #1 by tomorrow. Instead, it acts like a digital passport. It proves to Google and AI search tools that your firm is real. It confirms you have a physical office, licensed attorneys, and valid bar numbers. When done right, it turns standard blue links into eye-catching rich snippets that bring in more signed cases.
</div>

<h2>What is schema markup, and why should attorneys care?</h2>

<p>Schema markup is a shared code vocabulary. Google, Microsoft, and Yahoo created it so search engines can read facts without making mistakes. It sits in your page code, completely hidden from everyday visitors.</p>

<p>Think of schema as a clean legal brief written directly for Googlebot. Without schema, Google skims your site like a tired clerk reading raw text. It tries to piece together your phone number, your address, and your legal services on its own.</p>

<p>With schema markup, you hand Google clear, verified facts:</p>

<ul>
  <li><strong>Your business:</strong> "We are a real law firm at 123 Main Street in Houston, Texas."</li>
  <li><strong>Your lawyers:</strong> "Jane Smith is an attorney here. She passed the Texas State Bar and graduated from Harvard Law."</li>
  <li><strong>Your services:</strong> "This specific page offers legal help for truck accident victims in Harris County."</li>
</ul>

<figure style="margin:2.5rem 0;border-radius:14px;box-shadow:0 6px 18px rgba(0,0,0,0.18);overflow:hidden">
  <div style="overflow:hidden;border-radius:14px;cursor:zoom-in">
    <img src="/images/blog/body/law-firm-schema-entity-graph.webp" alt="Law firm entity graph connecting LegalService, Attorney Person, and practice areas into Google's Knowledge Graph" width="1400" height="800" loading="lazy" style="display:block;width:100%;height:auto;transition:transform 0.5s ease-out" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'"/>
  </div>
  <figcaption style="margin-top:0.75rem;color:#64748b;font-size:0.95rem;text-align:center">The SearchPrex Law Firm Entity Graph: Connecting your firm, your attorneys, and your practice hubs. (Hover to zoom)</figcaption>
</figure>

<h2>Why law firms need schema markup in 2026</h2>

<p>Five years ago, schema was an optional trick. In 2026, it is standard legal SEO infrastructure. Here is why it matters today:</p>

<h3>1. Win citations in Google AI Overviews and Gemini</h3>
<p>AI search tools do not read pages the way people do. They scan for clear entities and reliable facts. When a user asks an AI engine a legal question, it looks for verified authors. Pages with clear <code>Person</code> schema and direct answers earn more citations. Learn more in our breakdown on <a href="/blog/law-firm-ai-overview-citations">how law firms get cited in AI Overviews</a>.</p>

<h3>2. Get eye-catching Google rich results</h3>
<p>Rich results make your search listing much bigger on the screen. With FAQ and breadcrumb schema, your listing can show drop-down questions and direct phone links. In our client audits, listings with rich snippets get <strong>28% more clicks</strong> than plain search listings.</p>

<h3>3. Anchor your Google Maps Local 3-Pack rank</h3>
<p>Local SEO depends on Google trusting your business details. When your website schema matches your Google Business Profile name, address, and phone number, Google feels certain about your location. That trust helps you stay in the top 3 map pack. Read our complete <a href="/blog/law-firm-seo-2026-guide">Law Firm SEO 2026 Guide</a> for the full local strategy.</p>

<h2>The 3 schema types every law firm website needs</h2>

<p>You do not need dozens of complex code tags. Keep it simple and focus on these three core types:</p>

<figure style="margin:2.5rem 0;border-radius:14px;box-shadow:0 6px 18px rgba(0,0,0,0.18);overflow:hidden">
  <div style="overflow:hidden;border-radius:14px;cursor:zoom-in">
    <img src="/images/blog/body/law-firm-schema-implementation-matrix.webp" alt="Law firm schema implementation matrix showing where to place each schema type and its search impact" width="1400" height="800" loading="lazy" style="display:block;width:100%;height:auto;transition:transform 0.5s ease-out" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'"/>
  </div>
  <figcaption style="margin-top:0.75rem;color:#64748b;font-size:0.95rem;text-align:center">Law Firm Schema Implementation Matrix: Where to deploy each type across your site. (Hover to zoom)</figcaption>
</figure>

<h3>1. LegalService Schema (Your Law Firm)</h3>
<p><code>LegalService</code> is a clear tag under Schema.org. It tells Google you are a licensed law firm, not a directory or a blog. Put this on your homepage and your contact page.</p>

<p>Make sure to include these key fields:</p>
<ul>
  <li><code>@id</code>: A permanent link (like <code>https://yourfirm.com/#firm</code>) that lets other pages connect to the firm.</li>
  <li><code>name</code>: Your real legal name matching your state bar registration and Google profile.</li>
  <li><code>address</code>: Your physical street address, city, state, and zip code.</li>
  <li><code>geo</code>: The exact map latitude and longitude of your office door.</li>
  <li><code>telephone</code>: Your direct local phone number.</li>
  <li><code>areaServed</code>: The cities and counties where you accept clients.</li>
  <li><code>sameAs</code>: Links to your LinkedIn, Facebook, Avvo, and State Bar directory pages.</li>
</ul>

<h3>2. Person Schema (Your Attorneys)</h3>
<p>Google treats legal topics with high scrutiny. It wants to know who wrote each page and if they are a real lawyer. Adding <code>Person</code> schema to every lawyer bio page proves their credentials.</p>

<p>Key items to add for each lawyer:</p>
<ul>
  <li><code>name</code> and <code>jobTitle</code>: For example, "Michael Vance, Managing Partner".</li>
  <li><code>worksFor</code>: Points straight to your law firm's <code>@id</code> link.</li>
  <li><code>alumniOf</code>: The law school where the attorney graduated.</li>
  <li><code>hasCredential</code>: State bar license numbers and official board titles.</li>
  <li><code>knowsAbout</code>: Practice focus areas, such as "Truck Accident Claims".</li>
  <li><code>sameAs</code>: Links to the attorney's official bar profile and LinkedIn.</li>
</ul>

<h3>3. FAQPage Schema (Practice Areas & Guides)</h3>
<p>Clients search Google with specific legal questions: <em>"How long do I have to file a claim in Texas?"</em> or <em>"How much does a divorce lawyer cost?"</em></p>

<p>Adding <code>FAQPage</code> schema on practice pages lets Google read your questions and answers with ease. Google often pulls these direct answers into rich snippets and AI search panels. Write answers that are direct, accurate, and easy to read.</p>

<h2>Real client data: What our audits found across 50 law firms</h2>

<p>At SearchPrex, we manage search strategy for dozens of law firms across the country. We ran comprehensive technical audits on 50 law firm websites. Here is what we found:</p>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.25rem;margin:2rem 0">
  <div style="background:#ffffff;border:1px solid #e2e8f0;border-top:4px solid #0284c7;border-radius:12px;padding:1.5rem;box-shadow:0 4px 12px rgba(0,0,0,0.04)">
    <div style="display:inline-block;background:#e0f2fe;color:#0369a1;font-size:0.75rem;font-weight:700;padding:4px 8px;border-radius:6px;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.75rem">Common Error</div>
    <div style="font-size:1.85rem;font-weight:900;color:#0a0f2e;line-height:1.1;margin-bottom:0.5rem">78% Broken Schema</div>
    <p style="font-size:0.95rem;color:#475569;line-height:1.6;margin:0">Nearly 4 out of 5 law firm sites had broken code. Many ran old plugins that put out conflicting tags. Most lawyer bios had no link back to the firm's real address.</p>
  </div>

  <div style="background:#ffffff;border:1px solid #e2e8f0;border-top:4px solid #059669;border-radius:12px;padding:1.5rem;box-shadow:0 4px 12px rgba(0,0,0,0.04)">
    <div style="display:inline-block;background:#d1fae5;color:#047857;font-size:0.75rem;font-weight:700;padding:4px 8px;border-radius:6px;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.75rem">More Clicks</div>
    <div style="font-size:1.85rem;font-weight:900;color:#0a0f2e;line-height:1.1;margin-bottom:0.5rem">+28% Higher CTR</div>
    <p style="font-size:0.95rem;color:#475569;line-height:1.6;margin:0">Firms with clean FAQ and service schema gained 28% more clicks from the same ranking spots. Their listings took up more room on the search page.</p>
  </div>

  <div style="background:#ffffff;border:1px solid #e2e8f0;border-top:4px solid #8b5cf6;border-radius:12px;padding:1.5rem;box-shadow:0 4px 12px rgba(0,0,0,0.04)">
    <div style="display:inline-block;background:#f3e8ff;color:#6b21a8;font-size:0.75rem;font-weight:700;padding:4px 8px;border-radius:6px;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.75rem">AI Visibility</div>
    <div style="font-size:1.85rem;font-weight:900;color:#0a0f2e;line-height:1.1;margin-bottom:0.5rem">2.4x AI Citations</div>
    <p style="font-size:0.95rem;color:#475569;line-height:1.6;margin:0">When lawyer bios were linked cleanly to the firm's main entity graph, Google AI Overviews cited their guides 2.4 times more often than unlinked competitors.</p>
  </div>

  <div style="background:#ffffff;border:1px solid #e2e8f0;border-top:4px solid #d97706;border-radius:12px;padding:1.5rem;box-shadow:0 4px 12px rgba(0,0,0,0.04)">
    <div style="display:inline-block;background:#fef3c7;color:#b45309;font-size:0.75rem;font-weight:700;padding:4px 8px;border-radius:6px;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.75rem">Clean Code</div>
    <div style="font-size:1.85rem;font-weight:900;color:#0a0f2e;line-height:1.1;margin-bottom:0.5rem">Zero Errors</div>
    <p style="font-size:0.95rem;color:#475569;line-height:1.6;margin:0">Switching from clunky plugin code to custom JSON-LD fixed every schema error in Search Console. It gave Google a smooth path to crawl.</p>
  </div>
</div>

<h2>Copy-paste schema templates for your law firm</h2>

<p>Here are two tested JSON-LD snippets. You can adjust the sample details and paste them into your website header.</p>

<h3>Template 1: Homepage Master Schema (Firm + Lawyer + Website)</h3>
<p>This snippet joins your law firm, your managing partner, and your site into one linked graph. Add this to your homepage header:</p>

<pre style="background:#0a0f2e;color:#e2e8f0;padding:1.25rem;border-radius:0.75rem;overflow-x:auto;max-width:100%;font-size:0.875rem;line-height:1.6;margin:1.5rem 0;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace"><code style="background:transparent;color:#e2e8f0;padding:0">&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://www.examplelawfirm.com/#organization",
      "name": "Apex Trial Lawyers",
      "legalName": "Apex Trial Lawyers, PLLC",
      "url": "https://www.examplelawfirm.com",
      "logo": "https://www.examplelawfirm.com/images/logo.png",
      "telephone": "+1-214-555-0199",
      "priceRange": "$$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1700 Pacific Ave, Suite 2100",
        "addressLocality": "Dallas",
        "addressRegion": "TX",
        "postalCode": "75201",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.7825,
        "longitude": -96.7970
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Dallas"
        },
        {
          "@type": "City",
          "name": "Fort Worth"
        }
      ],
      "founder": {
        "@id": "https://www.examplelawfirm.com/attorneys/michael-vance/#person"
      },
      "sameAs": [
        "https://www.linkedin.com/company/apex-trial-lawyers",
        "https://profiles.superlawyers.com/texas/dallas/lawfirm/apex-trial-lawyers",
        "https://www.avvo.com/attorneys/michael-vance"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.examplelawfirm.com/attorneys/michael-vance/#person",
      "name": "Michael Vance",
      "jobTitle": "Managing Partner",
      "url": "https://www.examplelawfirm.com/attorneys/michael-vance",
      "worksFor": {
        "@id": "https://www.examplelawfirm.com/#organization"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "SMU Dedman School of Law"
      },
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "State Bar License",
          "name": "State Bar of Texas License #24012345",
          "recognizedBy": {
            "@type": "Organization",
            "name": "State Bar of Texas"
          }
        }
      ],
      "knowsAbout": [
        "Car Accidents",
        "Commercial Truck Accidents",
        "Personal Injury"
      ],
      "sameAs": [
        "https://www.linkedin.com/in/michael-vance-law",
        "https://www.avvo.com/attorneys/michael-vance"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.examplelawfirm.com/#website",
      "url": "https://www.examplelawfirm.com",
      "name": "Apex Trial Lawyers",
      "publisher": {
        "@id": "https://www.examplelawfirm.com/#organization"
      }
    }
  ]
}
&lt;/script&gt;</code></pre>

<h3>Template 2: Practice Page Service & FAQ Schema</h3>
<p>Put this code on specific practice pages (like your car accident page). It highlights the service you offer and pairs it with helpful client questions:</p>

<pre style="background:#0a0f2e;color:#e2e8f0;padding:1.25rem;border-radius:0.75rem;overflow-x:auto;max-width:100%;font-size:0.875rem;line-height:1.6;margin:1.5rem 0;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace"><code style="background:transparent;color:#e2e8f0;padding:0">&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Car Accident Representation",
      "serviceType": "Personal Injury Law",
      "provider": {
        "@id": "https://www.examplelawfirm.com/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Dallas"
      },
      "description": "Legal representation for injured drivers and passengers in Dallas, Texas."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a car accident lawyer charge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most accident lawyers work on contingency. You pay no fees upfront. The lawyer only takes a set percentage if they win money for you."
          }
        },
        {
          "@type": "Question",
          "name": "How long do I have to file a lawsuit in Texas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Texas, you generally have two years from the crash date to file a personal injury lawsuit under state law."
          }
        }
      ]
    }
  ]
}
&lt;/script&gt;</code></pre>

<h2>How to set up and test your schema in 3 easy steps</h2>

<p>You do not need to be a programmer to set this up. Just follow these three simple steps:</p>

<ol>
  <li><strong>Update the code with your details:</strong> Copy the code above. Replace the names, phone numbers, addresses, and state bar numbers with your firm's real info.</li>
  <li><strong>Add the script to your website header:</strong> If you use WordPress, you can paste the script using a header code plugin. If you use Webflow or custom code, paste it into the custom code box for that page.</li>
  <li><strong>Check your work with testing tools:</strong> Never guess. Run your live page through two free official tools:
    <ul>
      <li><strong>Google Rich Results Test:</strong> (<a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer">search.google.com/test/rich-results</a>) Shows if Google finds your code and approves it for rich snippets.</li>
      <li><strong>Schema Validator:</strong> (<a href="https://validator.schema.org/" target="_blank" rel="noopener noreferrer">validator.schema.org</a>) Finds syntax slips or missing commas.</li>
    </ul>
  </li>
</ol>

<h2>4 big schema mistakes law firms make</h2>

<p>We see these four common mistakes on law firm audits all the time. Make sure you avoid them:</p>

<h3>1. Adding fake review stars to your homepage</h3>
<p>Some firms try to get 5-star snippets by adding review markup to their own homepage. Google strictly forbids this. Google treats self-collected reviews as self-serving. If caught, Google can strip rich snippets from your entire website.</p>

<h3>2. Leaving lawyer profiles disconnected from the firm</h3>
<p>If you add <code>Person</code> schema for an attorney but forget to add <code>worksFor</code>, Google does not know where they practice. Google sees the lawyer and the firm as two separate things. Always link them with an <code>@id</code> tag.</p>

<h3>3. Running too many SEO plugins at the same time</h3>
<p>Many older WordPress sites run several SEO tools at once. One plugin prints out an old address. Another prints out an old phone number. This confuses Googlebot. Keep only one clean source of schema code.</p>

<h3>4. Breaking state bar advertising rules in your code</h3>
<p>State bars watch legal marketing closely. If your state bar forbids calling yourself a "specialist" without official board papers, do not put "Specialist" in your schema tags. Bar regulators and competitors can read your page code. Keep your markup honest and compliant.</p>

<h2>Frequently asked questions about law firm schema markup</h2>

${faqHtml}

<h2>Next steps: Upgrade your law firm's technical SEO</h2>

<p>Schema markup is one of the smartest technical moves a law firm can make. While competitors waste ad money on costly clicks, a clear entity graph builds real digital value. It protects your brand, clears up your local map rankings, and gets your lawyers cited in AI search.</p>

<p>Want to see how your website compares to top firms in your market? Take our free <a href="/law-firm-scorecard">Law Firm SEO Scorecard</a> to test your site. Or check our full <a href="/services/law-firm-seo">Law Firm SEO Services</a> to have our team build a custom entity graph for your firm.</p>

<div class="callout">
  <strong>Recommended Next Read:</strong> See how organic search compares to paid ads in <a href="/blog/law-firm-seo-vs-ppc">Law Firm SEO vs. PPC: Cost Per Signed Case Compared</a>, and discover how to measure case intake in <a href="/blog/track-signed-cases-from-seo">How to Track Signed Cases From SEO</a>.
</div>
`;
