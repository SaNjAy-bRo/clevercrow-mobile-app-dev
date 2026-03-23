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

        {/* Main Marquee Separator */}
        <div className="relative mx-auto mt-12 sm:mt-16 max-w-5xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-6 border-y border-white/5">
          <div className="flex w-max animate-marquee items-center text-slate-400">
            <div className="flex items-center justify-around gap-12 sm:gap-16 pr-12 sm:pr-16 line-clamp-1">
              <div className="flex items-center gap-2 sm:gap-3"><ion-icon name="logo-apple" className="text-[20px] sm:text-2xl text-white"></ion-icon><span className="font-display text-base sm:text-lg font-bold text-white">Swift</span></div>
              <div className="flex items-center gap-2 sm:gap-3"><ion-icon name="logo-android" className="text-[20px] sm:text-2xl text-[#3DDC84]"></ion-icon><span className="font-display text-base sm:text-lg font-bold text-white">Kotlin</span></div>
              <div className="flex items-center gap-2 sm:gap-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="h-5 w-5 sm:h-6 sm:w-6 text-[#61DAFB]"><circle cx="0" cy="0" r="2.05" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg><span className="font-display text-base sm:text-lg font-bold text-white">React Native</span></div>
              <div className="flex items-center gap-2 sm:gap-3"><svg viewBox="0 0 100 100" className="h-5 w-5 sm:h-6 sm:w-6 text-[#54C5F8]"><path d="M50 10L10 50l40 40 40-40L50 10z" fill="currentColor"/></svg><span className="font-display text-base sm:text-lg font-bold text-white">Flutter</span></div>
              <div className="flex items-center gap-2 sm:gap-3"><ion-icon name="logo-firebase" className="text-[20px] sm:text-2xl text-[#FFCA28]"></ion-icon><span className="font-display text-base sm:text-lg font-bold text-white">Firebase</span></div>
            </div>
            <div className="flex items-center justify-around gap-12 sm:gap-16 pr-12 sm:pr-16" aria-hidden="true">
              <div className="flex items-center gap-2 sm:gap-3"><ion-icon name="logo-apple" className="text-[20px] sm:text-2xl text-white"></ion-icon><span className="font-display text-base sm:text-lg font-bold text-white">Swift</span></div>
              <div className="flex items-center gap-2 sm:gap-3"><ion-icon name="logo-android" className="text-[20px] sm:text-2xl text-[#3DDC84]"></ion-icon><span className="font-display text-base sm:text-lg font-bold text-white">Kotlin</span></div>
              <div className="flex items-center gap-2 sm:gap-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="h-5 w-5 sm:h-6 sm:w-6 text-[#61DAFB]"><circle cx="0" cy="0" r="2.05" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg><span className="font-display text-base sm:text-lg font-bold text-white">React Native</span></div>
              <div className="flex items-center gap-2 sm:gap-3"><svg viewBox="0 0 100 100" className="h-5 w-5 sm:h-6 sm:w-6 text-[#54C5F8]"><path d="M50 10L10 50l40 40 40-40L50 10z" fill="currentColor"/></svg><span className="font-display text-base sm:text-lg font-bold text-white">Flutter</span></div>
              <div className="flex items-center gap-2 sm:gap-3"><ion-icon name="logo-firebase" className="text-[20px] sm:text-2xl text-[#FFCA28]"></ion-icon><span className="font-display text-base sm:text-lg font-bold text-white">Firebase</span></div>
            </div>
          </div>
        </div>

        {/* Main 12-Column Responsive Layout */}
        <div className="mt-16 sm:mt-24 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10 xl:gap-16">
          
          {/* Left Column: Copy & Benefits (Takes up 7 columns on large screens) */}
          <div className="space-y-10 lg:col-span-7 xl:col-span-6">
            <div className="border-l-4 border-[#61DAFB] pl-5 sm:pl-6">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                In today's mobile-first landscape, app performance is the key differentiator. <span className="text-white font-bold">A poorly performing app costs you users.</span> We build cross-platform and native apps that feel immediate, fluid, and intuitive. Our architecture ensures fast boot times, smooth animations, and robust offline capabilities.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 lg:gap-8">
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

              <div className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-lg border border-slate-200 transition hover:shadow-xl hover:border-slate-300 sm:col-span-2 lg:col-span-1 xl:col-span-2">
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
                 <ion-icon name="chatbubbles" class="text-lg"></ion-icon> Talk to an App Expert
              </button>
              <a href="#portfolio" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-bold text-white transition hover:bg-white/15 w-full sm:w-auto">
                 <ion-icon name="images-outline" class="text-lg"></ion-icon> See Our Portfolio
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Visual UI (Takes up 5 columns on large screens) */}
          <div className="w-full lg:col-span-5 xl:col-span-6 lg:sticky lg:top-32">
            <div className="relative w-full border border-slate-200 bg-white/95 rounded-[2rem] shadow-xl p-5 sm:p-8 flex flex-col group overflow-hidden backdrop-blur-3xl min-h-[400px] sm:min-h-[500px]">
              
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#61DAFB]/20 blur-[100px] transition duration-700 group-hover:bg-[#61DAFB]/30"></div>

              {/* Code Editor / Mockup Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-slate-200 pb-4 mb-6 sm:mb-8">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-slate-300"></div>
                  <div className="h-3 w-3 rounded-full bg-slate-300"></div>
                  <div className="h-3 w-3 rounded-full bg-slate-300"></div>
                </div>
                <div className="text-[10px] sm:text-xs font-mono font-medium text-slate-600 bg-slate-100 rounded px-2 py-0.5 border border-slate-200">App_Bridge.swift</div>
                <div className="flex items-center gap-1.5 text-emerald-600 text-[10px] sm:text-xs font-mono animate-pulse">
                  <ion-icon name="ellipse"></ion-icon> Live Build
                </div>
              </div>

              {/* Abstract React Components Visual */}
              <div className="relative z-10 flex-1 flex flex-col justify-center gap-5 sm:gap-7">
                
                <div className="w-full rounded-2xl bg-slate-50 border border-slate-200 p-4 sm:p-5 shadow-sm relative transform transition-transform duration-500 group-hover:translate-x-2">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-[#61DAFB] flex items-center gap-1">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" /></svg> 1. User Interaction (Tap)
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">onPress()</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-2 w-8 sm:w-10 rounded-full bg-slate-200"></div>
                    <div className="h-2 w-full rounded-full bg-[#61DAFB]/80"></div>
                  </div>
                </div>

                <div className="w-[95%] sm:w-[90%] ml-auto rounded-2xl bg-slate-50 border border-slate-200 p-4 sm:p-5 shadow-sm relative transform transition-transform duration-500 group-hover:-translate-x-2">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-[#61DAFB] flex items-center gap-1">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg> 2. JS Thread Bridge
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 hover:text-slate-700">JSI Serializer</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <div className="h-8 sm:h-10 rounded-lg bg-slate-100 border-dashed border border-slate-300"></div>
                    <div className="h-8 sm:h-10 rounded-lg bg-slate-100 border-dashed border border-emerald-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-spin text-emerald-500"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
                    </div>
                    <div className="h-8 sm:h-10 rounded-lg bg-slate-100 border-dashed border border-slate-300"></div>
                  </div>
                </div>

                <div className="w-full rounded-2xl bg-gradient-to-r from-slate-50 to-emerald-50 border border-emerald-500/20 p-4 sm:p-5 shadow-sm relative transform transition-transform duration-500 group-hover:scale-[1.02]">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-emerald-600 flex items-center gap-1">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg> 3. Native UI Render
                    </span>
                    <span className="text-[10px] font-mono text-emerald-600 border border-emerald-500/30 px-1.5 py-0.5 rounded">60 FPS</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 mb-3">Native view tree optimally updated on the main UI thread.</p>
                  <div className="h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-emerald-500 w-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
                  </div>
                </div>

                {/* React Logo Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 transition-transform duration-1000 group-hover:rotate-[180deg] group-hover:opacity-30 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="h-64 w-64 sm:h-80 sm:w-80 text-[#61DAFB]"><circle cx="0" cy="0" r="2.05" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
