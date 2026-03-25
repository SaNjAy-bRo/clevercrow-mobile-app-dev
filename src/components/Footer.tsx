import { Phone, MessageCircle } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-brand-night py-12 text-center text-white">
      <h2 className="font-display text-2xl font-bold">Ready to build a mobile app that converts?</h2>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a href="tel:09986389444" className="inline-flex items-center gap-2 rounded-full bg-brand-amber px-6 py-3 font-bold text-slate-900"><Phone className="" />Call 09986389444</a>
        <a href="https://wa.me/919986389444" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand-leaf px-6 py-3 font-bold text-white"><MessageCircle className="" />Chat on WhatsApp</a>
      </div>
      <p className="mt-8 text-sm text-slate-300">Clever Crow Strategies LLP. &copy; All rights reserved</p>
      <p className="mt-2 text-sm text-slate-300">
        <a href="https://clevercrow.in/privacy-policy/" className="text-amber-300 hover:text-amber-200">Privacy Policy</a>
        <span className="mx-2">|</span>
        <a href="https://clevercrow.in/terms-and-conditions/" className="text-amber-300 hover:text-amber-200">Terms &amp; Conditions</a>
      </p>
    </footer>
  );
}
