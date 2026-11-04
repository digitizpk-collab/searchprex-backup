// app/services/local-seo/data.ts
//
// The questions, answers and proof on /services/local-seo, in one place, so
// page.tsx builds the FAQPage schema from the arrays the page renders.
//
// Figures come from named case studies or dated screenshots only.

import { costFaq } from "@/lib/pricing";
export interface QA {
  q: string;
  a: string;
}

/** Direct Answer Capsules for Google AI Overviews, Featured Snippets & ChatGPT. */
export const CAPSULES: QA[] = [
  {
    q: "How does Google decide Google Maps and Local Pack rankings in the USA?",
    a: "Google says local results depend on relevance, distance and popularity. Relevance means your category and services match the search. Distance is how close you are. Popularity comes from reviews, listings and your website. You cannot move your address, but you can improve the other two.",
  },
  {
    q: "What results have SearchPrex local SEO clients seen?",
    a: "On client accounts, D.O.L.L.S. Cleaning in Michigan rose from 192 to 264 monthly clicks and 41K to 106K impressions in Search Console, holds #1 and #2 for carpet cleaning in Clawson, and is cited first in Google's AI Overview in Chesterfield. HVAC Services Team in Simi Valley, CA is cited in Google's AI Overview, and Mammoth Roofing in Texas grew from 16.9K to 45.2K impressions.",
  },
  {
    q: "Why did my Google Maps ranking suddenly drop or get suspended?",
    a: "Check your Business Profile before you blame an algorithm. A suspension, an unwanted edit, a vague category or removed reviews can drop you overnight. Maps rankings and website rankings work separately, so I check both during your 7-day free trial.",
  },
];

export const FAQS: QA[] = [
  {
    q: "How do you rank service-area businesses in surrounding US suburbs when you only have one physical address?",
    a: "If your office is in one town but you serve the towns around it, one homepage cannot rank everywhere. So I set up your service area on Google and build a separate page for each town, with real jobs from that area.",
  },
  {
    q: "What is Answer Engine Optimization (AEO) and AI Overview SEO for a local business?",
    a: "Google AI Overviews and ChatGPT now answer local searches above the Map Pack. Clear short answers, honest pricing, matching business details and schema help Google name your company first.",
  },
  {
    q: "Why are local business owners exhausted by previous SEO agencies?",
    a: "Many local agencies sell directory packages, send monthly PDFs that hide your call numbers, and hand your profile to a junior. With SearchPrex, you work with the founder, Mubashar Sharif, who has 5+ years in SEO. You get a report every Monday on calls and Map Pack spots, and you can try it free for 7 days.",
  },
  {
    q: "What happens if a competitor or customer suggests a wrong edit to my Google Business Profile?",
    a: "Google gives business owners a short window to accept or reject suggested edits and cross-checks your website's HTML and structured data to decide whether to publish them. Keeping your website's name, address, phone number, and hours 100% identical to your Business Profile is your strongest defense.",
  },
  {
    q: "How fast can a US business rank in the Google Maps Top 3?",
    a: "It depends on your competition and where your profile starts, so nobody honest can promise a date. But fixing your category, your listings, your reviews and your town pages usually moves you in the Map Pack within 45 to 90 days.",
  },
  {
    q: "Which local businesses do you work with, and is there a contract?",
    a: "We work with US businesses that win or lose on phone calls in a city or service area: HVAC, roofing, cleaning, garage doors, plumbing, medical clinics, and local law firms. There is no long-term contract—retainers are month to month, backed by our 90-day money-back guarantee and a limited-time 7-Day Free Trial.",
  },
];

// The question people type ("local seo services cost"), answered from lib/pricing.
const LOCAL_COST = costFaq("Local SEO", "local SEO");
if (LOCAL_COST) FAQS.push(LOCAL_COST);

/** Why local businesses lose the map pack — each a thing an owner can check today. */
export const PROBLEMS: Array<{ title: string; check: string; costs: string }> = [
  {
    title: "The wrong primary Google Business Profile category",
    check: "Open your Business Profile → Edit profile → Business category, and compare it against the Top 3 in your US city.",
    costs: "Primary category is the single strongest Map Pack relevance signal you control. The wrong category hides your vans and crews from high-intent 'near me' callers.",
  },
  {
    title: "Business NAP details that disagree across US directories",
    check: "Search your business name and compare phone, suite number, and address on Google, Apple Maps, Yelp, BBB, and your website footer.",
    costs: "Different names, addresses or phone numbers online hurt your ranking. Google also checks your website before it accepts edits to your profile.",
  },
  {
    title: "Stale review velocity compared to the Map Pack Top 3",
    check: "Count how many genuine customer reviews you earned in the last 90 days versus the top three competitors in your city.",
    costs: "Recent reviews that mention your services help your Map Pack spot as much as your star rating.",
  },
  {
    title: "No dedicated page for the service or the US suburb you serve",
    check: "Search “[your service] [your city or suburb]” and check if your site has a dedicated page matching that local query.",
    costs: "Without a dedicated service-area page, Google and AI Overviews have nothing on your website to match the local searcher's intent.",
  },
];

/** Dated screenshots in public/images/proof, captions as on the homepage. */
export const PROOF = [
  {
    src: "/images/proof/local-dolls-ai-overview-rank1.png",
    width: 628,
    height: 322,
    alt: "Google results for 'post construction cleaning in Chesterfield, MI' showing D.O.L.L.S. Cleaning cited first in the AI Overview and ranking first organically.",
    stage: "D.O.L.L.S. Cleaning · Michigan",
    caption: "Named first in the AI Overview, #1 organic below it",
    href: "/case-studies/cleaning/dolls-cleaning",
  },
  {
    src: "/images/proof/local-hvac-ai-overview.png",
    width: 717,
    height: 292,
    alt: "Google AI Overview for 'free cost estimation for ac installation in simi valley california' citing HVAC Services Team by name.",
    stage: "HVAC Services Team · California",
    caption: "Cited inside the AI Overview by name",
    href: "/case-studies/hvac/local-hvac-services",
  },
  {
    src: "/images/proof/local-mammoth-texas.png",
    width: 624,
    height: 334,
    alt: "Google results for 'Local Residential Roof Repair in Texas' with Mammoth Roofs ranking seventh.",
    stage: "Mammoth Roofing · Texas",
    caption: "Position #7 for a statewide query",
    href: "/case-studies/roofing/mammoth-roofing",
  },
];
