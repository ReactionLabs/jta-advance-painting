import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { PaintBucket, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const services = [
  { href: "/services/interior", label: "Interior Painting" },
  { href: "/services/exterior", label: "Exterior Painting" },
  { href: "/services/commercial", label: "Commercial Painting" },
  { href: "/services/residential", label: "Residential Painting" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "813-392-8301 / 813-392-8128",
    href: "tel:+18133928301",
  },
  {
    icon: Mail,
    label: "Email",
    value: "service@jtaadvancepainting.com",
    href: "mailto:service@jtaadvancepainting.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "9225 Bay Plaza Blvd Suite 417 PMB 1205 Tampa FL 33619",
    href: "https://maps.google.com",
  },
];

function Footer() {
  return (
    <footer className="bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <PaintBucket className="size-6" aria-hidden="true" />
              <span className="text-lg font-semibold">JTA Advance Painting</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional painting services for residential and commercial
              properties. Quality craftsmanship and customer satisfaction
              guaranteed.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="flex flex-col gap-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">Contact Us</h3>
            <ul className="flex flex-col gap-3">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    target={item.label === "Address" ? "_blank" : undefined}
                    rel={
                      item.label === "Address"
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <item.icon className="size-4 shrink-0" aria-hidden="true" />
                    <span>{item.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} JTA Advance Painting. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };