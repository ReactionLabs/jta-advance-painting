"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, Phone } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="shrink-0"
          >
            <rect width="36" height="36" rx="8" fill="currentColor" className="text-primary" />
            <text
              x="18"
              y="24"
              textAnchor="middle"
              fill="white"
              fontFamily="Sora, system-ui, sans-serif"
              fontWeight="700"
              fontSize="16"
              letterSpacing="-0.5"
            >
              JTA
            </text>
          </svg>
          <span
            className="text-lg font-semibold tracking-tight"
            style={{ fontFamily: "Sora, system-ui, sans-serif", fontWeight: 700 }}
          >
            JTA Advance Painting
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <a
            href="tel:813-392-8301"
            className="inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-2.5 text-sm font-medium whitespace-nowrap transition-colors hover:bg-muted hover:text-foreground"
          >
            <Phone className="size-4" aria-hidden="true" />
            <span>813-392-8301</span>
          </a>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="size-5" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex w-72 flex-col p-6">
            {/* Mobile Logo */}
            <div className="flex items-center gap-2 pb-6 border-b border-border">
              <svg
                width="32"
                height="32"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="shrink-0"
              >
                <rect width="36" height="36" rx="8" fill="currentColor" className="text-primary" />
                <text
                  x="18"
                  y="24"
                  textAnchor="middle"
                  fill="white"
                  fontFamily="Sora, system-ui, sans-serif"
                  fontWeight="700"
                  fontSize="16"
                  letterSpacing="-0.5"
                >
                  JTA
                </text>
              </svg>
              <span
                className="text-lg font-semibold tracking-tight"
                style={{ fontFamily: "Sora, system-ui, sans-serif", fontWeight: 700 }}
              >
                JTA
              </span>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-1 flex-col gap-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-base font-medium text-muted-foreground transition-colors hover:text-foreground",
                    link.href === "/" && "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-border">
              <a
                href="tel:813-392-8301"
                className="flex h-9 w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-2.5 text-sm font-medium whitespace-nowrap transition-colors hover:bg-muted hover:text-foreground"
              >
                <Phone className="size-4" aria-hidden="true" />
                <span>813-392-8301</span>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export { Navbar };