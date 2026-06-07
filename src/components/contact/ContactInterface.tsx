"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  Variants,
  useReducedMotion,
} from "framer-motion";
import {
  ChevronDown,
  Search,
  Check,
  Loader2,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Layers,
  MoreHorizontal,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";
import { Turnstile } from "@marsidev/react-turnstile";
import Link from "next/link";

const COUNTRIES = [
  { name: "Egypt", code: "+20", flag: "🇪🇬" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "Qatar", code: "+974", flag: "🇶🇦" },
  { name: "Kuwait", code: "+965", flag: "🇰🇼" },
  { name: "Bahrain", code: "+973", flag: "🇧🇭" },
];

const SERVICES = [
  { name: "AI Automation", icon: <Cpu className="w-4 h-4" /> },
  { name: "Oracle APEX Solutions", icon: <Database className="w-4 h-4" /> },
  { name: "Web Development", icon: <Globe className="w-4 h-4" /> },
  { name: "Mobile Development", icon: <Smartphone className="w-4 h-4" /> },
  { name: "Enterprise Software", icon: <Layers className="w-4 h-4" /> },
  { name: "Other", icon: <MoreHorizontal className="w-4 h-4" /> },
];

const CONTACT_INFO = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Digital Mail",
    value: "info@apexexperts.net",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Direct Line",
    value: "+201022034499",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Headquarters",
    value: "Alexandria, Dubai",
  },
];

