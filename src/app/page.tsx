import { FeaturedDestinations } from "@/components/sections/featuredDestinations";
import { ContactFormSection } from "@/components/sections/contactFormSection";
import MaskRevealSection from "@/components/sections/maskRevealSection";
import StackingServicesCardsSection from "@/components/sections/stackingServicesCardsSection";
import { WhyChooseUsSection } from "@/components/sections/whyChooseUsSection";
import { TravelFooter } from "@/components/sections/travelFooter";
import HeroScrollSection from "@/components/sections/heroScrollSection";
import { TabbedTrips } from "@/components/sections/tabbedTrips";
import { StatsSection } from "@/components/sections/statsSection";

export default function Home() {
  return (
    <main className="relative">
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
