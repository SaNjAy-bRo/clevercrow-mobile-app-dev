'use client';

import { useEffect, useRef } from 'react';
import { Smartphone, Users, Rocket, Zap, Cpu } from "lucide-react";

export default function Hero() {
  const parallaxRootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const parallaxRoot = parallaxRootRef.current;
    
    if (!parallaxRoot) return;
    
    const parallaxItems = parallaxRoot.querySelectorAll<HTMLElement>('[data-parallax]');
    const heroLanes = parallaxRoot.querySelectorAll<HTMLElement>('.hero-diagonal-lane');

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
      
      <style>{`
        @keyframes scroll-mobile {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-mobile {
          animation: scroll-mobile 30s linear infinite;
        }
      `}</style>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Text Content */}
          <div data-parallax="0.05" className="max-w-2xl lg:w-[55%] pt-10 lg:pt-0">
            <p className="mb-4 inline-flex shadow-sm shadow-blue-500/20 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">Mobile App Development Packages</p>
            <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl tracking-tight">
              Your Mobile App.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-amber to-[#f59e0b]">Built to Convert.</span><br />Designed to Impress.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">High-performing mobile applications for businesses that need leads, engagement, and growth. Fast, native-feeling experiences built for iOS and Android.</p>
            
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-lg">
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-md shadow-sm">
                <Smartphone className="text-[#61DAFB] text-xl" />
                <span className="text-sm font-semibold text-slate-100">iOS & Android Apps</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-md shadow-sm">
                <Users className="text-emerald-400 text-xl" />
                <span className="text-sm font-semibold text-slate-100">550+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-md shadow-sm">
                <Rocket className="text-purple-400 text-xl" />
                <span className="text-sm font-semibold text-slate-100">Fast App Store Launch</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-md shadow-sm">
                <Zap className="text-amber-400 text-xl" />
                <span className="text-sm font-semibold text-slate-100">Seamless Experience</span>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#tech-stack" className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-amber text-brand-night px-8 py-4 text-sm font-bold transition hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] shadow-lg">
                <Cpu className="text-lg" />Explore Our App Stack
              </a>
              <button data-open-modal data-modal-title="Request App Proposal" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10 backdrop-blur-md">
                Get a Quote
              </button>
            </div>
          </div>

          {/* Right Mobile Phone Mockup Carousel */}
          <div data-parallax="0.1" className="relative lg:w-[45%] flex justify-center lg:justify-end perspective-[1000px]">
             
             {/* Glowing aura behind phone */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#61DAFB]/30 blur-[100px] rounded-full"></div>
             
             {/* Phone Body Container */}
             <div className="relative w-[280px] sm:w-[320px] aspect-[9/19.5] rounded-[3rem] border-[14px] border-black bg-black shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.1)_inset] transform-gpu lg:-rotate-y-12 lg:rotate-x-12 transition-transform duration-700 hover:rotate-0 overflow-hidden shrink-0 mt-8 lg:mt-0 z-20">
               
               {/* Dynamic Island / Camera Notch */}
               <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-black z-30 flex items-center justify-end px-2 shadow-inner">
                  <div className="w-2 h-2 rounded-full bg-[#111] shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]"></div>
               </div>
               
               {/* Screen / Display Area */}
               <div className="relative w-full h-full bg-slate-900 rounded-[2rem] overflow-hidden">
                 {/* Infinite Vertical Scrolling Carousel */}
                 <div className="absolute inset-x-0 top-0 flex flex-col animate-scroll-mobile">
                   {/* Set 1 */}
                   <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&h=1300" alt="Mobile App UI" className="w-full aspect-[9/19.5] object-cover shrink-0" />
                   <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=1300" alt="Mobile App Dashboard" className="w-full aspect-[9/19.5] object-cover shrink-0" />
                   <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=600&h=1300" alt="Banking App Custom" className="w-full aspect-[9/19.5] object-cover shrink-0" />
                   
                   {/* Set 2 (Duplicate for infinite scroll) */}
                   <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&h=1300" alt="Mobile App UI" className="w-full aspect-[9/19.5] object-cover shrink-0" />
                   <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=1300" alt="Mobile App Dashboard" className="w-full aspect-[9/19.5] object-cover shrink-0" />
                   <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=600&h=1300" alt="Banking App Custom" className="w-full aspect-[9/19.5] object-cover shrink-0" />
                 </div>
               </div>
               
               {/* Home Indicator line */}
               <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 rounded-full bg-white/50 z-30"></div>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
}
