"use client";
//#region Imports
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useIsLoaded from "@/hooks/useIsLoaded";

//#endregion

//#region Constants
const services = [
  {
    title: "Wild Escapes",
    description:
      "From dramatic landscapes to remote destinations, these journeys are designed for exploration, freedom, and connection with nature.",
    image: "/content/banners/natureAndAdventureBanner.webp",
  },
  {
    title: "Cultural Immersion",
    description:
      "Immersive experiences rooted in history, art, gastronomy, and local traditions. Crafted for travelers who want to understand the soul of a destination.",
    image: "/content/banners/culturalJourneysBanner.webp",
  },
  {
    title: "Urban Pulse",
    description:
      "Vibrant cities, modern culture, architecture, and creative scenes. Perfect for travelers drawn to design, lifestyle, and urban energy.",
    image: "/content/banners/urbanAndContemporaryBanner.webp",
  },
  {
    title: "Bespoke Journeys",
    description:
      "Fully customized journeys built around your interests, pace, and travel style. No templates. Just experiences designed around you.",
    image: "/content/banners/tailoredExperiencesBanner.webp",
  },
];
//#endregion

export default function StackingServicesCardsSection() {
  //#region Hooks
  const containerRef = useRef<HTMLDivElement>(null);
  const { isLoaded } = useIsLoaded();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  //#endregion

  return (
    <section
      ref={containerRef}
      className="relative"
      style={
        isLoaded ? { height: `${(services.length + 1) * 150}vh` } : undefined
      }
      id="what-we-offer"
    >
      {/* BADGE - TITLE - DESCRIPTION - SERVICES */}
      <div className="sticky top-0 mt-20 min-h-screen flex items-center justify-center overflow-hidden">
        {/* BADGE - TITLE - DESCRIPTION - SERVICES */}
        <div className="px-6 lg:px-12 w-full">
          {/* BADGE - TITLE - DESCRIPTION */}
          <div className="mb-14 flex flex-col lg:flex-row items-center gap-5 justify-between">
            {/* BADGE - TITLE */}
            <div>
              {/* BADGE */}
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-4">
                What We Offer
              </p>

              {/* TITLE */}
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Travel{" "}
                <motion.span
                  className="relative inline-block font-serif italic font-normal text-muted-foreground"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Experiences
                  <motion.span
                    variants={{
                      hidden: { scaleX: 0 },
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 0.9,
                          ease: "easeOut",
                          delay: 0.25,
                        },
                      },
                    }}
                    className="absolute left-0 -bottom-3 h-0.75 w-[130%] origin-left bg-linear-to-r from-accent via-accent/60 to-transparent"
                  />
                </motion.span>
              </h2>
            </div>

            {/* DESCRIPTION */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed w-full max-w-3xl">
              Every journey we create is thoughtfully curated around
              experiences, not itineraries. From immersive cultures to untamed
              landscapes and tailor-made escapes, each path is designed to feel
              personal, effortless, and unforgettable.
            </p>
          </div>

          {/* SERVICES */}
          <div className="relative h-[60vh]">
            {services.map((service, i) => (
              <StackingCard
                key={service.title}
                service={service}
                index={i}
                total={services.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StackingCard({
  service,
  index,
  total,
  progress,
}: {
  service: { title: string; description: string; image: string };
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  //#region Constants
  const start = index / total;
  const end = (index + 1) / total;
  //#endregion

  //#region Hooks
  const { isLoaded } = useIsLoaded();

  const y = useTransform(progress, [start, end], [120, 0]);
  const scale = useTransform(progress, [end, end + 0.15], [1, 0.94]);

  const opacity = useTransform(progress, (v) => {
    if (v < start) return 0.05;
    if (v >= start && v <= end) return 1;
    return 1;
  });

  const zIndex = useTransform(progress, (v) => {
    if (v >= start && v < end) return 50;
    if (v < start) return total - index;
    return 1;
  });
  //#endregion

  return (
    <motion.div
      style={
        isLoaded
          ? {
              y: index === 0 ? 0 : y,
              scale,
              opacity,
              zIndex,
              backgroundImage: `url(${service.image})`,
            }
          : undefined
      }
      className="absolute inset-0 rounded-3xl overflow-hidden bg-cover bg-center text-white"
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-r from-[#181818]/90 via-[#181818]/60 md:via-[#181818]/20 to-transparent" />

      {/* INDEX - TITLE - DESCRIPTION */}
      <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between">
        {/* INDEX - TITLE */}
        <div>
          {/* INDEX */}
          <span className="font-mono text-sm opacity-60">0{index + 1}</span>

          {/* TITLE */}
          <h3 className="font-mono text-3xl md:text-5xl font-light mt-2 max-w-xl">
            {service.title}
          </h3>
        </div>

        {/* DESCRIPTION */}
        <p className="font-sans text-lg md:text-xl font-light opacity-90 max-w-lg">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
