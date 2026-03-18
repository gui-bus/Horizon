'use client';

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from 'next-intl';
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  const t = useTranslations('Hero');
  const tc = useTranslations('Common');
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-120%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 lg:pt-10"
    >
      <div className={`
        relative flex items-center gap-12 px-10 py-4 
        transition-all duration-700 ease-[0.76, 0, 0.24, 1]
        ${scrolled 
          ? "bg-background/70 backdrop-blur-2xl border border-border shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-full" 
          : "bg-transparent border border-transparent rounded-none"
        }
      `}>
        
        {/* LOGO */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className="font-serif text-xl font-light tracking-[0.3em] text-foreground leading-none">{tc('brand_name')}</span>
            <div className="h-[1px] w-0 bg-accent group-hover:w-full transition-all duration-500 mt-1" />
          </div>
        </Link>

        {/* SEPARATOR */}
        <div className="h-4 w-[1px] bg-border/60 hidden md:block" />

        {/* NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-10">
          {[
            { label: t('menu_offer'), href: "#what-we-offer" },
            { label: t('menu_why'), href: "#why-choose-horizon" },
            { label: t('menu_destinations'), href: "#destinations" },
          ].map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 hover:text-foreground transition-all relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-accent group-hover:w-full transition-all" />
            </Link>
          ))}
        </nav>

        {/* RIGHT AREA: LANGUAGE & CTA */}
        <div className="flex items-center gap-8">
          <div className="hidden sm:block scale-90">
            <LanguageSelector />
          </div>

          <Link href="#reach-horizon-travels">
            <button type="button" className="flex items-center gap-3 group">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground group-hover:text-accent transition-colors">
                {t('cta_plan')}
              </span>
              <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-500">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:text-background transition-colors">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </button>
          </Link>
        </div>

        {/* BACKGROUND ACCENT GLOW (Only visible when scrolled) */}
        {scrolled && (
          <div className="absolute -inset-px rounded-full bg-gradient-to-r from-accent/5 via-transparent to-accent/5 pointer-events-none" />
        )}
      </div>
    </motion.header>
  );
}
