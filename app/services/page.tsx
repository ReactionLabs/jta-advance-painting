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
} from 'lucide-react';
import Link from 'next/link';

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
    title: '5-Star Rated',
    description:
      'Our customers consistently rate us 5 stars. Read their reviews and see why we\'re the most recommended painter in the area.',
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
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[500px]">
        <Image
          src="/project-images/jta_work_4.jpg"
          alt="JTA painting project"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 flex h-full items-end pb-14 px-6 md:px-12 max-w-7xl mx-auto">
          <div>
            <p className="text-sm font-medium text-white/80 uppercase tracking-widest mb-3">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Professional Painting Services
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              From interior refreshes to full exterior transformations, we provide
              comprehensive painting solutions for residential and commercial
              properties — backed by quality materials and expert craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              What We Offer
            </h2>
            <p className="mt-4 text-muted-foreground">
              Professional painting services tailored to your specific needs and
              budget
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {mainServices.map((service) => (
              <Card
                key={service.title}
                className="transition-shadow hover:shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <service.icon
                        className="size-6 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <CardTitle className="text-xl">
                        {service.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      What&apos;s Included
                    </h4>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle
                            className="size-4 shrink-0 text-primary mt-0.5"
                            aria-hidden="true"
                          />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Best For
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.bestFor.map((item) => (
                        <Badge key={item} variant="secondary">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Additional Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              Beyond painting, we offer complementary services to complete your
              project
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service) => (
              <Card
                key={service.title}
                className="transition-shadow hover:shadow-md"
              >
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon
                      className="size-6 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Why Choose JTA Advance Painting?
            </h2>
            <p className="mt-4 text-muted-foreground">
              We go above and beyond to ensure your complete satisfaction
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <item.icon
                    className="size-6 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Our Process
            </h2>
            <p className="mt-4 text-muted-foreground">
              From your first call to final walkthrough, we make every step
              seamless
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '1',
                title: 'Contact Us',
                description:
                  'Give us a call or fill out our online form. We\'ll respond within 24 hours to schedule a consultation.',
              },
              {
                step: '2',
                title: 'Free Estimate',
                description:
                  'We visit your property, discuss your vision, take measurements, and provide a detailed written quote.',
              },
              {
                step: '3',
                title: 'Professional Painting',
                description:
                  'Our team arrives on time, protects your belongings, and paints with precision and care.',
              },
              {
                step: '4',
                title: 'Final Walkthrough',
                description:
                  'We inspect every surface, address your questions, and ensure you\'re completely satisfied.',
              },
            ].map((item) => (
              <Card key={item.step}>
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
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
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Get a free estimate today. No obligation, no pressure—just honest
            advice to help you make the best decision for your space.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Get Free Estimate
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </Button>
            </Link>
            <a href="tel:813-392-8301">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
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