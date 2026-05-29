import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  PaintBucket,
  ShieldCheck,
  Star,
  Clock,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Interior Painting",
    description:
      "Transform your living spaces with our expert interior painting services. We use premium paints and precise techniques for flawless results.",
    icon: PaintBucket,
  },
  {
    title: "Exterior Painting",
    description:
      "Protect and beautify your home's exterior with our weather-resistant paints and professional application.",
    icon: PaintBucket,
  },
  {
    title: "Commercial Painting",
    description:
      "Minimize disruption to your business with our efficient commercial painting solutions tailored to your schedule.",
    icon: PaintBucket,
  },
  {
    title: "Cabinet Painting",
    description:
      "Give your kitchen or bathroom cabinets a fresh, modern look without the cost of replacement.",
    icon: PaintBucket,
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
      "JTA Advance Painting transformed our living room! The team was professional, punctual, and the results exceeded our expectations. Highly recommended!",
    author: "Sarah M.",
    location: "Local Homeowner",
  },
  {
    quote:
      "We hired them for our office repaint and couldn't be happier. They worked around our business hours and delivered pristine results.",
    author: "Michael R.",
    location: "Business Owner",
  },
  {
    quote:
      "Exceptional quality and attention to detail. They helped us choose the perfect colors and the finish looks absolutely stunning.",
    author: "Emily T.",
    location: "Local Homeowner",
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary/80">
              Trusted Local painters
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Professional Painting Services{" "}
              <span className="text-primary">You Can Trust</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 sm:text-xl">
              Transform your home or business with our expert painting services.
              Quality craftsmanship, reliable service, and customer satisfaction
              guaranteed.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <Link href="/gallery">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
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
            {services.map((service) => (
              <Card
                key={service.title}
                className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                  <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <service.icon
                      className="size-7 text-primary"
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
                {whyChooseUs.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-lg p-2"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon
                        className="size-5 text-primary"
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
                ))}
              </div>
              <div className="mt-8">
                <Link href="/about">
                  <Button variant="link" className="p-0">
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
                className="object-cover"
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
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="relative">
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="absolute -top-3 left-6 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-primary text-primary"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-auto flex items-center gap-3 pt-4 border-t">
                    <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-sm font-semibold text-primary">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 opacity-10">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-3xl text-center text-primary-foreground">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Transform Your Space?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Contact us today for a free estimate and let&apos;s bring your vision
            to life.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
            <a href="tel:+15551234567">
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Phone className="mr-2 size-4" />
                (555) 123-4567
              </Button>
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-primary-foreground/70">
            <CheckCircle2 className="size-4" />
            <span>Free estimates &bull; No obligation</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;