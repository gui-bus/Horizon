"use client";
import { ContactFormSection } from "@/components/sections/contactFormSection";
import { FeaturedDestinations } from "@/components/sections/featuredDestinations";
import HeroScrollSection from "@/components/sections/heroScrollSection";
import MaskRevealSection from "@/components/sections/maskRevealSection";
import StackingServicesCardsSection from "@/components/sections/stackingServicesCardsSection";
import { StatsSection } from "@/components/sections/statsSection";
import { TabbedTrips } from "@/components/sections/tabbedTrips";
import { TravelFooter } from "@/components/sections/travelFooter";
import { WhyChooseUsSection } from "@/components/sections/whyChooseUsSection";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function Home() {
  //#region Hooks
  useScrollSpy([
    { id: "hero" },
    { id: "what-we-offer" },
    { id: "why-choose-horizon" },
    { id: "featured-destinations" },
    { id: "horizon-in-numbers" },
    { id: "divider" },
    { id: "destinations" },
    { id: "reach-horizon-travels" },
    { id: "footer" },
  ]);
  //#endregion

  return (
    <main className="relative overflow-x-hidden">
      <HeroScrollSection />

      <StackingServicesCardsSection />

      <WhyChooseUsSection />

      <FeaturedDestinations />

      <StatsSection />

      <MaskRevealSection />

      <TabbedTrips />

      <ContactFormSection />

      <TravelFooter />
    </main>
  );
}
