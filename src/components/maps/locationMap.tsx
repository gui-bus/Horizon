"use client";

import { Button } from "@heroui/react";
import { MapPinIcon, NavigationArrowIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";

export function LocationMap() {
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
            Visit Our Location
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Conveniently located in the heart of downtown
          </p>
        </motion.div>
        <motion.div
          className="mt-12 overflow-hidden rounded-2xl border border-border"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
        >
          <div className="aspect-video bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1635781234567!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
              className="h-full w-full"
            />
          </div>
        </motion.div>
        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div
            variants={staggerItem}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <MapPinIcon weight="duotone" className="h-5 w-5" />
            <span>123 Main Street, Suite 100, Your City, ST 12345</span>
          </motion.div>
          <motion.div
            variants={staggerItem}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button>
              <NavigationArrowIcon className="mr-2 h-4 w-4" />
              Get Directions
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
