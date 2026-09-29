import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Home,
  PaintBucket,
  ShieldCheck,
  CheckCircle2,
  Star,
  ArrowRight,
  Phone,
  Droplets,
  Sun,
  Building,
} from 'lucide-react';
import Link from 'next/link';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exterior Painting Services",
  description:
    "Protect and beautify your home's exterior with JTA's weather-resistant exterior painting in Tampa Bay. Power washing, repairs, and premium coatings. Free estimates.",
  alternates: { canonical: "/services/exterior" },
};

const exteriorServices = [
  {
    icon: Droplets,
    title: 'Power Washing & Cleaning',
    description:
      'Surface power washing and cleaning so paint bonds properly and lasts.',
  },
  {
    icon: Home,
    title: 'Crack & Hole Repairs',
    description:
      'Crack and hole repairs handled before a single drop of paint goes on.',
  },
  {
    icon: ShieldCheck,
    title: 'Moisture & Mildew Treatment',
    description:
      'Moisture and mildew treatments that protect your home in Florida weather.',
  },
  {
    icon: PaintBucket,
    title: 'Premium Exterior Coatings',
    description:
      'Premium exterior paints built to last, with lasting color retention.',
  },
  {
    icon: Building,
    title: 'Soffit, Fascia & Gutters',
    description:
      'Soffit, fascia, and gutter painting for a complete, finished look.',
  },
  {
    icon: Sun,
    title: 'Weather-Smart Scheduling',
    description:
      'Weather-dependent scheduling so heat and rain never compromise quality.',
  },
];

const bestFor = ['Homes', 'Townhouses', 'Condominiums', 'Apartment Buildings'];

const benefits = [
  'Weather-resistant coatings built for Florida',
  'Curb appeal that holds up for years',
  'Siding and trim expertise',
  'Fully licensed and insured team',
  'Free estimates with no obligation',
  'Excellent warranty coverage on our work',
];

const process = [
  {
    step: 1,
    title: 'Free Consultation',
    description:
      'We assess your exterior, discuss colors and coatings, and provide a detailed estimate.',
  },
  {
    step: 2,
    title: 'Thorough Prep',
    description:
      'Power washing, repairs, and priming. Prep is where a lasting paint job is won.',
  },
  {
    step: 3,
    title: 'Professional Application',
    description:
      'Premium coatings applied with care, on a weather-smart schedule.',
  },
  {
    step: 4,
    title: 'Final Walkthrough',
    description:
      'We walk the property with you to make sure every detail meets our standard.',
  },
];

export default function ExteriorPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[500px]">
        <Image
          src="/project-images/exterior_repaint_hero.png"
          alt="JTA exterior house repaint project"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 flex h-full items-end pb-14 px-6 md:px-12 max-w-7xl mx-auto">
          <div>
            <Badge variant="secondary" className="mb-3 text-xs">
              Exterior Painting
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Professional Exterior Painting
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Protect and beautify your home&apos;s exterior with our
              weather-resistant paints and professional application.
            </p>
            <div className="flex gap-3 mt-6">
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
              Our Exterior Painting Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              Prep, protection, and premium coatings, built for Florida
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {exteriorServices.map((service) => (
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
            {bestFor.map((prop) => (
              <Badge key={prop} variant="outline" className="text-sm">
                {prop}
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
                Florida sun and storms are brutal on exteriors. We prep
                thoroughly and use coatings made to stand up to it, so your
                home looks great for years, not months.
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
                    <Sun className="size-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">Florida-Tough</p>
                    <p className="text-sm text-muted-foreground">
                      Coatings rated for sun, humidity, and storms
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
              A proven approach for exteriors that last
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
            Ready to Boost Your Curb Appeal?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Contact us today for a free exterior painting estimate. We will
            handle the prep, the paint, and the details.
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
