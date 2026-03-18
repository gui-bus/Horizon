"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef } from "react";

export default function MaskRevealSection() {
  const t = useTranslations("MaskReveal");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const maskSize = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "150%"]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  const maskImage = useTransform(
    maskSize,
    (v) => `radial-gradient(circle at center, black ${v}, transparent ${v})`,
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[120vh] bg-white"
      id="divider"
    >
      <div className="sticky h-screen top-0 flex items-center justify-center overflow-hidden">
        {/* REVEAL IMAGE */}
        <motion.div
          style={{
            WebkitMaskImage: maskImage,
            maskImage: maskImage,
          }}
          className="absolute inset-0 z-10"
        >
          <Image
            src="/content/banners/dividerBanner.webp"
            alt="Reveal"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-accent/10 mix-blend-multiply" />
        </motion.div>

        {/* STATIC BACKGROUND */}
        <div className="absolute inset-0 bg-muted" />

        {/* CONTENT */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="relative z-20 text-center px-6 max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.85] mb-12 uppercase text-white">
            {t("title_part1")}
            <br />
            <span className="text-accent">{t("title_part2")}</span>
          </h2>

          <p className="max-w-xl mx-auto text-lg md:text-2xl leading-relaxed text-white">
            {t("description")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
