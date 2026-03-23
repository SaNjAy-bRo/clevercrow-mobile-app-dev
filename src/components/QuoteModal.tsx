'use client';

import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, title, onClose }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay" 
      role="dialog" 
      aria-modal="true" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card">
        <div className="modal-topline"></div>
        <div className="modal-header flex justify-between items-start mb-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-leaf mb-1">Quick Response in 15 minutes</p>
            <h3 className="font-display text-2xl font-bold text-brand-night">{title}</h3>
            <p className="text-sm text-slate-500 mt-1">Share your details and our app experts will contact you.</p>
          </div>
          <button 
            type="button" 
            onClick={onClose} 
            className="text-slate-400 hover:text-slate-600 transition p-1" 
            aria-label="Close form"
          >
            <ion-icon name="close" className="text-2xl"></ion-icon>
          </button>
        </div>

        <form action="/legacy/quote.php" method="POST" className="space-y-4">
          <input type="hidden" name="page" value={typeof window !== 'undefined' ? window.location.href : ''} />
          <input type="hidden" name="intent" value={title} />
          
          <div>
            <label htmlFor="quoteName" className="mb-1 block text-sm font-semibold text-slate-700">Full Name</label>
            <input id="quoteName" name="name" type="text" required placeholder="Enter your name" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-amber focus:bg-white focus:ring-2 focus:ring-amber-200" />
          </div>
          <div>
            <label htmlFor="quotePhone" className="mb-1 block text-sm font-semibold text-slate-700">Phone</label>
            <input id="quotePhone" name="phone" type="tel" inputMode="tel" required placeholder="Enter your phone number" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-amber focus:bg-white focus:ring-2 focus:ring-amber-200" />
          </div>
          <div>
            <label htmlFor="quoteEmail" className="mb-1 block text-sm font-semibold text-slate-700">Email (Optional)</label>
            <input id="quoteEmail" name="email" type="email" placeholder="Enter your email" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-amber focus:bg-white focus:ring-2 focus:ring-amber-200" />
          </div>

          <button type="submit" className="w-full rounded-xl bg-brand-night px-4 py-3.5 mt-2 font-bold text-white transition hover:bg-brand-ink">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
