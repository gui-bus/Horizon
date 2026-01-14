"use client";
//#region Imports
import { Button } from "@heroui/react";
import { CompassRoseIcon } from "@phosphor-icons/react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import useIsLoaded from "@/hooks/useIsLoaded";
//#endregion

export default function HeroScrollSection() {
  //#region Hooks
  const { isLoaded } = useIsLoaded();
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);
  //#endregion

  return (
    <section className="relative overflow-hidden text-white" id="hero">
      {/* BACKGROUND - OVERLAY - RIGHT VISUAL INDICATOR - MAIN CONTENT */}
      <div className="sticky top-0 py-44 overflow-hidden">
        {/* BACKGROUND */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/content/banners/womanHero.webp')`,
          }}
        />

        {/* OVERLAY */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#181818]/90 via-[#181818]/40 md:via-[#181818]/20 to-transparent" />

        {/* RIGHT VISUAL INDICATOR */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          style={isLoaded ? { y, opacity, scale } : undefined}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="absolute right-10 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-6"
        >
          <motion.span
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
            className="font-mono text-xs tracking-[0.25em] rotate-90"
          >
            EXPLORE
          </motion.span>

          <div className="h-40 w-px bg-white/40 mt-5" />

          <motion.span
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
            className="font-mono text-[10px] tracking-widest opacity-80"
          >
            36.7783° N
          </motion.span>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
          >
            <CompassRoseIcon size={32} weight="duotone" />
          </motion.div>
        </motion.div>

        {/* HEADER */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={isLoaded ? { y, opacity, scale } : undefined}
          className="absolute top-0 left-0 w-full z-20 hidden lg:flex"
        >
          <div className="mx-auto max-w-7xl w-full px-3 md:px-16 lg:px-24">
            <div className="mt-6 flex items-center justify-between rounded-full border border-white/10 bg-black/30 backdrop-blur-md px-8 py-4">
              {/* LOGO */}
              <Link
                href="#hero"
                className="font-mono text-sm md:text-lg tracking-widest"
              >
                HORIZON
              </Link>

              {/* MENU */}
              <nav className="hidden md:flex items-center gap-10 text-sm font-mono tracking-wider">
                <Link
                  href="#what-we-offer"
                  className="opacity-80 hover:opacity-100 transition"
                >
                  What We Offer
                </Link>

                <Link
                  href="#why-choose-horizon"
                  className="opacity-80 hover:opacity-100 transition"
                >
                  Why Choose Us
                </Link>

                <Link
                  href="#destinations"
                  className="opacity-80 hover:opacity-100 transition"
                >
                  Destinations
                </Link>
              </nav>

              {/* CTA */}
              <Link href="#reach-horizon-travels">
                <Button className="h-10 px-6 rounded-full bg-accent text-white font-mono hover:-translate-y-0.5 transition text-sm md:text-base">
                  Plan Your Journey
                </Button>
              </Link>
            </div>
          </div>
        </motion.header>

        {/* MAIN CONTENT */}
        <motion.div
          style={isLoaded ? { y, opacity, scale } : undefined}
          className="relative z-10 h-full flex items-center px-6 md:px-16 lg:px-24"
        >
          <div className="max-w-3xl flex flex-col gap-8 items-center justify-center md:items-start md:justify-start">
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-center justify-center md:justify-start text-center gap-5 w-fit"
            >
              <Image
                src="/content/icons/planeBG.png"
                alt="Plane"
                width={0}
                height={0}
                sizes="100vw"
                className="w-20 md:w-14 h-auto"
              />

              <p className="font-mono text-xs tracking-[0.3em] uppercase">
                See the world in full color
              </p>
            </motion.div>

            {/* LOGO */}
            <motion.h1
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
              className="text-6xl md:text-7xl lg:text-[7rem] leading-[0.9]"
            >
              <span className="block font-mono font-semibold">HORIZON</span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="max-w-lg text-lg font-sans font-light opacity-90"
            >
              Iconic landscapes, breathtaking views, and unforgettable places.
              Horizon connects you to destinations made to be seen, felt, and
              remembered.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col md:flex-row gap-5 max-w-xl w-full"
            >
              <Link href="/#reach-horizon-travels" className="w-full">
                <Button className="w-full h-14 rounded-3xl hover:-translate-y-1 transition-all duration-300 bg-accent text-white font-mono">
                  Plan Your Journey
                </Button>
              </Link>

              <Link href="/#destinations" className="w-full">
                <Button className="w-full h-14 bg-transparent border border-default hover:bg-default hover:text-black transition-all duration-300 rounded-3xl hover:-translate-y-1 font-mono">
                  Explore Destinations
                </Button>
              </Link>
            </motion.div>

            {/* SCROLL INDICATOR */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-20 flex items-center gap-4"
            >
              <span className="font-mono text-xs tracking-wider">
                Scroll to explore
              </span>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-5 h-8 border border-white rounded-full flex items-start justify-center p-1"
              >
                <motion.div className="w-1 h-2 bg-white rounded-full" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
