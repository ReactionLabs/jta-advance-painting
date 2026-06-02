'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ArrowRight, Phone, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { PaintSplatter } from '@/components/ui/PaintDecorations';

const testimonials = [
  {
    quote:
      "JTA painted our 48-unit clubhouse in just 3 days. The board was blown away by how professional the crew was — they even cleaned up every night before leaving. Already booked them for the next building.",
    author: 'Michelle Torres',
    title: 'Board President, Harbor Bay HOA',
    location: 'Tampa',
    date: '3 weeks ago',
  },
  {
    quote:
      'We needed our entire office repainted while staying open. JTA worked nights and weekends, never disrupted our staff. The space looks incredible — clients constantly compliment the environment.',
    author: 'David Chen',
    title: 'Operations Director',
    location: 'Premier Business Solutions',
    date: '1 month ago',
  },
  {
    quote:
      'They transformed our dated kitchen with cabinet painting. The finish looks better than factory — and at half the cost of replacement. Our kitchen looks like it was just built.',
    author: 'Sarah Mitchell',
    title: 'Homeowner',
    location: 'Brandon',
    date: '3 months ago',
  },
  {
    quote:
      'Property manager here — I use JTA for all 14 of my buildings. Consistent quality, on time, on budget. They handle everything from touch-ups to full exterior repaints. Best painters I have found.',
    author: 'Amanda Roberts',
    title: 'Property Manager',
    location: 'Skyline Property Group',
    date: '5 months ago',
  },
  {
    quote:
      'The exterior of our restaurant was faded and worn. JTA gave us a fresh look that brought in more customers the week after we reopened. Worth every penny for the curb appeal.',
    author: 'Marcus Johnson',
    title: 'Owner',
    location: 'The Rustic Kitchen',
    date: '6 months ago',
  },
  {
    quote:
      'Professional from start to finish. They helped us pick colors that worked perfectly with our brand, finished ahead of schedule, and left the site cleaner than when they arrived.',
    author: 'Jennifer Walsh',
    title: 'Marketing Director',
    location: 'Bright Media Group',
    date: '8 months ago',
  },
];

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      {/* Hero Section (Centered & Premium) */}
      <section className="relative h-[500px] flex items-center justify-center bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/project-images/jta_work_7.jpg"
            alt="JTA Advance Painting projects"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            Client Reviews
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            What Our Clients Say
          </h1>
          <p className="text-lg text-slate-350 max-w-2xl leading-relaxed">
            Trusted by homeowners, property managers, HOA boards, and businesses across Tampa Bay. See why so many choose JTA.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-7xl">
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
                <Card key={t.author} className="group relative overflow-hidden border border-border hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                  <div className={cn("absolute top-0 left-0 right-0 h-1", gradient)} />
                  <PaintSplatter
                    color={(idx % 2 === 0 ? "gold" : "green") as any}
                    variant={(idx % 3 + 1) as 1 | 2 | 3}
                    className="absolute -bottom-8 -right-8 size-24 opacity-5 group-hover:opacity-15 transition-all duration-300"
                  />
                  <CardContent className="p-6 flex flex-col gap-4 relative z-10 h-full justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
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

                      <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    <div className="mt-6 border-t border-slate-105 pt-4 flex items-center gap-3">
                      <div className={cn("flex size-11 shrink-0 items-center justify-center rounded-full font-bold text-sm", avatarStyle)}>
                        {t.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-foreground flex items-center">
                          <span>{t.author}</span>
                          <span className="ml-1.5 size-3.5 inline-flex items-center justify-center bg-logo-green/10 rounded-full">
                            <CheckCircle className="size-2.5 text-logo-green fill-logo-green/10" />
                          </span>
                        </p>
                        <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">
                          {t.title} &bull; {t.date}
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

      {/* Trust Indicators / Stats Section (DARK) */}
      <section className="bg-slate-900 border-y border-slate-800 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '99%', label: 'Client Satisfaction' },
              { value: '15+', label: 'Years Experience' },
              { value: '100%', label: 'Satisfaction Guaranteed' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 border-r border-slate-800 last:border-0">
                <span className="text-4xl font-extrabold text-white">{stat.value}</span>
                <span className="block text-xs font-semibold text-slate-400 mt-2 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (PREMIUM PAINT GRADIENT) */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 rounded-3xl mx-4 my-8 shadow-2xl">
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
            Ready to Add Your Project to Our List?
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
            Join hundreds of satisfied clients across Tampa Bay. Get your free estimate today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-white text-slate-950 font-bold px-8 py-6 rounded-xl transition-all hover:scale-105 hover:bg-slate-50 hover:shadow-xl w-full sm:w-auto"
              >
                Request Free Estimate
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
            <a href="tel:813-392-8301" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 bg-transparent text-white font-bold px-8 py-6 rounded-xl transition-all hover:bg-white/10 w-full sm:w-auto"
              >
                <Phone className="mr-2 size-4" />
                Call 813-392-8301
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}