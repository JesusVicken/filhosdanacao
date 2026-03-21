'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Activity, HeartPulse, Brain, Quote } from 'lucide-react'

// Animações
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function About() {
    const containerRef = useRef<HTMLElement>(null)
    const statsRef = useRef<HTMLDivElement>(null)

    const stats = [
        { label: 'Sofrem de Ansiedade', value: 100, icon: Activity },
        { label: 'Sintomas de Depressão', value: 70, icon: HeartPulse },
        { label: 'Baixa Autoestima', value: 95, icon: Brain },
        { label: 'Dificuldade de Foco', value: 85, icon: Activity },
    ]

    useGSAP(() => {
        // 1. Efeito de Contagem dos Números
        const nums = gsap.utils.toArray('.stat-number')
        
        nums.forEach((num: any) => {
            const target = parseInt(num.getAttribute('data-target') || '0')
            
            gsap.to(num, {
                innerText: target,
                duration: 2,
                snap: { innerText: 1 }, // Faz o número pular de 1 em 1 (sem decimais)
                scrollTrigger: {
                    trigger: num,
                    start: "top 90%", // Começa a contar quando o número entra na tela
                }
            })
        })

        // 2. Parallax suave na imagem de fundo
        gsap.to('.bg-parallax', {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })
    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="relative w-full bg-slate-950 text-white overflow-hidden">
            
            {/* --- BACKGROUND COM PARALLAX E OVERLAY AZUL --- */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/impacto.jpg" // Sua foto de impacto
                    alt="Background Impacto"
                    fill
                    className="bg-parallax object-cover opacity-30 grayscale"
                />
                {/* Overlay Azul Escuro Profundo (Slate-950) */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
                
                {/* 1. TEXTO INSTITUCIONAL */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-28 items-center">
                    <div className="space-y-8" data-aos="fade-right">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase">
                            Tecnologia Social
                        </div>
                        
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
                            Resgatando a <br />
                            <span className="text-blue-500 italic uppercase">Infância</span>
                        </h2>
                        
                        <div className="space-y-6 text-slate-300 font-light text-lg leading-relaxed">
                            <p>
                                O projeto <strong className="text-white">Filhos da Nação</strong> atende crianças e adolescentes que vivem em instituições de acolhimento com um futuro indefinido. 
                            </p>
                            <p>
                                A dor do abandono e a violação de direitos deixam marcas profundas: ansiedade, depressão e a perda da capacidade de sonhar. Nosso remo é a ferramenta de cura.
                            </p>
                        </div>

                        <div className="pt-4">
                            <div className="p-8 bg-slate-900/50 border border-white/10 rounded-3xl backdrop-blur-md relative">
                                <Quote className="absolute -top-4 -left-4 text-blue-600" size={40} fill="currentColor" />
                                <p className="text-slate-200 italic leading-relaxed">
                                    "O projeto dá a esses jovens um novo horizonte de pertencimento, autoconfiança e foco para ir atrás dos seus sonhos."
                                </p>
                                <span className="block mt-4 text-xs font-black uppercase tracking-widest text-blue-500">— Vara da Infância e Juventude / TJDFT</span>
                            </div>
                        </div>
                    </div>

                    {/* IMAGEM DE APOIO */}
                    <div className="relative" data-aos="fade-left">
                        <div className="relative h-[450px] w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                            <Image 
                                src="/filhosRemada2.jpg" // Outra foto de ação
                                alt="Ação no Lago" 
                                fill 
                                className="object-cover" 
                            />
                        </div>
                        {/* Selo flutuante */}
                        <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-2xl rotate-12 hidden md:block">
                            <p className="text-2xl font-black tracking-tighter">EST. 2017</p>
                        </div>
                    </div>
                </div>

                {/* 2. DASHBOARD DE NÚMEROS (CONTANDO COM GSAP) */}
                <div className="pt-20 border-t border-white/5">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h3 className="text-3xl md:text-5xl font-black mb-4">O Perfil dos Nossos Jovens</h3>
                        <p className="text-slate-400 max-w-2xl mx-auto font-light">
                            Os números mostram a urgência. Nossa metodologia mostra o caminho.
                        </p>
                    </div>

                    <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {stats.map((item, index) => (
                            <div key={index} className="bg-slate-900/40 backdrop-blur-md border border-white/5 p-8 rounded-[2.5rem] flex flex-col items-center text-center group hover:border-blue-500/30 transition-all duration-500">
                                <item.icon className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
                                
                                <div className="flex items-baseline text-white">
                                    {/* O span com a classe 'stat-number' é o que o GSAP vai animar */}
                                    <span 
                                        className="stat-number text-5xl md:text-7xl font-black"
                                        data-target={item.value}
                                    >
                                        0
                                    </span>
                                    <span className="text-3xl font-bold text-blue-500">%</span>
                                </div>

                                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500 mt-4 leading-tight">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}