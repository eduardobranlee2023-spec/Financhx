import React from "react";
import { notFound } from "next/navigation";
import { getDictionaryByLocale, hasLocale } from "@/dictionaries/dictionaries";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { PlatformModules } from "@/components/PlatformModules";
import { ReconcileDemo } from "@/components/ReconcileDemo";
import { CustomSoftwareSection } from "@/components/CustomSoftwareSection";
import { FAQSection } from "@/components/FAQSection";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";
import { Footer } from "@/components/Footer";
import { WorkflowMarquee } from "@/components/WorkflowMarquee";
import { StatsBanner } from "@/components/vendor/ui-layouts/stats-banner";
import { VideoDemoSection } from "@/components/VideoDemoSection";
import { TransferConceptSection } from "@/components/TransferConceptSection";
import { MotionLabSection } from "@/components/MotionLabSection";
import { UILayoutsMotionSection } from "@/components/UILayoutsMotionSection";

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionaryByLocale(lang);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20 selection:text-white">
      <Navbar dict={dict.navbar} lang={lang} />
      <main>
        <Hero lang={lang} />
        <StatsBanner lang={lang} />
        <WorkflowMarquee />
        <ProblemSection lang={lang} />
        <VideoDemoSection lang={lang} />
        <PlatformModules lang={lang} />
        <ReconcileDemo />
        <MotionLabSection />
        <UILayoutsMotionSection />
        <TransferConceptSection />
        <CustomSoftwareSection lang={lang} />
        <FAQSection lang={lang} />
        <EarlyAccessForm dict={dict.earlyAccess} lang={lang} />
      </main>
      <Footer dict={dict.footer} lang={lang} />
    </div>
  );
}
