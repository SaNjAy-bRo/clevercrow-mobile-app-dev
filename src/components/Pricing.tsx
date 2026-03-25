import { CheckCircle2 } from "lucide-react";
export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-extrabold text-brand-night sm:text-4xl">Transparent Mobile App Packages</h2>
          <p className="mt-4 text-slate-600 text-lg">Choose the right foundation for your mobile application. All packages include cross-platform development for iOS and Android.</p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Minimum Viable Product (MVP) */}
          <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200 flex flex-col relative transition hover:shadow-xl">
            <h3 className="text-xl font-bold text-brand-night">Starter / MVP</h3>
            <p className="mt-2 text-sm text-slate-500">Fast go-to-market for validating ideas.</p>
            <div className="mt-6 flex items-baseline text-4xl font-extrabold text-brand-night">
              ₹1,50,000<span className="ml-1 text-xl font-medium text-slate-500">/app</span>
            </div>
            <ul className="mt-8 space-y-4 flex-1">
              <li className="flex gap-3 text-sm text-slate-700">
                <CheckCircle2 className="text-brand-leaf text-xl shrink-0" />
                <span>React Native / Flutter Framework</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-700">
                <CheckCircle2 className="text-brand-leaf text-xl shrink-0" />
                <span>iOS & Android Deployment</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-700">
                <CheckCircle2 className="text-brand-leaf text-xl shrink-0" />
                <span>Up to 10 Essential Screens</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-700">
                <CheckCircle2 className="text-brand-leaf text-xl shrink-0" />
                <span>Firebase Authentication</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-700">
                <CheckCircle2 className="text-brand-leaf text-xl shrink-0" />
                <span>Standard UI/UX Guidelines</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-700">
                <CheckCircle2 className="text-brand-leaf text-xl shrink-0" />
                <span>Basic Admin Dashboard (Web)</span>
              </li>
            </ul>
            <button className="mt-8 w-full rounded-xl bg-slate-100 py-3 font-semibold text-brand-night transition hover:bg-slate-200">
              Select Starter
            </button>
          </div>

          {/* Business Standard */}
          <div className="rounded-3xl bg-brand-night p-8 shadow-xl border border-brand-night flex flex-col relative transform lg:-translate-y-4">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-amber text-slate-900 text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full">Most Popular</div>
            <h3 className="text-xl font-bold text-white">Business Standard</h3>
            <p className="mt-2 text-sm text-slate-300">Complete solution for growing businesses.</p>
            <div className="mt-6 flex items-baseline text-4xl font-extrabold text-white">
              ₹3,50,000<span className="ml-1 text-xl font-medium text-slate-400">/app</span>
            </div>
            <ul className="mt-8 space-y-4 flex-1">
              <li className="flex gap-3 text-sm text-slate-200">
                <CheckCircle2 className="text-brand-amber text-xl shrink-0" />
                <span>Everything in Starter, plus:</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-200">
                <CheckCircle2 className="text-brand-amber text-xl shrink-0" />
                <span>Custom Unique UI/UX Design</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-200">
                <CheckCircle2 className="text-brand-amber text-xl shrink-0" />
                <span>Push Notifications Integration</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-200">
                <CheckCircle2 className="text-brand-amber text-xl shrink-0" />
                <span>Payment Gateway Integration</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-200">
                <CheckCircle2 className="text-brand-amber text-xl shrink-0" />
                <span>Advanced Admin & Analytics Dashboard</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-200">
                <CheckCircle2 className="text-brand-amber text-xl shrink-0" />
                <span>App Store & Google Play Publishing</span>
              </li>
            </ul>
            <button className="mt-8 w-full rounded-xl bg-brand-amber py-3 font-semibold text-brand-night transition hover:bg-yellow-300">
              Select Business
            </button>
          </div>

          {/* Enterprise */}
          <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200 flex flex-col relative transition hover:shadow-xl">
            <h3 className="text-xl font-bold text-brand-night">Enterprise Scale</h3>
            <p className="mt-2 text-sm text-slate-500">Complex systems & high-traffic architecture.</p>
            <div className="mt-6 flex items-baseline text-4xl font-extrabold text-brand-night">
              Custom
            </div>
            <ul className="mt-8 space-y-4 flex-1">
              <li className="flex gap-3 text-sm text-slate-700">
                <CheckCircle2 className="text-brand-leaf text-xl shrink-0" />
                <span>Everything in Business, plus:</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-700">
                <CheckCircle2 className="text-brand-leaf text-xl shrink-0" />
                <span>Native Swift/Kotlin Options</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-700">
                <CheckCircle2 className="text-brand-leaf text-xl shrink-0" />
                <span>Complex API & Third-Party Integrations</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-700">
                <CheckCircle2 className="text-brand-leaf text-xl shrink-0" />
                <span>Real-time Chat / Video Calling</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-700">
                <CheckCircle2 className="text-brand-leaf text-xl shrink-0" />
                <span>Machine Learning & IoT Features</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-700">
                <CheckCircle2 className="text-brand-leaf text-xl shrink-0" />
                <span>Dedicated Success Manager</span>
              </li>
            </ul>
            <button className="mt-8 w-full rounded-xl bg-slate-100 py-3 font-semibold text-brand-night transition hover:bg-slate-200">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
