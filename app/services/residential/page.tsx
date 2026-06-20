'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Home,
  PaintBucket,
  Droplets,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Star,
  ArrowRight,
  Heart,
  TrendingUp,
  Phone,
} from 'lucide-react';
import Link from 'next/link';

const residentialServices = [
  {
    icon: Home,
    title: 'Interior Painting',
    description:
      'Transform your living spaces with our expert interior painting. From single rooms to whole-home repaints, we deliver flawless results with meticulous attention to detail.',
    features: [
      'Color consultation included',
      'Premium quality paints',
      'Clean, precise lines',
      'Furniture protection',
    ],
  },
  {
    icon: PaintBucket,
    title: 'Exterior Painting',
    description:
      "Protect and enhance your home's curb appeal with our weather-resistant exterior painting services. We use premium coatings built to last.",
    features: [
      'Weather-resistant coatings',
      'Surface preparation & priming',
      'Siding & trim expertise',
      'Lasting color retention',
    ],
  },
  {
    icon: Droplets,
    title: 'Cabinet Painting',
    description:
      'Give your kitchen or bathroom a fresh new look without the cost of replacement. Our cabinet painting service delivers factory-quality finishes.',
    features: [
      'Smooth, factory-quality finish',
      'Durable lacquer coatings',
      'Hardware protection',
      'Quick turnaround',
    ],
  },
  {
    icon: Sparkles,
    title: 'Deck & Fence Staining',
    description:
      'Extend the life of your outdoor wooden structures with our professional staining services. We bring back the beauty of your deck and fence.',
    features: [
      'Pressure washing prep',
      'Quality wood stains',
      'UV protection',
      'Weather-proof sealing',
    ],
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    description: 'Full liability coverage for your peace of mind',
  },
  {
    icon: Star,
    title: 'Highly Recommended',
    description: 'Highly recommended by local homeowners for quality and care',
  },
  {
    icon: TrendingUp,
    title: 'On-Time Delivery',
    description: 'We respect your time and complete projects as promised',
  },
  {
    icon: Heart,
    title: '100% Satisfaction',
    description: 'We stand behind every project we complete',
  },
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
      'We protect your furniture and belongings, then prepare surfaces for lasting results.',
  },
  {
    step: 4,
    title: 'Expert Painting',
    description:
      'Our skilled team applies premium paints with precision and care for flawless results.',
  },
  {
    step: 5,
    title: 'Final Walkthrough',
    description:
      'We inspect every detail with you to ensure complete satisfaction before job completion.',
  },
];

const testimonials = [
  {
    quote:
      'JTA painted our entire first floor and the results were absolutely stunning. The team was professional, clean, and the attention to detail was incredible.',
    author: 'Sarah Mitchell',
    location: 'Homeowner',
  },
  {
    quote:
      'They transformed our dated kitchen cabinets into a modern masterpiece. The finish looks better than when they were new. Highly recommend!',
    author: 'Robert Thompson',
    location: 'Homeowner',
  },
  {
    quote:
      'From the color consultation to the final walkthrough, everything was handled perfectly. They turned our house into a home.',
    author: 'Jennifer Martinez',
    location: 'Homeowner',
  },
];

export default function ResidentialPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[500px]">
        <Image
          src="/project-images/jta_work_6.jpg"
          alt="JTA residential painting project"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 flex h-full items-end pb-14 px-6 md:px-12 max-w-7xl mx-auto">
          <div>
            <Badge variant="secondary" className="mb-3 text-xs">
              Residential Painting
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Transform Your Home with Expert Painting
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              From single room refreshes to complete home transformations, we
              deliver exceptional results that you&apos;ll love coming home to.
            </p>
            <div className="flex gap-3 mt-6">
              <Link href="/contact">
                <Button size="lg">
                  Get Your Free Quote
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
              Our Residential Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              Comprehensive painting solutions for every room in your home
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {residentialServices.map((service) => (
              <Card
                key={service.title}
                className="transition-shadow hover:shadow-lg"
              >
                <CardContent className="flex flex-col gap-4 p-6 lg:flex-row">
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
                    <ul className="mt-4 grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle2
                            className="size-3.5 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Why Homeowners Trust JTA
            </h2>
            <p className="mt-4 text-muted-foreground">
              We go above and beyond to ensure your complete satisfaction
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col items-center text-center"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <benefit.icon
                    className="size-6 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
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
              From initial consultation to final walkthrough, we make it easy
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center text-center"
              >
                <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  {item.step}
                </div>
                <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Hidden temporarily until real ones are available
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              What Our Homeowners Say
            </h2>
            <p className="mt-2 text-muted-foreground">
              <Link href="/testimonials" className="underline underline-offset-2 hover:text-primary">
                Read all reviews →
              </Link>
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author}>
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-primary text-primary"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Completed Residential Projects Showcase */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-background border-t border-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-3">Residential Portfolio</Badge>
            <h2 className="text-3xl font-bold tracking-tight">Completed Residential Projects</h2>
            <p className="mt-4 text-muted-foreground">
              We specialize in custom interior transformations, cabinet refinishing, and weather-resistant exterior home painting. Here are some of our residential successes:
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1: Exterior */}
            <div className="group overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/project-images/jta_work_2.jpg"
                  alt="Residential exterior painting makeover house repaint"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
              <div className="p-5 text-left flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Exterior House Painting</span>
                  <h3 className="font-bold text-sm mt-1">Full Home Exterior Makeover</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Power washing, surface repair, priming, and double coatings of premium weather-proof paint for a clean curb appeal.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Living Room */}
            <div className="group overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/project-images/jta_work_1.jpg"
                  alt="Residential interior painting living room transformation"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
              <div className="p-5 text-left flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Interior Painting</span>
                  <h3 className="font-bold text-sm mt-1">Living Room Color Update</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Precise accent wall lines, ceiling coatings, and trim repainting using high-end, low-odor washable paints.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Cabinets */}
            <div className="group overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/project-images/cabinets_after.png"
                  alt="Kitchen cabinets professional spray painting refinishing"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
              <div className="p-5 text-left flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Cabinet Refinishing</span>
                  <h3 className="font-bold text-sm mt-1">Kitchen Cabinet Transformation</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Oak cabinet refinishing to an ultra-smooth, factory-like polyurethane finish, saving homeowners thousands compared to replacement.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Bedroom */}
            <div className="group overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/project-images/jta_work_3.jpg"
                  alt="Residential interior bedroom repainting refresh"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
              <div className="p-5 text-left flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Bedroom Refresh</span>
                  <h3 className="font-bold text-sm mt-1">Custom Bedroom Interior</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Fresh colors, careful furniture masking, clean edges, and professional wall preparation for a relaxing home environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/gallery">
              <Button variant="outline" className="rounded-xl px-8 font-semibold">
                View Full Gallery
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-primary-foreground">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to Transform Your Home?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Contact us today for a free estimate and let&apos;s bring your vision
            to life.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Schedule Your Consultation
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