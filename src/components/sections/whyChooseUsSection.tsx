"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";

export function WhyChooseUsSection() {
  const t = useTranslations("WhyChooseUs");

  const reasons = [
    {
      id: "experts",
      title: t("items.experts.title"),
      description: t("items.experts.description"),
    },
    {
      id: "trusted",
      title: t("items.trusted.title"),
      description: t("items.trusted.description"),
    },
    {
      id: "standards",
      title: t("items.standards.title"),
      description: t("items.standards.description"),
    },
    {
      id: "planning",
      title: t("items.planning.title"),
      description: t("items.planning.description"),
    },
    {
      id: "pace",
      title: t("items.pace.title"),
      description: t("items.pace.description"),
    },
    {
      id: "personal",
      title: t("items.personal.title"),
      description: t("items.personal.description"),
    },
  ];

  return (
    <section
      className="py-24 lg:py-48 bg-background relative overflow-hidden"
      id="why-choose-horizon"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* LEFT: STICKY EDITORIAL HEADER */}
          <motion.div
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <div className="sticky top-32">
              <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-accent mb-8 block">
                {t("badge")}
              </span>
              <h2 className="text-7xl md:text-8xl lg:text-[9rem] font-serif font-light text-foreground leading-[0.8] mb-12">
                {t("title_part1")} <br />
                <span className="italic">{t("title_part2")}</span>
              </h2>
              <div className="w-24 h-px bg-accent mb-12" />
              <p className="text-xl text-foreground/50 font-light leading-relaxed max-w-sm italic">
                {t("description")}
              </p>

              <div className="mt-20 hidden lg:block">
                <div className="w-px h-32 bg-border/60 mx-auto lg:mx-0" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: REFINED NUMBERED LIST */}
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="divide-y divide-border/40"
            >
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.id}
                  variants={staggerItem}
                  className="py-16 first:pt-0 last:pb-0 group cursor-default"
                >
                  <div className="flex flex-col md:flex-row gap-12">
                    <span className="font-serif italic text-4xl text-accent/30 group-hover:text-accent transition-colors duration-700 leading-none">
                      0{i + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-3xl lg:text-5xl font-serif font-light text-foreground mb-8 tracking-tight group-hover:translate-x-3 transition-transform duration-700 uppercase">
                        {reason.title}
                      </h3>
                      <p className="text-lg lg:text-xl text-foreground/40 font-light leading-relaxed max-w-xl group-hover:text-foreground/70 transition-colors duration-700">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* LARGE BACKGROUND DECORATIVE TEXT */}
      <div className="absolute -bottom-20 -right-20 pointer-events-none overflow-hidden h-[400px] w-full select-none opacity-[0.02]">
        <p className="text-[30rem] font-serif font-black leading-none text-foreground tracking-tighter">
          {t("background_tag")}
        </p>
      </div>
    </section>
  );
}
