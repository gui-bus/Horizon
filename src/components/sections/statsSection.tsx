'use client';

import { cn } from "@heroui/react";
import type React from "react";
import { useCountUp, useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

function StatItem({
  value,
  suffix,
  label,
  description,
  delay,
  className
}: {
  value: number;
  suffix: string;
  label: string;
  description: string;
  delay: number;
  className?: string;
}) {
  const { ref, count } = useCountUp(value, 2000);
  const { ref: visRef, isVisible } = useScrollAnimation(0.3);

  return (
    <motion.div
      ref={visRef as React.RefObject<HTMLDivElement>}
      variants={staggerItem}
      className={cn(
        "relative p-10 lg:p-16 flex flex-col justify-between transition-all duration-1000 bg-background border border-border/40 hover:border-accent/30 hover:shadow-[0_30px_100px_rgba(0,0,0,0.03)] group",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent/40 group-hover:text-accent transition-colors duration-700">
          Metric_0{delay / 150 + 1}
        </span>
        <div ref={ref as React.RefObject<HTMLDivElement>}>
          <span className="text-7xl lg:text-9xl font-serif font-light tracking-tighter text-foreground tabular-nums leading-none">
            {value % 1 === 0 ? count : count.toFixed(2)}
            <span className="text-accent italic text-3xl lg:text-5xl ml-2">{suffix}</span>
          </span>
        </div>
      </div>

      <div className="mt-12 lg:mt-20">
        <h3 className="text-xl lg:text-2xl font-serif font-light text-foreground mb-4 uppercase tracking-tight">
          {label}
        </h3>
        <p className="text-sm lg:text-base text-foreground/40 font-light leading-relaxed max-w-[200px]">
          {description}
        </p>
      </div>

      {/* DECORATIVE CORNER */}
      <div className="absolute top-0 right-0 w-12 h-12 border-r border-t border-transparent group-hover:border-accent/20 transition-all duration-700" />
    </motion.div>
  );
}

export function StatsSection() {
  const t = useTranslations('Stats');
  const { ref } = useScrollAnimation(0.2);

  const stats = [
    { 
      id: 'destinations', 
      value: 120, 
      suffix: "+", 
      label: t('items.destinations.label'), 
      description: t('items.destinations.description'),
      className: "lg:col-span-7 lg:row-span-2" 
    },
    { 
      id: 'travelers', 
      value: 15, 
      suffix: "K", 
      label: t('items.travelers.label'), 
      description: t('items.travelers.description'),
      className: "lg:col-span-5 lg:row-span-1" 
    },
    { 
      id: 'photos', 
      value: 50, 
      suffix: "M", 
      label: t('items.photos.label'), 
      description: t('items.photos.description'),
      className: "lg:col-span-5 lg:row-span-2 bg-secondary/30" 
    },
    { 
      id: 'rating', 
      value: 4.95, 
      suffix: "★", 
      label: t('items.rating.label'), 
      description: t('items.rating.description'),
      className: "lg:col-span-7 lg:row-span-1" 
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-48 bg-background overflow-hidden"
      id="horizon-in-numbers"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* HEADER AREA */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-24 lg:mb-40 items-end">
          <motion.div 
            className="lg:col-span-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-accent mb-8 block">{t('badge')}</span>
            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-light text-foreground leading-[0.8] tracking-tight">
              Impact in <br />
              <span className="italic">Numbers</span>
            </h2>
          </motion.div>
          <motion.div 
            className="lg:col-span-4 pb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.4 }}
          >
            <p className="text-xl text-foreground/40 font-light leading-relaxed italic">
              {t('description')}
            </p>
          </motion.div>
        </div>

        {/* ASYMMETRIC STATS GRID */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {stats.map((stat, i) => (
            <StatItem key={stat.id} {...stat} delay={i * 150} />
          ))}
        </motion.div>

        {/* BOTTOM ACCENT LINE */}
        <div className="mt-32 lg:mt-48 flex justify-center">
           <div className="w-px h-32 bg-gradient-to-b from-accent/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
