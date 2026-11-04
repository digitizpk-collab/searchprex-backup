"use client";

// app/services/law-firm-seo/LawFirmSEOClient.tsx
//
// Clean, Unified Light-Theme USA Law Firm SEO Page (Oct 2026).
// Zero emojis, zero flashy multi-color icons — clean black bold headings,
// black bullet points, and numbered cards matching the Location Pages design.
//
// Honesty & ABA Model Rule 7.1 Governance: SearchPrex has not completed a
// published law firm engagement yet, so no fabricated legal result is claimed.
// Every proof screenshot is from another local/ecommerce industry and labelled
// clearly as such.

import Link from "next/link";

import ServiceBlogTeaser from "@/components/ServiceBlogTeaser";
import ServiceProofStrip from "@/components/ServiceProofStrip";
import LawFirmStack from "@/components/LawFirmStack";
import IntakeAssistant from "@/app/components/intake-assistant/intake-assistant";
import type { Guide } from "@/lib/guides";
import { RETAINER_PLANS } from "@/lib/pricing";
import { INDUSTRY_PAGES } from "@/lib/industry-pages";
import { LOCATION_STATES } from "@/lib/locations";
import { AuthorCard, FaqList } from "@/components/layout";
import {
  Band,
  BandIntro,
  CheckList,
  Eyebrow,
  GuaranteeCard,
  H2,
  Lead,
  PriceCard,
} from "@/components/ServiceBands";

import ServiceTaglineReliefBar from "@/components/service-wireframe/ServiceTaglineReliefBar";
import LawFirmSemrushHero from "@/components/service-wireframe/LawFirmSemrushHero";
import ServiceQuickAnswerBox from "@/components/service-wireframe/ServiceQuickAnswerBox";
import LawFirmUspAndAuditSection from "@/components/service-wireframe/LawFirmUspAndAuditSection";
import LawFirmPracticeServicesSection from "@/components/service-wireframe/LawFirmPracticeServicesSection";
import LawFirmReliefVideoSection from "@/components/service-wireframe/LawFirmReliefVideoSection";
import ServiceAiDiagnosisAndTrial from "@/components/service-wireframe/ServiceAiDiagnosisAndTrial";
import ServiceUsaMapAndMarkets from "@/components/service-wireframe/ServiceUsaMapAndMarkets";
import LawFirmRoiCalculator from "@/components/service-wireframe/LawFirmRoiCalculator";
import LawFirmFounderSpotlight from "@/components/service-wireframe/LawFirmFounderSpotlight";
import ChatWithFounderWidget from "@/components/service-wireframe/ChatWithFounderWidget";

import { CAPSULES, FAQS } from "./data";

const LINKEDIN = "https://www.linkedin.com/in/mubashar-sharif-senior-seo-analyst/";
const LAW_PLAN = RETAINER_PLANS.find((p) => p.niche === "Law Firm SEO");

