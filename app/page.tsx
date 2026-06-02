"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  Building2,
  Briefcase,
  Palette,
  ShieldCheck,
  Star,
  Clock,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Sparkles,
  ClipboardList,
  CalendarCheck,
  FileCheck2,
  ThumbsUp,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Custom SVG paint decorators & interactive widgets
import { PaintBrushStroke, PaintSplatter } from "@/components/ui/PaintDecorations";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ColorVisualizer from "@/components/ColorVisualizer";

// Count-up counter component triggered on viewport visibility
function StatCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, end]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

const services = [
  {
    title: "Interior Painting",
    description:
      "Transform your living spaces with our expert interior painting services. We use premium paints and precise techniques for flawless results.",
    icon: Home,
    colorClass: "hover:shadow-logo-gold/20 hover:border-logo-gold/30",
    iconBgClass: "bg-logo-gold/10 group-hover:bg-logo-gold",
    iconColorClass: "text-logo-gold group-hover:text-black",
    splatterColor: "gold" as const,
  },
  {
    title: "Exterior Painting",
    description:
      "Protect and beautify your home's exterior with our weather-resistant paints and professional application.",
    icon: Building2,
    colorClass: "hover:shadow-logo-green/20 hover:border-logo-green/30",
    iconBgClass: "bg-logo-green/10 group-hover:bg-logo-green",
    iconColorClass: "text-logo-green group-hover:text-white",
    splatterColor: "green" as const,
  },
  {
    title: "Commercial Painting",
    description:
      "Minimize disruption to your business with our efficient commercial painting solutions tailored to your schedule.",
    icon: Briefcase,
    colorClass: "hover:shadow-logo-red/20 hover:border-logo-red/30",
    iconBgClass: "bg-logo-red/10 group-hover:bg-logo-red",
    iconColorClass: "text-logo-red group-hover:text-white",
    splatterColor: "red" as const,
  },
  {
    title: "Cabinet Painting",
    description:
      "Give your kitchen or bathroom cabinets a fresh, modern look without the cost of replacement.",
    icon: Palette,
    colorClass: "hover:shadow-logo-purple/20 hover:border-logo-purple/30",
    iconBgClass: "bg-logo-purple/10 group-hover:bg-logo-purple",
    iconColorClass: "text-logo-purple group-hover:text-white",
    splatterColor: "purple" as const,
  },
];

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Full liability coverage and worker protection for peace of mind",
  },
  {
    icon: Award,
    title: "5-Star Google Rated",
    description: "Consistently top-rated for quality and customer satisfaction",
  },
  {
    icon: Clock,
    title: "On-Time Schedule",
    description: "We respect your calendar and complete milestones on time",
  },
  {
    icon: Users,
    title: "Dedicated Crew",
    description: "Trained professionals with decades of combined painting experience",
  },
];

const serviceAreas = [
  { name: "Tampa", x: 200, y: 160 },
  { name: "Brandon", x: 310, y: 190 },
  { name: "Riverview", x: 320, y: 250 },
  { name: "Wesley Chapel", x: 300, y: 60 },
  { name: "Lutz", x: 140, y: 80 },
  { name: "Land O Lakes", x: 200, y: 40 },
  { name: "Odessa", x: 60, y: 90 },
  { name: "St Petersburg", x: 50, y: 260 },
];

