"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HighlightsPage() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Initial Load Sequence
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // Fade in background and move it up slightly for a parallax feel
    tl.fromTo(".bg-image",
      { opacity: 0, y: 30 },
      { opacity: 0.5, y: 0, duration: 0.8, ease: "power2.out" }
    )
      .fromTo(".heading-svg",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.6"
      )
      // Staggered entry for the highlight rows
      .fromTo(".animate-box",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" },
        "-=0.3"
      );
  }, { scope: containerRef });

  return (
    <main
      ref={containerRef}
      /* pb-[240px] (approx pb-60) provides the final spacing adjustment. 
         If you need it even lower, increase 240 to 255.
      */
      className="relative min-h-screen bg-black text-white flex flex-col items-center pt-20 pb-[240px] px-6 md:px-12 overflow-x-hidden"
    >
      <div className="bg-image absolute inset-0 z-0 pointer-events-none h-full">
        <Image
          src="/Hightlights background.svg"
          alt="Cityscape Silhouettes"
          fill
          sizes="100vw"
          priority
          className="object-cover object-bottom md:object-bottom transform scale-[1.12] -translate-y-[6%] md:scale-100 md:translate-y-0"
        />
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .clip-row1-left { clip-path: polygon(0 0, 100% 0, calc(100% - 30px) 100%, 0 100%); }
        .clip-row1-right { clip-path: polygon(30px 0, 100% 0, 100% 100%, 0 100%); }
        .clip-row2-left { clip-path: polygon(0 0, calc(100% - 30px) 0, 100% 100%, 0 100%); }
        .clip-row2-right { clip-path: polygon(30px 0, 100% 0, 100% 100%, 0 100%); }

        @media (min-width: 768px) {
          .clip-row1-left { clip-path: polygon(0 0, 100% 0, calc(100% - 100px) 100%, 0 100%); }
          .clip-row1-right { clip-path: polygon(100px 0, 100% 0, 100% 100%, 0 100%); }
          .clip-row2-left { clip-path: polygon(0 0, calc(100% - 100px) 0, 100% 100%, 0 100%); }
          .clip-row2-right { clip-path: polygon(100px 0, 100% 0, 100% 100%, 0 100%); }
        }
      `}} />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">

        {/* 2. HEADING SVG */}
        <div className="heading-svg relative w-64 md:w-96 h-24 mb-4">
          <Image
            src="/Highlights Text.svg"
            alt="Highlights"
            fill
            priority
            className="object-contain object-left"
          />
        </div>

        {/* --- ROW 1 --- */}
        <div className="flex w-full h-52 md:h-[400px] gap-2 md:gap-4">
          {/* Box 1: Image Left with Slant Out */}
          <div
            className="clip-row1-left animate-box group relative w-[42%] overflow-hidden bg-zinc-900 cursor-pointer border border-white/5 shadow-2xl transition-all duration-500 hover:z-20"
          >
            <Image
              src="/image1.jpg"
              alt="H1"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0 scale-[1.02] group-hover:scale-110"
            />
          </div>

          {/* Box 2: Dark Red Right with Slant In */}
          <div
            className="clip-row1-right animate-box group relative flex-1 overflow-hidden bg-[#2a0a0a] cursor-pointer border border-white/5 shadow-2xl transition-all duration-500 hover:z-20"
          >
            <Image
              src="/image2.jpg"
              alt="H2"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0 scale-[1.02] group-hover:scale-110"
            />
            {/* Subtle color overlay to keep it "Dark Red" until hovered */}
            <div className="absolute inset-0 bg-[#2a0a0a]/30 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>

        {/* --- ROW 2 --- */}
        <div className="flex w-full h-52 md:h-[400px] gap-2 md:gap-4">
          {/* Box 3: Dark Red Left with Slant Out */}
          <div
            className="clip-row2-left animate-box group relative flex-1 overflow-hidden bg-[#2a0a0a] cursor-pointer border border-white/5 shadow-2xl transition-all duration-500 hover:z-20"
          >
            <Image
              src="/image3.jpg"
              alt="H3"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0 scale-[1.02] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#2a0a0a]/30 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          {/* Box 4: Image Right with Slant In */}
          <div
            className="clip-row2-right animate-box group relative w-[42%] overflow-hidden bg-zinc-900 cursor-pointer border border-white/5 shadow-2xl transition-all duration-500 hover:z-20"
          >
            <Image
              src="/image4.jpg"
              alt="H4"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0 scale-[1.02] group-hover:scale-110"
            />
          </div>
        </div>

        {/* --- GALLERY BUTTON --- */}
        <div className="animate-box flex justify-center w-full mt-8 md:mt-12 z-20 pb-4">
          <a
            href="/gallery"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-black border-4 border-black text-3xl md:text-5xl uppercase transition-all duration-300 transform -rotate-2 hover:rotate-1 hover:scale-105 shadow-[6px_6px_0px_0px_rgba(220,38,38,1)] hover:shadow-[10px_10px_0px_0px_rgba(220,38,38,1)]"
            style={{ fontFamily: "'Bangers', cursive", letterSpacing: "2px" }}
          >
            <span>RELIVE THE MOMENTS!</span>

            {/* Extra comic accents */}
            <div className="absolute -top-4 -right-4 md:-top-5 md:-right-6 bg-white border-4 border-black text-red-600 text-sm md:text-lg font-sans font-black px-2 py-1 transform rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-0 transition-transform">
              GALLERY
            </div>
          </a>
        </div>

      </div>
    </main>
  );
}