export default function LawFirmSEOClient({ guide: _guide }: { guide: Guide }) {
  return (
    <main>
      {/* 1. EMPATHETIC RELIEF TAGLINE BAR */}
      <ServiceTaglineReliefBar
        message="We are here to provide you a source of relief — we know your pain, and we have the solution."
        subText='Ranked #1 on Google for "law firm SEO Cleveland Ohio" · 5+ Years Experience · 7-Day Free Trial'
      />

      {/* PRACTICE-AREA QUICK NAVIGATION BAR (CLEAN MONOCHROME LIGHT THEME) */}
      <div className="overflow-x-auto border-b border-slate-200 bg-white">
        <nav
          className="mx-auto flex max-w-6xl items-center space-x-6 px-4 py-2.5 text-xs font-semibold sm:px-6 lg:px-8"
          aria-label="Practice areas"
        >
          <span className="whitespace-nowrap font-black text-neutral-950 uppercase tracking-wider">
            Practice Silos:
          </span>
          {INDUSTRY_PAGES.map((ind) => (
            <Link
              key={ind.slug}
              href={`/services/law-firm-seo/${ind.slug}`}
              className="whitespace-nowrap text-slate-600 transition-colors hover:text-neutral-950"
            >
              {ind.name}
            </Link>
          ))}
          <Link
            href="/services/law-firm-seo/google-business-profile-for-lawyers"
            className="whitespace-nowrap text-neutral-950 font-bold underline underline-offset-4 transition-colors hover:text-slate-700"
          >
            GBP for Lawyers
          </Link>
          <Link
            href="/resources/law-firm-seo-audit-checklist"
            className="whitespace-nowrap text-slate-600 transition-colors hover:text-neutral-950"
          >
            Free law firm SEO audit checklist
          </Link>
        </nav>
      </div>

      {/* STATE QUICK NAVIGATION — the state hubs, so law firm SEO links to
          each state it covers. */}
      <div className="overflow-x-auto border-b border-slate-200 bg-slate-50">
        <nav
          className="mx-auto flex max-w-6xl items-center space-x-6 px-4 py-2.5 text-xs font-semibold sm:px-6 lg:px-8"
          aria-label="Law firm SEO by state"
        >
          <span className="whitespace-nowrap font-black text-neutral-950 uppercase tracking-wider">
            By state:
          </span>
          {LOCATION_STATES.filter((s) => s.hubHref).map((s) => (
            <Link
              key={s.slug}
              href={s.hubHref!}
              className="whitespace-nowrap text-slate-600 transition-colors hover:text-neutral-950"
            >
              {s.name} law firm SEO
            </Link>
          ))}
        </nav>
      </div>

      {/* 2. CLEAN LOCATION-PAGE STYLE LIGHT HERO + FLOATING UI ELEMENTS + COMPRESSED WEBP DASHBOARD */}
      <LawFirmSemrushHero />

      {/* 3. AI OVERVIEW / GEO / CHATGPT QUICK ANSWER BOX (CONCISE, SEO OPTIMIZED & TO THE POINT) */}
      <ServiceQuickAnswerBox
        h2="How Do Law Firm SEO Services Work for US Attorneys in 2026?"
        answerCapsule="Law firm SEO services in the United States combine Google Business Profile Map Pack optimization, practice-area city silos (Family Law SEO, Criminal Defense SEO, Personal Injury SEO, and Probate), verifiable state bar E-E-A-T credentials, and LegalService JSON-LD schema so attorneys earn signed retainers from Google Search, AI Overviews, and ChatGPT."
        contextParagraph={
          <>
            Instead of burning $150 to $350+ per Google Ads click or paying agencies for meaningless Domain Authority (DA) vanity metrics, SearchPrex engineers county court silos that rank in the Map Pack Top 3 and earn authoritative citations across Google AI Overviews and ChatGPT search.
          </>
        }
        bullets={[
          {
            label: "County Practice Silos",
            detail: "Dedicated pages for Personal Injury, Family Law, Criminal Defense, and Probate court venues.",
          },
          {
            label: "Map Pack Top 3 Dominance",
            detail: "Primary GBP category precision, state bar citation reconciliation & review velocity.",
          },
          {
            label: "AEO & ChatGPT Answer Capsules",
            detail: "45–60 word statutory answer capsules + LegalService, Attorney & Speakable JSON-LD.",
          },
          {
            label: "Market Exclusivity & 7-Day Trial",
            detail: "Strictly 1 law firm per city & practice area · Full Monday reports · 90-day guarantee.",
          },
        ]}
        complianceBadge="ABA Model Rule 7.1 & Google YMYL Aligned"
        showLocationLink={true}
      />

      {/* 4. 9-SECOND INTERACTIVE RELIEF VIDEO + 2 CLEAN NUMBERED PAIN CARDS */}
      <LawFirmReliefVideoSection />

      {/* 3C. SPECIALIZED LAW FIRM SEO SERVICES & PRACTICE AREAS WE OFFER (6 SUB-SERVICES WITH CONTEXTUAL LINKS) */}
      <LawFirmPracticeServicesSection />

      {/* 5. UPLIFTED VERIFIED CASE STUDIES & PROOF STRIP */}
      <ServiceProofStrip
        id="proof"
        title="Verified Local & AI Overview Case Study Results Behind Our Law Firm Method"
        moreHref="/case-studies"
        moreLabel="See every verified case study"
        shots={[
          {
            src: "/images/proof/local-dolls-gsc-comparison.jpg",
            alt: "Google Search Console comparison for D.O.L.L.S. Cleaning: 264 clicks and 106K impressions in July 2025 against 192 clicks and 41K impressions in June 2025.",
            width: 626,
            height: 239,
            figure: "192 → 264",
            figureLabel: "monthly clicks, June → July 2025",
            caption: "D.O.L.L.S. Cleaning, Michigan — Search Console. Impressions grew from 41K to 106K.",
          },
          {
            src: "/images/proof/local-hvac-ai-overview.png",
            alt: "Google AI Overview for 'free cost estimation for ac installation in simi valley california' naming HVAC Services Team among businesses offering free estimates.",
            width: 717,
            height: 292,
            caption: "HVAC Services Team named in Google's AI Overview for a Simi Valley AC installation search.",
          },
        ]}
        footnote="Honesty & ABA Rule 7.1 Disclosure: These screenshots are from US local service businesses, not law firms — there is no published law firm case study on this site yet. The Map Pack, technical, and AI Overview engineering behind them is the exact system we execute for law firms."
      />

      {/* 3B. 6 CORE USPS (DEDICATED CLIENT CARE, WEEKLY REPORTS, 7-DAY TRIAL, TEAR-DOWN, AUDIT, GUARANTEE) + LEAD CAPTURE FORM */}
      <LawFirmUspAndAuditSection />

      {/* 3D. DEDICATED FOUNDER SPOTLIGHT (WHO IS MANAGING YOUR LAW FIRM'S SEO) */}
      <LawFirmFounderSpotlight />

      {/* 10. TRANSPARENT PRICING & INTERACTIVE ROI CALCULATOR */}
      <Band>
        {/* Interactive "1 Signed Case = Full ROI" Calculator */}
        <LawFirmRoiCalculator />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start pt-6">
          <div>
            <Eyebrow>Transparent Pricing &amp; Exclusivity</Eyebrow>
            <H2>Law Firm SEO Pricing ($1,200–$2,500/Mo) &amp; One-Firm-Per-City Exclusivity</H2>
            <Lead>
              You work directly with Founder Mubashar Sharif—who builds your practice-area pages, writes your LegalService schema, and manages your Google Business Profile. Every recommendation is engineered for your county court venue and caseload goals.
            </Lead>
            <div className="mt-8">
              <CheckList
                items={[
                  "Strict market exclusivity: one firm per US city and practice area",
                  "Limited-time 7-Day Free Trial + written plan before you pay anything",
                  "Built to Google YMYL and ABA Model Rule 7.1 advertising rules",
                  "Full weekly Monday report on Search Console clicks, Map Pack calls & leads",
                  "Month to month flexibility, backed by our 90-day money-back guarantee",
                ]}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {LAW_PLAN ? (
              <PriceCard
                plan={LAW_PLAN}
                label="Law firm SEO"
                note="Where a firm lands in the range depends on the number of practice areas and US cities. Month to month; one firm per city and practice area."
              />
            ) : null}
            <GuaranteeCard />
          </div>
        </div>
      </Band>

      {/* 9. LIVE 24/7 AI LEGAL INTAKE DEMO */}
      <Band muted id="intake-demo">
        <BandIntro
          eyebrow="Live demo · 24/7 AI legal intake assistant"
          title="Getting found is half the battle. Capturing every 2 a.m. legal caller is the other half."
          lead="An urgent Criminal Defense, Family Law, or Personal Injury inquiry that hits voicemail is a signed retainer lost to the next firm on Google Maps. Test our 24/7 legal intake assistant below."
        />
        <div className="mx-auto mt-8 max-w-4xl">
          <IntakeAssistant embedded />
        </div>
      </Band>

      {/* 7. INTERACTIVE USA MAP EMBED + VISUAL WEBP CITY CARDS (DUPLICATE LINKS REMOVED) */}
      <ServiceUsaMapAndMarkets
        serviceName="Law Firm SEO Services"
        answerCapsule='SearchPrex delivers one-firm-per-city Law Firm SEO across 9 core US states and 22+ pinpointed metropolitan and suburban venues—anchored by our #1 Google ranking for "law firm SEO Cleveland Ohio", and expanding across Sugar Land and The Woodlands (TX), Detroit and Grand Rapids (MI), Philadelphia (PA), Tempe and Scottsdale (AZ), San Jose (CA), Baton Rouge (LA), Albuquerque (NM), and Kansas.'
      />

      {/* 11. LAW FIRM BLOG TEASER + FAQS + TELEMETRY STRAP + FINAL CTA */}
      <ServiceBlogTeaser topic="law-firm" />

      <section id="faqs" className="bg-white py-16 sm:py-24 font-sans">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-black leading-tight tracking-tight text-neutral-950 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10">
            <FaqList faqs={[...CAPSULES, ...FAQS]} name="law-firm-seo-faq" />
          </div>
        </div>
      </section>

    </main>
  );
}
