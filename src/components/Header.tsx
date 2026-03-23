'use client';

import Image from 'next/image';

export default function Header() {
  const gtag_report_conversion = (url: string) => {
    // Analytics logic
    window.location.href = url;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 text-slate-900 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:flex-nowrap sm:gap-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center">
          <img src="/images/logo-dark.svg" alt="Clevercrow" className="h-10 w-auto sm:h-12" />
        </a>
        <div className="flex w-full items-center justify-end gap-2 sm:w-auto sm:gap-3">
          <a
            href="tel:09986389444"
            onClick={(e) => {
              e.preventDefault();
              gtag_report_conversion('tel:09986389444');
            }}
            className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-amber px-3 py-2 text-xs font-bold text-slate-900 transition hover:brightness-95 sm:flex-none sm:px-4 sm:text-sm"
          >
            <ion-icon name="call"></ion-icon>
            <span className="hidden lg:inline mr-1">Call: </span><span>09986389444</span>
          </a>
          <a
            href="https://wa.me/919986389444"
            target="_blank"
            rel="noopener"
            className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-leaf px-3 py-2 text-xs font-bold text-white transition hover:brightness-110 sm:flex-none sm:px-4 sm:text-sm"
          >
            <ion-icon name="logo-whatsapp"></ion-icon>WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
