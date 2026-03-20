"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { fadeInUp, viewportOnce } from "@/lib/motion";

export function TabbedTrips() {
  const t = useTranslations("TabbedTrips");
  const tc = useTranslations("Common");
  const [activeTab, setActiveTab] = useState("wild-escapes");

  const categories = [
    {
      id: "wild-escapes",
      label: t("categories.wild"),
      trips: [
        {
          id: "amazon",
          name: t("trips.amazon"),
          duration: tc("days", { count: 7 }),
          price: "$2,100",
          image: "/content/trips/amazonia.webp",
        },
        {
          id: "patagonia",
          name: t("trips.patagonia"),
          duration: tc("days", { count: 10 }),
          price: "$2,500",
          image: "/content/trips/patagonia.webp",
        },
        {
          id: "australia",
          name: t("trips.australia"),
          duration: tc("days", { count: 8 }),
          price: "$2,400",
          image: "/content/trips/australia.webp",
        },
        {
          id: "alaska",
          name: t("trips.alaska"),
          duration: tc("days", { count: 7 }),
          price: "$2,300",
          image: "/content/trips/alaska.webp",
        },
      ],
    },
    {
      id: "cultural-immersion",
      label: t("categories.culture"),
      trips: [
        {
          id: "kyoto",
          name: t("trips.kyoto"),
          duration: tc("days", { count: 5 }),
          price: "$1,900",
          image: "/content/trips/kyoto.webp",
        },
        {
          id: "paris",
          name: t("trips.paris"),
          duration: tc("days", { count: 4 }),
          price: "$2,000",
          image: "/content/trips/paris.webp",
        },
        {
          id: "rome",
          name: t("trips.rome"),
          duration: tc("days", { count: 5 }),
          price: "$1,850",
          image: "/content/trips/roma.webp",
        },
        {
          id: "mexico",
          name: t("trips.mexico"),
          duration: tc("days", { count: 6 }),
          price: "$1,950",
          image: "/content/trips/mexico.webp",
        },
      ],
    },
    {
      id: "urban-pulse",
      label: t("categories.urban"),
      trips: [
        {
          id: "ny",
          name: t("trips.ny"),
          duration: tc("days", { count: 4 }),
          price: "$2,200",
          image: "/content/trips/newYork.webp",
        },
        {
          id: "tokyo",
          name: t("trips.tokyo"),
          duration: tc("days", { count: 5 }),
          price: "$2,300",
          image: "/content/trips/tokyo.webp",
        },
        {
          id: "london",
          name: t("trips.london"),
          duration: tc("days", { count: 4 }),
          price: "$2,100",
          image: "/content/trips/london.webp",
        },
        {
          id: "hk",
          name: t("trips.hk"),
          duration: tc("days", { count: 4 }),
          price: "$2,250",
          image: "/content/trips/hongKong.webp",
        },
      ],
    },
  ];

  const activeCategory = categories.find((c) => c.id === activeTab);

  return (
    <section
      className="py-24 lg:py-48 bg-background overflow-hidden"
      id="destinations"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* TOP INTRO */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-24 lg:mb-40">
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-8 block">
              {t("badge")}
            </span>
            <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-serif font-light text-foreground leading-[0.8] tracking-tight">
              {t("title")} <br />
              <span className="italic">{t("title_highlight")}</span>
            </h2>
          </motion.div>
          <motion.div
            className="lg:col-span-5 flex flex-col justify-end pb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.4 }}
          >
            <p className="text-xl text-foreground/40 font-light leading-relaxed italic border-l border-border pl-10">
              {t("description")}
            </p>
          </motion.div>
        </div>

        {/* INTERACTIVE CONTENT */}
        <div className="grid lg:grid-cols-12 gap-20">
          {/* VERTICAL SIDEBAR CATEGORIES */}
          <div className="lg:col-span-3 flex flex-col gap-12 border-l border-border/40 pl-8">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveTab(category.id)}
                className="group flex flex-col items-start text-left gap-4"
              >
                <span
                  className={`text-[9px] font-bold uppercase tracking-[0.4em] transition-colors duration-500 ${activeTab === category.id ? "text-accent" : "text-foreground/20"}`}
                >
                  {t("explore_selection")}
                </span>
                <span
                  className={`text-2xl lg:text-3xl font-serif font-light transition-all duration-500 ${activeTab === category.id ? "text-foreground pl-4 border-l-2 border-accent" : "text-foreground/20 group-hover:text-foreground/40"}`}
                >
                  {category.label}
                </span>
              </button>
            ))}
          </div>

          {/* DYNAMIC RESULTS DISPLAY */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
              <AnimatePresence mode="wait">
                {activeCategory?.trips.map((trip, index) => (
                  <motion.div
                    key={trip.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex flex-col group"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden mb-10 shadow-[0_30px_80px_rgba(0,0,0,0.05)] border border-border/20">
                      <Image
                        src={trip.image}
                        alt={trip.name}
                        fill
                        className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-700" />
                    </div>

                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <span className="font-serif italic text-2xl text-accent/40">
                          0{index + 1}
                        </span>
                        <div className="h-px flex-1 bg-border/50" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30">
                          {trip.duration}
                        </span>
                      </div>

                      <div className="flex justify-between items-start">
                        <h3 className="text-3xl lg:text-4xl font-serif font-light text-foreground tracking-tight uppercase leading-none group-hover:text-accent transition-colors duration-500">
                          {trip.name}
                        </h3>
                        <span className="font-serif italic text-2xl text-foreground/60">
                          {trip.price}
                        </span>
                      </div>

                      <button
                        type="button"
                        className="flex items-center gap-6 group/btn mt-4"
                      >
                        <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover/btn:bg-foreground group-hover/btn:text-background transition-all duration-500">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-foreground/40 group-hover/btn:text-foreground transition-colors">
                          {tc("view_details")}
                        </span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
