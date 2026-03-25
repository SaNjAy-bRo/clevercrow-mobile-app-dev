export default function Testimonials() {
  return (
    <section className="bg-slate-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-extrabold text-brand-night sm:text-4xl">Join Our Success Stories</h2>
        <div className="mx-auto mt-10 max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="testimonial-card">
              <span className="google-badge" aria-hidden="true">G</span>
              <p className="stars">★★★★★</p>
              <p>"Our app downloads skyrocketed. Within 3 weeks of launch, we saw a 40% increase in mobile-driven sales."</p>
              <h3>Arun R., Founder, RetailBrand</h3>
            </article>
            <article className="testimonial-card">
              <span className="google-badge" aria-hidden="true">G</span>
              <p className="stars">★★★★★</p>
              <p>"Clevercrow delivered a seamless cross-platform app in under a month. Design and user experience were spot on."</p>
              <h3>Ramesh Shetty, EdTech Startup</h3>
            </article>
            <article className="testimonial-card">
              <span className="google-badge" aria-hidden="true">G</span>
              <p className="stars">★★★★★</p>
              <p>"The app performs flawlessly on both iOS and Android. Our patient booking process is now completely frictionless."</p>
              <h3>Dr. Priya B., Clinic Network</h3>
            </article>
            <article className="testimonial-card">
              <span className="google-badge" aria-hidden="true">G</span>
              <p className="stars">★★★★★</p>
              <p>"They transformed our core services into a native mobile app with lightning-fast load times and offline support."</p>
              <h3>Shyam Patel, B2B Logistics</h3>
            </article>
            <article className="testimonial-card">
              <span className="google-badge" aria-hidden="true">G</span>
              <p className="stars">★★★★★</p>
              <p>"Execution was fast and communication stayed clear across prototyping, development, and App Store approval."</p>
              <h3>Client Team, Fitness App</h3>
            </article>
            <article className="testimonial-card">
              <span className="google-badge" aria-hidden="true">G</span>
              <p className="stars">★★★★★</p>
              <p>"From API integration to push notifications, the final mobile app was built for maximum user retention."</p>
              <h3>Client Team, Services Company</h3>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
