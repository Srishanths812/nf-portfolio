'use client';

import React, { useState, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function NITTFESTEvents() {
  const [isOpen, setIsOpen] = useState(false);

  // Refs for GSAP animations
  const containerRef = useRef(null);
  const eventsRef = useRef(null);
  const ironmanRef = useRef(null);
  const bookRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    const scrollerNode = document.querySelector("#main-scroll-container");

    // 1. Initial Load Sequence
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        ...(scrollerNode && { scroller: scrollerNode }),
      }
    });

    tl.from(eventsRef.current, {
      y: -50, opacity: 0, duration: 0.8, ease: "power3.out"
    })
      .from(ironmanRef.current, {
        x: -100, opacity: 0, duration: 0.8, ease: "power3.out"
      }, "-=0.4")
      .from(bookRef.current, {
        scale: 0.8, opacity: 0, rotation: -2, duration: 1, ease: "back.out(1.5)"
      }, "-=0.4")
      .from(buttonRef.current, {
        y: 50, opacity: 0, duration: 0.6, ease: "power3.out",
        onComplete: () => {
          // 2. Continuous Floating Effects
          gsap.to(ironmanRef.current, {
            y: "-=15",
            duration: 2.5,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
          });

          gsap.to(bookRef.current, {
            y: "-=10",
            duration: 3,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
          });
        }
      }, "-=0.6");

  }, { scope: containerRef });

  return (
    <main
      ref={containerRef}
      className="relative w-screen min-h-screen"
    >
      {/* Background Image */}
      <img
        src="/assets/landingpage/events-sunburst-bg.jpeg"
        alt="Events Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* 1. EVENTS TEXT */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 z-20 w-[60%] md:w-[25%] max-w-[350px]">
        <div ref={eventsRef}>
          <img
            src="/EVENTS_TEXT.svg"
            alt="Events"
            className="w-full h-auto drop-shadow-xl"
          />
        </div>
      </div>

      {/* 2. IRON MAN */}
      <div className="absolute bottom-[2%] md:bottom-[5%] left-1/2 -translate-x-1/2 md:left-[10%] md:translate-x-0 z-10 w-[50%] md:w-[30%] h-[40%] md:h-[60%] flex justify-center md:justify-start items-end pointer-events-none">
        <div ref={ironmanRef} className="w-full h-full flex justify-center md:justify-start items-end">
          <img
            src="/Ironman.png"
            alt="Ironman"
            className="max-w-full max-h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>

      {/* 3. BOOK COVER */}
      <div className="absolute top-[10%] md:top-[12%] left-1/2 -translate-x-1/2 md:left-auto md:right-[10%] md:translate-x-0 scale-[1.25] md:scale-[1.35] z-30 w-[85%] md:w-[50%] h-[50%] md:h-[80%] flex items-center md:items-start justify-center md:justify-end">
        <div ref={bookRef} className="h-full w-full flex justify-center md:justify-end">
          <button
            onClick={() => setIsOpen(true)}
            className="relative h-full w-full flex justify-center md:justify-end transition-transform hover:scale-105 active:scale-95 duration-500"
          >
            <img
              src="/Book_cover.svg"
              alt="NITTFEST Archive"
              className="h-full w-auto max-w-full object-contain drop-shadow-[50px_50px_100px_rgba(0,0,0,0.9)] rounded-r-4xl"
            />
          </button>
        </div>
      </div>

      {/* 4. STYLISH BUTTON */}
      <div className="absolute bottom-0 right-0 z-40">
        <div ref={buttonRef}>
          <button
            onClick={() => setIsOpen(true)}
            className="px-6 py-3 md:px-10 md:py-5 bg-[#FFD700] text-black font-black italic uppercase tracking-[0.15em] text-sm md:text-xl border-t-4 border-l-4 border-black rounded-tl-2xl hover:bg-white transition-colors duration-300"
          >
            Click the Book to Open
          </button>
        </div>
      </div>

      {/* 5. DIRECT 2-PAGE SPREAD OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-white bg-white/10 w-14 h-14 rounded-full flex items-center justify-center text-2xl hover:bg-white hover:text-black transition-all z-60"
          >
            ✕
          </button>

          {/* EXACT SIZING FIX: Height is strictly 80vh, width is mathematically calculated based on the 2-page aspect ratio (1100/750 = 1.46) */}
          <div className="h-[80vh] w-[calc(80vh*1.46)] max-w-[95vw] flex items-center justify-center">
            <HTMLFlipBook
              width={550}
              height={750}
              size="stretch"
              showCover={false}
              className="book-no-box"
              startPage={0}
            >
              {/* Internal 6 Pages */}
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white border-l-2 border-zinc-300 h-full w-full p-8 overflow-hidden shadow-2xl">
                  <div className="grid grid-cols-3 grid-rows-4 gap-3 h-full border-8 border-black p-3 bg-zinc-50">
                    <div className="border-4 border-black bg-zinc-200 row-span-2"></div>
                    <div className="border-4 border-black bg-zinc-200 row-span-2"></div>
                    <div className="border-4 border-black bg-zinc-200"></div>
                    <div className="border-4 border-black bg-zinc-200"></div>

                    <div className="border-4 border-black bg-black col-span-3 flex items-center justify-center">
                      <span className="text-white font-black italic uppercase text-2xl md:text-3xl">Page 0{i + 1}</span>
                    </div>

                    <div className="border-4 border-black bg-zinc-200"></div>
                    <div className="border-4 border-black bg-zinc-200"></div>
                    <div className="border-4 border-black bg-black text-white p-2 text-xs font-bold flex items-end">DATA_{i + 1}</div>
                  </div>
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </div>
      )}

      <style jsx global>{`
        .stf__parent, .stf__block {
          background: transparent !important;
        }
        .book-no-box {
          filter: drop-shadow(0 0 100px rgba(0,0,0,1));
        }
      `}</style>
    </main>
  );
}