import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Home,
  PaintBucket,
  Brush,
  ShieldCheck,
  CheckCircle2,
  Star,
  ArrowRight,
  Phone,
  Palette,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Painting Services",
  description:
    "Transform your living spaces with JTA's expert interior painting services in Tampa Bay. From accent walls to complete home repaints, color consultation included. Free estimates.",
  alternates: { canonical: "/services/interior" },
};

const interiorServices = [
  {
    icon: Brush,
    title: 'Wall Preparation & Priming',
    description:
      'Complete wall preparation and priming for a flawless, long-lasting finish.',
  },
  {
    icon: PaintBucket,
    title: 'Premium Interior Paints',
    description:
      'Premium interior paints from trusted brands, applied with clean, precise lines.',
  },
  {
    icon: Home,
    title: 'Trim, Baseboards & Doors',
    description:
      'Crisp trim, baseboard, and door painting that sharpens every room.',
  },
  {
    icon: Sparkles,
    title: 'Ceilings & Texture Repair',
    description:
      'Ceiling painting and texture repairs for a smooth, even look overhead.',
  },
  {
    icon: Palette,
    title: 'Color Consultation',
    description:
      'Color consultation included to help you find the perfect palette for your space.',
  },
  {
    icon: ShieldCheck,
    title: 'Dust-Free Cleanup',
    description:
      'Dust-free sanding, furniture protection, and thorough cleanup when we are done.',
  },
];

const bestFor = ['Living Rooms', 'Bedrooms', 'Kitchens', 'Bathrooms', 'Offices'];

const benefits = [
  'Fully licensed and insured team',
  'Free color consultation on every project',
  'Furniture and floors protected throughout',
  'Clean, precise lines and sharp edges',
  'Dust-free sanding and daily cleanup',
  '100% satisfaction commitment',
];

const process = [
  {
    step: 1,
    title: 'Free Consultation',
    description:
      'We visit your home, discuss your vision, and provide a detailed estimate with no obligation.',
  },
  {
    step: 2,
    title: 'Color Selection',
    description:
      'Our team helps you choose the perfect colors with complimentary color consultations.',
  },
  {
    step: 3,
    title: 'Professional Prep',
    description:
      'We protect your furniture and belongings, prep every surface, and keep a clean work site.',
  },
  {
    step: 4,
    title: 'Flawless Finish',
    description:
      'Meticulous application, careful inspection, and a final walkthrough to make sure you love it.',
  },
];

export default function InteriorPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_30%_20%,#3b82f6,transparent_50%),radial-gradient(circle_at_70%_80%,#8b5cf6,transparent_50%)]" />
        <div className="relative z-10 mx-auto flex min-h-[440px] max-w-7xl flex-col justify-end px-6 pb-14 pt-24 md:px-12">
          <div>
            <Badge variant="secondary" className="mb-3 text-xs">
              Interior Painting
            </Badge>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Professional Interior Painting
            </h1>
            <p className="max-w-2xl text-lg text-white/90">
              Transform your living spaces with our expert interior painting
              services. From accent walls to complete home repaints, we deliver
              flawless results that reflect your style.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact">
                <Button size="lg">
                  Request a Quote
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Button>
              </Link>
              <a href="tel:813-392-8301">
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Phone className="mr-2 size-4" aria-hidden="true" />
                  813-392-8301
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Our Interior Painting Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every detail handled, from prep to the final walkthrough
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {interiorServices.map((service) => (
              <Card
                key={service.title}
                className="transition-shadow hover:shadow-lg"
              >
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon
                      className="size-7 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {bestFor.map((room) => (
              <Badge key={room} variant="outline" className="text-sm">
                {room}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Why Homeowners Choose JTA
              </h2>
              <p className="mt-4 text-muted-foreground">
                Interior work happens in your living space, so we treat your
                home like it is our own. Careful prep, tidy crews, and finishes
                that hold up.
              </p>
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 size-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                    <Palette className="size-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">Free</p>
                    <p className="text-sm text-muted-foreground">
                      Color consultation with every project
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                    <ShieldCheck
                      className="size-6 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">Licensed & Insured</p>
                    <p className="text-sm text-muted-foreground">
                      Full coverage for your peace of mind
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                    <Star className="size-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">100%</p>
                    <p className="text-sm text-muted-foreground">
                      Satisfaction commitment on every job
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Our Process
            </h2>
            <p className="mt-4 text-muted-foreground">
              Simple, transparent, and respectful of your home
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center text-center"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-primary-foreground">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to Transform Your Living Space?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Contact us today for a free interior painting estimate. We will
            help you pick the perfect colors and handle everything else.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Get Your Free Estimate
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </Button>
            </Link>
            <a href="tel:813-392-8301">
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Phone className="mr-2 size-4" aria-hidden="true" />
                813-392-8301
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
