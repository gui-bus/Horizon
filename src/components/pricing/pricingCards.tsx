"use client";

import { Button } from "@heroui/react";
import { CheckIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "per visit",
    description: "Perfect for occasional visits",
    features: [
      "Standard service",
      "30-minute session",
      "Basic products",
      "Walk-in available",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$59",
    period: "per visit",
    description: "Our most popular option",
    features: [
      "Full service treatment",
      "60-minute session",
      "Premium products",
      "Priority booking",
      "Complimentary refreshments",
    ],
    highlighted: true,
  },
  {
    name: "VIP",
    price: "$99",
    period: "per visit",
    description: "The ultimate experience",
    features: [
      "Exclusive VIP treatment",
      "90-minute session",
      "Luxury products",
      "Private room",
      "Unlimited refreshments",
      "Take-home products",
    ],
    highlighted: false,
  },
];

export function PricingCards() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Choose the plan that works best for you
          </p>
        </motion.div>
        <motion.div
          className="mt-12 grid gap-8 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? "border-foreground bg-default text-primary-foreground shadow-xl"
                  : "border-border bg-default/60"
              }`}
            >
              <h3
                className={`text-lg font-semibold ${
                  plan.highlighted
                    ? "text-primary-foreground"
                    : "text-foreground"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-1 text-sm ${
                  plan.highlighted
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                }`}
              >
                {plan.description}
              </p>
              <div className="mt-4">
                <motion.span
                  className={`text-4xl font-bold ${
                    plan.highlighted
                      ? "text-primary-foreground"
                      : "text-foreground"
                  }`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={viewportOnce}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  {plan.price}
                </motion.span>
                <span
                  className={`ml-1 ${
                    plan.highlighted
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ delay: 0.1 * i, duration: 0.2 }}
                  >
                    <CheckIcon
                      className={`h-5 w-5 ${
                        plan.highlighted
                          ? "text-primary-foreground"
                          : "text-foreground"
                      }`}
                    />
                    <span
                      className={
                        plan.highlighted
                          ? "text-primary-foreground/90"
                          : "text-foreground"
                      }
                    >
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  className="mt-8 w-full"
                  variant={plan.highlighted ? "primary" : "ghost"}
                >
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
