import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  ShieldCheck,
  Star,
  Clock,
  Award,
  Users,
  ThumbsUp,
  PaintBucket,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '100%', label: 'Customer Satisfaction' },
  { value: '5-Star', label: 'Average Rating' },
];

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity & Trust',
    description:
      "We're fully licensed and insured, providing you peace of mind on every project. Our team is background-checked and trained to uphold the highest standards.",
  },
  {
    icon: Star,
    title: 'Exceptional Quality',
    description:
      'We use only premium paints and proven techniques to deliver flawless finishes. Every detail matters, from surface preparation to the final coat.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description:
      'We show up on time, communicate clearly, and complete projects as promised. Your schedule matters to us—we work efficiently without cutting corners.',
  },
  {
    icon: Award,
    title: 'Professionalism',
    description:
      'Our crew is courteous, uniformed, and trained in proper application methods. We treat your property with respect and leave it clean after every job.',
  },
];

const teamValues = [
  'Free color consultations to help you choose the perfect palette',
  'Detailed written quotes with no hidden fees',
  'Decades of combined painting experience',
  'Continuous training in latest techniques and products',
  'Eco-friendly paint options available',
  'Complete cleanup and final walkthrough on every project',
];

const certifications = [
  'Fully Licensed & Bonded',
  'Workers Compensation Insurance',
  'Lead-Safe Certified',
  'BBB Accredited Business',
];

function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[500px]">
        <Image
          src="/project-images/jta_work_2.jpg"
          alt="JTA Advance Painting team at work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 flex h-full items-end pb-14 px-6 md:px-12 max-w-7xl mx-auto">
          <div>
            <p className="text-sm font-medium text-white/80 uppercase tracking-widest mb-3">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              About JTA Advance Painting
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              For over 15 years, we've been transforming homes and businesses
              across Tampa Bay with exceptional painting services built on
              integrity, quality, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  JTA Advance Painting was founded with a simple mission: to
                  deliver superior painting services that exceed customer
                  expectations on every project. What started as a small
                  operation has grown into a trusted name serving both
                  residential and commercial clients throughout the region.
                </p>
                <p>
                  Our founder, with over two decades of experience in the
                  painting industry, built JTA Advance Painting on the
                  principles of honesty, quality craftsmanship, and genuine care
                  for each customer's vision. Every member of our team shares
                  this commitment to excellence.
                </p>
                <p>
                  Today, we've completed hundreds of projects—from single-room
                  touch-ups to complete interior/exterior repaints for
                  residential homes and large-scale commercial properties. But
                  no matter the size of the job, we bring the same dedication to
                  craft and customer service.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/5" />
              <Card className="relative">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center gap-6 text-center">
                    <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
                      <PaintBucket className="size-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      Our Commitment to You
                    </h3>
                    <p className="text-muted-foreground">
                      We don't just paint walls—we build relationships. Every
                      project begins with understanding your vision and ends
                      only when you're completely satisfied with the results.
                    </p>
                    <Link href="/contact">
                      <Button>Start Your Project Today</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 text-center text-primary-foreground"
              >
                <span className="text-4xl font-bold">{stat.value}</span>
                <span className="text-sm text-primary-foreground/80">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Our Core Values
            </h2>
            <p className="mt-4 text-muted-foreground">
              These principles guide every decision we make and every surface we
              paint
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <Card
                key={value.title}
                className="transition-shadow hover:shadow-md"
              >
                <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon
                      className="size-6 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">
                Why Customers Choose Us
              </h2>
              <p className="text-muted-foreground">
                When you choose JTA Advance Painting, you're not just hiring a
                contractor—you're partnering with a team that genuinely cares
                about your project and your satisfaction.
              </p>
              <ul className="space-y-3">
                {teamValues.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      className="size-5 shrink-0 text-primary mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link href="/services">
                  <Button variant="outline">Explore Our Services</Button>
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold mb-4">
                    Certifications & Credentials
                  </h3>
                  <ul className="space-y-3">
                    {certifications.map((cert) => (
                      <li key={cert} className="flex items-center gap-3">
                        <Award
                          className="size-5 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span className="text-sm">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Contact us today for a free consultation and estimate. No
                    obligation, no pressure—just honest advice about your
                    painting project.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link href="/contact">
                      <Button className="w-full">Request Free Estimate</Button>
                    </Link>
                    <a href="tel:813-392-8301">
                      <Button variant="outline" className="w-full">
                        Call 813-392-8301
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to Transform Your Space?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether it's a single room or your entire property, we're here to
            bring your vision to life. Let's discuss your project today.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button size="lg">Get a Free Quote</Button>
            </Link>
            <Link href="/gallery">
              <Button variant="outline" size="lg">
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;