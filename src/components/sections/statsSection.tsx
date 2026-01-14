"use client";
//#region Imports
import { cn } from "@heroui/react";
import type React from "react";
import { useCountUp, useScrollAnimation } from "@/hooks/useScrollAnimation";

//#endregion

//#region Constants
const stats = [
  {
    value: 120,
    suffix: "+",
    label: "Destinations",
    description: "Carefully curated worldwide",
  },
  {
    value: 15,
    suffix: "K",
    label: "Travelers",
    description: "Journeys completed monthly",
  },
  {
    value: 50,
    suffix: "M",
    label: "Photos Captured",
    description: "Epic moments documented",
  },
  {
    value: 4.95,
    suffix: "/5",
    label: "Average Rating",
    description: "Traveler satisfaction verified",
  },
];
//#endregion

function StatItem({
  value,
  suffix,
  label,
  description,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  description: string;
  delay: number;
}) {
  //#region Hooks
  const { ref, count } = useCountUp(value, 2000);
  const { ref: visRef, isVisible } = useScrollAnimation(0.3);
  //#endregion

  return (
    <div
      ref={visRef as React.RefObject<HTMLDivElement>}
      className={cn(
        "text-center transition-all duration-1000",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div ref={ref as React.RefObject<HTMLDivElement>}>
        <span className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground tabular-nums">
          {value % 1 === 0 ? count : count.toFixed(2)}
          <span className="text-muted-foreground">{suffix}</span>
        </span>
      </div>
      <p className="text-foreground font-medium mt-3 mb-1">{label}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export function StatsSection() {
  //#region Hooks
  const { ref, isVisible } = useScrollAnimation(0.2);
  //#endregion

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 lg:py-40 relative overflow-hidden px-6 lg:px-12"
    >
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/20 to-background" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div
          className={cn(
            "text-center mb-20 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-foreground/20" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              By the numbers
            </span>
            <div className="w-8 h-px bg-foreground/20" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl  tracking-tight mb-5">
            <span className="font-mono font-semibold">Horizon</span> in Numbers
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
            Celebrating the journeys, destinations, and unforgettable
            experiences of our travelers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
