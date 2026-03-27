'use client';

export default function Hero() {
  return (
    <section className="hero-premium relative overflow-hidden">
      <div className="hero-grid-overlay" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-cyan" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-indigo" aria-hidden="true"></div>

      <div className="mx-auto max-w-7xl px-6 pb-16 pt-6 lg:px-8 lg:pb-24">
        <div id="top" className="grid min-h-[88vh] items-center gap-16 pt-14 md:grid-cols-2 lg:pt-20">
          
          {/* Left Text Content */}
          <div className="max-w-2xl">
            <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-0.04em] md:text-6xl xl:text-[6rem]">
              <span className="hero-heading-gradient inline">Turn Your Idea Into a </span>
              <span className="hero-heading-accent inline">Mobile App.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 md:text-xl">
              We build fast, scalable apps for Android & iOS designed to grow your business.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                data-open-modal
                data-modal-title="Get Free Consultation"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 4.5A2.25 2.25 0 0 1 4.5 2.25h2.386c.51 0 .955.343 1.087.836l1.273 4.772a1.125 1.125 0 0 1-.417 1.173l-2.006 1.505a11.036 11.036 0 0 0 6.661 6.661l1.505-2.006a1.125 1.125 0 0 1 1.173-.417l4.772 1.273c.493.132.836.576.836 1.087V19.5a2.25 2.25 0 0 1-2.25 2.25h-1.5C9.44 21.75 2.25 14.56 2.25 5.25V4.5Z" />
                </svg>
                Get Free Consultation
              </button>
              <a
                href="#portfolio"
                className="hero-shine-button inline-flex items-center justify-center gap-2 rounded-full border border-[#f4c15d]/45 bg-[#f4c15d]/8 px-7 py-4 text-base font-semibold text-[#f8d98a] backdrop-blur-xl transition hover:bg-[#f4c15d]/14 hover:text-[#ffe8ad]"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
                View Our Work
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-200">
              <span className="inline-flex items-center gap-2">
                <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
                Android & iOS Apps
              </span>
              <span className="inline-flex items-center gap-2">
                <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
                Fast Delivery
              </span>
              <span className="inline-flex items-center gap-2">
                <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
                Built for Scale
              </span>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
              No tech knowledge needed — we handle everything from design to launch.
            </p>
          </div>

          {/* Foolproof Product Image Wrapper */}
          <div className="relative flex w-[110%] -mt-6 items-center justify-center lg:w-[120%] lg:-ml-[10%]">
            <div className="relative flex w-full flex-col items-center">
              
              {/* Review Stars inline */}
              <div className="relative z-20 mb-5 inline-flex flex-col items-center gap-2 rounded-full border border-white/5 bg-white/5 px-6 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.1)] backdrop-blur-md sm:flex-row sm:gap-4 md:mb-6 lg:mb-8">
                <div className="inline-flex gap-1 text-[#f4c15d] drop-shadow-[0_0_15px_rgba(244,193,93,0.4)]" aria-hidden="true">
                  <svg className="h-6 w-6 lg:h-7 lg:w-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m11.48 3.499-2.146 4.35-4.8.697 3.473 3.384-.82 4.78L11.48 14.45l4.293 2.26-.82-4.78 3.473-3.384-4.8-.697-2.146-4.35Z" />
                  </svg>
                  <svg className="h-6 w-6 lg:h-7 lg:w-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m11.48 3.499-2.146 4.35-4.8.697 3.473 3.384-.82 4.78L11.48 14.45l4.293 2.26-.82-4.78 3.473-3.384-4.8-.697-2.146-4.35Z" />
                  </svg>
                  <svg className="h-6 w-6 lg:h-7 lg:w-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m11.48 3.499-2.146 4.35-4.8.697 3.473 3.384-.82 4.78L11.48 14.45l4.293 2.26-.82-4.78 3.473-3.384-4.8-.697-2.146-4.35Z" />
                  </svg>
                  <svg className="h-6 w-6 lg:h-7 lg:w-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m11.48 3.499-2.146 4.35-4.8.697 3.473 3.384-.82 4.78L11.48 14.45l4.293 2.26-.82-4.78 3.473-3.384-4.8-.697-2.146-4.35Z" />
                  </svg>
                  <svg className="h-6 w-6 lg:h-7 lg:w-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m11.48 3.499-2.146 4.35-4.8.697 3.473 3.384-.82 4.78L11.48 14.45l4.293 2.26-.82-4.78 3.473-3.384-4.8-.697-2.146-4.35Z" />
                  </svg>
                </div>
                <span className="text-sm font-bold tracking-wide text-slate-100 lg:text-[0.95rem]">
                  Rated 5.0 by 582 clients
                </span>
              </div>

              {/* The actual product image */}
              <div className="relative z-10 w-full max-w-[32rem] sm:max-w-[38rem] md:max-w-[42rem] lg:max-w-[48rem]">
                {/* Glow behind image for emphasis */}
                <div className="absolute inset-0 scale-[0.8] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.22),transparent_70%)] blur-[40px]" aria-hidden="true"></div>
                <img
                  src="/mobile apps/hero/mobile-apps-3.png"
                  alt="Mobile app product system visual"
                  className="relative block h-auto w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                />
              </div>

              {/* Badges floating below */}
              <div className="relative z-20 mt-6 flex flex-wrap items-center justify-center gap-3 pb-8 md:mt-8 md:pb-0">
                <span className="inline-flex items-center gap-[0.55rem] rounded-full border border-white/10 bg-white/5 px-5 py-[0.8rem] text-[0.85rem] font-semibold text-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl transition hover:bg-white/10">
                  <svg className="h-5 w-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 4.5h9A1.5 1.5 0 0 1 18 6v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 18V6a1.5 1.5 0 0 1 1.5-1.5Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 17.25h1.5" />
                  </svg>
                  iOS Ready
                </span>
                <span className="inline-flex items-center gap-[0.55rem] rounded-full border border-white/10 bg-white/5 px-5 py-[0.8rem] text-[0.85rem] font-semibold text-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl transition hover:bg-white/10">
                  <svg className="h-5 w-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 15.75v2.25A2.25 2.25 0 0 0 6 20.25h12A2.25 2.25 0 0 0 20.25 18v-2.25" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 10.5 12 15m0 0 4.5-4.5M12 15V3.75" />
                  </svg>
                  App Store Launch
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
