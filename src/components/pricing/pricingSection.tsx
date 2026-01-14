"use client";

import { Button, cn } from "@heroui/react";
import { CheckIcon, StarIcon } from "@phosphor-icons/react";
import type React from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "Perfect for side projects and experiments",
    features: [
      "3 projects",
      "1GB storage",
      "Community support",
      "Basic analytics",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For professionals and growing teams",
    features: [
      "Unlimited projects",
      "100GB storage",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
      "Team collaboration",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced needs",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "24/7 phone support",
      "Custom integrations",
      "SLA guarantee",
      "Dedicated success manager",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 lg:py-40 bg-muted/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />

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
              Pricing
            </span>
            <div className="w-8 h-px bg-foreground/20" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
            Simple, transparent{" "}
            <span className="font-serif italic font-normal text-muted-foreground">
              pricing
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
            Choose the plan that's right for you. All plans include a 14-day
            free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={cn(
                "relative p-8 lg:p-10 rounded-3xl border transition-all duration-1000",
                plan.popular
                  ? "bg-foreground text-background border-foreground shadow-premium-lg scale-[1.02] lg:scale-105"
                  : "bg-card shadow-premium hover:shadow-premium-lg",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium shadow-lg">
                  <StarIcon weight="duotone" className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3
                  className={cn(
                    "text-xl font-semibold mb-3 tracking-tight",
                    plan.popular ? "text-background" : "text-foreground"
                  )}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    className={cn(
                      "text-5xl font-semibold tracking-tight",
                      plan.popular ? "text-background" : "text-foreground"
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      "text-lg",
                      plan.popular
                        ? "text-background/60"
                        : "text-muted-foreground"
                    )}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={cn(
                    "mt-3 text-sm font-light",
                    plan.popular
                      ? "text-background/60"
                      : "text-muted-foreground"
                  )}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center shrink-0",
                        plan.popular ? "bg-accent" : "bg-accent/10"
                      )}
                    >
                      <CheckIcon
                        weight="duotone"
                        className={cn(
                          "w-3 h-3",
                          plan.popular
                            ? "text-accent-foreground"
                            : "text-accent"
                        )}
                      />
                    </div>
                    <span
                      className={cn(
                        "font-light",
                        plan.popular ? "text-background/80" : "text-foreground"
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={cn(
                  "w-full h-12 rounded-full font-medium",
                  plan.popular
                    ? "bg-background text-foreground hover:bg-background/90"
                    : ""
                )}
                variant={plan.popular ? "primary" : "ghost"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
