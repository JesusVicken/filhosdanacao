'use client'

import { useEffect, useRef } from 'react'
import { Check, Waves, Users, ShieldCheck, Heart, ArrowDown } from '@phosphor-icons/react'
import Image from 'next/image'
import gsap from 'gsap'
import AOS from 'aos'
import 'aos/dist/aos.css'

// DADOS DAS FRENTES DE ATUAÇÃO
const frentes = [
  {
    id: 1,
    tag: 'A Prática no Lago',
    icon: Waves,
    title1: 'SUP &',
    title2: 'Canoa',
    image: '/canoa1.jpg',
    topicos: [
      'Combate ao sedentarismo',
      'Conexão direta com a natureza',
      'Disciplina e Foco',
      'Trabalho em equipe',
      'Resgate da diversão'
    ]
  },
  {
    id: 2,
    tag: 'O Cuidado com a Mente',
    icon: Heart,
    title1: 'Mente &',
    title2: 'Cura',
    image: '/filhos2.jpg',
    topicos: [
      'Autoestima e Identidade',
      'Ressignificação de traumas',
      'Apoio emocional à maioridade',
      'Autoconfiança e Empoderamento',
      'Aval oficial da Vara da Infância'
    ]
  }
]

export function Tours() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })

    const ctx = gsap.context(() => {
      // Entrada triunfal do cabeçalho
      gsap.from(".tours-reveal", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out"
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-screen flex flex-col items-center justify-center bg-slate-950 text-white overflow-hidden border-y border-white/5"
    >
      
      {/* --- 🔥 BACKGROUND VÍDEO EXTREMAMENTE APARENTE 🔥 --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70 transition-opacity duration-1000"
          src="/bg.mp4" // O vídeo agora é o protagonista colorido e nítido
        />
        {/* Overlays Pro: Gradientes Sutis apenas para blendar com o topo/rodapé */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950 via-slate-950/50 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10" />
      </div>

      {/* --- CONTEÚDO PRINCIPAL (Flutuando sobre o vídeo) --- */}
      <div className="container mx-auto max-w-7xl relative z-20 h-full flex flex-col justify-between py-12 md:py-20 px-4 md:px-6">

        {/* --- CABEÇALHO (Centralizado e Moderno) --- */}
        <div className="text-center tours-reveal mt-10 md:mt-0">
          <span className="text-[10px] font-black text-white bg-white/5 px-5 py-2 rounded-full uppercase tracking-[0.3em] mb-5 inline-block border border-white/10 backdrop-blur-md shadow-xl shadow-black/20">
            Metodologia de Impacto
          </span>
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-black text-white uppercase leading-none mb-6 tracking-tighter drop-shadow-2xl">
            Como <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-400">Atuamos</span>
          </h2>
          <p className="text-slate-200 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg">
            "Unimos os esportes a remo com aos princípios da psicologia junguiana para gerar pertencimento real e ampliar as possibilidades de vida de crianças e jovens.”
          </p>
        </div>

        {/* --- GRID/CARROSSEL DE FRENTES (Absurdo/Moderno) --- */}
        {/* No mobile: carrossel horizontal snap. No desktop: grid centralizado. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center justify-center 
          flex flex-row overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          md:flex-none md:overflow-visible pb-10 md:pb-0
        ">
          
          {frentes.map((item, index) => (
            <div
              key={item.id}
              className="group relative h-[450px] md:h-[550px] rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-white/5 flex flex-col transition-all duration-700 hover:border-blue-500/30 shadow-2xl shrink-0 w-[90vw] snap-center md:w-full md:shrink
                bg-slate-950/20 backdrop-blur-2xl" // 🔥 Efeito Vidro Soprado Absurdo 🔥
              data-aos={index === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 200}
            >
              {/* Imagem de Fundo Interna do Card (Opacidade Baixa para destacar o vídeo principal) */}
              <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-50 transition-opacity duration-1000">
                <Image
                  src={item.image}
                  alt={item.title1}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>

              {/* Conteúdo do Card */}
              <div className="relative z-10 flex flex-col p-8 md:p-12 h-full justify-between">
                
                <div className="flex justify-between items-start mb-12">
                  <div className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg ${index === 0 ? 'bg-blue-600 text-white shadow-blue-900/40' : 'bg-white text-slate-950'}`}>
                    {item.tag}
                  </div>
                  <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md">
                    <item.icon size={24} className="text-blue-400" weight="fill" />
                  </div>
                </div>

                <div>
                  <h3 className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.85] mb-8 tracking-tighter drop-shadow-2xl">
                    {item.title1} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">{item.title2}</span>
                  </h3>

                  <div className="bg-slate-950/50 backdrop-blur-lg p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 group-hover:border-blue-500/20 transition-all">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                      {item.topicos.map((topico, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-300 group-hover:text-white transition-colors font-light">
                          <Check size={16} className="text-blue-500 shrink-0" weight="bold" />
                          {topico}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* --- RODAPÉ: O PÚBLICO (Moderno & Minimalista) --- */}
        <div className="tours-reveal flex justify-center mt-10 md:mt-0">
          <div className="flex flex-col md:flex-row items-center gap-4 bg-slate-950/50 backdrop-blur-lg border border-white/5 px-8 py-5 rounded-full shadow-2xl shadow-black/20">
            <div className="flex items-center gap-3">
              <ShieldCheck size={30} className="text-blue-500" weight="fill" />
              <div className="text-left leading-tight">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Público</p>
                <p className="text-white font-bold text-sm">6 a 17 anos</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/5 mx-2" />
            <div className="flex items-center gap-3 text-center md:text-left leading-tight">
              <Users size={30} className="text-blue-500 hidden md:block" weight="fill" />
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Abrangência</p>
                <p className="text-white font-bold text-sm">Cadastro Nacional de Adoção</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Seta Decorativa para Baixo (Indica Roll) */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/30 animate-bounce">
        <ArrowDown size={24} />
      </div>

    </section>
  )
}