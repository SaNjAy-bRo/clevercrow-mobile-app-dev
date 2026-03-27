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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center">
          <img src="/images/logo-dark.svg" alt="Clevercrow" className="h-10 w-auto sm:h-12" />
        </a>
        <div className="flex items-center justify-end gap-2 sm:gap-3">
          {/* Call Button */}
          <a
            href="tel:09986389444"
            onClick={(e) => {
              e.preventDefault();
              gtag_report_conversion('tel:09986389444');
            }}
            className="nav-call-btn"
            aria-label="Call Us"
          >
            <Phone className="nav-call-icon" />
            <span className="nav-call-text">
              <span className="nav-call-label">Call:&nbsp;</span>09986389444
            </span>
          </a>
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919986389444"
            target="_blank"
            rel="noopener"
            className="nav-whatsapp-btn"
          >
            <MessageCircle className="h-4 w-4" />&nbsp;WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
