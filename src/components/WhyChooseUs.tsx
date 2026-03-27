'use client';

import { useEffect, useRef } from "react";
import { Smartphone, Database } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

function AnimatedNumber({ value, suffix = "", decimals = 0 }: { value: number, suffix?: string, decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 35,
    stiffness: 90,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }).format(latest) + suffix;
      }
    });
  }, [springValue, decimals, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="why-section">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-kicker">Why Choose Us</p>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl md:text-5xl">
              A mobile app team built for business growth, not just app delivery.
            </h2>
          </div>
          <p className="max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
            We help startups and growing businesses turn ideas into polished mobile products with clear strategy, strong execution, and launch support that feels simple from start to finish.
          </p>
        </div>

        {/* Feature Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Card 1 - Growth (Emerald) */}
          <motion.article 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="why-card relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="why-icon inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100/80 text-emerald-600 shadow-[0_4px_20px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/20">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 8.25 2.25.75-.75 2.25" />
              </svg>
            </div>
            <h3 className="mt-5 sm:mt-6 text-2xl sm:text-[1.7rem] font-bold tracking-[-0.03em] text-slate-900 group-hover:text-emerald-950 transition-colors">Growth Focused</h3>
            <p className="mt-2 sm:mt-3 text-[0.95rem] leading-[1.65] text-slate-600">
              Every app decision is made to support growth, user retention, and a stronger business outcome.
            </p>
          </motion.article>

          {/* Card 2 - Clear Process (Blue) */}
          <motion.article 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="why-card relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="why-icon inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100/80 text-blue-600 shadow-[0_4px_20px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/20">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4.5 4.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 className="mt-5 sm:mt-6 text-2xl sm:text-[1.7rem] font-bold tracking-[-0.03em] text-slate-900 group-hover:text-blue-950 transition-colors">Clear Process</h3>
            <p className="mt-2 sm:mt-3 text-[0.95rem] leading-[1.65] text-slate-600">
              We keep things easy to understand with simple communication, regular updates, and direct next steps.
            </p>
          </motion.article>

          {/* Card 3 - Reliable Delivery (Violet) */}
          <motion.article 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="why-card relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="why-icon inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100/80 text-violet-600 shadow-[0_4px_20px_rgba(139,92,246,0.15)] ring-1 ring-violet-500/20">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="mt-5 sm:mt-6 text-2xl sm:text-[1.7rem] font-bold tracking-[-0.03em] text-slate-900 group-hover:text-violet-950 transition-colors">Reliable Delivery</h3>
            <p className="mt-2 sm:mt-3 text-[0.95rem] leading-[1.65] text-slate-600">
              From design to launch, the work is handled with quality, speed, and store-ready standards in mind.
            </p>
          </motion.article>

          {/* Card 4 - End-to-End Support (Amber) */}
          <motion.article 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="why-card relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="why-icon inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100/80 text-amber-600 shadow-[0_4px_20px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/20">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25A2.25 2.25 0 0 1 6 3h7.5l6.75 6.75V18A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V5.25Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 3v6.75h6.75" />
              </svg>
            </div>
            <h3 className="mt-5 sm:mt-6 text-2xl sm:text-[1.7rem] font-bold tracking-[-0.03em] text-slate-900 group-hover:text-amber-950 transition-colors">End-to-End Support</h3>
            <p className="mt-2 sm:mt-3 text-[0.95rem] leading-[1.65] text-slate-600">
              No need to manage multiple teams. We support planning, design, development, testing, and launch.
            </p>
          </motion.article>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 rounded-[2rem] border border-slate-200 bg-white/78 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] backdrop-blur-sm xl:p-8"
        >
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            <div className="stat-card flex flex-col items-center justify-center p-4">
              <p className="stat-number text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                <AnimatedNumber value={150} suffix="+" />
              </p>
              <p className="stat-label mt-2 text-sm sm:text-[0.95rem] font-semibold tracking-wide text-slate-500 uppercase text-center">Apps Delivered</p>
            </div>
            <div className="stat-card flex flex-col items-center justify-center p-4">
              <p className="stat-number text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                <AnimatedNumber value={15} suffix="+" />
              </p>
              <p className="stat-label mt-2 text-sm sm:text-[0.95rem] font-semibold tracking-wide text-slate-500 uppercase text-center">Years Experience</p>
            </div>
            <div className="stat-card flex flex-col items-center justify-center p-4">
              <p className="stat-number text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                <AnimatedNumber value={50} suffix="+" />
              </p>
              <p className="stat-label mt-2 text-sm sm:text-[0.95rem] font-semibold tracking-wide text-slate-500 uppercase text-center">Launches Supported</p>
            </div>
            <div className="stat-card flex flex-col items-center justify-center p-4">
              <p className="stat-number text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                <AnimatedNumber value={4.9} decimals={1} />
                <span className="text-2xl sm:text-3xl text-slate-400">/5</span>
              </p>
              <p className="stat-label mt-2 text-sm sm:text-[0.95rem] font-semibold tracking-wide text-slate-500 uppercase text-center">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tech Stack Marquee — full width, no curved edges */}
      <div className="relative w-full overflow-hidden border-y border-slate-700/20 bg-gradient-to-b from-[#06101d] to-[#040914] shadow-[0_24px_60px_rgba(2,6,23,0.22)] py-5 lg:py-6">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-[#06101d] to-transparent" aria-hidden="true"></div>
        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-[#040914] to-transparent" aria-hidden="true"></div>

        <div className="flex w-max items-center" style={{ animation: 'hero-marquee 22s linear infinite' }}>
          {/* Group 1 */}
          <div className="flex items-center gap-6 pr-6">
            <div className="inline-flex min-w-[12rem] sm:min-w-[16rem] items-center justify-center gap-3 rounded-[1.3rem] px-5 py-4 text-white text-xl sm:text-[1.8rem] font-extrabold tracking-tight">
              <Database className="h-7 w-7 sm:h-8 sm:w-8 text-[#ffca28] shrink-0" />
              <span>Firebase</span>
            </div>
            <div className="inline-flex min-w-[12rem] sm:min-w-[16rem] items-center justify-center gap-3 rounded-[1.3rem] px-5 py-4 text-white text-xl sm:text-[1.8rem] font-extrabold tracking-tight">
              <Smartphone className="h-7 w-7 sm:h-8 sm:w-8 text-[#ff5a3d] shrink-0" />
              <span>Swift</span>
            </div>
            <div className="inline-flex min-w-[12rem] sm:min-w-[16rem] items-center justify-center gap-3 rounded-[1.3rem] px-5 py-4 text-white text-xl sm:text-[1.8rem] font-extrabold tracking-tight">
              <Smartphone className="h-7 w-7 sm:h-8 sm:w-8 text-[#39d98a] shrink-0" />
              <span>Kotlin</span>
            </div>
            <div className="inline-flex min-w-[12rem] sm:min-w-[16rem] items-center justify-center gap-3 rounded-[1.3rem] px-5 py-4 text-white text-xl sm:text-[1.8rem] font-extrabold tracking-tight">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="h-7 w-7 sm:h-8 sm:w-8 text-[#61dafb] shrink-0">
                <circle cx="0" cy="0" r="2.05" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g>
              </svg>
              <span>React Native</span>
            </div>
            <div className="inline-flex min-w-[12rem] sm:min-w-[16rem] items-center justify-center gap-3 rounded-[1.3rem] px-5 py-4 text-white text-xl sm:text-[1.8rem] font-extrabold tracking-tight">
              <svg viewBox="0 0 100 100" className="h-7 w-7 sm:h-8 sm:w-8 text-[#54c5f8] shrink-0"><path d="M50 10L10 50l40 40 40-40L50 10z" fill="currentColor"/></svg>
              <span>Flutter</span>
            </div>
          </div>
          {/* Group 2 — duplicate for seamless loop */}
          <div className="flex items-center gap-6 pr-6" aria-hidden="true">
            <div className="inline-flex min-w-[12rem] sm:min-w-[16rem] items-center justify-center gap-3 rounded-[1.3rem] px-5 py-4 text-white text-xl sm:text-[1.8rem] font-extrabold tracking-tight">
              <Database className="h-7 w-7 sm:h-8 sm:w-8 text-[#ffca28] shrink-0" />
              <span>Firebase</span>
            </div>
            <div className="inline-flex min-w-[12rem] sm:min-w-[16rem] items-center justify-center gap-3 rounded-[1.3rem] px-5 py-4 text-white text-xl sm:text-[1.8rem] font-extrabold tracking-tight">
              <Smartphone className="h-7 w-7 sm:h-8 sm:w-8 text-[#ff5a3d] shrink-0" />
              <span>Swift</span>
            </div>
            <div className="inline-flex min-w-[12rem] sm:min-w-[16rem] items-center justify-center gap-3 rounded-[1.3rem] px-5 py-4 text-white text-xl sm:text-[1.8rem] font-extrabold tracking-tight">
              <Smartphone className="h-7 w-7 sm:h-8 sm:w-8 text-[#39d98a] shrink-0" />
              <span>Kotlin</span>
            </div>
            <div className="inline-flex min-w-[12rem] sm:min-w-[16rem] items-center justify-center gap-3 rounded-[1.3rem] px-5 py-4 text-white text-xl sm:text-[1.8rem] font-extrabold tracking-tight">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="h-7 w-7 sm:h-8 sm:w-8 text-[#61dafb] shrink-0">
                <circle cx="0" cy="0" r="2.05" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g>
              </svg>
              <span>React Native</span>
            </div>
            <div className="inline-flex min-w-[12rem] sm:min-w-[16rem] items-center justify-center gap-3 rounded-[1.3rem] px-5 py-4 text-white text-xl sm:text-[1.8rem] font-extrabold tracking-tight">
              <svg viewBox="0 0 100 100" className="h-7 w-7 sm:h-8 sm:w-8 text-[#54c5f8] shrink-0"><path d="M50 10L10 50l40 40 40-40L50 10z" fill="currentColor"/></svg>
              <span>Flutter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
