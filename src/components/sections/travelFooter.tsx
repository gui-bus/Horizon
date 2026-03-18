'use client';

import {
  InstagramLogoIcon,
  LinkedinLogoIcon,
  TwitterLogoIcon,
  YoutubeLogoIcon,
  ArrowUpIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export function TravelFooter() {
  const t = useTranslations('Footer');
  const tc = useTranslations('Common');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background pt-32 pb-12 border-t border-border/50" id="footer">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* LARGE EDITORIAL BRANDING */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-32">
          <Link href="#hero" className="flex flex-col">
            <span className="font-serif text-6xl md:text-8xl lg:text-[10rem] font-light tracking-tight text-foreground leading-[0.8] uppercase">
              {tc('brand_name')}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[1em] text-accent mt-6 ml-2">
              {tc('brand_suffix')}
            </span>
          </Link>
          
          <div className="max-w-xs lg:text-right">
            <p className="text-lg text-foreground/40 font-light leading-relaxed italic">
              {t('description')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32 border-y border-border/30 py-24">
          {/* NAVIGATION */}
          <div className="space-y-10">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent">{t('navigation_title')}</h4>
            <ul className="space-y-6">
              {['Collection', 'Destinations', 'Expertise', 'Bespoke'].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-serif text-xl font-light text-foreground/60 hover:text-accent transition-colors duration-500">
                    {t(`links.${item}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div className="space-y-10">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent">{t('company_title')}</h4>
            <ul className="space-y-6">
              {['Philosophy', 'Sustainability', 'Safety', 'Journal'].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-serif text-xl font-light text-foreground/60 hover:text-accent transition-colors duration-500">
                    {t(`links.${item}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER / INQUIRY */}
          <div className="lg:col-span-2 space-y-10 lg:pl-20 border-l border-border/30">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent">{t('newsletter_title')}</h4>
            <div className="space-y-8">
              <p className="font-serif text-2xl font-light text-foreground/60 leading-relaxed max-w-sm">
                {t('newsletter_desc')}
              </p>
              <div className="relative group max-w-md">
                <input 
                  type="email" 
                  placeholder={t('newsletter_placeholder')} 
                  className="w-full bg-transparent border-b border-border/60 py-4 outline-none font-light text-lg focus:border-accent transition-all placeholder:text-foreground/20"
                />
                <button className="absolute right-0 bottom-4 text-[9px] font-bold uppercase tracking-[0.3em] text-accent group-hover:translate-x-2 transition-all duration-500">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM AREA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-12">
          
          {/* SOCIALS */}
          <div className="flex gap-10">
            {[
              { icon: TwitterLogoIcon, label: "Twitter" },
              { icon: InstagramLogoIcon, label: "Instagram" },
              { icon: LinkedinLogoIcon, label: "LinkedIn" },
              { icon: YoutubeLogoIcon, label: "YouTube" }
            ].map((social, i) => (
              <a key={i} href="#" className="text-foreground/30 hover:text-accent transition-colors duration-500">
                <social.icon weight="bold" size={20} />
              </a>
            ))}
          </div>

          {/* LEGAL & BACK TO TOP */}
          <div className="flex flex-wrap justify-center items-center gap-10 text-[9px] font-bold uppercase tracking-[0.4em] text-foreground/30">
             <Link href="#" className="hover:text-accent transition-colors">{tc('privacy')}</Link>
             <Link href="#" className="hover:text-accent transition-colors">{tc('terms')}</Link>
             <span className="hidden md:block">&bull;</span>
             <span>&copy; 2026 {tc('brand_name')}</span>
             
             <button 
                onClick={scrollToTop}
                className="flex items-center gap-4 group text-accent ml-4"
              >
                <span className="group-hover:tracking-[0.6em] transition-all duration-500">{tc('back_to_top')}</span>
                <div className="w-8 h-8 rounded-full border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-background transition-all duration-500">
                  <ArrowUpIcon size={14} weight="bold" />
                </div>
              </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
