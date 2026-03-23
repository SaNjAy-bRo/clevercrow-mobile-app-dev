export default function FAQ() {
  return (
    <section id="faqs" className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-extrabold text-brand-night sm:text-4xl">Frequently Asked Questions</h2>
        <p className="mt-3 text-center text-slate-600">Quick answers about delivery timelines, process, and support.</p>

        <div className="mt-8 space-y-3">
          <details className="faq-item" open>
            <summary>How long does it take to build a mobile app?</summary>
            <p>Simple MVP apps: 3-5 weeks. Standard business apps: 8-12 weeks. Complex custom applications: 16+ weeks depending on features and API scopes.</p>
          </details>
          <details className="faq-item">
            <summary>What do I need to provide to get started?</summary>
            <p>Your brand assets, core feature requirements, and any existing mockups. If needed, we help with UX/UI design and feature mapping.</p>
          </details>
          <details className="faq-item">
            <summary>Will my app work on both iOS and Android?</summary>
            <p>Yes. We specialize in cross-platform development (React Native/Flutter) to ensure your app runs flawlessly on both iOS and Android from a single codebase.</p>
          </details>
          <details className="faq-item">
            <summary>Do you help with App Store and Google Play submission?</summary>
            <p>Absolutely. We handle the entire submission process, including developer account setup, store listing optimization, and launch approval.</p>
          </details>
          <details className="faq-item">
            <summary>What happens after launch?</summary>
            <p>We provide ongoing maintenance, bug fixes, OS update compatibility, and performance monitoring to ensure your app stays fast and secure.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
