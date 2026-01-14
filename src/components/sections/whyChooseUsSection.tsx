"use client";
//#region Imports
import {
  ClockIcon,
  LightningIcon,
  ShieldIcon,
  ThumbsUpIcon,
  TrophyIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";

//#endregion

//#region Constants
const reasons = [
  {
    icon: UsersIcon,
    title: "Curated by Experts",
    description:
      "Every journey is thoughtfully designed by travel specialists with deep local knowledge and global perspective.",
  },
  {
    icon: ShieldIcon,
    title: "Trusted & Seamless",
    description:
      "From planning to arrival, every detail is handled with care, transparency, and reliability.",
  },
  {
    icon: TrophyIcon,
    title: "Exceptional Standards",
    description:
      "We partner only with experiences, guides, and stays that meet our highest quality benchmarks.",
  },
  {
    icon: LightningIcon,
    title: "Effortless Planning",
    description:
      "Complex itineraries made simple. We remove friction so you can focus on the experience.",
  },
  {
    icon: ClockIcon,
    title: "Your Time, Your Pace",
    description:
      "Journeys designed around your rhythm, interests, and and travel style — never rushed, never generic.",
  },
  {
    icon: ThumbsUpIcon,
    title: "Truly Personal",
    description:
      "No templates, no mass tourism. Every trip is shaped around who you are and how you want to travel.",
  },
];
//#endregion

export function WhyChooseUsSection() {
  return (
    <section className="py-20 px-6 lg:px-12" id="why-choose-horizon">
      {/* TITLE */}
      <motion.div
        className="mx-auto max-w-2xl text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
      >
        <h2 className="text-3xl sm:text-4xl  tracking-tight text-foreground">
          Why Choose <span className="font-mono font-semibold">Horizon</span>
        </h2>

        <p className="mt-4 text-lg text-muted-foreground">
          Travel designed with intention, depth, and meaning.
        </p>
      </motion.div>

      {/* GRID */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {reasons.map((reason) => (
          <motion.div
            key={reason.title}
            variants={staggerItem}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group relative rounded-3xl p-8 text-left transition-colors"
          >
            {/* Icon */}
            <reason.icon
              weight="duotone"
              className="h-6 w-6 text-foreground mb-5"
            />

            {/* Content */}
            <h3 className="text-lg font-semibold text-foreground mb-3">
              {reason.title}
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
