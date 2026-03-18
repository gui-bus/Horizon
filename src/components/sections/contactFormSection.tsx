'use client';

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { useTranslations } from 'next-intl';

export function ContactFormSection() {
  const t = useTranslations('Contact');
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email")?.toString().trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    setStatus("success");
    form.reset();
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section className="relative py-24 lg:py-48 overflow-hidden bg-background" id="reach-horizon-travels">
      {/* BACKGROUND DECORATIVE IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/content/banners/passportBanner.webp"
          alt="Contact Background"
          fill
          className="object-cover opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="max-w-[1000px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* EDITORIAL HEADER */}
        <div className="text-center mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-accent mb-8">{t('badge')}</span>
            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-light text-foreground leading-none tracking-tight mb-12">
              Start Your <br />
              <span className="italic text-accent/40">Journey</span>
            </h2>
            <p className="max-w-xl text-xl text-foreground/50 font-light leading-relaxed italic">
              {t('description')}
            </p>
          </motion.div>
        </div>

        {/* MINIMAL INQUIRY FORM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-background border border-border p-10 lg:p-24 shadow-[0_50px_100px_rgba(0,0,0,0.05)]"
        >
          <form ref={formRef} className="space-y-16" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-16">
              <div className="relative group">
                <input
                  name="firstName"
                  className="w-full bg-transparent border-b border-border/60 py-4 outline-none font-light text-lg focus:border-accent transition-all placeholder:text-foreground/20"
                  placeholder={t('fields.firstName')}
                  required
                />
              </div>
              <div className="relative group">
                <input
                  name="lastName"
                  className="w-full bg-transparent border-b border-border/60 py-4 outline-none font-light text-lg focus:border-accent transition-all placeholder:text-foreground/20"
                  placeholder={t('fields.lastName')}
                  required
                />
              </div>
            </div>

            <div className="relative">
              <input
                name="email"
                type="email"
                className="w-full bg-transparent border-b border-border/60 py-4 outline-none font-light text-lg focus:border-accent transition-all placeholder:text-foreground/20"
                placeholder={t('fields.email')}
                required
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                rows={2}
                className="w-full bg-transparent border-b border-border/60 py-4 outline-none font-light text-lg focus:border-accent transition-all resize-none placeholder:text-foreground/20"
                placeholder={t('fields.placeholder_message')}
                required
              />
            </div>

            <div className="flex flex-col items-center gap-12 pt-8">
              <button
                type="submit"
                className="group flex flex-col items-center gap-6"
              >
                <div className="w-20 h-20 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-700">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-foreground/40 group-hover:text-foreground transition-colors">{t('submit')}</span>
              </button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-accent text-[10px] font-bold uppercase tracking-widest">{t('success')}</motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>

        {/* BOTTOM DECORATIVE AREA */}
        <div className="mt-32 text-center">
           <div className="inline-flex items-center gap-8">
              <div className="w-12 h-px bg-border/60" />
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-foreground/20">Private Inquiry &bull; 2026</span>
              <div className="w-12 h-px bg-border/60" />
           </div>
        </div>
      </div>
    </section>
  );
}
