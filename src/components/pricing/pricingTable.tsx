"use client";

import { Button } from "@heroui/react";
import { CheckIcon, MinusIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/motion";

const features = [
  {
    name: "Session Duration",
    basic: "30 min",
    premium: "60 min",
    vip: "90 min",
  },
  {
    name: "Product Quality",
    basic: "Standard",
    premium: "Premium",
    vip: "Luxury",
  },
  { name: "Priority Booking", basic: false, premium: true, vip: true },
  { name: "Private Room", basic: false, premium: false, vip: true },
  { name: "Refreshments", basic: false, premium: true, vip: true },
  { name: "Take-home Products", basic: false, premium: false, vip: true },
];

export function PricingTable() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Compare Plans
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            See what's included in each option
          </p>
        </motion.div>
        <motion.div
          className="mt-12 overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
        >
          <table className="w-full min-w-150">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-4 text-left font-medium text-muted-foreground">
                  Features
                </th>
                <th className="pb-4 text-center font-semibold text-foreground">
                  Basic
                </th>
                <th className="pb-4 text-center font-semibold text-foreground">
                  Premium
                </th>
                <th className="pb-4 text-center font-semibold text-foreground">
                  VIP
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={feature.name}
                  className={
                    index !== features.length - 1
                      ? "border-b border-border"
                      : ""
                  }
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: 0.05 * index, duration: 0.3 }}
                >
                  <td className="py-4 text-foreground">{feature.name}</td>
                  <td className="py-4 text-center">
                    {typeof feature.basic === "boolean" ? (
                      feature.basic ? (
                        <CheckIcon
                          weight="duotone"
                          className="mx-auto h-5 w-5 text-success"
                        />
                      ) : (
                        <MinusIcon
                          weight="duotone"
                          className="mx-auto h-5 w-5 text-accent"
                        />
                      )
                    ) : (
                      <span className="text-foreground">{feature.basic}</span>
                    )}
                  </td>
                  <td className="py-4 text-center">
                    {typeof feature.premium === "boolean" ? (
                      feature.premium ? (
                        <CheckIcon
                          weight="duotone"
                          className="mx-auto h-5 w-5 text-success"
                        />
                      ) : (
                        <MinusIcon
                          weight="duotone"
                          className="mx-auto h-5 w-5 text-accent"
                        />
                      )
                    ) : (
                      <span className="text-foreground">{feature.premium}</span>
                    )}
                  </td>
                  <td className="py-4 text-center">
                    {typeof feature.vip === "boolean" ? (
                      feature.vip ? (
                        <CheckIcon
                          weight="duotone"
                          className="mx-auto h-5 w-5 text-success"
                        />
                      ) : (
                        <MinusIcon
                          weight="duotone"
                          className="mx-auto h-5 w-5 text-accent"
                        />
                      )
                    ) : (
                      <span className="font-bold">{feature.vip}</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button variant="tertiary">View Full Comparison</Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button>Book Consultation</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