const testimonials = [
  {
    quote:
      "The team at JTA was incredible! They painted our entire first floor in just two days and the results were absolutely flawless. Marcus and his crew went above and beyond.",
    author: "Marcus Johnson",
    role: "Local Guide",
    date: "3 weeks ago",
  },
  {
    quote:
      "I was worried about finding a painter who could work around my busy office schedule. Michelle and her team were fantastic—professional, clean, and the results speak for themselves.",
    author: "Michelle Torres",
    role: "Business Owner",
    date: "2 months ago",
  },
  {
    quote:
      "From the initial consultation to the final walkthrough, Amanda made sure every detail was perfect. The cabinet refinishing exceeded all my expectations.",
    author: "Amanda Roberts",
    role: "Homeowner",
    date: "5 months ago",
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"exterior" | "cabinets" | "interior" | "commercial">("exterior");

  return (
    <div className="flex flex-col bg-background text-foreground">
      {/* 1. Hero Section (DARK & PREMIUM) */}
      <section className="relative min-h-[650px] overflow-hidden bg-slate-950 flex items-center pt-8">
        <div className="absolute inset-0">
          <Image
            src="/project-images/jta_work_1.jpg"
            alt="JTA Advance Painting professional work"
            fill
            className="object-cover opacity-35"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900" />
          {/* Glowing Paint Splats / Blobs in the Hero Background */}
          <div className="absolute top-1/4 left-1/4 size-80 rounded-full bg-logo-yellow/10 blur-[130px] pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 size-96 rounded-full bg-logo-red/10 blur-[140px] pointer-events-none" />
          <div className="absolute top-1/3 right-10 size-72 rounded-full bg-logo-purple/10 blur-[120px] pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Headline / Copy */}
            <div className="lg:col-span-7 text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 backdrop-blur-md">
                <Sparkles className="size-4 text-primary animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  ⭐⭐⭐⭐⭐ 4.9 Stars on Google
                </span>
              </div>
              
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
                Transform Your Home <br />
                <span className="relative inline-block px-1 mt-1 text-slate-950">
                  <span className="relative z-10 font-black">Without the Stress</span>
                  <PaintBrushStroke color="gold" className="absolute left-0 bottom-1 h-[80%] w-full -rotate-1.5 opacity-95" />
                </span>
              </h1>
              
              <p className="mt-6 text-lg text-slate-350 leading-relaxed max-w-xl">
                Licensed, insured, and trusted by Tampa Bay homeowners for flawless, high-durability interior and exterior painting services.
              </p>

              {/* Badges immediately under description */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80 pt-8">
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-white flex items-center">
                    <Star className="size-5 text-logo-yellow fill-logo-yellow mr-1" />
                    <span>4.9</span>
                  </span>
                  <span className="text-xs text-slate-400">Google Rating</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-white">500+</span>
                  <span className="text-xs text-slate-400">Projects Completed</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-white flex items-center">
                    <ShieldCheck className="size-5 text-logo-green mr-1" />
                    <span>Licensed</span>
                  </span>
                  <span className="text-xs text-slate-400">&amp; Insured Crew</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-white">Tampa</span>
                  <span className="text-xs text-slate-400">Bay Coverage</span>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground font-semibold px-8 py-6 rounded-xl transition-all hover:scale-105 hover:bg-primary/95 hover:shadow-lg hover:shadow-primary/20"
                  >
                    Get a Free Quote
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <a href="tel:813-392-8301">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-800 bg-slate-900/60 text-white font-semibold px-8 py-6 rounded-xl transition-all hover:bg-slate-800 hover:border-slate-700"
                  >
                    <Phone className="mr-2 size-4 text-logo-red" />
                    Call 813-392-8301
                  </Button>
                </a>
              </div>
            </div>

            {/* Quick visual card for confidence (Right side of Hero) */}
            <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 hidden lg:block">
              <Image
                src="/project-images/jta_work_5.jpg"
                alt="Beautiful paint transformation detail"
                fill
                className="object-cover"
                sizes="30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-slate-950/80 backdrop-blur border border-slate-800 p-4 rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-logo-green animate-ping" />
                  <span className="text-xs font-semibold text-white">Active project in Brandon</span>
                </div>
                <Link href="/gallery" className="text-xs text-primary font-bold hover:underline flex items-center">
                  <span>View gallery</span>
                  <ArrowRight className="ml-1 size-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Counter Statistics Section (LIGHT ACCENT TRANSITION) */}
      <section className="bg-slate-900 border-t border-slate-800/80 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border-r border-slate-800 last:border-0">
              <p className="text-4xl font-extrabold text-white">
                <StatCounter end={500} suffix="+" />
              </p>
              <p className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">
                Projects Completed
              </p>
            </div>
            <div className="p-4 md:border-r border-slate-800 last:border-0">
              <p className="text-4xl font-extrabold text-white">
                <StatCounter end={15} suffix="+" />
              </p>
              <p className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">
                Years Experience
              </p>
            </div>
            <div className="p-4 border-r border-slate-800 last:border-0">
              <p className="text-4xl font-extrabold text-white">
                <StatCounter end={4} suffix=".9★" />
              </p>
              <p className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">
                Google Review Rating
              </p>
            </div>
            <div className="p-4 last:border-0">
              <p className="text-4xl font-extrabold text-white">
                <StatCounter end={100} suffix="%" />
              </p>
              <p className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">
                Satisfaction Guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section (LIGHT BACKGROUND) */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Professional Painting Services
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Comprehensive and premium interior, exterior, and custom cabinet solutions tailored specifically for residential, commercial, and HOA properties in Tampa.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={cn(
                  "group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-border cursor-pointer",
                  service.colorClass
                )}
              >
                {/* Paint Splatter background highlight */}
                <PaintSplatter
                  color={service.splatterColor}
                  variant={(index % 3 + 1) as 1 | 2 | 3}
                  className="absolute -bottom-6 -right-6 size-20 opacity-5 group-hover:opacity-15 group-hover:scale-115 transition-all duration-300"
                />
                <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                  <div className={cn(
                    "flex size-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110",
                    service.iconBgClass
                  )}>
                    <service.icon
                      className={cn("size-8 transition-colors duration-300", service.iconColorClass)}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg font-bold relative z-10">{service.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed relative z-10">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/services">
              <Button variant="outline" size="lg" className="rounded-xl px-8 border-border font-semibold hover:bg-slate-50 hover:text-black">
                View Service Specifics
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Our Process Section (DARK & STRUCTURED) */}
      <section className="bg-slate-950 px-4 py-24 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              How We Work: Our 5-Step Process
            </h2>
            <p className="mt-4 text-slate-400">
              We provide complete transparency, reliable timing, and quality checkpoint walkthroughs at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 relative">
            {/* Connection line on desktop */}
            <div className="absolute top-[40px] left-[10%] right-[10%] h-0.5 bg-slate-800 hidden md:block z-0" />

            {/* Process Steps */}
            {[
              { step: 1, title: "Request Estimate", desc: "Submit details online or call us directly.", icon: ClipboardList },
              { step: 2, title: "On-Site Visit", desc: "We evaluate surfaces and measure space.", icon: Users },
              { step: 3, title: "Receive Quote", desc: "A written itemized bid with clear scopes.", icon: FileCheck2 },
              { step: 4, title: "Schedule Project", desc: "Finalize paint selections and booking dates.", icon: CalendarCheck },
              { step: 5, title: "Walkthrough", desc: "A final inspection ensures flawless output.", icon: ThumbsUp },
            ].map((p, idx) => {
              const borderColors = [
                "border-logo-gold/30 bg-logo-gold/10 text-logo-gold",
                "border-logo-green/30 bg-logo-green/10 text-logo-green",
                "border-logo-orange/30 bg-logo-orange/10 text-logo-orange",
                "border-logo-red/30 bg-logo-red/10 text-logo-red",
                "border-logo-purple/30 bg-logo-purple/10 text-logo-purple",
              ];
              const borderStyle = borderColors[idx % borderColors.length];

              return (
                <div key={p.step} className="flex flex-col items-center text-center relative z-10 group">
                  <div className={cn("size-20 rounded-2xl border flex items-center justify-center mb-4 transition-transform group-hover:scale-105 duration-300", borderStyle)}>
                    <p.icon className="size-9" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-primary mb-1">
                    Step 0{p.step}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed max-w-[200px]">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Before & After Slider Section (LIGHT BACKGROUND) */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              See the Visual Difference
            </h2>
            <p className="mt-4 text-slate-600">
              Drag the vertical handle in the sliders below to check the transformation difference on real homes.
            </p>

            {/* Slider Switcher Tabs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {[
                { id: "exterior" as const, label: "House Exterior", image: "/project-images/jta_work_2.jpg" },
                { id: "cabinets" as const, label: "Cabinet Painting", image: "/project-images/jta_work_5.jpg" },
                { id: "interior" as const, label: "Interior Spaces", image: "/project-images/jta_work_1.jpg" },
                { id: "commercial" as const, label: "Commercial Office", image: "/project-images/jta_work_3.jpg" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-bold transition-all border",
                    activeTab === tab.id
                      ? "bg-slate-900 border-slate-950 text-white shadow-md shadow-black/10"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-black"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Slider Container */}
          <div className="max-w-3xl mx-auto">
            {activeTab === "exterior" && (
              <BeforeAfterSlider
                beforeImage="/project-images/jta_work_2.jpg"
                afterImage="/project-images/jta_work_2.jpg"
                beforeAlt="Faded siding house exterior before painting"
                afterAlt="Freshly painted siding exterior after painting"
                simulateBefore
              />
            )}
            {activeTab === "cabinets" && (
              <BeforeAfterSlider
                beforeImage="/project-images/jta_work_5.jpg"
                afterImage="/project-images/jta_work_5.jpg"
                beforeAlt="Scratched outdated wood cabinets before refinishing"
                afterAlt="Smooth modern paint coat on cabinets after refinishing"
                simulateBefore
              />
            )}
            {activeTab === "interior" && (
              <BeforeAfterSlider
                beforeImage="/project-images/jta_work_1.jpg"
                afterImage="/project-images/jta_work_1.jpg"
                beforeAlt="Dull and worn drywalls before application"
                afterAlt="Vibrant clean white walls after paint application"
                simulateBefore
              />
            )}
            {activeTab === "commercial" && (
              <BeforeAfterSlider
                beforeImage="/project-images/jta_work_3.jpg"
                afterImage="/project-images/jta_work_3.jpg"
                beforeAlt="Chipped commercial concrete walls before painting"
                afterAlt="Uniform clean commercial walls after painting"
                simulateBefore
              />
            )}
          </div>
        </div>
      </section>

      {/* 6. Paint Color Visualizer Section (DARK BACKGROUND & INTERACTIVE) */}
      <section className="bg-slate-950 px-4 py-24 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-logo-gold/10 border border-logo-gold/20 px-3 py-1 rounded-full text-xs font-semibold text-logo-gold mb-4">
              <PaintBrushStroke color="gold" className="size-4 fill-logo-gold" />
              <span>Interactive Designer Workspace</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              Try Before You Paint
            </h2>
            <p className="mt-4 text-slate-400">
              Interactive Room Paint Visualizer. Tap a room option below, select swatches, and visualize combinations instantly!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ColorVisualizer />
          </div>
        </div>
      </section>

      {/* 7. Service Area Section with Styled Map (LIGHT BACKGROUND) */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Locations List */}
            <div className="lg:col-span-5 text-left">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Proudly Serving the Tampa Bay Area
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                JTA Advance Painting provides professional painting services for homes and businesses throughout Hillsborough, Pinellas, and Pasco counties.
              </p>
              
              {/* Highlight Location grids */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {serviceAreas.map((area) => (
                  <div
                    key={area.name}
                    className="flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:border-primary/45 transition-colors cursor-pointer group"
                  >
                    <MapPin className="size-4 text-logo-red shrink-0 group-hover:scale-110 transition-transform" />
                    <span>{area.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Styled Vector SVG Map */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-xl p-6 relative overflow-hidden flex items-center justify-center">
              <div className="absolute top-4 left-4 bg-slate-50 border border-slate-250 rounded-lg px-2.5 py-1 text-[10px] font-bold text-slate-500 uppercase tracking-wider select-none">
                JTA Service Boundary Map
              </div>
              <svg
                viewBox="0 0 400 300"
                className="w-full h-auto max-w-[480px] bg-slate-50/50 rounded-2xl border border-slate-100"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Grid Map representing Area */}
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#F1F5F9" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="400" height="300" fill="url(#grid)" />

                {/* Bounding boundary line representing services limit */}
                <path
                  d="M 50,260 L 60,90 L 200,40 L 300,60 L 320,250 Z"
                  fill="rgba(246, 176, 27, 0.05)"
                  stroke="#F6B01B"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                />

                {/* Service nodes dots */}
                {serviceAreas.map((area) => (
                  <g key={area.name} className="cursor-pointer group">
                    {/* Glowing pulse ring */}
                    <circle
                      cx={area.x}
                      cy={area.y}
                      r="9"
                      fill="rgba(230, 35, 37, 0.2)"
                      className="animate-ping origin-center"
                    />
                    {/* Main pin node */}
                    <circle cx={area.x} cy={area.y} r="5" fill="#E62325" />
                    {/* Text node label */}
                    <text
                      x={area.x}
                      y={area.y - 10}
                      textAnchor="middle"
                      fill="#1E293B"
                      fontSize="9"
                      fontWeight="bold"
                      className="opacity-80 group-hover:opacity-100 transition-opacity bg-white"
                    >
                      {area.name}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Redesigned Testimonials Section (DARK & TRUSTWORTHY) */}
      <section className="bg-slate-950 px-4 py-24 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-slate-900 border border-slate-800 px-3 py-1 text-xs text-slate-400 font-semibold uppercase tracking-wider">
              <span className="size-2 rounded-full bg-logo-green" />
              <span>Verified Customer Feedback</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              What Our Customers Say on Google
            </h2>
            <p className="mt-4 text-slate-400">
              Don&apos;t just take our word for it. Here are reviews from real local homeowners.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, idx) => {
              const borderGradients = [
                "bg-gradient-to-r from-logo-yellow via-logo-orange to-transparent",
                "bg-gradient-to-r from-logo-red via-logo-purple to-transparent",
                "bg-gradient-to-r from-logo-green via-logo-gold to-transparent",
              ];
              const avatarBgs = [
                "bg-logo-yellow/10 text-logo-gold",
                "bg-logo-red/10 text-logo-red",
                "bg-logo-green/10 text-logo-green",
              ];
              const gradient = borderGradients[idx % borderGradients.length];
              const avatarStyle = avatarBgs[idx % avatarBgs.length];

              return (
                <Card key={t.author} className="bg-slate-900/60 border border-slate-850 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className={cn("absolute top-0 left-0 right-0 h-1", gradient)} />
                  <CardContent className="flex flex-col gap-4 p-6">
                    {/* Star layout with Google Review layout */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="size-4 fill-logo-yellow text-logo-yellow"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      {/* Google G icon representing source */}
                      <svg viewBox="0 0 24 24" className="size-4.5" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                    </div>

                    <p className="text-sm leading-relaxed text-slate-300 font-medium">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    <div className="mt-auto flex items-center gap-3 pt-4 border-t border-slate-800">
                      {/* Round initials avatar */}
                      <div className={cn("flex size-11 items-center justify-center rounded-full font-bold text-sm", avatarStyle)}>
                        {t.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm flex items-center">
                          <span>{t.author}</span>
                          <span className="ml-1.5 size-3.5 inline-flex items-center justify-center bg-logo-green/10 rounded-full">
                            <CheckCircle2 className="size-2.5 text-logo-green fill-logo-green/10" />
                          </span>
                        </p>
                        <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                          {t.role} &bull; {t.date}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Final CTA Section (VIBRANT GLOWING GRADIENT CANVAS) */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 rounded-3xl mx-4 my-8 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-logo-red via-logo-orange to-logo-gold" />
        <div className="absolute inset-0 opacity-15">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
              fill="currentColor"
              className="text-white"
            />
          </svg>
        </div>
        <div className="absolute -right-10 -top-10 size-48 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 size-48 rounded-full bg-white/20 blur-3xl" />
        
        <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to Paint Your Space?
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
            Contact us today for a free estimate and let&apos;s bring your paint vision to life.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-slate-950 font-bold px-8 py-6 rounded-xl transition-all hover:scale-105 hover:bg-slate-50 hover:shadow-xl"
              >
                Request Free Estimate
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
            <a href="tel:813-392-8301">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 bg-transparent text-white font-bold px-8 py-6 rounded-xl transition-all hover:bg-white/10"
              >
                <Phone className="mr-2 size-4" />
                Call 813-392-8301
              </Button>
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/80 uppercase tracking-widest font-semibold">
            <CheckCircle2 className="size-4 text-white" />
            <span>Free estimates &bull; Fully Licensed &amp; Insured</span>
          </div>
        </div>
      </section>
    </div>
  );
}