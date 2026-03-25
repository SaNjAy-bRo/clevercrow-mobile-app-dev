import { Smartphone, Database, MessageSquare, Image, Circle } from "lucide-react";
export default function TechStack() {
  return (
    <section id="tech-stack" className="relative overflow-hidden bg-[#030712] py-16 text-white sm:py-24 lg:py-32">
      {/* Ambient Base Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-ink/30 via-[#030712] to-[#030712]"></div>
      <div className="pointer-events-none absolute -left-[10%] top-[5%] h-[600px] w-[600px] rounded-full bg-indigo-900/10 blur-[120px]"></div>
      <div className="pointer-events-none absolute -right-[10%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-brand-leaf/10 blur-[120px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Title Area */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">High-Performance Frameworks</p>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl text-white">Native & Cross-Platform Mobility with <span className="text-[#61DAFB]">React Native</span></h2>
          <p className="mt-6 text-lg sm:text-xl tracking-wide text-slate-300 leading-relaxed">Engineering mobile apps that load instantly, engage users, and maximize conversions.</p>
        </div>

        {/* Main Marquee Separator — Bigger icons and text */}
        <div className="relative mx-auto mt-12 sm:mt-16 max-w-6xl overflow-hidden py-10 sm:py-12 px-4">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#030712] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#030712] to-transparent z-10"></div>
          <div className="flex w-max animate-marquee items-center">
            <div className="flex items-center justify-around gap-16 sm:gap-24 pr-16 sm:pr-24 line-clamp-1">
              <div className="flex items-center gap-4 sm:gap-5"><Smartphone className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#F05138]" /><span className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white">Swift</span></div>
              <div className="flex items-center gap-4 sm:gap-5"><Smartphone className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#3DDC84]" /><span className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white">Kotlin</span></div>
              <div className="flex items-center gap-4 sm:gap-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="h-9 w-9 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#61DAFB]"><circle cx="0" cy="0" r="2.05" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg><span className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white">React Native</span></div>
              <div className="flex items-center gap-4 sm:gap-5"><svg viewBox="0 0 100 100" className="h-9 w-9 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#54C5F8]"><path d="M50 10L10 50l40 40 40-40L50 10z" fill="currentColor"/></svg><span className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white">Flutter</span></div>
              <div className="flex items-center gap-4 sm:gap-5"><Database className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#FFCA28]" /><span className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white">Firebase</span></div>
            </div>
            <div className="flex items-center justify-around gap-16 sm:gap-24 pr-16 sm:pr-24" aria-hidden="true">
              <div className="flex items-center gap-4 sm:gap-5"><Smartphone className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#F05138]" /><span className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white">Swift</span></div>
              <div className="flex items-center gap-4 sm:gap-5"><Smartphone className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#3DDC84]" /><span className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white">Kotlin</span></div>
              <div className="flex items-center gap-4 sm:gap-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="h-9 w-9 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#61DAFB]"><circle cx="0" cy="0" r="2.05" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg><span className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white">React Native</span></div>
              <div className="flex items-center gap-4 sm:gap-5"><svg viewBox="0 0 100 100" className="h-9 w-9 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#54C5F8]"><path d="M50 10L10 50l40 40 40-40L50 10z" fill="currentColor"/></svg><span className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white">Flutter</span></div>
              <div className="flex items-center gap-4 sm:gap-5"><Database className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#FFCA28]" /><span className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white">Firebase</span></div>
            </div>
          </div>
        </div>

        {/* Benefits Section — Full Width, No Right Panel */}
        <div className="mt-16 sm:mt-24 max-w-5xl mx-auto">
          
          <div className="space-y-10">
            <div className="border-l-4 border-[#61DAFB] pl-5 sm:pl-6">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                In today&apos;s mobile-first landscape, app performance is the key differentiator. <span className="text-white font-bold">A poorly performing app costs you users.</span> We build cross-platform and native apps that feel immediate, fluid, and intuitive. Our architecture ensures fast boot times, smooth animations, and robust offline capabilities.
              </p>
            </div>

            {/* Benefits Grid — 2 columns on desktop, full width */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <div className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-lg border border-slate-200 transition hover:shadow-xl hover:border-slate-300">
                <div className="flex-shrink-0 mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#61DAFB]/10 text-[#61DAFB] shadow-inner">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
                </div>
                <div>
                  <h4 className="font-display text-base sm:text-lg font-bold text-brand-night leading-tight">Native-Level Performance</h4>
                  <p className="mt-1.5 text-sm text-slate-600">Leverage powerful native APIs to ensure your app runs at full speed with fluid, 60fps animations.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-lg border border-slate-200 transition hover:shadow-xl hover:border-slate-300">
                <div className="flex-shrink-0 mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 shadow-inner">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
                </div>
                <div>
                  <h4 className="font-display text-base sm:text-lg font-bold text-brand-night leading-tight">Cross-Platform Efficiency</h4>
                  <p className="mt-1.5 text-sm text-slate-600">Deploy to both iOS and Android simultaneously with a unified codebase, reducing development time and costs.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-lg border border-slate-200 transition hover:shadow-xl hover:border-slate-300">
                <div className="flex-shrink-0 mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-amber/20 text-brand-leaf shadow-inner">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.36c-1.39.06-2.73-.39-3.79-1.2l-3.32 3.32a.75.75 0 01-1.06-1.06l3.32-3.32c-.81-1.06-1.26-2.4-1.2-3.79a6 6 0 017.36-5.84l1.12-2.24a3.75 3.75 0 015.3-1.06l2.12 2.12a3.75 3.75 0 01-1.06 5.3l-2.24 1.12z" /></svg>
                </div>
                <div>
                  <h4 className="font-display text-base sm:text-lg font-bold text-brand-night leading-tight">Offline Capabilities</h4>
                  <p className="mt-1.5 text-sm text-slate-600">Robust local data synchronization allows users to seamlessly interact with your app even without an internet connection.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-lg border border-slate-200 transition hover:shadow-xl hover:border-slate-300">
                <div className="flex-shrink-0 mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 shadow-inner">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>
                </div>
                <div>
                  <h4 className="font-display text-base sm:text-lg font-bold text-brand-night leading-tight">Increased Retention</h4>
                  <p className="mt-1.5 text-sm text-slate-600">Fast, crash-free app experiences ensure higher user engagement and dramatically reduce app uninstall rates.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-lg border border-slate-200 transition hover:shadow-xl hover:border-slate-300 sm:col-span-2 lg:col-span-1">
                <div className="flex-shrink-0 mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500 shadow-inner">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                </div>
                <div>
                  <h4 className="font-display text-base sm:text-lg font-bold text-brand-night leading-tight">Enterprise-Grade Security</h4>
                  <p className="mt-1.5 text-sm text-slate-600">We integrate biometric authentication, secure local storage, and encrypted networking for maximum data protection.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button type="button" data-open-modal data-modal-title="Talk to an App Expert" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#61DAFB] px-6 py-4 font-bold text-slate-900 transition hover:bg-[#4faad1] shadow-[0_10px_30px_-5px_rgba(97,218,251,0.5)] w-full sm:w-auto">
                 <MessageSquare className="text-lg" /> Talk to an App Expert
              </button>
              <a href="#portfolio" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-bold text-white transition hover:bg-white/15 w-full sm:w-auto">
                 <Image className="text-lg" /> See Our Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
