"use client";

import { cn } from "@heroui/react";
import { useEffect, useState } from "react";

const sections = [
  "Hero",
  "Logos",
  "Features",
  "Showcase",
  "Workflow",
  "Stats",
  "Testimonials",
  "Compare",
  "Industries",
  "Capabilities",
  "Process",
  "Story",
  "Security",
  "Pricing",
  "Reveal",
  "FAQ",
  "CTA",
  "Footer",
];

export function ProgressIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
      setIsVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top progress bar - ultra refined */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 h-0.5 z-50 transition-opacity duration-500",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="absolute inset-0 bg-foreground/3" />
        <div
          className="h-full bg-linear-to-r from-accent via-accent to-accent/60 transition-all duration-150 ease-out relative"
          style={{ width: `${scrollProgress * 100}%` }}
        >
          {/* Glow effect at the end */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-4 bg-accent/50 blur-md" />
        </div>
      </div>

      {/* Side navigation - minimal and elegant */}
      <nav
        className={cn(
          "fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-1.5 transition-all duration-500",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        )}
      >
        {sections.map((section, i) => {
          const sectionProgress = (i + 0.5) / sections.length;
          const isActive =
            scrollProgress >= sectionProgress - 0.03 &&
            scrollProgress < sectionProgress + 0.03;
          const isPast = scrollProgress >= sectionProgress + 0.03;

          return (
            <button
              type="button"
              key={i}
              onClick={() => {
                const docHeight =
                  document.documentElement.scrollHeight - window.innerHeight;
                window.scrollTo({
                  top: docHeight * sectionProgress,
                  behavior: "smooth",
                });
              }}
              className="group flex items-center justify-end gap-3"
              aria-label={`Go to ${section}`}
            >
              {/* Label - appears on hover */}
              <span
                className={cn(
                  "text-[10px] font-medium tracking-wider uppercase transition-all duration-300 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0",
                  isActive ? "text-accent" : "text-muted-foreground"
                )}
              >
                {section}
              </span>

              {/* Dot indicator */}
              <div
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all duration-300",
                  isActive
                    ? "bg-accent scale-[1.8] shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                    : isPast
                    ? "bg-foreground/40 group-hover:bg-foreground/60"
                    : "bg-foreground/15 group-hover:bg-foreground/30"
                )}
              />
            </button>
          );
        })}
      </nav>
    </>
  );
}
