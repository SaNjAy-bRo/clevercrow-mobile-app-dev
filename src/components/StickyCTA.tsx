'use client';
import { FileText, Phone } from "lucide-react";

export default function StickyCTA({ onOpenModal }: { onOpenModal: (title: string) => void }) {
  return (
    <div className="sticky-cta" role="region" aria-label="Quick enquiry actions">
      <div className="sticky-cta-inner">
        <button 
          type="button" 
          onClick={() => onOpenModal('Get a Quote')}
          className="sticky-cta-btn sticky-cta-primary"
        >
          <FileText className="" />
          <span>Request a Quote</span>
        </button>
        <button 
          type="button" 
          onClick={() => onOpenModal('Request a Call Back')}
          className="sticky-cta-btn sticky-cta-secondary"
        >
          <Phone className="" />
          <span>Request Call Back</span>
        </button>
      </div>
    </div>
  );
}
