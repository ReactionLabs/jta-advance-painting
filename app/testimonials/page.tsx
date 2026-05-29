'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ArrowRight, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const testimonials = [
  {
    quote:
      "JTA painted our 48-unit clubhouse in just 3 days. The board was blown away by how professional the crew was — they even cleaned up every night before leaving. Already booked them for the next building.",
    author: 'Michelle Torres',
    title: 'Board President, Harbor Bay HOA',
    location: 'Tampa',
  },
  {
    quote:
      'We needed our entire office repainted while staying open. JTA worked nights and weekends, never disrupted our staff. The space looks incredible — clients constantly compliment the environment.',
    author: 'David Chen',
    title: 'Operations Director',
    location: 'Premier Business Solutions',
  },
  {
    quote:
      'They transformed our dated kitchen with cabinet painting. The finish looks better than factory — and at half the cost of replacement. Our kitchen looks like it was just built.',
    author: 'Sarah Mitchell',
    title: 'Homeowner',
    location: 'Brandon',
  },
  {
    quote:
      'Property manager here — I use JTA for all 14 of my buildings. Consistent quality, on time, on budget. They handle everything from touch-ups to full exterior repaints. Best painters I have found.',
    author: 'Amanda Roberts',
    title: 'Property Manager',
    location: 'Skyline Property Group',
  },
  {
    quote:
      'The exterior of our restaurant was faded and worn. JTA gave us a fresh look that brought in more customers the week after we reopened. Worth every penny for the curb appeal.',
    author: 'Marcus Johnson',
    title: 'Owner',
    location: 'The Rustic Kitchen',
  },
  {
    quote:
      'Professional from start to finish. They helped us pick colors that worked perfectly with our brand, finished ahead of schedule, and left the site cleaner than when they arrived.',
    author: 'Jennifer Walsh',
    title: 'Marketing Director',
    location: 'Bright Media Group',
  },
];

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[500px]">
        <Image
          src="/project-images/jta_work_7.jpg"
          alt="JTA Advance Painting projects"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 flex h-full items-end pb-14 px-6 md:px-12 max-w-7xl mx-auto">
          <div>
            <p className="text-sm font-medium text-white/80 uppercase tracking-widest mb-3">
              Client Reviews
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              What Our Clients Say
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Trusted by homeowners, property managers, HOA boards, and businesses
              across Tampa Bay. See why so many choose JTA for their painting projects.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card
                key={t.author}
                className="border-0 shadow-lg"
              >
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-yellow-500 text-yellow-500"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-auto border-t pt-4">
                    <p className="font-semibold text-sm">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.title}</p>
                    {t.location && (
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="size-3" aria-hidden="true" />
                        {t.location}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '15+', label: 'Years Experience' },
              { value: '100%', label: 'Satisfaction Guaranteed' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-primary">
        <div className="mx-auto max-w-3xl text-center text-primary-foreground">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to Add Your Project to Our List?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Join hundreds of satisfied clients across Tampa Bay. Get your free estimate today.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Request an Estimate
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </Button>
            </Link>
            <a href="tel:813-392-8301">
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
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