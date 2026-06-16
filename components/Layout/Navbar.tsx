"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
      isScrolled ? "shadow-md shadow-black/5" : ""
    )}>
      {/* Paint Brush Gradient Stripe */}
      <div className="h-1 w-full bg-gradient-to-r from-logo-yellow via-logo-orange via-logo-red via-logo-purple to-logo-green" />
      <div className={cn(
        "mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300",
        isScrolled ? "h-14 md:h-16" : "h-20 md:h-24"
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="JTA Advance Painting Logo"
            width={240}
            height={75}
            className={cn(
              "w-auto object-contain transition-all duration-300",
              isScrolled ? "h-9 md:h-11" : "h-14 md:h-18"
            )}
            priority
          />
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
            <div className="flex items-center pb-6 border-b border-border">
              <Image
                src="/logo.png"
                alt="JTA Advance Painting Logo"
                width={140}
                height={44}
                className="h-10 w-auto object-contain"
              />
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