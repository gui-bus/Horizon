'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useTransition, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactCountryFlag from 'react-country-flag';

const languages = [
  { code: 'en', name: 'en', countryCode: 'US' },
  { code: 'pt', name: 'pt', countryCode: 'BR' },
];

export default function LanguageSelector() {
  const t = useTranslations('LanguageSelector');
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  function onSelectChange(nextLocale: string) {
    if (nextLocale === locale) {
      setIsOpen(false);
      return;
    }

    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
      window.location.reload();
    });
  }

  const currentLang = languages.find((lang) => lang.code === locale) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-muted transition-colors disabled:opacity-50"
      >
        <div className="w-4 h-4 rounded-full overflow-hidden flex items-center justify-center">
          <ReactCountryFlag
            countryCode={currentLang.countryCode}
            svg
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <span className="text-[11px] font-black uppercase text-foreground">{locale}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute right-0 mt-2 p-1.5 bg-white border border-border shadow-xl rounded-2xl min-w-[100px] z-20"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onSelectChange(lang.code)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-xs font-bold rounded-xl transition-all ${
                    locale === lang.code 
                    ? 'bg-accent text-white' 
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <div className="w-4 h-4 rounded-full overflow-hidden flex items-center justify-center border border-border/10">
                    <ReactCountryFlag
                      countryCode={lang.countryCode}
                      svg
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <span>{t(lang.name)}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
