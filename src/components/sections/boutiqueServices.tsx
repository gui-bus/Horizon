"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { fadeInUp, viewportOnce } from "@/lib/motion";

export default function BoutiqueServices() {
  const t = useTranslations("Services");

  const services = [
    {
      id: "wild",
      title: t("items.wild.title"),
      description: t("items.wild.description"),
      image: "/content/banners/natureAndAdventureBanner.webp",
      tag: t("items.wild.tag"),
      align: "left",
    },
    {
      id: "culture",
      title: t("items.culture.title"),
      description: t("items.culture.description"),
      image: "/content/banners/culturalJourneysBanner.webp",
      tag: t("items.culture.tag"),
      align: "right",
    },
    {
      id: "urban",
      title: t("items.urban.title"),
      description: t("items.urban.description"),
      image: "/content/banners/urbanAndContemporaryBanner.webp",
      tag: t("items.urban.tag"),
      align: "left",
    },
    {
      id: "bespoke",
      title: t("items.bespoke.title"),
      description: t("items.bespoke.description"),
      image: "/content/banners/tailoredExperiencesBanner.webp",
      tag: t("items.bespoke.tag"),
      align: "right",
    },
  ];

  return (
    <section className="bg-background py-24 lg:py-48" id="what-we-offer">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* SECTION HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="mb-32 lg:mb-56 max-w-4xl"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-accent mb-8 block">
            {t("badge")}
          </span>
          <h2 className="text-7xl md:text-9xl lg:text-[11rem] font-serif font-light text-foreground leading-[0.8] tracking-tighter uppercase">
            The <br />
            <span className="italic text-accent/40 lowercase ml-12">
              Expertise
            </span>
          </h2>
        </motion.div>

        {/* SERVICES PANORAMA LIST */}
        <div className="flex flex-col gap-32 lg:gap-64">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`flex flex-col ${service.align === "right" ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-24 items-center`}
            >
              {/* IMAGE WRAPPER */}
              <div className="w-full lg:w-7/12 relative aspect-[16/10] overflow-hidden rounded-[2rem] lg:rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-border/40 group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />

                {/* FLOATING INDEX */}
                <div
                  className={`absolute top-12 ${service.align === "right" ? "right-12" : "left-12"} hidden md:block`}
                >
                  <span className="font-serif italic text-6xl text-white/80">
                    0{i + 1}
                  </span>
                </div>
              </div>

              {/* CONTENT WRAPPER */}
              <div className="w-full lg:w-5/12 flex flex-col justify-center">
                <div className="max-w-md">
                  <span className="text-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-8 block">
                    {service.tag}
                  </span>
                  <h3 className="text-5xl lg:text-7xl font-serif font-light text-foreground mb-10 tracking-tight uppercase leading-none">
                    {service.title}
                  </h3>
                  <div className="w-12 h-px bg-border mb-10" />
                  <p className="text-xl text-foreground/50 font-light leading-relaxed mb-12 italic">
                    {service.description}
                  </p>

                  <button
                    type="button"
                    className="group flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.4em] text-foreground hover:text-accent transition-all duration-500"
                  >
                    <span className="group-hover:tracking-[0.6em] transition-all duration-500">
                      View Collection
                    </span>
                    <div className="w-16 h-px bg-accent group-hover:w-24 group-hover:bg-foreground transition-all duration-500" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
