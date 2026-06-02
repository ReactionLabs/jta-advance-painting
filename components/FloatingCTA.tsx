"use client";

import React from "react";
import { Phone, Calendar } from "lucide-react";
import Link from "next/link";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur border-t border-border px-4 py-3 shadow-lg shadow-black/10 transition-transform duration-300">
      <div className="flex gap-3 max-w-md mx-auto">
        <a
          href="tel:813-392-8301"
          className="flex-1 flex h-11 items-center justify-center gap-2 rounded-xl border border-logo-red bg-logo-red/5 text-logo-red font-semibold text-sm transition-all active:scale-95"
        >
          <Phone className="size-4" />
          <span>Call Now</span>
        </a>
        <Link
          href="/contact"
          className="flex-1 flex h-11 items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all active:scale-95 shadow-md shadow-primary/20"
        >
          <Calendar className="size-4" />
          <span>Free Estimate</span>
        </Link>
      </div>
    </div>
  );
}
