'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function HeroScrollSection() {
  const t = useTranslations('Hero');
  const tc = useTranslations('Common');
  const { scrollY } = useScroll();

  // Scroll animations
  const textY = useTransform(scrollY, [0, 500], [0, -100]);
  const imageScale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const imageY = useTransform(scrollY, [0, 500], [0, 50]);
  const containerY = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen bg-background pt-32 lg:pt-48 overflow-hidden" id="hero">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* TEXT CONTENT - TOP AREA ON CLEAN BACKGROUND */}
        <motion.div 
          style={{ y: textY, opacity }}
          className="flex flex-col items-center text-center mb-20 lg:mb-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-accent" />
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-accent">{t('badge')}</span>
            <div className="w-12 h-[1px] bg-accent" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-foreground text-6xl md:text-8xl lg:text-[11rem] font-serif font-light leading-[0.8] tracking-tighter mb-12 uppercase"
          >
            {t('title_part1')}<br />
            <span className="italic text-accent/40 lowercase ml-12">{t('title_part2')}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-foreground/60 text-lg md:text-xl font-light tracking-wide max-w-2xl mb-12 leading-relaxed text-balance"
          >
            {t('description')}
          </motion.p>
        </motion.div>

        {/* IMAGE AREA - FRAMED & ELEGANT */}
        <motion.div 
          style={{ y: containerY }}
          className="relative w-full aspect-[16/9] lg:aspect-[21/9] rounded-[2rem] lg:rounded-[4rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-border/50"
        >
          <motion.div style={{ scale: imageScale, y: imageY }} className="absolute inset-0">
            <Image
              src="/content/banners/womanHero.webp"
              alt="Luxury Travel"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
          </motion.div>

          {/* CALL TO ACTION OVERLAY */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <Link href="#reach-horizon-travels" className="pointer-events-auto">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-10 py-5 rounded-full font-bold text-[10px] uppercase tracking-[0.4em] shadow-2xl flex items-center gap-4 group"
                >
                  {t('cta_plan')}
                  <div className="w-8 h-px bg-black/20 group-hover:w-12 transition-all" />
                </motion.button>
             </Link>
          </div>
        </motion.div>
      </div>

      {/* DECORATIVE ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-[70vh] bg-secondary/30 -z-10" />
      
      <div className="absolute top-1/2 left-12 -translate-y-1/2 hidden xl:block pointer-events-none">
         <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-foreground/20 [writing-mode:vertical-lr] rotate-180">{t('boutique_tag')}</p>
      </div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 right-12 hidden xl:flex flex-col items-end gap-2 text-foreground/30 pointer-events-none"
      >
         <span className="text-[9px] font-bold uppercase tracking-[0.4em]">{tc('scroll_discover')}</span>
         <div className="w-[1px] h-12 bg-border relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-1/2 bg-accent"
            />
         </div>
      </motion.div>
    </section>
  );
}
