'use client';

import { useEffect, useRef } from 'react';
import { Smartphone, Users, Rocket, Zap, Cpu } from "lucide-react";

const heroApps = [
  { src: '/mobile apps/hero/hero2.jpeg', alt: 'Travel App' },
  { src: '/mobile apps/hero/hero1.jpeg', alt: 'Food Delivery App' },
  { src: '/mobile apps/hero/hero5.jpeg', alt: 'E-Commerce App' },
  { src: '/mobile apps/hero/hero3.jpeg', alt: 'Education App' },
  { src: '/mobile apps/hero/hero4.jpeg', alt: 'Real Estate App' },
  { src: '/mobile apps/hero/hero6.jpeg', alt: 'Fitness App' },
];

export default function Hero() {
  const parallaxRootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const parallaxRoot = parallaxRootRef.current;

    if (!parallaxRoot) return;

    const parallaxItems = parallaxRoot.querySelectorAll<HTMLElement>('[data-parallax]');

    if (!prefersReducedMotion && parallaxItems.length > 0) {
      const baseTransforms = new Map();
      parallaxItems.forEach((item) => {
        const currentTransform = window.getComputedStyle(item).transform;
        baseTransforms.set(item, currentTransform === 'none' ? '' : currentTransform);
      });

      let rafRunning = false;
      const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
      const updateParallax = () => {
        if (!parallaxRoot) return;
        const rect = parallaxRoot.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const sectionTop = window.scrollY + rect.top;
        const sectionHeight = rect.height;
        const scrollProgress = clamp(
          (window.scrollY - sectionTop + windowHeight * 0.35) / (sectionHeight + windowHeight * 0.35),
          0,
          1
        );
        const centered = (scrollProgress - 0.5) * 2;

        parallaxItems.forEach((item) => {
          const depth = Number(item.dataset.parallax || '0');
          const moveY = centered * depth * 260;
          const moveX = centered * depth * -140;
          const scale = 1 + Math.abs(centered) * depth * 0.08;
          const base = baseTransforms.get(item) || '';
          item.style.transform = `${base} translate3d(${moveX}px, ${moveY}px, 0) scale(${scale})`;
        });

        rafRunning = false;
      };

      const requestParallax = () => {
        if (!rafRunning) {
          rafRunning = true;
          window.requestAnimationFrame(updateParallax);
        }
      };

      window.addEventListener('scroll', requestParallax, { passive: true });
      window.addEventListener('resize', requestParallax);
      requestParallax();

      return () => {
        window.removeEventListener('scroll', requestParallax);
        window.removeEventListener('resize', requestParallax);
      };
    }
  }, []);

  return (
    <section id="top" ref={parallaxRootRef} className="hero-parallax-wrap relative overflow-hidden bg-brand-night text-white min-h-[90vh] flex items-center">
      <div className="hero-noise"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,.15),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(45,212,191,.15),transparent_40%),radial-gradient(circle_at_65%_80%,rgba(30,64,175,.2),transparent_42%)]"></div>



      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Left Text Content */}
          <div data-parallax="0.05" className="max-w-2xl lg:w-[50%] pt-10 lg:pt-0 text-center lg:text-left">
            <p className="mb-4 inline-flex shadow-sm shadow-blue-500/20 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">Mobile App Development Packages</p>
            <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl tracking-tight">
              Your Mobile App.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-amber to-[#f59e0b]">Built to Convert.</span><br />Designed to Impress.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300 mx-auto lg:mx-0">High-performing mobile applications for businesses that need leads, engagement, and growth. Fast, native-feeling experiences built for iOS and Android.</p>

            <div className="mt-8 grid grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-md shadow-sm">
                <Smartphone className="text-[#61DAFB] text-xl shrink-0" />
                <span className="text-sm font-semibold text-slate-100">iOS & Android Apps</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-md shadow-sm">
                <Users className="text-emerald-400 text-xl shrink-0" />
                <span className="text-sm font-semibold text-slate-100">550+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-md shadow-sm">
                <Rocket className="text-purple-400 text-xl shrink-0" />
                <span className="text-sm font-semibold text-slate-100">Fast App Store Launch</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-md shadow-sm">
                <Zap className="text-amber-400 text-xl shrink-0" />
                <span className="text-sm font-semibold text-slate-100">Seamless Experience</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#portfolio" className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-amber text-brand-night px-8 py-4 text-sm font-bold transition hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] shadow-lg">
                <Cpu className="text-lg" />Explore Portfolio
              </a>
              <button data-open-modal data-modal-title="Request App Proposal" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10 backdrop-blur-md">
                Get a Quote
              </button>
            </div>
          </div>

          {/* Right — Multi-Device App Showcase */}
          <div data-parallax="0.08" className="relative lg:w-[50%] flex justify-center items-center min-h-[400px] sm:min-h-[480px] lg:min-h-[520px]">

            {/* Glowing aura behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-amber/15 blur-[120px] rounded-full"></div>
            <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-[#61DAFB]/20 blur-[80px] rounded-full"></div>

            {/* 3-Phone Fan Layout */}
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] h-[400px] sm:h-[460px] lg:h-[500px]">

              {/* Back-left phone */}
              <div className="absolute left-0 sm:left-2 top-8 sm:top-6 w-[140px] sm:w-[165px] z-10">
                <div className="rounded-[1.5rem] sm:rounded-[1.8rem] border-[6px] sm:border-[8px] border-slate-800/90 bg-slate-900 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-700">
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <img src={heroApps[0].src} alt={heroApps[0].alt} className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Center phone — largest, most prominent */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[170px] sm:w-[200px] z-30">
                <div className="rounded-[1.8rem] sm:rounded-[2rem] border-[7px] sm:border-[10px] border-black bg-black shadow-[0_30px_80px_-10px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.08)_inset] overflow-hidden transform hover:scale-105 transition-transform duration-700">
                  {/* Notch */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-4 sm:h-5 rounded-full bg-black z-30"></div>
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <img src={heroApps[1].src} alt={heroApps[1].alt} className="w-full h-full object-cover object-center" />
                  </div>
                  {/* Home indicator */}
                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1/3 h-1 rounded-full bg-white/40 z-30"></div>
                </div>
              </div>

              {/* Back-right phone */}
              <div className="absolute right-0 sm:right-2 top-8 sm:top-6 w-[140px] sm:w-[165px] z-10">
                <div className="rounded-[1.5rem] sm:rounded-[1.8rem] border-[6px] sm:border-[8px] border-slate-800/90 bg-slate-900 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-700">
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <img src={heroApps[2].src} alt={heroApps[2].alt} className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Bottom row — smaller floating app cards */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3 sm:gap-4 z-20">
                {heroApps.slice(3).map((app, i) => (
                  <div key={i}>
                    <div className="w-[80px] sm:w-[100px] rounded-xl sm:rounded-2xl border-[4px] sm:border-[5px] border-slate-800/80 bg-slate-900 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.6)] overflow-hidden hover:scale-110 transition-transform duration-500">
                      <div className="aspect-[9/16] overflow-hidden">
                        <img src={app.src} alt={app.alt} className="w-full h-full object-cover object-center" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
