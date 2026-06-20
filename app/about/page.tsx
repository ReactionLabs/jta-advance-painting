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
  Phone,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { PaintBrushStroke, PaintSplatter } from '@/components/ui/PaintDecorations';

const stats = [
  { value: '15+', label: 'Years Painting Experience' },
  { value: '4+', label: 'Years Serving Tampa Bay' },
  { value: '500+', label: 'Projects Completed' },
  { value: '100%', label: 'Satisfaction Guaranteed' },
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
    <div className="flex flex-col bg-background text-foreground">
      {/* Hero Section (Centered & Premium) */}
      <section className="relative h-[500px] flex items-center justify-center bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/project-images/jta_work_2.jpg"
            alt="JTA Advance Painting team at work"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            About JTA Advance Painting
          </h1>
          <p className="text-lg text-white max-w-2xl leading-relaxed">
            For over four years, JTA Advance Painting has been proudly serving the Tampa Bay area. Backed by more than 15 years of professional painting experience and over 500 completed projects, we transform homes and businesses with exceptional services built on integrity, quality, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold tracking-tight">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
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
                  for each customer&apos;s vision. Every member of our team shares
                  this commitment to excellence.
                </p>
                <p>
                  Today, we&apos;ve completed over 500 projects—from single-room
                  touch-ups to complete interior/exterior repaints for
                  residential homes and large-scale commercial properties. But
                  no matter the size of the job, we bring the same dedication to
                  craft and customer service.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 blur-lg" />
              <Card className="relative overflow-hidden group border border-border">
                <PaintSplatter
                  color="red"
                  variant={1}
                  className="absolute -bottom-8 -right-8 size-28 opacity-5 group-hover:opacity-15 transition-all duration-300"
                />
                <CardContent className="p-8 relative z-10">
                  <div className="flex flex-col items-center gap-6 text-center">
                    <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <PaintBucket className="size-8 animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      Our Commitment to You
                    </h3>
                    <p className="text-slate-500 leading-relaxed">
                      We don&apos;t just paint walls—we build relationships. Every
                      project begins with understanding your vision and ends
                      only when you&apos;re completely satisfied with the results.
                    </p>
                    <Link href="/contact" className="w-full">
                      <Button className="w-full rounded-xl py-6 font-semibold">Start Your Project Today</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (DARK) */}
      <section className="bg-slate-900 border-y border-slate-800 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
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

      {/* Values Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Our Core Values
            </h2>
            <p className="mt-4 text-slate-500">
              These principles guide every decision we make and every surface we paint
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {values.map((value, idx) => {
              const borderColors = [
                "hover:border-logo-gold/30 hover:shadow-logo-gold/5",
                "hover:border-logo-green/30 hover:shadow-logo-green/5",
                "hover:border-logo-red/30 hover:shadow-logo-red/5",
                "hover:border-logo-purple/30 hover:shadow-logo-purple/5",
              ];
              const splatterColors = ["gold" as const, "green" as const, "red" as const, "purple" as const];
              const iconColors = ["text-logo-gold", "text-logo-green", "text-logo-red", "text-logo-purple"];
              const iconBgs = ["bg-logo-gold/10", "bg-logo-green/10", "bg-logo-red/10", "bg-logo-purple/10"];

              const border = borderColors[idx % borderColors.length];
              const splatter = splatterColors[idx % splatterColors.length];
              const iconColor = iconColors[idx % iconColors.length];
              const iconBg = iconBgs[idx % iconBgs.length];

              return (
                <Card
                  key={value.title}
                  className={cn("group relative overflow-hidden transition-all duration-300 border border-border hover:-translate-y-1 hover:shadow-xl", border)}
                >
                  <PaintSplatter
                    color={splatter}
                    variant={(idx % 3 + 1) as 1 | 2 | 3}
                    className="absolute -bottom-6 -right-6 size-20 opacity-5 group-hover:opacity-15 transition-all duration-300"
                  />
                  <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start relative z-10">
                    <div className={cn("flex size-12 shrink-0 items-center justify-center rounded-lg transition-transform group-hover:scale-105 duration-300", iconBg)}>
                      <value.icon
                        className={cn("size-6", iconColor)}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground">{value.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Customers Choose Us & Credentials */}
      <section className="bg-slate-50 border-t border-slate-100 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold tracking-tight">
                Why Customers Choose Us
              </h2>
              <p className="text-slate-650 leading-relaxed">
                When you choose JTA Advance Painting, you&apos;re not just hiring a
                contractor—you&apos;re partnering with a team that genuinely cares
                about your project and your satisfaction.
              </p>
              <ul className="space-y-3.5">
                {teamValues.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      className="size-5 shrink-0 text-logo-green mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-slate-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link href="/services">
                  <Button variant="outline" className="rounded-xl font-semibold border-slate-200 bg-white">Explore Our Services</Button>
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="relative overflow-hidden group border border-border">
                <PaintSplatter color="gold" variant={1} className="absolute -bottom-6 -right-6 size-20 opacity-5 transition-opacity" />
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Award className="size-5 text-logo-gold" />
                    <span>Certifications &amp; Credentials</span>
                  </h3>
                  <ul className="space-y-3">
                    {certifications.map((cert) => (
                      <li key={cert} className="flex items-center gap-3">
                        <CheckCircle
                          className="size-4 shrink-0 text-logo-gold"
                          aria-hidden="true"
                        />
                        <span className="text-sm font-medium text-slate-700">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden group border border-border shadow-lg">
                <PaintSplatter color="green" variant={2} className="absolute -bottom-6 -right-6 size-20 opacity-5 transition-opacity" />
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-lg font-bold mb-3">
                    Ready to Get Started?
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">
                    Contact us today for a free consultation and estimate. No
                    obligation, no pressure—just honest advice about your
                    painting project.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="flex-1">
                      <Button className="w-full py-5 rounded-xl font-semibold">Request Free Quote</Button>
                    </Link>
                    <a href="tel:813-392-8301" className="flex-1">
                      <Button variant="outline" className="w-full py-5 rounded-xl font-semibold bg-white border-slate-250">
                        <Phone className="size-4 mr-2 text-logo-red" />
                        813-392-8301
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
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
            Ready to Transform Your Space?
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
            Whether it&apos;s a single room or your entire property, we&apos;re here to bring your vision to life. Let&apos;s discuss your project today.
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
            <Link href="/gallery" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 bg-transparent text-white font-bold px-8 py-6 rounded-xl transition-all hover:bg-white/10 w-full sm:w-auto"
              >
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