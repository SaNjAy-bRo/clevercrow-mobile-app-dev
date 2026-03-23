export default function CTABanner() {
  return (
    <section className="bg-brand-night py-14 text-white">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Get your mobile app live in as little as 3 weeks.</h2>
        <p className="mt-3 text-slate-200">Talk to our team and launch faster with strategy, design, and development in one workflow.</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a href="tel:09986389444" className="inline-flex items-center gap-2 rounded-full bg-brand-amber px-6 py-3 font-bold text-slate-900"><ion-icon name="call"></ion-icon>Call 09986389444</a>
            <a href="https://wa.me/919986389444" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-brand-leaf px-6 py-3 font-bold text-white"><ion-icon name="logo-whatsapp"></ion-icon>Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
