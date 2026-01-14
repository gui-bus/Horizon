"use client";
//#region Imports
import { Input, TextArea } from "@heroui/react";
import { CheckCircleIcon, PaperPlaneRightIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";
//#endregion

export function ContactFormSection() {
  //#region useStates
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  //#endregion

  //#region Hooks
  const formRef = useRef<HTMLFormElement>(null);
  //#endregion

  //#region Handle functions
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const firstName = formData.get("firstName")?.toString().trim();
    const lastName = formData.get("lastName")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !message ||
      !validateEmail(email)
    ) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    setStatus("success");

    form.reset();

    setTimeout(() => setStatus("idle"), 4000);
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  //#endregion

  return (
    <section className="min-h-150 lg:min-h-175 grid lg:grid-cols-2 py-20" id="reach-horizon-travels">
      {/* IMAGE */}
      <motion.div
        className="relative h-64 lg:h-auto"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInLeft}
      >
        <Image
          src="/content/banners/passportBanner.webp"
          alt="Passport banner"
          className="absolute inset-0 w-full h-full object-cover rounded-r-3xl"
          width={0}
          height={0}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/20 rounded-r-3xl" />
      </motion.div>

      {/* CONTENT */}
      <div className="p-6 lg:p-12 flex items-center">
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.span
            variants={staggerItem}
            className="text-sm font-medium text-accent uppercase tracking-wider"
          >
            Start Today
          </motion.span>

          <motion.h2
            variants={staggerItem}
            className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-foreground"
          >
            Reach Horizon Travels
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-muted-foreground mb-8 text-lg"
          >
            Questions, suggestions, or ready to start your next adventure? Our
            team is here to help you explore the world.
          </motion.p>

          {/* Form Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInRight}
            className="relative bg-card backdrop-blur-md rounded-3xl"
          >
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <InputField
                  id="firstName"
                  label="First Name"
                  placeholder="John"
                />
                <InputField id="lastName" label="Last Name" placeholder="Doe" />
              </div>

              <InputField
                id="email"
                label="Email"
                placeholder="john@example.com"
                type="email"
              />

              <TextAreaField
                id="message"
                label="Message"
                placeholder="How can we help you plan your next journey?"
              />

              {status === "success" && (
                <p className="text-green-500 text-sm font-medium flex items-center gap-2">
                  <CheckCircleIcon weight="duotone" className="w-5 h-5" />
                  Your message has been sent! We'll contact you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-500 text-sm font-medium">
                  Please fill all required fields correctly.
                </p>
              )}

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  className="w-full bg-accent text-white text-lg py-4 rounded-3xl shadow-lg hover:shadow-xl transition-all h-14 flex items-center gap-5 justify-center cursor-pointer"
                >
                  <PaperPlaneRightIcon weight="duotone" size={28} />
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function InputField({
  id,
  label,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <Input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required
        className="bg-background w-full text-foreground placeholder-muted-foreground border border-default rounded-3xl focus:ring-2 focus:ring-accent py-3 px-4"
      />
    </div>
  );
}

function TextAreaField({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <TextArea
        id={id}
        name={id}
        placeholder={placeholder}
        rows={5}
        required
        className="w-full text-foreground placeholder-muted-foreground border border-default rounded-3xl focus:ring-2 focus:ring-accent py-3 px-4"
      />
    </div>
  );
}
