'use client';

import Image from 'next/image';
import { Phone, MessageCircle } from "lucide-react";

export default function Header() {
  const gtag_report_conversion = (url: string) => {
    // Analytics logic
    window.location.href = url;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 text-slate-900 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center">
          <img src="/images/logo-dark.svg" alt="Clevercrow" className="h-[2.5rem] w-auto sm:h-12" />
        </a>
        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <a
            href="tel:09986389444"
            onClick={(e) => {
              e.preventDefault();
              gtag_report_conversion('tel:09986389444');
            }}
            className="inline-flex flex-none items-center justify-center gap-0 whitespace-nowrap rounded-full bg-brand-amber p-[0.6rem] text-sm font-bold text-slate-900 transition hover:brightness-95 sm:gap-2 sm:px-4 sm:py-2"
            aria-label="Call Us"
          >
            <Phone className="h-[1.15rem] w-[1.15rem] sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">
              <span className="hidden lg:inline mr-1">Call: </span>09986389444
            </span>
          </a>
          <a
            href="https://wa.me/919986389444"
            target="_blank"
            rel="noopener"
            className="hidden sm:inline-flex flex-none items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-leaf px-4 py-2 text-sm font-bold text-white transition hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" />WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
