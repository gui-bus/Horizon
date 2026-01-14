"use client";
//#region Imports
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
//#endregion

export default function MaskRevealSection() {
  //#region useRefs
  const containerRef = useRef<HTMLDivElement>(null);
  //#endregion

  //#region Hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const maskSize = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "150%"]);
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

  const maskImage = useTransform(
    maskSize,
    (v) => `radial-gradient(circle at center, black ${v}, transparent ${v})`
  );
  //#endregion

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      id="divider"
    >
      <div className="sticky py-64 top-0 flex items-center justify-center">
        <motion.div
          style={{
            WebkitMaskImage: maskImage,
            maskImage: maskImage,
          }}
          className="absolute inset-0"
        >
          <Image
            src="/content/banners/dividerBanner.webp"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <motion.div
          style={{ opacity: textOpacity }}
          className="relative z-10 text-center px-6"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-background tracking-tight">
            See the World{" "}
            <span className="font-serif font-semibold">Differently</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white">
            Discover hidden gems, breathtaking views, and moments that turn into
            lifelong memories.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
