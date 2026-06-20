import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  PaintBucket,
  Home,
  Store,
  Building,
  Brush,
  Ruler,
  ShieldCheck,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { PaintBrushStroke, PaintSplatter } from '@/components/ui/PaintDecorations';

const mainServices = [
  {
    icon: Home,
    title: 'Interior Painting',
    description:
      'Transform your living spaces with our expert interior painting services. From accent walls to complete home repaints, we deliver flawless results that reflect your style.',
    features: [
      'Complete wall preparation and priming',
      'Premium interior paints from trusted brands',
      'Trim, baseboards, and door painting',
      'Ceiling painting and texture repairs',
      'Color consultation included',
      'Dust-free sanding and cleanup',
    ],
    bestFor: ['Living Rooms', 'Bedrooms', 'Kitchens', 'Bathrooms', 'Offices'],
  },
  {
    icon: Building,
    title: 'Exterior Painting',
    description:
      'Protect and beautify your home\'s exterior with our weather-resistant paints and professional application. We stand behind our work with excellent warranty coverage.',
    features: [
      'Surface power washing and cleaning',
      'Crack and hole repairs',
      'Moisture and mildew treatments',
      'Premium exterior paints built to last',
      'Soffit, fascia, and gutter painting',
      'Weather-dependent scheduling',
    ],
    bestFor: ['Homes', 'Townhouses', 'Condominiums', 'Apartment Buildings'],
  },
  {
    icon: Store,
    title: 'Commercial Painting',
    description:
      'Minimize disruption to your business with our efficient commercial painting solutions. We work around your schedule to deliver pristine results without interrupting operations.',
    features: [
      'After-hours and weekend scheduling',
      'Minimal disruption to operations',
      'Large-scale project capability',
      'Multiple surface types handled',
      'Safety and compliance',
      'Property management ready',
    ],
    bestFor: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Medical Facilities', 'Restaurants'],
  },
  {
    icon: Home,
    title: 'Residential Painting',
    description:
      'From single rooms to complete home repaints, we deliver exceptional quality and attention to detail. Every project receives our full commitment to excellence.',
    features: [
      'Whole-house interior repaints',
      'Cabinet painting and refinishing',
      'Garage floor coatings',
      'Deck and fence staining',
      'New construction painting',
      'Renovation updates',
    ],
    bestFor: ['Single-Family Homes', 'Townhomes', 'Condos', 'New Builds', 'Renovations'],
  },
];

const additionalServices = [
  {
    icon: Brush,
    title: 'Cabinet Painting',
    description:
      'Give your kitchen or bathroom cabinets a fresh, modern look without the cost of replacement. Our expert refinishing restores and updates cabinetry beautifully.',
  },
  {
    icon: Ruler,
    title: 'Drywall Repair',
    description:
      'Before any painting begins, we ensure your walls are smooth and ready. Our full-service drywall repair fixes cracks, holes, and water damage.',
  },
  {
    icon: PaintBucket,
    title: 'Deck & Fence Staining',
    description:
      'Protect and enhance your outdoor living spaces with our professional staining services. We use weather-resistant stains built to withstand the elements.',
  },
  {
    icon: ShieldCheck,
    title: 'Lead-Safe Certified',
    description:
      'For older homes, we offer lead-safe painting services certified to federal standards. Your family\'s safety is our priority.',
  },
];

const whyChooseUs = [
  {
    icon: Clock,
    title: 'On-Time Guarantee',
    description:
      'We respect your time. Projects are scheduled and completed as promised, with clear communication every step of the way.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Materials',
    description:
      'We use only premium paints and materials from trusted manufacturers. Proper prep and premium products ensure lasting results.',
  },
  {
    icon: Star,
    title: 'Highly Recommended',
    description:
      'Our customers consistently recommend us for our quality, reliability, and clean jobsites across Tampa Bay.',
  },
  {
    icon: CheckCircle,
    title: 'Zero Surprises',
    description:
      'Our detailed quotes mean no hidden fees or unexpected charges. What we quote is what you pay—with few exceptions for scope changes you request.',
  },
];