export function ContactInterface() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [selectedService, setSelectedService] = useState("");
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const phoneInputRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    const handleClickOutside = (event: MouseEvent) => {
      if (
        countryRef.current &&
        !countryRef.current.contains(event.target as Node)
      )
        setIsCountryOpen(false);
      if (
        serviceRef.current &&
        !serviceRef.current.contains(event.target as Node)
      )
        setIsServiceOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: effectiveReduceMotion ? 0 : 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: effectiveReduceMotion ? 0 : 30,
      filter: effectiveReduceMotion ? "none" : "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: effectiveReduceMotion ? 0 : 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: effectiveReduceMotion ? 0 : 10 },
  };

  const handleCountrySelect = (country: (typeof COUNTRIES)[0]) => {
    setSelectedCountry(country);
    setIsCountryOpen(false);
    setTimeout(() => phoneInputRef.current?.focus(), 100);
  };

  const filteredCountries = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.code.includes(countrySearch)
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    const formData = new FormData(event.currentTarget);

    // Add custom selections to formData
    formData.append("country", selectedCountry.name);
    formData.append("country_code", selectedCountry.code);
    formData.append("service", selectedService);
    formData.append("turnstileToken", turnstileToken || "");

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setIsSuccess(true);
      } else {
        setFormError(
          result.error || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error(error);
      setFormError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-start overflow-hidden bg-sinai-bg-base px-4 pb-14 pt-24 sm:px-6 lg:pb-20 lg:pt-28">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        className="apex-container-wide relative z-10"
      >
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* ── Left Side: Brand & Identity ── */}
          <div className="space-y-8 lg:col-span-5">
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-4xl md:text-[68px] leading-[40px] md:leading-[60px] tracking-[-1.5px] font-black text-white text-center md:text-start">
                Start a<span className="text-sinai-glow-orange"> Project</span>
              </h1>
              <p className="text-zinc-400 md:leading-[29.25px] tracking-normal md:text-lg text-center md:text-start">
                Transform your vision into reality. Our enterprise solutions
                team is ready to architect your next breakthrough.
              </p>
            </motion.div>

            {/* Real Contact Data HUD */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-8 items-center md:items-start"
            >
              {CONTACT_INFO.map((item, index) => (
                <div
                  className="flex flex-col md:flex-row items-center gap-2"
                  key={index}
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-md p-3 border border-sinai-glow-orange/20 bg-sinai-glow-orange/10 text-sinai-glow-orange">
                    {item.icon}
                  </div>
                  <div className="flex flex-col items-center md:items-start text-center md:text-start gap-1">
                    <span className="leading-[20px] text-zinc-400">
                      {item.label}
                    </span>
                    <span className="text-xl md:text-2xl text-white md:leading-[28px] font-semibold tracking-normal">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right Side: Professional High-End Form ── */}
          <div className="lg:col-span-7 relative">
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden rounded-[16px] border-[0.5px] border-white/50 p-[33.07px] bg-[linear-gradient(135deg,#141414_0%,#111111_25%,#0F0F0F_50%,#0C0C0C_75%,#0A0A0A_100%)] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] flex flex-col gap-6"
            >
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{
                      opacity: 0,
                      scale: effectiveReduceMotion ? 1 : 0.9,
                      filter: effectiveReduceMotion ? "none" : "blur(10px)",
                    }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    className="space-y-6 py-12 text-center"
                  >
                    <div className="w-24 h-24 bg-sinai-glow-orange/20 rounded-full flex items-center justify-center mx-auto border border-sinai-glow-orange/30">
                      <Check
                        className="w-12 h-12 text-sinai-glow-orange"
                        strokeWidth={3}
                      />
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-4xl font-black uppercase tracking-normal text-white">
                        Message Sent
                      </h2>
                      <p className="text-zinc-500 text-lg max-w-sm mx-auto">
                        Thanks. We received your message and will get back to
                        you soon.
                      </p>
                    </div>
                    <Link
                      onClick={() => setIsSuccess(false)}
                      href="/"
                      className="text-[10px]  text-sinai-glow-orange uppercase tracking-[0.5em] font-black hover:opacity-70 transition-opacity"
                    >
                      Return to Home
                    </Link>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    exit={{
                      opacity: 0,
                      scale: effectiveReduceMotion ? 1 : 0.95,
                      filter: effectiveReduceMotion ? "none" : "blur(10px)",
                    }}
                    onSubmit={handleSubmit}
                    className="relative z-10 flex flex-col gap-6"
                  >
                    {/* Identity Group */}
                    <PremiumField
                      id="full_name"
                      name="name"
                      label="Full Name"
                      placeholder="Your full identity"
                      autoComplete="name"
                      required
                    />
                    <PremiumField
                      id="email_address"
                      name="email"
                      label="Email Address"
                      placeholder="name@company.com"
                      type="email"
                      autoComplete="email"
                      required
                    />

                    {/* Professional Context */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <PremiumField
                        id="job_title"
                        name="job_title"
                        label="Job Title"
                        placeholder="Architect / CTO"
                        autoComplete="organization-title"
                      />
                      <PremiumField
                        id="company_name"
                        name="company"
                        label="Company"
                        placeholder="Organization name"
                        autoComplete="organization"
                      />
                    </div>

                    {/* Geographic & Direct Link */}
                    <div className="relative grid gap-6 md:grid-cols-2">
                      <div
                        className={`flex flex-col gap-3 items-start w-full relative transition-all ${isCountryOpen ? "z-[110]" : "z-10"}`}
                        ref={countryRef}
                      >
                        <label
                          htmlFor="country-trigger"
                          className="font-medium text-base leading-5 tracking-normal text-zinc-400"
                        >
                          Country
                        </label>
                        <div
                          id="country-trigger"
                          role="button"
                          tabIndex={0}
                          aria-haspopup="listbox"
                          aria-expanded={isCountryOpen}
                          onClick={() =>
                            !isSubmitting && setIsCountryOpen(!isCountryOpen)
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              if (!isSubmitting)
                                setIsCountryOpen(!isCountryOpen);
                            }
                          }}
                          className="relative z-10 flex w-full cursor-pointer items-center justify-between rounded-[20px] border border-white/20 bg-sinai-glow-orange/5 px-4 py-3 transition-all hover:border-sinai-glow-orange focus:outline-none focus:border-sinai-glow-orange"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">
                              {selectedCountry.flag}
                            </span>
                            <span className="text-sm font-bold tracking-normal text-white">
                              {selectedCountry.name}
                            </span>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 text-zinc-500 transition-transform ${isCountryOpen ? "rotate-180" : ""}`}
                          />
                        </div>

                        <div className="absolute top-full left-0 right-0 z-[100]">
                          <AnimatePresence>
                            {isCountryOpen && (
                              <motion.div
                                variants={dropdownVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-[#0b0d10] shadow-[0_20px_50px_rgba(0,0,0,0.42)]"
                              >
                                <div className="p-4 border-b border-white/5 flex items-center gap-3 bg-sinai-glow-orange/5">
                                  <Search className="w-4 h-4 text-zinc-500" />
                                  <input
                                    id="country-search"
                                    name="country-search"
                                    autoFocus
                                    type="text"
                                    aria-label="Search country"
                                    placeholder="Search country..."
                                    className="bg-transparent w-full text-white text-sm focus:outline-none"
                                    value={countrySearch}
                                    onChange={(e) =>
                                      setCountrySearch(e.target.value)
                                    }
                                  />
                                </div>
                                <div
                                  className="max-h-56 overflow-y-auto bg-sinai-glow-orange/5 custom-scrollbar"
                                  role="listbox"
                                >
                                  {filteredCountries.map((country) => (
                                    <div
                                      key={country.name}
                                      role="option"
                                      tabIndex={0}
                                      aria-selected={
                                        selectedCountry.name === country.name
                                      }
                                      onClick={() =>
                                        handleCountrySelect(country)
                                      }
                                      onKeyDown={(e) => {
                                        if (
                                          e.key === "Enter" ||
                                          e.key === " "
                                        ) {
                                          e.preventDefault();
                                          handleCountrySelect(country);
                                        }
                                      }}
                                      className="group flex cursor-pointer items-center justify-between px-5 py-3.5 outline-none transition-colors hover:bg-sinai-glow-orange/10 focus:bg-sinai-glow-orange/20"
                                    >
                                      <div className="flex items-center gap-4">
                                        <span className="text-xl">
                                          {country.flag}
                                        </span>
                                        <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                                          {country.name}
                                        </span>
                                      </div>
                                      <span className="text-zinc-600  text-[10px] group-hover:text-sinai-glow-orange">
                                        {country.code}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 items-start w-full">
                        <label
                          htmlFor="phone-input"
                          className="font-medium text-base leading-5 tracking-normal text-zinc-400"
                        >
                          Phone
                        </label>
                        <div className="relative w-full">
                          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400 font-bold text-base">
                            {selectedCountry.code}
                          </div>
                          <input
                            id="phone-input"
                            ref={phoneInputRef}
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            disabled={isSubmitting}
                            placeholder="Mobile connection"
                            className="w-full rounded-[20px] border border-white/20 bg-sinai-glow-orange/5 py-3 pl-20 pr-4 text-base text-white transition-all placeholder:text-white/20 hover:border-sinai-glow-orange focus:outline-none focus:border-sinai-glow-orange disabled:opacity-50"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div
                      className={`flex flex-col gap-3 items-start w-full relative transition-all ${isServiceOpen ? "z-[110]" : "z-10"}`}
                      ref={serviceRef}
                    >
                      <label
                        htmlFor="service-trigger"
                        className="font-medium text-base leading-5 tracking-normal text-zinc-400"
                      >
                        Service Interest
                      </label>
                      <div
                        id="service-trigger"
                        role="button"
                        tabIndex={0}
                        aria-haspopup="listbox"
                        aria-expanded={isServiceOpen}
                        onClick={() =>
                          !isSubmitting && setIsServiceOpen(!isServiceOpen)
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            if (!isSubmitting) setIsServiceOpen(!isServiceOpen);
                          }
                        }}
                        className="flex w-full cursor-pointer items-center justify-between rounded-[20px] border border-white/20 bg-sinai-glow-orange/5 px-4 py-3 transition-all hover:border-sinai-glow-orange focus:outline-none focus:border-sinai-glow-orange"
                      >
                        <div className="flex items-center gap-3">
                          {selectedService ? (
                            <>
                              <span className="text-sinai-glow-orange/60">
                                {
                                  SERVICES.find(
                                    (s) => s.name === selectedService
                                  )?.icon
                                }
                              </span>
                              <span className="text-sm font-bold tracking-normal text-white">
                                {selectedService}
                              </span>
                            </>
                          ) : (
                            <span className="text-sm font-bold tracking-normal text-white/20">
                              Select relevant service...
                            </span>
                          )}
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-zinc-500 transition-transform ${isServiceOpen ? "rotate-180" : ""}`}
                        />
                      </div>

                      <div className="absolute top-full left-0 right-0 z-[100]">
                        <AnimatePresence>
                          {isServiceOpen && (
                            <motion.div
                              variants={dropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-[#0b0d10] shadow-[0_20px_50px_rgba(0,0,0,0.42)]"
                            >
                              <div
                                className="bg-sinai-glow-orange/5"
                                role="listbox"
                              >
                                {SERVICES.map((service) => (
                                  <div
                                    key={service.name}
                                    role="option"
                                    tabIndex={0}
                                    aria-selected={
                                      selectedService === service.name
                                    }
                                    onClick={() => {
                                      setSelectedService(service.name);
                                      setIsServiceOpen(false);
                                    }}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        setSelectedService(service.name);
                                        setIsServiceOpen(false);
                                      }
                                    }}
                                    className="group flex cursor-pointer items-center justify-between px-5 py-3.5 outline-none transition-colors hover:bg-sinai-glow-orange/10 focus:bg-sinai-glow-orange/20"
                                  >
                                    <div className="flex items-center gap-4">
                                      <span className="text-zinc-500 group-hover:text-sinai-glow-orange transition-colors">
                                        {service.icon}
                                      </span>
                                      <span className="text-xs text-zinc-300 group-hover:text-white">
                                        {service.name}
                                      </span>
                                    </div>
                                    {selectedService === service.name && (
                                      <Check className="w-4 h-4 text-sinai-glow-orange" />
                                    )}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Message Box */}
                    <div className="flex flex-col gap-3 items-start w-full">
                      <label
                        htmlFor="message"
                        className="font-medium text-base leading-5 tracking-normal text-zinc-400"
                      >
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        disabled={isSubmitting}
                        placeholder="Briefly describe your requirements or vision..."
                        className="w-full resize-none rounded-[20px] border border-white/20 bg-sinai-glow-orange/5 px-4 py-3 text-base text-white transition-all placeholder:text-white/20 hover:border-sinai-glow-orange focus:outline-none focus:border-sinai-glow-orange disabled:opacity-50"
                      />
                    </div>

                    {/* Honeypot for Spam Protection */}
                    <input
                      type="text"
                      name="honeypot"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {/* Security Verification (Invisible Mode) */}
                    <div className="flex justify-center h-0 overflow-hidden">
                      <Turnstile
                        siteKey={
                          process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""
                        }
                        onSuccess={(token: string) => setTurnstileToken(token)}
                        options={{
                          theme: "dark",
                          appearance: "interaction-only",
                        }}
                      />
                    </div>

                    {/* Submission Block */}
                    <div className="space-y-4 pt-3">
                      {formError && (
                        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-xs  tracking-widest text-center uppercase">
                          Error: {formError}
                        </div>
                      )}
                      <button
                        disabled={isSubmitting}
                        className="group flex items-center justify-center gap-4 bg-sinai-glow-orange text-white px-8 lg:px-10 h-10 md:h-16 rounded-full font-black text-xs md:text-lg tracking-widest transition-all duration-500 hover:shadow-[0_15px_40px_rgba(217,130,47,0.3)] w-full md:w-fit mx-auto max-md:justify-center cursor-pointer disabled:opacity-50 active:scale-[0.99]"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2
                              className={`w-5 h-5 md:w-6 md:h-6 text-white animate-spin`}
                            />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <span>Send Message</span>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface PremiumFieldProps {
  label: string;
  placeholder: string;
  name: string;
  id: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}

const PremiumField = ({
  label,
  placeholder,
  name,
  id,
  type = "text",
  required = false,
  autoComplete,
}: PremiumFieldProps) => (
  <div className="flex flex-col gap-3 items-start w-full">
    <label
      htmlFor={id}
      className="font-medium text-base leading-5 tracking-normal text-zinc-400"
    >
      {label}
    </label>
    <input
      id={id}
      name={name}
      type={type}
      required={required}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className="w-full rounded-[20px] border border-white/20 bg-sinai-glow-orange/5 px-4 py-3 text-base text-white transition-all placeholder:text-white/20 hover:border-sinai-glow-orange focus:outline-none focus:border-sinai-glow-orange disabled:opacity-50"
    />
  </div>
);
