'use client'

import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import { Medal, Student, Boat, Certificate, CaretRight } from '@phosphor-icons/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function About() {
    const containerRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Animação da Imagem
            gsap.fromTo(imageRef.current,
                { clipPath: 'inset(0% 100% 0% 0%)', opacity: 0.5 },
                {
                    clipPath: 'inset(0% 0% 0% 0%)',
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power3.inOut',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 75%',
                    }
                }
            )

            // 2. Animação dos Textos
            const textElements = textRef.current?.querySelectorAll('.animate-text')
            if (textElements) {
                gsap.fromTo(textElements,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: textRef.current,
                            start: 'top 85%',
                        }
                    }
                )
            }

            // 3. Animação dos Cards
            const cards = textRef.current?.querySelectorAll('.stat-card')
            if (cards) {
                gsap.fromTo(cards,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.15,
                        ease: 'back.out(1.7)',
                        scrollTrigger: {
                            trigger: textRef.current,
                            start: 'top 70%',
                        }
                    }
                )
            }
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="bg-black py-20 md:py-32 px-6 overflow-hidden border-t border-white/10 relative font-sans">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20">

                    {/* --- COLUNA ESQUERDA: FOTO --- */}
                    <div ref={imageRef} className="w-full md:w-5/12 sticky md:top-24">
                        <div className="aspect-[3/4] relative border border-white/10 rounded-sm overflow-hidden bg-zinc-900 shadow-2xl">
                            <Image
                                src="/ranin.png"
                                alt="Ranin Baptistotte Thomé"
                                fill
                                className="object-cover"
                                quality={100}
                                priority
                            />

                            {/* Overlay Minimalista (Ajustado para não poluir no mobile) */}
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-6 md:p-10 pt-32">
                                <h3 className="text-white text-2xl md:text-3xl font-black uppercase leading-none tracking-tighter mb-2">
                                    Ranin <br /> Baptistotte
                                </h3>
                                <div className="h-[1px] w-12 bg-white mb-3"></div>
                                <p className="text-zinc-400 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold">
                                    Oceanógrafo & Educador Físico
                                </p>
                            </div>
                        </div>
                        {/* Decorativo: Escondido no mobile para evitar quebra de layout */}
                        <div className="hidden md:block absolute -z-10 -bottom-4 -right-4 w-full h-full border border-white/5 rounded-sm" />
                    </div>

                    {/* --- COLUNA DIREITA: CONTEÚDO --- */}
                    <div ref={textRef} className="w-full md:w-7/12 text-white">

                        {/* Cabeçalho: Removido os absolutos que causavam sobreposição */}
                        <div className="animate-text mb-10">
                            <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-[10px] uppercase tracking-widest text-zinc-500 mb-4 bg-zinc-900/50">
                                Sobre o Instrutor
                            </span>
                            <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-none tracking-tighter">
                                O Mentor
                            </h2>
                        </div>

                        <div className="prose prose-invert text-zinc-400 leading-relaxed mb-12 animate-text font-light max-w-none">
                            <p className="text-lg md:text-xl mb-6">
                                Fundador da <strong className="text-white font-black">CPP Extreme</strong>, hoje com núcleos espalhados pelo Brasil, Ranin é a fusão rara entre a ciência acadêmica e a vivência de um atleta de elite.
                            </p>
                            <p className="text-zinc-500">
                                Além de ser o construtor naval da <strong className="text-white border-b border-white/30 pb-0.5">primeira Canoa Havaiana 100% brasileira</strong> e detentor de recordes de distância, ele atua como empresário focado em performance, especializando-se em análise técnica e biomecânica.
                            </p>
                        </div>

                        {/* Grid de Conquistas */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-text">

                            {/* Card 1 */}
                            <div className="stat-card group flex items-start gap-4 p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/20 transition-all duration-500">
                                <div className="bg-white text-black p-2.5 rounded-lg shrink-0 group-hover:scale-110 transition-transform duration-500">
                                    <Medal size={24} weight="bold" />
                                </div>
                                <div>
                                    <strong className="block text-sm text-white mb-2 tracking-widest uppercase font-black">Atleta de Elite</strong>
                                    <ul className="text-[11px] text-zinc-500 space-y-1 group-hover:text-zinc-300 transition-colors">
                                        <li className="flex items-center gap-2"><CaretRight size={10} /> Vice-Mundial Surf Va'a</li>
                                        <li className="flex items-center gap-2"><CaretRight size={10} /> Campeão Brasileiro</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="stat-card group flex items-start gap-4 p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/20 transition-all duration-500">
                                <div className="bg-white text-black p-2.5 rounded-lg shrink-0 group-hover:scale-110 transition-transform duration-500">
                                    <Boat size={24} weight="bold" />
                                </div>
                                <div>
                                    <strong className="block text-sm text-white mb-2 tracking-widest uppercase font-black">Pioneiro</strong>
                                    <p className="text-[11px] text-zinc-500 leading-snug group-hover:text-zinc-300">
                                        Construtor da 1ª canoa 100% nacional. Recorde BA ➝ RJ.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="stat-card group flex items-start gap-4 p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/20 transition-all duration-500">
                                <div className="bg-white text-black p-2.5 rounded-lg shrink-0 group-hover:scale-110 transition-transform duration-500">
                                    <Student size={24} weight="bold" />
                                </div>
                                <div>
                                    <strong className="block text-sm text-white mb-2 tracking-widest uppercase font-black">Mestre</strong>
                                    <p className="text-[11px] text-zinc-500 group-hover:text-zinc-300">
                                        +1000 alunos formados e dezenas de instrutores capacitados.
                                    </p>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="stat-card group flex items-start gap-4 p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/20 transition-all duration-500">
                                <div className="bg-white text-black p-2.5 rounded-lg shrink-0 group-hover:scale-110 transition-transform duration-500">
                                    <Certificate size={24} weight="bold" />
                                </div>
                                <div>
                                    <strong className="block text-sm text-white mb-2 tracking-widest uppercase font-black">Ciência</strong>
                                    <p className="text-[11px] text-zinc-500 group-hover:text-zinc-300 italic">
                                        Oceanografia + Ed. Física. Especialista em Biofísica.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}