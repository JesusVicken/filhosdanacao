'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Heart, Anchor, Users, Leaf, Trophy } from '@phosphor-icons/react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import AOS from 'aos'
import 'aos/dist/aos.css'

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

// Dados dos Pilares (Bento Grid)
const pilares = [
    {
        colSpan: "md:col-span-2",
        title: "Remoterapia Aplicada",
        subtitle: "A Base do Resgate",
        desc: "Utilizamos a canoa havaiana e o SUP para trabalhar sincronia, respeito, disciplina e foco. O contato com a água reduz a ansiedade e cria um ambiente seguro para o desenvolvimento físico.",
        image: "/filhosdanacao.webp",
        icon: Anchor
    },
    {
        colSpan: "md:col-span-1",
        title: "Psicologia Junguiana",
        subtitle: "Cuidado Emocional",
        desc: "Acompanhamento focado em ressignificar traumas, fortalecer a identidade e preparar os jovens para a vida adulta.",
        image: "/filhos2.jpg",
        icon: Heart
    },
    {
        colSpan: "md:col-span-1",
        title: "Educação Ambiental",
        subtitle: "Consciência",
        desc: "Ações práticas de limpeza do Lago Paranoá, ensinando o cuidado com o meio ambiente e o senso de pertencimento.",
        image: "/limparLago.jpeg",
        icon: Leaf
    },
    {
        colSpan: "md:col-span-1",
        title: "Rede de Voluntários",
        subtitle: "Comunidade Forte",
        desc: "Um ecossistema de pessoas dedicadas a doar tempo, afeto e conhecimento para ser a família que muitos não têm.",
        image: "/comunidade.jpeg",
        icon: Users
    },
    {
        colSpan: "md:col-span-1",
        title: "Chancela Institucional",
        subtitle: "Reconhecimento",
        desc: "Trabalho sério referendado pela Vara da Infância e da Juventude, garantindo segurança jurídica e social.",
        image: "/premio.jpeg",
        icon: Trophy
    }
]

export function Services() {
    const gridRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        AOS.init({ duration: 1000, once: true })
    }, [])

    useGSAP(() => {
        if (!gridRef.current) return

        const cards = gsap.utils.toArray('.bento-card')

        // 🔥 CORREÇÃO DO GSAP PARA EVITAR TREMOR NAS IMAGENS 🔥
        gsap.fromTo(
            cards,
            {
                opacity: 0,
                y: 60, // Diminuí a distância do Y para um movimento mais fluido
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power3.out', // Troquei para power3 que é mais leve para a GPU
                stagger: 0.15,
                force3D: true, // Obriga o navegador a usar a Placa de Vídeo (acaba com o tremor)
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: 'top 85%',
                },
            }
        )
    }, { scope: gridRef })

    return (
        <section className="relative bg-slate-950 py-24 md:py-32 border-t border-white/5 overflow-hidden font-sans">
            
            {/* Efeitos de Luz no Fundo */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">

                {/* --- INTRODUÇÃO --- */}
                <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 flex flex-col items-center">
                    
                    {/* Logo do Projeto */}
                    <div className="relative w-24 h-24 mb-10" data-aos="fade-down">
                        <div className="absolute inset-0 rounded-full bg-slate-900 border border-white/10 shadow-xl scale-[1.3]" />
                        <Image 
                            src="/fdnlogo.png" 
                            alt="Logo Filhos da Nação" 
                            fill 
                            sizes="96px" // Boa prática
                            className="relative z-10 object-contain p-2" 
                        />
                    </div>

                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase leading-none mb-6 tracking-tighter" data-aos="fade-up">
                        Ecossistema de <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">Cuidado</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light max-w-2xl" data-aos="fade-up" data-aos-delay="100">
                        O Filhos da Nação é muito mais do que esporte. É uma rede de apoio estruturada em cinco pilares fundamentais para resgatar a cidadania e o direito de sonhar.
                    </p>
                </div>

                {/* --- BENTO GRID ANIMADO --- */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {pilares.map((pilar, index) => (
                        <div
                            key={index}
                            // 🔥 CORREÇÃO CSS: transform-gpu e will-change resolvem os conflitos de renderização 🔥
                            className={`bento-card group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900 min-h-[350px] md:min-h-[400px] flex flex-col justify-end p-8 md:p-10 transition-all duration-500 hover:border-blue-500/50 shadow-2xl transform-gpu will-change-transform ${pilar.colSpan}`}
                        >
                            {/* Imagem de Fundo do Card */}
                            <div className="absolute inset-0 z-0 overflow-hidden transform-gpu">
                                <Image
                                    src={pilar.image}
                                    alt={pilar.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-100 will-change-transform" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-black/10 pointer-events-none" />
                            </div>

                            {/* Conteúdo do Card */}
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                {/* Topo: Ícone e Subtítulo */}
                                <div className="flex justify-between items-start mb-10 transform translate-y-4 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <span className="bg-blue-600 border border-blue-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                                        {pilar.subtitle}
                                    </span>
                                    <div className="w-10 h-10 rounded-full bg-slate-900 border border-white/20 flex items-center justify-center text-blue-400 shadow-lg">
                                        <pilar.icon size={20} weight="fill" />
                                    </div>
                                </div>

                                {/* Base: Título e Descrição */}
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight drop-shadow-2xl">
                                        {pilar.title}
                                    </h3>
                                    {/* O texto descritivo aparece suavemente no hover (no desktop) */}
                                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 md:block md:grid-rows-none">
                                        <p className="text-slate-200 text-sm md:text-base font-medium leading-relaxed overflow-hidden md:overflow-visible opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-lg">
                                            {pilar.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}