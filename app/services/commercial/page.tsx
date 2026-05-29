'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Building2,
  Users,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Star,
  ArrowRight,
  Phone,
  Building,
  Store,
} from 'lucide-react';
import Link from 'next/link';

const commercialServices = [
  {
    icon: Building,
    title: 'Office Buildings',
    description:
      'Complete office painting solutions that minimize disruption to your workflow. We work around business hours to ensure your operations continue smoothly.',
  },
  {
    icon: Store,
    title: 'Retail Spaces',
    description:
      'Transform your retail environment with colors and finishes that enhance your brand. We understand the importance of quick turnaround for retail environments.',
  },
  {
    icon: Building2,
    title: 'Warehouses & Industrial',
    description:
      'Durable, high-performance coatings for industrial facilities. Our team is experienced in large-scale projects with safety protocols.',
  },
  {
    icon: Users,
    title: 'Property Management',
    description:
      'Ongoing maintenance contracts for property managers. Consistent quality across multiple units and buildings with flexible scheduling.',
  },
];

const benefits = [
  'Minimal disruption to business operations',
  'Flexible scheduling including after-hours and weekends',
  'Fully licensed and insured team',
  'Detailed project management and communication',
  'Quality assurance on every project',
  'Environmentally responsible paint options',
];

const process = [
  {
    step: 1,
    title: 'Consultation',
    description:
      'We assess your space, discuss color options, and provide a detailed estimate tailored to your needs.',
  },
  {
    step: 2,
    title: 'Planning',
    description:
      'We create a detailed project plan that works around your schedule and minimizes operational impact.',
  },
  {
    step: 3,
    title: 'Execution',
    description:
      'Our professional team completes the work efficiently with regular updates throughout the process.',
  },
  {
    step: 4,
    title: 'Inspection',
    description:
      'We conduct a thorough walkthrough to ensure everything meets our high standards and your expectations.',
  },
];

const testimonials = [
  {
    quote:
      'JTA transformed our entire office floor in just one weekend. They worked after hours and left the space spotless. Incredible service!',
    author: 'David Chen',
    company: 'Premier Business Solutions',
  },
  {
    quote:
      'As a property manager, I need contractors I can rely on. JTA has handled all our commercial properties for 3 years now. Always professional.',
    author: 'Amanda Roberts',
    company: 'Skyline Property Management',
  },
  {
    quote:
      'They painted our restaurant during closed hours and the results were fantastic. Our customers constantly compliment the new look.',
    author: 'Marcus Johnson',
    company: 'The Rustic Kitchen',
  },
];

export default function CommercialPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[500px]">
        <Image
          src="/project-images/jta_work_5.jpg"
          alt="JTA commercial painting project"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 flex h-full items-end pb-14 px-6 md:px-12 max-w-7xl mx-auto">
          <div>
            <Badge variant="secondary" className="mb-3 text-xs">
              Commercial Painting
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Professional Commercial Painting
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Transform your business space with minimal disruption. We deliver
              exceptional commercial painting results on time and on budget.
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
              Our Commercial Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              Comprehensive painting solutions tailored to your business needs
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {commercialServices.map((service) => (
              <Card
                key={service.title}
                className="transition-shadow hover:shadow-lg"
              >
                <CardContent className="flex flex-col gap-4 p-6 sm:flex-row">
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
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Why Businesses Choose JTA
              </h2>
              <p className="mt-4 text-muted-foreground">
                We understand that commercial painting requires a different
                approach than residential work. Our team is equipped to handle
                the unique challenges of business environments.
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
                    <Clock className="size-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-sm text-muted-foreground">
                      Availability for after-hours work
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
                    <p className="text-2xl font-bold">$2M+</p>
                    <p className="text-sm text-muted-foreground">
                      Liability coverage
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="size-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">50+</p>
                    <p className="text-sm text-muted-foreground">
                      Commercial clients served
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
              A streamlined approach to minimize disruption to your business
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

      {/* Testimonials */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              What Our Commercial Clients Say
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
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-primary-foreground">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to Transform Your Business Space?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Contact us today for a free commercial painting estimate. We&apos;ll
            work around your schedule to minimize disruption.
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