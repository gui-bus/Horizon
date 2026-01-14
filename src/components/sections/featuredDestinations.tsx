"use client";
//#region Imports
import { Button } from "@heroui/react";
import { AirplaneTakeoffIcon, StarIcon } from "@phosphor-icons/react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
//#endregion

//#region Constants
export const items = [
  {
    title: "Kyoto",
    subtitle: "Tradition, nature, and quiet beauty",
    image: "/content/destinations/kyoto.webp",
    rating: 4.97,
    reviews: 1052,
  },
  {
    title: "Patagonia",
    subtitle: "Untamed landscapes at the edge of the world",
    image: "/content/destinations/patagonia.webp",
    rating: 4.95,
    reviews: 751,
  },
  {
    title: "Santorini",
    subtitle: "Cliffs, light, and endless horizons",
    image: "/content/destinations/santorini.webp",
    rating: 4.93,
    reviews: 456,
  },

  {
    title: "Swiss Alps",
    subtitle: "Majestic peaks and alpine serenity",
    image: "/content/destinations/swissAlps.webp",
    rating: 4.92,
    reviews: 967,
  },
  {
    title: "Marrakech Desert",
    subtitle: "Golden dunes and timeless silence",
    image: "/content/destinations/marrakechDesert.avif",
    rating: 4.89,
    reviews: 365,
  },
];
//#endregion

export function FeaturedDestinations() {
  //#region Hooks
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    skipSnaps: false,
  });
  //#endregion

  //#region useStates
  const [selectedIndex, setSelectedIndex] = useState(0);
  //#endregion

  //#region useCallbacks
  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);
  //#endregion

  //#region useEffects
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    requestAnimationFrame(() => {
      onSelect();
      emblaApi.reInit();
    });

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    let autoplayInterval: NodeJS.Timeout;

    const startAutoplay = () => {
      autoplayInterval = setInterval(() => {
        emblaApi.scrollNext();
      }, 4500);
    };

    const stopAutoplay = () => {
      if (autoplayInterval) clearInterval(autoplayInterval);
    };

    startAutoplay();

    emblaApi.on("pointerDown", stopAutoplay);
    emblaApi.on("pointerUp", startAutoplay);

    return () => {
      stopAutoplay();
      emblaApi.off("pointerDown", stopAutoplay);
      emblaApi.off("pointerUp", startAutoplay);
    };
  }, [emblaApi]);
  //#endregion

  return (
    <section className="relative py-20 pb-10 md:pb-40 pl-6 lg:pl-12">
      <div className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-0">
        <motion.div
          className="relative bg-foreground rounded-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* TITLE - SUBTITLE - SEE MORE - CAROUSEL */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between">
            {/* TITLE - SUBTITLE - SEE MORE */}
            <div className="relative w-full lg:w-125">
              {/* TITLE - SUBTITLE - SEE MORE */}
              <div className="relative rounded-2xl p-6 sm:p-8 lg:p-10 lg:pl-16 md:min-h-100 flex flex-col justify-between">
                {/* TITLE */}
                <span className="font-mono uppercase text-sm tracking-[0.3em] text-white mb-6">
                  Featured Destinations
                </span>

                {/* SUBTITLE */}
                <h2 className="text-white text-3xl sm:text-4xl xl:text-5xl font-light leading-tight mb-8">
                  Places designed to be{" "}
                  <span className="font-serif font-bold">
                    seen, felt, and remembered
                  </span>
                </h2>

                {/* SEE MORE */}
                <Button className="bg-transparent border border-white hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-1 text-white w-full max-w-sm h-14">
                  Explore All Destinations
                </Button>
              </div>
            </div>

            {/* CAROUSEL */}
            <motion.div
              className="flex-1 w-full lg:max-w-[calc(100%-500px)] min-w-0 mb-6 md:mb-0 md:absolute right-0 -top-16 select-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* ITEMS - CONTROLS */}
              <div className="relative w-full">
                {/* ITEMS */}
                <div className="overflow-hidden w-full" ref={emblaRef}>
                  {/* ITEMS */}
                  <div className="flex w-full">
                    {/* ITEMS */}
                    {items.map((item) => (
                      <div
                        key={item.title}
                        className="flex-[0_0_100%] sm:flex-[0_0_85%] lg:flex-[0_0_420px] min-w-0 px-2 sm:pr-6"
                      >
                        {/* IMAGE - OVERLAY - TITLE - SUBTITLE - CTA */}
                        <div className="relative rounded-tl-3xl rounded-br-3xl overflow-hidden h-112.5 sm:h-125 lg:h-150">
                          {/* IMAGE */}
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                            unoptimized
                            loading="lazy"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 420px"
                          />

                          {/* OVERLAY */}
                          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                          {/* RATINGS - TITLE - SUBTITLE - CTA */}
                          <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-8 space-y-5">
                            {/* RATINGS */}
                            <div className="flex items-center gap-2">
                              <StarIcon
                                size={16}
                                weight="fill"
                                className="text-yellow-600"
                              />
                              <p className="text-white">
                                {item.rating} ({item.reviews})
                              </p>
                            </div>

                            <div>
                              {/* TITLE */}
                              <h3 className="text-white text-2xl sm:text-3xl font-light">
                                {item.title}
                              </h3>
                              {/* SUBTITLE */}
                              <p className="text-sm sm:text-base text-white/80">
                                {item.subtitle}
                              </p>
                            </div>

                            {/* CTA */}
                            <button
                              type="button"
                              className="bg-accent text-white h-14 w-full justify-center rounded-3xl flex items-center gap-5 hover:-translate-y-1 transition-all duration-300"
                            >
                              <AirplaneTakeoffIcon size={28} /> Book now
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CONTROLS */}
                <div className="flex items-center justify-between mt-8 gap-4">
                  <div className="flex gap-2">
                    {items.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1 transition-all duration-300 ${
                          index === selectedIndex
                            ? "bg-foreground w-14"
                            : "bg-foreground/40 w-6"
                        }`}
                      />
                    ))}
                  </div>

                  {/* PREV - NEXT */}
                  <div className="flex gap-3 mr-5">
                    {/* PREV */}
                    <Button
                      type="button"
                      onClick={scrollPrev}
                      aria-label="Previous"
                      className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white transition-all text-2xl"
                    >
                      ‹
                    </Button>

                    {/* NEXT */}
                    <Button
                      type="button"
                      onClick={scrollNext}
                      aria-label="Next"
                      className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white transition-all text-2xl"
                    >
                      ›
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
