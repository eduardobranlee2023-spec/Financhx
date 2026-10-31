import React from "react";
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
import { TransferConceptSection } from "@/components/TransferConceptSection";
import { MotionLabSection } from "@/components/MotionLabSection";
import { UILayoutsMotionSection } from "@/components/UILayoutsMotionSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20 selection:text-white">
      {/* Top sticky discreet navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section with Live Product Mockup */}
        <Hero />

        <StatsBanner />
        <WorkflowMarquee />

        {/* The Operational Friction: Problem Diagnosis */}
        <ProblemSection />

        {/* Financhx OS: The 3 Modules Architecture */}
        <PlatformModules />

        {/* Financhx Reconcile: Interactive Workbench Demo */}
        <ReconcileDemo />

        <MotionLabSection />

        <UILayoutsMotionSection />

        {/* Illustrative financial interface, not an available transfer feature */}
        <TransferConceptSection />

        {/* Second Commercial Line: Software a Medida */}
        <CustomSoftwareSection />

        <FAQSection />

        {/* Early Access / Private Pilot Lead Generation */}
        <EarlyAccessForm />
      </main>

      {/* Corporate Institutional Footer */}
      <Footer />
    </div>
  );
}