function ServicesPage() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      {/* Hero Section (Centered & Premium) */}
      <section className="relative h-[500px] flex items-center justify-center bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/project-images/jta_work_4.jpg"
            alt="JTA painting project"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Professional Painting Services
          </h1>
          <p className="text-lg text-white max-w-2xl leading-relaxed">
            From interior refreshes to full exterior transformations, we provide
            comprehensive painting solutions for residential and commercial
            properties — backed by quality materials and expert craftsmanship.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight">
              What We Offer
            </h2>
            <p className="mt-4 text-slate-500">
              Professional painting services tailored to your specific needs and budget
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {mainServices.map((service, idx) => {
              const colors = [
                { border: "hover:border-logo-gold/30 hover:shadow-logo-gold/5", splatter: "gold" as const, text: "text-logo-gold", bg: "bg-logo-gold/10" },
                { border: "hover:border-logo-green/30 hover:shadow-logo-green/5", splatter: "green" as const, text: "text-logo-green", bg: "bg-logo-green/10" },
                { border: "hover:border-logo-red/30 hover:shadow-logo-red/5", splatter: "red" as const, text: "text-logo-red", bg: "bg-logo-red/10" },
                { border: "hover:border-logo-purple/30 hover:shadow-logo-purple/5", splatter: "purple" as const, text: "text-logo-purple", bg: "bg-logo-purple/10" },
              ];
              const style = colors[idx % colors.length];

              return (
                <Card
                  key={service.title}
                  className={cn("group relative overflow-hidden transition-all duration-300 border border-border hover:-translate-y-1 hover:shadow-2xl", style.border)}
                >
                  <PaintSplatter
                    color={style.splatter}
                    variant={(idx % 3 + 1) as 1 | 2 | 3}
                    className="absolute -bottom-6 -right-6 size-20 opacity-5 group-hover:opacity-15 transition-all duration-300"
                  />
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className={cn("flex size-12 shrink-0 items-center justify-center rounded-lg transition-transform group-hover:scale-110 duration-300", style.bg)}>
                        <service.icon
                          className={cn("size-6", style.text)}
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-1 space-y-2">
                        <CardTitle className="text-xl font-bold">
                          {service.title}
                        </CardTitle>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6 relative z-10">
                    <div>
                      <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                        What&apos;s Included
                      </h4>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle
                              className={cn("size-4 shrink-0 mt-0.5", style.text)}
                              aria-hidden="true"
                            />
                            <span className="text-sm text-slate-600 font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                        Best For
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.bestFor.map((item) => (
                          <Badge key={item} variant="secondary" className="rounded-lg font-medium">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="bg-slate-50 border-t border-slate-100 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Additional Services
            </h2>
            <p className="mt-4 text-slate-500">
              Beyond painting, we offer complementary services to complete your project
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service, idx) => {
              const colors = [
                { border: "hover:border-logo-gold/30 hover:shadow-logo-gold/5", splatter: "gold" as const, text: "text-logo-gold", bg: "bg-logo-gold/10" },
                { border: "hover:border-logo-green/30 hover:shadow-logo-green/5", splatter: "green" as const, text: "text-logo-green", bg: "bg-logo-green/10" },
                { border: "hover:border-logo-red/30 hover:shadow-logo-red/5", splatter: "red" as const, text: "text-logo-red", bg: "bg-logo-red/10" },
                { border: "hover:border-logo-purple/30 hover:shadow-logo-purple/5", splatter: "purple" as const, text: "text-logo-purple", bg: "bg-logo-purple/10" },
              ];
              const style = colors[idx % colors.length];

              return (
                <Card
                  key={service.title}
                  className={cn("group relative overflow-hidden transition-all duration-300 border border-border hover:-translate-y-1 hover:shadow-xl bg-white", style.border)}
                >
                  <PaintSplatter
                    color={style.splatter}
                    variant={(idx % 3 + 1) as 1 | 2 | 3}
                    className="absolute -bottom-6 -right-6 size-16 opacity-5 group-hover:opacity-15 transition-all duration-300"
                  />
                  <CardContent className="flex flex-col items-center gap-4 p-6 text-center relative z-10">
                    <div className={cn("flex size-12 items-center justify-center rounded-lg transition-transform group-hover:scale-105 duration-300", style.bg)}>
                      <service.icon
                        className={cn("size-6", style.text)}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-lg font-bold">{service.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Why Choose JTA Advance Painting?
            </h2>
            <p className="mt-4 text-slate-500">
              We go above and beyond to ensure your complete satisfaction
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, idx) => {
              const colors = [
                { text: "text-logo-gold", bg: "bg-logo-gold/10" },
                { text: "text-logo-green", bg: "bg-logo-green/10" },
                { text: "text-logo-red", bg: "bg-logo-red/10" },
                { text: "text-logo-purple", bg: "bg-logo-purple/10" },
              ];
              const style = colors[idx % colors.length];

              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center gap-3 text-center group"
                >
                  <div className={cn("flex size-12 items-center justify-center rounded-full transition-transform group-hover:scale-105 duration-300", style.bg)}>
                    <item.icon
                      className={cn("size-6", style.text)}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-50 border-t border-slate-100 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Our Process
            </h2>
            <p className="mt-4 text-slate-500">
              From your first call to final walkthrough, we make every step seamless
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '1',
                title: 'Contact Us',
                description:
                  'Give us a call or fill out our online form. We\'ll respond within 24 hours to schedule a consultation.',
                color: 'gold' as const,
                border: "hover:border-logo-gold/30 hover:shadow-logo-gold/5",
                bg: "bg-logo-gold/10 text-logo-gold"
              },
              {
                step: '2',
                title: 'Free Estimate',
                description:
                  'We visit your property, discuss your vision, take measurements, and provide a detailed written quote.',
                color: 'green' as const,
                border: "hover:border-logo-green/30 hover:shadow-logo-green/5",
                bg: "bg-logo-green/10 text-logo-green"
              },
              {
                step: '3',
                title: 'Professional Painting',
                description:
                  'Our team arrives on time, protects your belongings, and paints with precision and care.',
                color: 'red' as const,
                border: "hover:border-logo-red/30 hover:shadow-logo-red/5",
                bg: "bg-logo-red/10 text-logo-red"
              },
              {
                step: '4',
                title: 'Final Walkthrough',
                description:
                  'We inspect every surface, address your questions, and ensure you\'re completely satisfied.',
                color: 'purple' as const,
                border: "hover:border-logo-purple/30 hover:shadow-logo-purple/5",
                bg: "bg-logo-purple/10 text-logo-purple"
              },
            ].map((item, idx) => (
              <Card
                key={item.step}
                className={cn("group relative overflow-hidden transition-all duration-300 border border-border hover:-translate-y-1 hover:shadow-xl bg-white", item.border)}
              >
                <PaintSplatter
                  color={item.color}
                  variant={(idx % 3 + 1) as 1 | 2 | 3}
                  className="absolute -bottom-6 -right-6 size-16 opacity-5 group-hover:opacity-15 transition-all duration-300"
                />
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center relative z-10">
                  <div className={cn("flex size-10 items-center justify-center rounded-full text-lg font-bold transition-transform group-hover:scale-105 duration-300", item.bg)}>
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
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
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
            Get a free estimate today. No obligation, no pressure—just honest advice to help you make the best decision for your space.
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

export default ServicesPage;