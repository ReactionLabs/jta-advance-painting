'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[380px] flex items-center justify-center bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900" />
          <div className="absolute top-1/4 left-1/4 size-60 rounded-full bg-logo-yellow/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 size-72 rounded-full bg-logo-red/10 blur-[110px] pointer-events-none" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            Client Reviews
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Client Testimonials
          </h1>
          <p className="text-lg text-white max-w-2xl leading-relaxed">
            See what JTA Advance Painting clients have to say about our professionalism, speed, and craftsmanship.
          </p>
        </div>
      </section>

      {/* Testimonials Coming Soon Placeholder */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-background flex flex-col items-center justify-center">
        <div className="mx-auto max-w-2xl text-center flex flex-col items-center gap-6">
          <div className="flex size-20 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary animate-pulse">
            <MessageSquare className="size-10" />
          </div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Reviews Coming Soon!
          </h2>
          <p className="text-slate-650 leading-relaxed max-w-lg">
            We are currently compiling verified reviews and project feedback from our recent residential and commercial clients across Tampa Bay. Check back shortly to see their testimonials!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Link href="/" className="w-full sm:w-auto">
              <Button size="lg" className="rounded-xl px-8 font-semibold w-full sm:w-auto">
                Return to Homepage
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="rounded-xl px-8 font-semibold w-full sm:w-auto border-slate-300">
                Contact JTA
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
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
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
            Get a free estimate today. No obligation, no pressure — just honest advice to help you make the best decision for your space.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-white text-slate-950 font-bold px-8 py-6 rounded-xl transition-all hover:scale-105 hover:bg-slate-50 hover:shadow-xl w-full sm:w-auto"
              >
                Get Free Estimate
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