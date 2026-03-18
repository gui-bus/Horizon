'use client';

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from 'next-intl';
import { fadeInUp, viewportOnce } from "@/lib/motion";

export function FeaturedDestinations() {
  const t = useTranslations('FeaturedDestinations');
  const [activeId, setActiveId] = useState('kyoto');

  const items = [
    { id: 'kyoto', title: t('items.kyoto.title'), subtitle: t('items.kyoto.subtitle'), image: "/content/destinations/kyoto.webp", tag: t('items.kyoto.tag') },
    { id: 'patagonia', title: t('items.patagonia.title'), subtitle: t('items.patagonia.subtitle'), image: "/content/destinations/patagonia.webp", tag: t('items.patagonia.tag') },
    { id: 'santorini', title: t('items.santorini.title'), subtitle: t('items.santorini.subtitle'), image: "/content/destinations/santorini.webp", tag: t('items.santorini.tag') },
    { id: 'swiss', title: t('items.swiss.title'), subtitle: t('items.swiss.subtitle'), image: "/content/destinations/swissAlps.webp", tag: t('items.swiss.tag') },
    { id: 'marrakech', title: t('items.marrakech.title'), subtitle: t('items.marrakech.subtitle'), image: "/content/destinations/marrakechDesert.webp", tag: t('items.marrakech.tag') },
  ];

  const activeItem = items.find(item => item.id === activeId) || items[0];

  return (
    <section className="relative py-24 lg:py-48 bg-background overflow-hidden" id="destinations">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* TOP HEADER */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12"
        >
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-6 block">{t('badge')}</span>
            <h2 className="text-6xl md:text-8xl font-serif font-light tracking-tight text-foreground leading-[0.9]">
              The <br />
              <span className="italic text-accent/40">Portfolio</span>
            </h2>
          </div>
          <p className="text-xl text-foreground/40 font-light leading-relaxed max-w-sm pb-2 italic">
            Handpicked selection of the most extraordinary corners of the globe, curated for the modern explorer.
          </p>
        </motion.div>

        {/* INTERACTIVE SHOWCASE */}
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* NAVIGATION LIST (LEFT) */}
          <div className="w-full lg:w-1/3 flex flex-col order-2 lg:order-1">
            {items.map((item, i) => (
              <button
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
                className={`group relative flex items-center gap-8 py-10 border-b border-border/40 transition-all duration-700 ${activeId === item.id ? 'pl-6' : 'pl-0'}`}
              >
                <span className={`font-serif italic text-2xl transition-colors duration-700 ${activeId === item.id ? 'text-accent' : 'text-foreground/20'}`}>
                  0{i + 1}
                </span>
                <span className={`text-3xl md:text-5xl font-serif font-light tracking-tight uppercase transition-all duration-700 ${activeId === item.id ? 'text-foreground tracking-[0.1em]' : 'text-foreground/20'}`}>
                  {item.title}
                </span>
                {activeId === item.id && (
                  <motion.div layoutId="active-dot" className="ml-auto w-2 h-2 rounded-full bg-accent shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)]" />
                )}
              </button>
            ))}
          </div>

          {/* DISPLAY STAGE (RIGHT) */}
          <div className="flex-1 w-full order-1 lg:order-2">
            <div className="relative aspect-[4/5] lg:aspect-square rounded-[2rem] lg:rounded-[4rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-border/50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, scale: 1.15, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
                  transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={activeItem.image} 
                    alt={activeItem.title} 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* OVERLAY CONTENT */}
                  <div className="absolute inset-0 p-12 lg:p-20 flex flex-col justify-end">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <span className="text-accent text-[10px] font-bold uppercase tracking-[0.6em] mb-8 block">{activeItem.tag}</span>
                      <h3 className="text-white text-5xl lg:text-7xl font-serif font-light mb-8 tracking-tight uppercase leading-none">
                        {activeItem.title}
                      </h3>
                      <p className="text-white/70 text-xl font-light tracking-wide max-w-sm leading-relaxed italic border-l border-white/20 pl-8">
                        {activeItem.subtitle}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* BOTTOM DECORATIVE FOOTER */}
        <div className="mt-32 pt-16 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-12">
           <div className="flex items-center gap-6">
              <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-foreground/20">Handpicked Selection</span>
              <div className="w-12 h-px bg-border/50" />
              <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-foreground/20">Established 2026</span>
           </div>
           
           <button className="group flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.4em] text-accent hover:text-foreground transition-all duration-500">
              <span className="group-hover:tracking-[0.6em] transition-all duration-500">{t('cta_explore')}</span>
              <div className="w-16 h-px bg-accent group-hover:w-24 group-hover:bg-foreground transition-all duration-500" />
           </button>
        </div>
      </div>
    </section>
  );
}
