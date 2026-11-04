// app/services/ecommerce-seo/data.ts
//
// Questions and answers on /services/ecommerce-seo, in one place, so page.tsx
// builds the FAQPage schema from what the page renders.
//
// Figures: Michigan Sports & Outdoor from Search Console (about 3,000 indexed
// pages in mid-May 2026 to 11,549 on 25 July 2026); SMK Store from the client's
// WooCommerce dashboard ($5,832 in April 2026 to $19,100 in June 2026). Pricing
// from lib/pricing.

import { RETAINER_PLANS, formatRange } from "@/lib/pricing";

export interface QA {
  q: string;
  a: string;
}

const ECOM_PLAN = RETAINER_PLANS.find((p) => p.niche === "Ecommerce SEO");

export const CAPSULES: QA[] = [
  {
    q: "Why are my product pages not indexed by Google in the United States?",
    a: "Usually because Google crawled the URLs and decided they are not worth keeping in its index. Common causes across US Shopify and WooCommerce stores are near-duplicate manufacturer descriptions, thin boilerplate templates, faceted filter and sort URLs wasting crawl budget, and products missing price, image, or stock signals. Search Console reports these as \"Crawled - currently not indexed\".",
  },
  {
    q: "What results has ecommerce SEO produced for SearchPrex clients?",
    a: "On Michigan Outdoor Sports, a WooCommerce catalogue, indexed pages rose from about 3,000 to 11,549 between May and July 2026, with US organic clicks up 83% in Google Search Console (and 224 to 322 US clicks in the Apr–Jun vs Jun–Aug comparison). On SMK Store, total monthly net sales went from $5,832 to $19,100 between April and June 2026, per the client's WooCommerce dashboard.",
  },
  {
    q: "Is Shopify or WooCommerce better for SEO and AI Shopping citations?",
    a: "Neither ranks better by default; they break in different places. Shopify locks URL prefixes (/products/, /collections/) and exposes duplicate product URLs inside collection paths. WooCommerce offers full URL control, but filter, sort, and attribute parameters multiply crawl traps, and heavy plugins hurt Core Web Vitals (INP). Both require clean Product, Offer, and MerchantReturnPolicy JSON-LD.",
  },
];

export const FAQS: QA[] = [
  {
    q: "How do you get Shopify and WooCommerce products cited in Google AI Overviews and ChatGPT Shopping?",
    a: "AI Overviews and ChatGPT Shopping read product details, prices, stock, shipping and returns straight from your pages. I add the right schema markup, short buying guides on category pages, and an llms.txt file that lists your catalog.",
  },
  {
    q: "Why are ecommerce brands exhausted by previous SEO agencies?",
    a: "Many ecommerce agencies sell backlink packages, send monthly PDFs that hide how many products are missing from Google, and hand your store to a junior. With SearchPrex, you work with the founder, Mubashar Sharif, who has 5+ years in SEO. You get Search Console and revenue reviews every Monday, and you can try it free for 7 days.",
  },
  {
    q: "How long before our US store sees indexing and organic revenue movement?",
    a: "Indexing recovery and Core Web Vitals (INP/LCP) template fixes usually appear in Google Search Console within two to four weeks of Googlebot recrawling. Category and product rankings build over 60 to 90 days. On Michigan Outdoor Sports, the indexing recovery from about 3,000 to 11,549 indexed pages took roughly ten weeks between May and July 2026.",
  },
  {
    q: "Do you work on Shopify, WooCommerce, and custom headless stores across the USA?",
    a: "Yes. Our published store case studies are WooCommerce (SMK Store, with 35,000+ products, and Michigan Sports and Outdoor). I use the same method on Shopify, BigCommerce and custom stores.",
  },
  {
    q: "What if our catalog has 10,000+ SKUs with manufacturer copy?",
    a: "I give every product a unique description, specs, FAQ markup, links from its category and a meta description. The pages go live in batches, and I check Search Console before starting the next batch.",
  },
  {
    q: "How does the 7-Day Free Trial work for an ecommerce store?",
    a: "During your 7-day free trial, I compare your sitemap with what Google has indexed, find the templates that keep products out, prepare schema for your top collection, and give you a 90-day plan. You pay nothing until then.",
  },
  {
    q: "How much does ecommerce SEO cost?",
    a: ECOM_PLAN
      ? `Ecommerce retainers run ${formatRange(ECOM_PLAN)} a month, depending on catalogue size, technical scope and content volume. Every engagement starts with our 24-hour tear-down and limited-time 7-Day Free Trial — month to month, backed by our 90-day money-back guarantee.`
      : "Pricing depends on catalogue size, technical scope and content volume. Every engagement starts with the free tear-down — no commitment.",
  },
];
