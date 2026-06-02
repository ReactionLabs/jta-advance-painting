import Image from "next/image";
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
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PaintBrushStroke, PaintSplatter } from "@/components/ui/PaintDecorations";

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
    description: "Full liability coverage for your peace of mind",
  },
  {
    icon: Award,
    title: "5-Star Rated",
    description: "Consistently high ratings from satisfied customers",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time and complete projects as promised",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Trained professionals with years of experience",
  },
];

const portfolio = [
  { src: "/project-images/jta_work_1.jpg", alt: "Interior painting project" },
  { src: "/project-images/jta_work_2.jpg", alt: "Exterior painting project" },
  { src: "/project-images/jta_work_3.jpg", alt: "Commercial painting project" },
  { src: "/project-images/jta_work_4.jpg", alt: "Residential painting project" },
];

const testimonials = [
  {
    quote:
      "The team at JTA was incredible! They painted our entire first floor in just two days and the results were absolutely flawless. Marcus and his crew went above and beyond.",
    author: "Marcus Johnson",
    location: "Homeowner",
  },
  {
    quote:
      "I was worried about finding a painter who could work around my busy office schedule. Michelle Torres and her team were fantastic—professional, clean, and the results speak for themselves.",
    author: "Michelle Torres",
    location: "Business Owner",
  },
  {
    quote:
      "From the initial consultation to the final walkthrough, Amanda Roberts made sure every detail was perfect. The cabinet refinishing exceeded all my expectations.",
    author: "Amanda Roberts",
    location: "Homeowner",
  },
];

function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/project-images/jta_work_1.jpg"
            alt="JTA Advance Painting professional work"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
          {/* Glowing Paint Splats / Blobs in the Hero Background */}
          <div className="absolute top-1/4 left-1/4 size-72 rounded-full bg-logo-yellow/15 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 size-80 rounded-full bg-logo-red/15 blur-[130px] pointer-events-none" />
          <div className="absolute top-1/3 right-10 size-64 rounded-full bg-logo-purple/15 blur-[110px] pointer-events-none" />
        </div>
        <div className="absolute top-8 right-8">
          <div className="flex items-center gap-1 rounded-full bg-primary/20 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="size-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-white">5-Star Rated</span>
          </div>
        </div>
        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1 w-12 bg-primary"></span>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Trusted Local Experts
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
              We Make Your Space{" "}
              <span className="relative inline-block px-2">
                <span className="relative z-10 text-slate-950 font-extrabold">Look Incredible</span>
                <PaintBrushStroke color="gold" className="absolute left-0 bottom-1 h-[75%] w-full -rotate-1 opacity-95" />
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/80 sm:text-xl">
              From fresh interiors to stunning curb appeal — we deliver
              precision painting that transforms houses into homes you love.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <Link href="/gallery">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-primary/50"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              Comprehensive painting solutions for residential and commercial
              properties
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={cn(
                  "group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-border",
                  service.colorClass
                )}
              >
                {/* Paint Splatter micro-decoration in the card background */}
                <PaintSplatter
                  color={service.splatterColor}
                  variant={(index % 3 + 1) as 1 | 2 | 3}
                  className="absolute -bottom-6 -right-6 size-20 opacity-5 group-hover:opacity-20 group-hover:scale-110 transition-all duration-300"
                />
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                  <div className={cn(
                    "flex size-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110",
                    service.iconBgClass
                  )}>
                    <service.icon
                      className={cn("size-8 transition-colors duration-300", service.iconColorClass)}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg font-semibold relative z-10">{service.title}</h3>
                  <p className="text-sm text-muted-foreground relative z-10">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why Choose JTA Advance Painting?
              </h2>
              <p className="mt-4 text-muted-foreground">
                We go above and beyond to ensure your complete satisfaction. Our
                commitment to excellence sets us apart from the competition.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {whyChooseUs.map((item, idx) => {
                  const itemColors = [
                    { text: "text-logo-gold", bg: "bg-logo-gold/10" },
                    { text: "text-logo-green", bg: "bg-logo-green/10" },
                    { text: "text-logo-red", bg: "bg-logo-red/10" },
                    { text: "text-logo-purple", bg: "bg-logo-purple/10" },
                  ];
                  const colors = itemColors[idx % itemColors.length];
                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-lg p-2 transition-all duration-300 hover:bg-primary/5"
                    >
                      <div className={cn("flex size-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300", colors.bg)}>
                        <item.icon
                          className={cn("size-6", colors.text)}
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8">
                <Link href="/about">
                  <Button variant="link" className="p-0 text-primary hover:text-primary/80">
                    Learn more about us
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/project-images/jta_work_5.jpg"
                alt="Professional painter at work"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview 2x2 Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Recent Work
            </h2>
            <p className="mt-4 text-muted-foreground">
              Browse through some of our latest projects
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="p-4">
                    <p className="text-sm font-medium text-white">{item.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/gallery">
              <Button variant="outline" size="lg">
                View Full Gallery
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-muted-foreground">
              Don&apos;t just take our word for it
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, idx) => {
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
              const avatar = avatarBgs[idx % avatarBgs.length];
              return (
                <Card key={testimonial.author} className="relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className={cn("absolute top-0 left-0 right-0 h-1", gradient)} />
                  <CardContent className="flex flex-col gap-4 p-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="size-4 fill-logo-yellow text-logo-yellow transition-transform hover:scale-125 hover:rotate-12"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-auto flex items-center gap-3 pt-4 border-t border-muted">
                      <div className={cn("flex size-12 items-center justify-center rounded-full font-bold", avatar)}>
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.location}
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

      {/* Final CTA Section */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 rounded-3xl mx-4 my-8">
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
        <div className="absolute -right-10 -top-10 size-40 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 size-40 rounded-full bg-white/20 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Transform Your Space?
          </h2>
          <p className="mt-4 text-lg text-white/95">
            Contact us today for a free estimate and let&apos;s bring your vision
            to life.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-slate-950 font-semibold transition-all hover:scale-105 hover:bg-white/90 hover:shadow-lg"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
            <a href="tel:813-392-8301">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 bg-transparent text-white transition-all hover:bg-white/10"
              >
                <Phone className="mr-2 size-4" />
                813-392-8301
              </Button>
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/80">
            <CheckCircle2 className="size-4 text-white" />
            <span>Free estimates &bull; No obligation</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;