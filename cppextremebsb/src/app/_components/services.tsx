'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Services() {
    const gridRef = useRef<HTMLDivElement | null>(null)
    const cardsRef = useRef<HTMLDivElement[]>([])

    useEffect(() => {
        if (!gridRef.current || !cardsRef.current.length) return

        gsap.fromTo(
            cardsRef.current,
            {
                opacity: 0,
                y: 80,
                scale: 0.9,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: 'power4.out',
                stagger: 0.18,
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            }
        )
    }, [])

    return (
        <section
            className="bg-black py-28 border-y border-white/10"
            data-aos="fade-up"
        >
            <div className="container mx-auto px-6">

                {/* Intro */}
                <div
                    className="max-w-4xl mx-auto text-center mb-20"
                    data-aos="fade-up"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-none mb-6">
                        Base Técnica<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600"> do Workshop</span>
                    </h2>
                    <h2 className="text-gray-400 text-lg leading-relaxed">
                        O va’a é muito mais do que força e resistência. É técnica,
                        leitura ambiental, ciência do movimento e tomada de decisão
                        em tempo real.
                    </h2>
                </div>

                {/* Cards técnicos grandes */}
                <div className="max-w-5xl mx-auto grid gap-10 mb-24">
                    <div className="border border-white/5 rounded-lg p-8" data-aos="fade-up">
                        <h3 className="text-white font-semibold mb-3">
                            Evolução da Técnica Tahitiana Moderna
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            A técnica tahitiana moderna surge na década de 1970,
                            evoluindo a partir da necessidade de eficiência,
                            cadência elevada e melhor aproveitamento hidrodinâmico.
                        </p>
                    </div>

                    <div
                        className="border border-white/5 rounded-lg p-8"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h3 className="text-white font-semibold mb-3">
                            Técnica Tahitiana x Havaiana
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Diferenças de cadência, postura, fase da remada e
                            leitura de ondas impactam diretamente a performance.
                        </p>
                    </div>
                </div>

                {/* GRID com GSAP */}
                <div
                    ref={gridRef}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center"
                >
                    {[
                        {
                            title: "Huti Pa'ari",
                            subtitle: 'Força & Resistência',
                            desc: 'Potência contínua e controle de ritmo.',
                        },
                        {
                            title: "Huti Pe'e",
                            subtitle: 'Velocidade & Sprint',
                            desc: 'Explosão e aceleração em momentos decisivos.',
                        },
                        {
                            title: 'Tatara',
                            subtitle: 'Técnica de Largada',
                            desc: 'Ganho rápido de velocidade e organização.',
                        },
                        {
                            title: 'Downwaves',
                            subtitle: 'Surf & Conexão',
                            desc: 'Leitura de onda e antecipação.',
                        },
                    ].map((item, index) => (
                        <div
                            key={item.title}
                            ref={(el) => {
                                if (el) cardsRef.current[index] = el
                            }}
                            className="
                                p-6
                                border border-white/5
                                rounded-lg
                                hover:border-white/20
                                transition-all
                                will-change-transform
                            "
                        >
                            <span className="block text-white font-bold text-lg">
                                {item.title}
                            </span>
                            <span className="block text-xs text-gray-500 mt-1">
                                {item.subtitle}
                            </span>
                            <p className="text-gray-400 text-xs mt-3 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
