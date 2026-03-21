'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

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
        {/* Overlays para profundidade e garantir paleta escura */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
        <div className="absolute inset-0 bg-slate-950/30" />
      </div>

      {/* 2. CONTEÚDO PRINCIPAL */}
      <div className="hero-content relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* 🔥 LOGO FDN CORRIGIDA: Cores originais e Nítida 🔥 */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="relative w-40 h-40 md:w-56 md:h-56 mb-8 transition-transform duration-500"
        >
          {/* Adicionei uma borda branca sutil e fundo escuro para destacar se a logo for azul */}
          <div className="absolute inset-0 rounded-full bg-slate-900/50 backdrop-blur-sm border border-white/10 shadow-2xl scale-110" />
          <Image 
            src="/fdnlogo.png" 
            alt="Logo Filhos da Nação" 
            fill 
            priority
            className="relative z-10 object-contain p-4" // Removi brightness-0 invert
          />
        </motion.div>

        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-6">
            REMOTERAPIA E <br />
            <span className="text-blue-500 italic uppercase">Superação</span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-300 font-light max-w-2xl mb-12 leading-relaxed">
            Transformando o futuro de crianças e adolescentes através do mar e da canoa havaiana.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 items-center">
          <button className="group relative px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] active:scale-95">
              APOIE O PROJETO
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

    </section>
  )
}