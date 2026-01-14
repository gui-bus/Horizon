"use client";

import {
  CalendarIcon,
  ChatTeardropTextIcon,
  ClipboardIcon,
  StarIcon,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";

const steps = [
  {
    number: "01",
    icon: ClipboardIcon,
    title: "Initial Consultation",
    description:
      "We discuss your needs and goals to create a personalized plan that works for you.",
  },
  {
    number: "02",
    icon: CalendarIcon,
    title: "Schedule Your Visit",
    description:
      "Book a convenient time slot that fits your schedule using our easy online system.",
  },
  {
    number: "03",
    icon: ChatTeardropTextIcon,
    title: "Expert Service",
    description:
      "Our skilled professionals deliver exceptional service tailored to your requirements.",
  },
  {
    number: "04",
    icon: StarIcon,
    title: "Ongoing Support",
    description:
      "We follow up to ensure satisfaction and help you maintain your results.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-20 px-4 bg-default">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started is easy. Follow these simple steps to transform your
            experience.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <motion.div
            className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={staggerItem}
                className="relative text-center"
              >
                {/* Step Number Circle */}
                <motion.div
                  className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full bg-background border-2 border-primary flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <step.icon weight="duotone" className="w-7 h-7 text-primary" />
                </motion.div>

                <motion.span
                  className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                >
                  Step {step.number}
                </motion.span>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
