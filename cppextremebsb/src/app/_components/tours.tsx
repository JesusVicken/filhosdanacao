'use client'

import { useEffect, useRef } from 'react'
import { Check, Clock, MapPin, CalendarBlank, Anchor } from '@phosphor-icons/react'
import Image from 'next/image'
import gsap from 'gsap'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function Tours() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })

    const ctx = gsap.context(() => {
      gsap.from(".tours-reveal", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-black py-24 px-4 md:px-6 border-t border-white/10">
      <div className="container mx-auto max-w-7xl">

        {/* --- CABEÇALHO --- */}
        <div className="text-center mb-16 md:mb-20 tours-reveal">
          <span className="text-[10px] font-black text-white bg-white/10 px-4 py-1.5 rounded-full uppercase tracking-[0.25em] mb-4 inline-block border border-white/10">
            Imersão Técnica
          </span>
          <h2 className="text-4xl md:text-8xl font-black text-white uppercase leading-none mb-6 tracking-tighter">
            Cronograma <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-700">Oficial</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light italic px-4">
            "A teoria da oceanografia aplicada à prática do Va'a moderno."
          </p>
        </div>

        {/* --- GRID DE CARDS --- */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">

          {/* CARD 01: VA'A GERAL (SEXTA E SÁBADO) */}
          <div
            className="group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-900 flex flex-col transition-all duration-500 hover:border-white/40"
            data-aos="fade-up"
          >
            {/* Imagem de Fundo */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/ranin5.jpg"
                alt="Clínica Va'a Geral"
                fill
                className="object-cover brightness-[0.3] group-hover:brightness-[0.5] group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
            </div>

            {/* Conteúdo */}
            <div className="relative z-10 flex flex-col p-6 md:p-12">
              <div className="flex justify-between items-start mb-12 md:mb-20">
                <div className="flex flex-col gap-2">
                  <div className="bg-white text-black text-[10px] font-black px-3 py-1 uppercase tracking-widest self-start rounded-sm">
                    Sexta • 27/02
                  </div>
                  <div className="bg-white text-black text-[10px] font-black px-3 py-1 uppercase tracking-widest self-start rounded-sm">
                    Sábado • 28/02
                  </div>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                  <CalendarBlank size={20} className="text-white" />
                </div>
              </div>

              <div>
                <h3 className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.8] mb-6 tracking-tighter">
                  Va'a <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">Geral</span>
                </h3>

                <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                  <span className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold uppercase border border-white/10 text-white">
                    <Clock size={14} weight="fill" /> Sex: 18h40 - 20h
                  </span>
                  <span className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold uppercase border border-white/10 text-white">
                    <Clock size={14} weight="fill" /> Sáb: 08h - 11h
                  </span>
                </div>

                {/* Lista de Tópicos - Ajustada para expor tudo no Mobile */}
                <div className="bg-black/60 backdrop-blur-xl p-6 rounded-3xl border border-white/10 group-hover:border-white/30 transition-all">
                  <h4 className="text-zinc-500 font-black uppercase mb-4 tracking-[0.2em] text-[10px] border-b border-white/10 pb-2">Módulo 01: Fundamentos</h4>
                  <ul className="space-y-4 md:space-y-3">
                    {[
                      "Surgimento e evolução da técnica tahitiana moderna",
                      "Evolução das canoas e remos",
                      "Técnica Tahitiana vs Havaiana",
                      "Tipos de remada: huti pa'ari, pe'e, roa e tatara",
                      "Condições: Contra, a favor e laterais",
                      "Comandos: Competição, Travessia e Downwaves",
                      "Bioquímica e Biofísica da respiração no Va'a",
                      "Padrões de respiração para alta performance"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 group-hover:text-white transition-colors leading-snug">
                        <Check size={16} className="text-white mt-0.5 shrink-0" weight="bold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 02: LEME PRO (DOMINGO) */}
          <div
            className="group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-900 flex flex-col transition-all duration-500 hover:border-white/40"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="/ranin4.jpg"
                alt="Leme Avançado"
                fill
                className="object-cover brightness-[0.3] group-hover:brightness-[0.5] group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
            </div>

            <div className="relative z-10 flex flex-col p-6 md:p-12">
              <div className="flex justify-between items-start mb-12 md:mb-20">
                <div className="bg-white text-black text-[10px] font-black px-4 py-2 uppercase tracking-widest rounded-sm">
                  Domingo • 01/03
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                  <Anchor size={20} weight="fill" className="text-white" />
                </div>
              </div>

              <div>
                <h3 className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.8] mb-6 tracking-tighter">
                  Técnica <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600 font-black">Leme</span>
                </h3>

                <div className="flex items-center gap-3 mb-8">
                  <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase border border-white/20 text-white">
                    <Clock size={14} weight="fill" /> 08h00 às 11h00
                  </span>
                </div>

                {/* Lista de Tópicos - Ajustada para expor tudo no Mobile */}
                <div className="bg-black/60 backdrop-blur-xl p-6 rounded-3xl border border-white/10 group-hover:border-white/30 transition-all">
                  <h4 className="text-zinc-500 font-black uppercase mb-4 tracking-[0.2em] text-[10px] border-b border-white/10 pb-2">Módulo 02: Masterclass Leme</h4>
                  <ul className="space-y-4 md:space-y-3">
                    {[
                      "Navegação, planejamento e previsão ambiental",
                      "Análise das condições locais e tipos de barco",
                      "Técnicas: Remada frente, 45º e Puxada lateral",
                      "Leme em faca e Faca lateral (aquática/aérea)",
                      "Utilização técnica conforme condições ambientais",
                      "Sinergia: Reação vs Antecipação",
                      "Estratégia: Curva de boia e Largada",
                      "Didáticas de treino para novos lemes"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 group-hover:text-white transition-colors leading-snug">
                        <Check size={16} className="text-white mt-0.5 shrink-0" weight="bold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* --- LOCALIZAÇÃO RODAPÉ --- */}
        <div className="mt-16 flex flex-col items-center tours-reveal">
          <div className="flex items-center gap-3 bg-zinc-900 border border-white/10 px-8 py-4 rounded-full">
            <MapPin size={20} className="text-white" weight="fill" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white text-center">
              Base CPP Extreme BSB
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}