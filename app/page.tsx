import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PaintBucket, ShieldCheck, Star, Clock } from "lucide-react";
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
    title: "Residential Painting",
    description:
      "From single rooms to complete home repaints, we deliver exceptional quality and attention to detail.",
    icon: PaintBucket,
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Full liability coverage for your peace of mind",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Consistently high ratings from satisfied customers",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time and complete projects as promised",
  },
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
      <section className="relative flex min-h-[500px] flex-col items-center justify-center bg-gradient-to-b from-muted to-background px-4 py-24 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Professional Painting Services
            <span className="block text-primary">You Can Trust</span>
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Transform your home or business with our expert painting services.
            Quality craftsmanship, reliable service, and customer satisfaction
            guaranteed.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button size="lg">Get a Free Quote</Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="lg">View Our Work</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
            <p className="mt-4 text-muted-foreground">
              Comprehensive painting solutions for residential and commercial
              properties
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card
                key={service.title}
                className="transition-shadow hover:shadow-lg"
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
          <div className="mt-10 text-center">
            <Link href="/services">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Why Choose JTA Advance Painting?
            </h2>
            <p className="mt-4 text-muted-foreground">
              We go above and beyond to ensure your complete satisfaction
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon
                    className="size-6 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-muted-foreground">
              Don't just take our word for it
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
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/testimonials">
              <Button variant="outline">Read More Reviews</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-primary-foreground">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to Transform Your Space?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Contact us today for a free estimate and let's bring your vision to
            life.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Get Your Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;