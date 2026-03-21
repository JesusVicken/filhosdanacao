 'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, Play } from 'lucide-react'

// Animações
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    // Reveal inicial com GSAP
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

    tl.from('.hero-video', {
      scale: 1.2,
      duration: 2,
    })
    .from('.hero-content > *', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    }, "-=1.5")
  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* 1. BACKGROUND VIDEO CINEMÁTICO */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video w-full h-full object-cover opacity-60"
          src="/bg.mp4"
        />
        {/* Overlays para profundidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950" />
        <div className="absolute inset-0 bg-slate-950/20" />
      </div>

      {/* 2. CONTEÚDO PRINCIPAL */}
      <div className="hero-content relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* LOGO FDN - Nítida e com Glow sutil */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="relative w-40 h-40 md:w-56 md:h-56 mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
        >
          <Image 
            src="/fdnlogo.png" 
            alt="Logo Filhos da Nação" 
            fill 
            priority
            className="object-contain brightness-0 invert" 
          />
        </motion.div>

        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-6">
            REMOTERAPIA E <br />
            <span className="text-blue-500 italic">SUPERAÇÃO</span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-300 font-light max-w-2xl mb-10 leading-relaxed">
            Transformando o futuro de crianças e adolescentes através do mar e da canoa havaiana.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 items-center">
          <button className="group relative px-8 py-4 bg-white text-slate-950 font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <span className="relative z-10 flex items-center gap-2">
              APOIE O PROJETO
              <Play size={18} className="fill-slate-950" />
            </span>
          </button>
          
          <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full backdrop-blur-md hover:bg-white/10 transition-all">
            VER METODOLOGIA
          </button>
        </div>
      </div>

      {/* 3. INDICADOR DE SCROLL ABAIXO */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase">Explore</span>
            <ArrowDown size={20} className="text-white opacity-50" />
        </div>
      </motion.div>

      {/* Grafismo Lateral Sutil */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 opacity-20">
        <div className="w-[1px] h-32 bg-gradient-to-t from-blue-500 to-transparent" />
        <span className="rotate-90 text-[10px] font-black tracking-[0.5em] uppercase text-white origin-left">Est. 2017</span>
      </div>
    </section>
  )
}