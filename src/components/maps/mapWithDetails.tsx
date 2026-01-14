"use client";

import {
  AtIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";

const contactInfo = [
  {
    icon: MapPinIcon,
    label: "Address",
    value: "123 Main Street, Suite 100, City, ST 12345",
  },
  { icon: PhoneIcon, label: "Phone", value: "(123) 456-7890" },
  { icon: AtIcon, label: "Email", value: "hello@example.com" },
  { icon: ClockIcon, label: "Hours", value: "Mon-Fri: 9AM-7PM, Sat: 10AM-5PM" },
];

export function MapWithDetails() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Visit Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Find Our Location
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            className="lg:col-span-2 rounded-2xl overflow-hidden border border-border h-100"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1635959481000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            />
          </motion.div>

          {/* Contact Details */}
          <motion.div
            className="bg-default rounded-2xl p-8 border border-border"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.h3
              variants={staggerItem}
              className="text-xl font-semibold text-foreground mb-6"
            >
              Contact Information
            </motion.h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  variants={staggerItem}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    <info.icon
                      weight="duotone"
                      className="w-5 h-5 text-primary"
                    />
                  </motion.div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {info.label}
                    </div>
                    <div className="text-foreground font-medium">
                      {info.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
