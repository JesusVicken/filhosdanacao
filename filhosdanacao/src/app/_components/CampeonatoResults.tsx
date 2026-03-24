'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Trophy, Medal, AirplaneTilt, Star } from '@phosphor-icons/react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import AOS from 'aos'
import 'aos/dist/aos.css'

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

// DADOS ATUALIZADOS DO BRASILEIRO 2026
const pociosConquistados = [
    {
        equipe: "Equipe Feminina Júnior 19",
        resultado: "2º lugar",
        medalha: "Medalha de Prata",
    },
    {
        equipe: "Equipe Masculina Júnior 16",
        resultado: "2º lugar",
        medalha: "Medalha de Prata",
    },
    {
        equipe: "Equipe Masculina Júnior 19",
        resultado: "2º lugar",
        medalha: "Medalha Prata",
    }
]

// Lista de imagens da galeria (5 fotos)
const galeriaFotos = [
    '/camp.jpeg',
    '/camp2.jpeg',
    '/camp3.jpeg',
    '/camp5.jpeg',
    '/camp4.jpeg'
]

// Classes dinâmicas para o Bento Grid de 5 fotos
const getBentoClasses = (index: number) => {
    switch (index) {
        case 0: return "md:col-span-8 h-[300px] md:h-[450px]" // Super Destaque
        case 1: return "md:col-span-4 h-[300px] md:h-[450px]" // Destaque Lateral
        case 2:
        case 3:
        case 4: return "md:col-span-4 h-[250px] md:h-[300px]" // Base (3 fotos)
        default: return "md:col-span-4 h-[250px]"
    }
}

export function CampeonatoResults() {
    const sectionRef = useRef<HTMLElement>(null)
    const galleryRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' })
    }, [])

    useGSAP(() => {
        // Animação anti-tremor para os cards (via GPU)
        gsap.fromTo(
            '.podio-card',
            { 
                opacity: 0, 
                yPercent: 20 
            },
            {
                opacity: 1,
                yPercent: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                force3D: true, // Aceleração de hardware
                scrollTrigger: {
                    trigger: '.podios-grid',
                    start: 'top 80%',
                },
            }
        )

        // Animação da Galeria Bento
        gsap.fromTo(
            '.gallery-photo',
            { opacity: 0, yPercent: 15, scale: 0.98 },
            {
                opacity: 1,
                yPercent: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out',
                force3D: true,
                scrollTrigger: {
                    trigger: galleryRef.current,
                    start: 'top 85%',
                },
            }
        )
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="relative bg-slate-950 py-24 md:py-32 overflow-hidden font-sans border-t border-white/5">
            
            {/* --- BACKGROUND CINEMÁTICO (brasileiro.jpg) --- */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/brasileiro.jpg" 
                    alt="Pódio Campeonato Brasileiro VAA 2026" 
                    fill 
                    sizes="100vw"
                    priority
                    // 🔥 CORREÇÃO AQUI: Opacidade aumentada para 60% 🔥
                    className="object-cover opacity-60 scale-105"
                />
                {/* 🔥 CORREÇÃO AQUI: Gradiente suavizado no centro (via-slate-950/50) 🔥 */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/50 to-slate-950" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
                
                {/* --- CABEÇALHO DA SEÇÃO --- */}
                <div className="text-center mb-16 md:mb-20 flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-white/10 text-slate-300 text-[10px] font-black tracking-widest uppercase mb-6 backdrop-blur-md shadow-xl" data-aos="fade-down">
                        <Trophy size={16} weight="fill" className="text-yellow-500" />
                        Resultados Históricos
                    </div>
                    
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-6 tracking-tighter drop-shadow-2xl uppercase" data-aos="fade-up" data-aos-delay="100">
                        Campeonato Brasileiro <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-400 text-4xl md:text-6xl lg:text-7xl">
                            de Va’a Etapa Sprint 2026
                        </span>
                    </h2>
                </div>

                {/* --- GRID DE PÓDIOS --- */}
                <div className="podios-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto items-stretch">
                    {pociosConquistados.map((item, index) => (
                        <div key={index} 
                            // transform-gpu previne flickering no scroll
                            className="podio-card bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center text-center shadow-2xl transition-all duration-500 hover:border-slate-300/30 hover:bg-slate-900/60 group transform-gpu"
                        >
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-200 to-slate-500 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)] relative group-hover:scale-110 transition-transform duration-500">
                                <div className="absolute inset-0 rounded-full bg-white/20 blur-md group-hover:blur-xl transition-all duration-500" />
                                <Medal size={36} weight="fill" className="text-slate-900 relative z-10" />
                            </div>

                            <h4 className="text-white font-black text-xl lg:text-2xl mb-2 tracking-tight leading-tight">{item.equipe}</h4>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">{item.medalha}</p>
                            
                            <span className="text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 uppercase tracking-tighter mt-auto pt-6 border-t border-white/5 w-full">
                                {item.resultado}
                            </span>
                        </div>
                    ))}
                </div>

                {/* --- CHAMADA MUNDIAL SINGAPURA --- */}
                <div className="max-w-4xl mx-auto text-center mb-24 bg-gradient-to-br from-blue-900/40 to-blue-600/10 border border-blue-400/20 p-10 md:p-14 rounded-[3rem] backdrop-blur-md shadow-[0_0_50px_rgba(37,99,235,0.15)] relative overflow-hidden group" data-aos="zoom-in" data-aos-offset="200">
                    {/* Brilho animado de fundo */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-blue-400/30 transition-colors duration-700" />
                    
                    <div className="relative z-10">
                        <div className="flex justify-center gap-2 text-white mb-6">
                            {[...Array(5)].map((_, i) => <Star key={i} size={20} weight="fill" className="text-yellow-400 drop-shadow-md" />)}
                        </div>
                        <AirplaneTilt size={56} className="text-blue-400 mx-auto mb-6 group-hover:-translate-y-2 transition-transform duration-500" weight="fill" />
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                            Passaporte Carimbado: <br className="hidden md:block"/>
                            <span className="text-blue-400 drop-shadow-lg">Singapura 2026</span>
                        </h3>
                        <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                            Os três times conquistaram vagas para o <strong className="text-white font-black">Campeonato Mundial de Va’a</strong>. O Lago Paranoá vai invadir a Ásia!
                        </p>
                    </div>
                </div>

                {/* --- BENTO GALERIA DE FOTOS (5 FOTOS CORRIGIDAS) --- */}
                <div ref={galleryRef} className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
                        {galeriaFotos.map((foto, idx) => (
                            <div 
                                key={idx} 
                                className={`gallery-photo group relative rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 shadow-xl cursor-pointer transform-gpu will-change-transform ${getBentoClasses(idx)}`}
                            >
                                <Image
                                    src={foto}
                                    alt={`Campeonato Brasileiro 2026 - Foto ${idx + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    // Mantendo o object-top do ajuste anterior
                                    className="object-cover object-top transition-transform duration-1000 group-hover:scale-105 will-change-transform"
                                />
                                {/* Gradiente sutil nas bordas inferiores para acabamento premium */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* FRASE FINAL */}
                <div className="mt-20 flex justify-center" data-aos="fade-up">
                    <p className="text-center text-slate-400 text-xs md:text-sm font-black uppercase tracking-[0.3em] max-w-2xl leading-relaxed border-t border-white/10 pt-10">
                        Resultados que refletem <span className="text-white">consistência</span>, <span className="text-white">disciplina</span> e <span className="text-white">trabalho coletivo</span>.
                    </p>
                </div>

            </div>
        </section>
    )
}