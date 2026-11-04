// lib/practice-themes.ts
//
// What makes each law firm practice page its own page, not a template with
// the name swapped: a focus keyword chosen against the ranking agency pages
// (Clio, Scorpion, Rankings.io, Juris Digital and similar all publish broad
// guides), the gap SearchPrex can own, long-tail searches with contextual
// links, two photographs and one section with its own format.
//
// Search volumes were not measured here; the long tails are chosen by intent
// and should be checked in Semrush before being reported as numbers.

export type ThemeImage = { src: string; alt: string; caption: string };
export type ThemeStep = { t: string; d: string; href?: string; anchor?: string };
export type LongTail = { q: string; why: string; href: string; anchor: string };

export type PracticeTheme = {
  focusKeyword: string;
  secondaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  gap: string;
  images: [ThemeImage, ThemeImage];
  unique: { format: "journey" | "hours" | "checklist" | "funnel"; eyebrow: string; title: string; intro: string; steps: ThemeStep[] };
  longTails: LongTail[];
  founderLine: string;
};

const U = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=70`;

export const PRACTICE_THEMES: Record<string, PracticeTheme> = {
  "family-law": {
    focusKeyword: "family law SEO",
    secondaryKeyword: "SEO for divorce lawyers",
    metaTitle: "Family Law SEO for Divorce & Custody Lawyers | From $1,200",
    metaDescription: "Family law SEO for divorce and custody firms: county pages, a strong Business Profile and private, privacy-safe tracking. Report every Monday, 7-day trial.",
    gap: "Most agency guides skip privacy. People searching for a divorce lawyer often hide it from a partner, so every page, form and tracking tag has to respect that.",
    images: [
      { src: U("1544027993-37dbfe43562a"), alt: "Two hands reaching toward each other between tall concrete walls", caption: "Most people research divorce quietly, often late at night, before they tell anyone." },
      { src: U("1511895426328-dc8714191300"), alt: "A large family holding hands on a beach at sunset", caption: "What they want is a calm next step for their children and their family." },
    ],
    unique: {
      format: "journey",
      eyebrow: "The quiet search",
      title: "How people look for a divorce lawyer, and where your firm should appear",
      intro: "Family law searches happen in stages. Your pages should meet people at each one, privately.",
      steps: [
        { t: "1. They search for answers, not a lawyer", d: "How custody works, how long a divorce takes, what it costs. County guides answer these first.", href: "/blog/keyword-research-for-law-firms", anchor: "keyword research for law firms" },
        { t: "2. They compare firms near them", d: "The map pack and reviews decide who they call. Your Google Business Profile has to look current and trusted.", href: "/services/law-firm-seo/google-business-profile-for-lawyers", anchor: "Google Business Profile for lawyers" },
        { t: "3. They reach out, carefully", d: "A private email option and a form that never leaks details into ads. No retargeting on sensitive pages.", href: "/intake-assistant", anchor: "a private AI intake assistant" },
      ],
    },
    longTails: [
      { q: "SEO for divorce lawyers", why: "The firm-side search behind this page.", href: "/services/law-firm-seo", anchor: "law firm SEO services" },
      { q: "child custody lawyer near me", why: "Needs a custody page and a strong map listing.", href: "/services/law-firm-seo/google-business-profile-for-lawyers", anchor: "Business Profile work for lawyers" },
      { q: "how much does a divorce lawyer cost in [county]", why: "Answered on a county page, honestly.", href: "/locations/texas/sugar-land", anchor: "our Sugar Land family law page" },
      { q: "family law SEO cost", why: "Answered in the pricing section below.", href: "/pricing", anchor: "published SEO pricing" },
      { q: "divorce attorney Google reviews", why: "Reviews gathered within bar rules.", href: "/resources/law-firm-seo-audit-checklist", anchor: "the law firm SEO audit checklist" },
    ],
    founderLine: "Family law clients are often at the worst moment of their lives. I build pages that speak to them calmly, and I keep their privacy out of your analytics.",
  },
  "criminal-defense": {
    focusKeyword: "criminal defense SEO",
    secondaryKeyword: "SEO for criminal defense lawyers",
    metaTitle: "Criminal Defense SEO for Lawyers: Charge Pages & 2am Calls",
    metaDescription: "Criminal defense SEO that ranks a page for each charge and catches the 2am call: DUI, drug and assault pages, map pack work, from $1,200/mo. 7-day trial.",
    gap: "Competitors talk about charge pages, but few plan for the hour it happens. Most criminal searches start right after an arrest, on a phone, often at night.",
    images: [
      { src: U("1589829545856-d10d557cf95f"), alt: "Bronze statue of Lady Justice holding scales", caption: "A family calling after an arrest wants one thing fast: someone who knows the charge." },
      { src: U("1521791136064-7986c2920216"), alt: "Two people shaking hands in an office", caption: "The firm that answers first, clearly and calmly, usually gets the case." },
    ],
    unique: {
      format: "hours",
      eyebrow: "The first 24 hours",
      title: "What happens in the 24 hours after an arrest, and where your firm should show up",
      intro: "Criminal defense searches are urgent. Each hour needs a different page.",
      steps: [
        { t: "Hour 0–1: the arrest", d: "A family member searches the charge and the city on a phone. A charge page for that city has to load fast.", href: "/services/technical-seo", anchor: "fast, mobile-first pages" },
        { t: "Hour 1–3: who can help now", d: "They call the first firm in the map pack that looks open. Your Business Profile hours and calls matter most here.", href: "/services/law-firm-seo/google-business-profile-for-lawyers", anchor: "Business Profile for lawyers" },
        { t: "Hour 3–12: is this lawyer right", d: "They read the charge page, the bail and court steps, and reviews.", href: "/resources/law-firm-seo-audit-checklist", anchor: "the law firm audit checklist" },
        { t: "Hour 12–24: the call is made", d: "An enquiry at 2am should not be lost. An AI intake assistant answers and books the callback.", href: "/intake-assistant", anchor: "the AI intake assistant" },
      ],
    },
    longTails: [
      { q: "SEO for criminal defense lawyers", why: "The firm-side search behind this page.", href: "/services/law-firm-seo", anchor: "law firm SEO services" },
      { q: "DUI lawyer [city]", why: "One page per charge and city converts best.", href: "/locations/arizona/scottsdale", anchor: "our Scottsdale law firm page" },
      { q: "drug possession lawyer near me", why: "Map pack plus a charge page.", href: "/services/law-firm-seo/google-business-profile-for-lawyers", anchor: "map pack work for lawyers" },
      { q: "criminal defense SEO cost", why: "Answered in the pricing section below.", href: "/pricing", anchor: "published SEO pricing" },
      { q: "what happens after an arrest in [state]", why: "State law explained correctly.", href: "/locations/texas", anchor: "our Texas law firm SEO page" },
    ],
    founderLine: "Criminal defense is decided in hours, not weeks. I build charge pages that load fast at 2am and an intake path that never lets that call go to voicemail.",
  },
  "estate-planning": {
    focusKeyword: "estate planning SEO",
    secondaryKeyword: "SEO for estate planning attorneys",
    metaTitle: "Estate Planning SEO for Attorneys: Wills, Trusts & Probate",
    metaDescription: "Estate planning SEO for attorneys: separate pages for wills, trusts and probate, plain explanations families trust, and map pack work. From $1,200/mo.",
    gap: "Most estate planning SEO puts everything on one page. Families search for wills, trusts and probate separately, and often for a parent, not themselves.",
    images: [
      { src: U("1450101499163-c8848c66ca85"), alt: "A person signing a document with a pen at a desk", caption: "Most families put this off for years, then search when something changes." },
      { src: U("1511895426328-dc8714191300"), alt: "A large family holding hands on a beach at sunset", caption: "They are planning for the people they love. Your pages should feel that way." },
    ],
    unique: {
      format: "checklist",
      eyebrow: "Conversations families put off",
      title: "The moments that make a family search for an estate planning attorney",
      intro: "Estate planning searches follow life events. Each one deserves its own clear page.",
      steps: [
        { t: "A new baby or a marriage", d: "They search for a will and a guardian. A plain will page answers first.", href: "/blog/keyword-research-for-law-firms", anchor: "how firms find these searches" },
        { t: "A parent gets older", d: "Adult children search for power of attorney and trusts for a parent.", href: "/services/law-firm-seo/google-business-profile-for-lawyers", anchor: "a trusted Business Profile" },
        { t: "Someone has died", d: "They search for probate, often in a hurry. A separate probate page catches it.", href: "/locations/texas/the-woodlands", anchor: "our The Woodlands law firm page" },
        { t: "Selling a business or a home", d: "They search for trusts and tax questions. Clear, sourced answers build trust.", href: "/resources/law-firm-seo-audit-checklist", anchor: "the law firm audit checklist" },
      ],
    },
    longTails: [
      { q: "SEO for estate planning attorneys", why: "The firm-side search behind this page.", href: "/services/law-firm-seo", anchor: "law firm SEO services" },
      { q: "probate attorney near me", why: "Needs its own page and map category.", href: "/services/law-firm-seo/google-business-profile-for-lawyers", anchor: "probate categories on a Business Profile" },
      { q: "living trust vs will", why: "A plain comparison families search.", href: "/services/law-firm-seo/family-law", anchor: "family law SEO" },
      { q: "estate planning SEO cost", why: "Answered in the pricing section below.", href: "/pricing", anchor: "published SEO pricing" },
      { q: "power of attorney for elderly parent", why: "Adult children searching for a parent.", href: "/locations/michigan", anchor: "our Michigan law firm page" },
    ],
    founderLine: "Estate planning clients want to feel safe, not sold to. I write plain pages that explain wills, trusts and probate, so they trust your firm before they call.",
  },
  "mass-torts": {
    focusKeyword: "mass tort SEO",
    secondaryKeyword: "mass tort marketing",
    metaTitle: "Mass Tort SEO: Sourced MDL Pages Live Fast | From $1,800",
    metaDescription: "Mass tort SEO for law firms: sourced pages for each tort and MDL, published fast and kept current, measured by cost per signed case. From $1,800/mo.",
    gap: "Big firms win active torts with budget. The gap is speed and trust: a sourced page for a new tort, live before the crowd, and kept current as the docket moves.",
    images: [
      { src: U("1554224155-6726b3ff858f"), alt: "A person sorting medical bills and paperwork with a calculator", caption: "Most claimants find out from the news, then search with a stack of bills in front of them." },
      { src: U("1529156069898-49953e39b3ac"), alt: "A group of people sitting with their arms around each other", caption: "They are not a lead list. Each one is a person who was harmed." },
    ],
    unique: {
      format: "funnel",
      eyebrow: "From news story to signed claimant",
      title: "How a mass tort search turns into a signed case",
      intro: "Mass tort timing is everything. Each stage needs a different page, published at the right moment.",
      steps: [
        { t: "1. The news breaks", d: "A recall or study hits the news. A sourced tort page goes live within days, citing the FDA notice or the court filing.", href: "/resources/news", anchor: "how we track dated news" },
        { t: "2. People check if they qualify", d: "They search the product and their symptoms. A clear eligibility page answers honestly.", href: "/services/technical-seo", anchor: "pages that index fast" },
        { t: "3. The MDL forms", d: "The docket page is updated as rulings come in, so it stays the best answer.", href: "/resources/law-firm-seo-audit-checklist", anchor: "the law firm audit checklist" },
        { t: "4. They sign", d: "Intake qualifies them before your team calls. You measure cost per signed case, not clicks.", href: "/intake-assistant", anchor: "the AI intake assistant" },
      ],
    },
    longTails: [
      { q: "mass tort marketing", why: "The broader firm-side search.", href: "/services/law-firm-seo", anchor: "law firm SEO services" },
      { q: "[product] lawsuit eligibility", why: "One sourced page per tort.", href: "/services/law-firm-seo/personal-injury", anchor: "personal injury SEO" },
      { q: "[product] MDL update", why: "Kept current as the docket moves.", href: "/resources/news", anchor: "dated SEO news" },
      { q: "mass tort SEO cost", why: "Answered in the pricing section below.", href: "/pricing", anchor: "published SEO pricing" },
      { q: "mass tort lead generation", why: "Measured by signed cases, not leads.", href: "/case-studies", anchor: "our case studies" },
    ],
    founderLine: "In mass torts, the first trusted page wins. I publish sourced tort pages fast, keep them current, and measure the work by signed cases.",
  },
};
