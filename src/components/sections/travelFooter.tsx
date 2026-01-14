"use client";
//#region Imports
import { Button, Input } from "@heroui/react";
import {
  InstagramLogoIcon,
  LinkedinLogoIcon,
  TwitterLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";
import type React from "react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

//#endregion

//#region Constants
const socialLinks = [
  { icon: TwitterLogoIcon, href: "#", label: "Twitter" },
  { icon: InstagramLogoIcon, href: "#", label: "Instagram" },
  { icon: LinkedinLogoIcon, href: "#", label: "LinkedIn" },
  { icon: YoutubeLogoIcon, href: "#", label: "YouTube" },
];
//#endregion

export function TravelFooter() {
  //#region Hooks
  const { ref, isVisible } = useScrollAnimation(0.1);
  //#endregion

  //#region useStates
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  //#endregion

  //#region Handle functions
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 4000);
  };
  //#endregion

  //#region Motion Variants
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const item: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  //#endregion

  return (
    <motion.footer
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-background border-t border-border/20 py-16 lg:py-24"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={container}
    >
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col gap-8">
        {/* LOGO */}
        <motion.h2
          variants={item}
          className="text-6xl md:text-7xl lg:text-[7rem] leading-[0.9]"
        >
          <span className="block font-mono font-semibold">HORIZON</span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          variants={item}
          className="text-muted-foreground text-lg md:text-base"
        >
          Explore the world with curated experiences, expert guidance, and
          unforgettable journeys.
        </motion.p>

        {/* NEWSLETTER */}
        <motion.form
          variants={item}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6"
          onSubmit={handleSubscribe}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full px-4 py-3 w-full sm:w-auto flex-1 border border-default focus:ring-2 focus:ring-accent"
          />
          <Button
            type="submit"
            className="rounded-full h-12 w-full max-w-xs bg-accent text-white hover:bg-accent/90 transition-all flex items-center justify-center gap-2"
          >
            Subscribe
          </Button>
        </motion.form>

        {submitted && (
          <motion.p variants={item} className="text-green-500 text-sm mb-6">
            Subscribed successfully!
          </motion.p>
        )}

        {/* SOCIALS */}
        <motion.div variants={item} className="flex justify-center gap-4 mb-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-accent-soft-hover transition-colors duration-300 group"
                aria-label={social.label}
              >
                <Icon
                  weight="duotone"
                  className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors"
                />
              </a>
            );
          })}
        </motion.div>

        {/* COPYRIGHT */}
        <motion.p variants={item} className="text-muted-foreground text-sm">
          &copy; 2026 Horizon Travel. All rights reserved. | Designed by{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/gui-bus/"
            className="text-accent hover:underline transition-all duration-300"
          >
            guibus.dev
          </Link>
        </motion.p>
      </div>
    </motion.footer>
  );
}
