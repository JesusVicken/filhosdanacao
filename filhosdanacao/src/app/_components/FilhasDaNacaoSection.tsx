'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
// CORREÇÃO: Trocado HeartHandshake por HandHeart
import { Crown, HandHeart, UsersFour, RocketLaunch, Sparkle } from '@phosphor-icons/react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import AOS from 'aos'
import 'aos/dist/aos.css'

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

// Dados das fotos da galeria (Bento Grid)
const filhasGallery = [
    { 
        src: '/filhas.jpeg', 
        colSpan: 'md:col-span-2 md:row-span-2', 
        height: 'h-[400px] md:h-full',
        label: 'União e Força'
    },
    { 
        src: '/filhas2.jpeg', 
        colSpan: 'md:col-span-1 md:row-span-1', 
        height: 'h-[250px] md:h-[300px]',
        label: 'Primeiras Remadas'
    },
    { 
        src: '/filhas3.jpeg', 
        colSpan: 'md:col-span-1 md:row-span-1', 
        height: 'h-[250px] md:h-[300px]',
        label: 'Conexão e Foco'
    },
    { 
        src: '/filhas.jpeg', 
        colSpan: 'md:col-span-1 md:row-span-1', 
        height: 'h-[250px] md:h-[300px]',
        label: 'Liderança'
    },
]

// Pilares de Empoderamento
const pilaresEmpoderamento = [
    { icon: Crown, title: "Liderança", desc: "Despertando a voz e a autoconfiança de cada menina." },
    // CORREÇÃO AQUI: HandHeart aplicado
    { icon: HandHeart, title: "Acolhimento", desc: "Espaço seguro de escuta, psicologia e apoio emocional." },
    { icon: UsersFour, title: "Sororidade", desc: "Fortalecendo laços e a conexão entre as participantes." },
    { icon: RocketLaunch, title: "Autonomia", desc: "Ferramentas para construção de um futuro independente." },
]

export function FilhasDaNacaoSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const galleryRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        AOS.init({ duration: 1000, once: true })
    }, [])

    useGSAP(() => {
        if (!galleryRef.current) return

        const photos = gsap.utils.toArray('.girl-photo')
        const cards = gsap.utils.toArray('.pilar-empoderamento')

        // Animação da Galeria Bento
        gsap.fromTo(
            photos,
            { opacity: 0, yPercent: 20, scale: 0.96 },
            {
                opacity: 1,
                yPercent: 0,
                scale: 1,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                force3D: true,
                scrollTrigger: {
                    trigger: galleryRef.current,
                    start: 'top 85%',
                },
            }
        )

        // Animação dos Pilares
        gsap.fromTo(
            cards,
            { opacity: 0, xPercent: -20 },
            {
                opacity: 1,
                xPercent: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'back.out(1.2)',
                scrollTrigger: {
                    trigger: '.pilares-grid',
                    start: 'top 85%',
                },
            }
        )
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="relative bg-slate-950 py-24 md:py-32 overflow-hidden font-sans border-t border-white/5">
            
            {/* --- BACKGROUND CINEMÁTICO (lagoFilhos.jpeg) --- */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/lagoFilhos.jpeg" 
                    alt="Pôr do sol no Lago Paranoá - Base Filhas da Nação" 
                    fill 
                    sizes="100vw"
                    priority
                    className="object-cover opacity-35 object-top transform-gpu scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
                
                {/* --- CABEÇALHO DA SEÇÃO --- */}
                <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-white/10 text-slate-300 text-[10px] font-black tracking-widest uppercase mb-6 backdrop-blur-md shadow-xl" data-aos="fade-down">
                        <Sparkle size={16} weight="fill" className="text-blue-400" />
                        Inauguração 2026
                    </div>
                    
                    <h2 className="text-5xl md:text-8xl font-black text-white leading-none mb-6 tracking-tighter drop-shadow-2xl uppercase" data-aos="fade-up" data-aos-delay="100">
                        Filhas da <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-500">Nação</span>
                    </h2>
                    
                    <p className="text-slate-300 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-medium" data-aos="fade-up" data-aos-delay="200">
                        Um projeto dedicado exclusivamente a meninas de <strong className="text-white font-black">12 a 18 anos</strong>, focado no <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 font-black">Empoderamento Feminino</strong> através da Remoterapia e do cuidado integral.
                    </p>
                </div>

                {/* --- CONTEÚDO PRINCIPAL (Grid Lado a Lado) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
                    
                    {/* Lado Esquerdo: Bento Gallery */}
                    <div ref={galleryRef} className="bento-gallery grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-4 md:gap-5 order-2 md:order-1">
                        {filhasGallery.map((foto, idx) => (
                            <div 
                                key={idx} 
                                className={`girl-photo group relative rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/20 transition-all duration-500 shadow-xl cursor-pointer transform-gpu will-change-transform ${foto.colSpan} ${foto.height}`}
                            >
                                <Image
                                    src={foto.src}
                                    alt={`Filhas da Nação - ${foto.label}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover object-top transition-transform duration-1000 group-hover:scale-105 transform-gpu will-change-transform"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                                <div className="absolute bottom-4 left-4 right-4 text-left z-10 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-500">
                                    <p className="text-white font-bold text-sm uppercase tracking-wider">{foto.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Lado Direito: Pilares e Texto de Destaque */}
                    <div className="text-section order-1 md:order-2 space-y-12">
                        <div className="space-y-4" data-aos="fade-left">
                            <h4 className="text-blue-400 font-bold uppercase tracking-wider text-sm">O Futuro é Delas</h4>
                            <p className="text-slate-100 text-lg font-light leading-relaxed">
                                Entendemos que a adolescência feminina traz desafios únicos. O Filhas da Nação nasce para ser um porto seguro e um trampolim para sonhos maiores, unindo a disciplina do esporte ao cuidado psicológico junguiano.
                            </p>
                        </div>

                        {/* Pilares Bento List */}
                        <div className="pilares-grid grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {pilaresEmpoderamento.map((pilar, idx) => (
                                <div key={idx} className="pilar-empoderamento bg-slate-900 border border-white/10 p-6 rounded-2xl flex flex-col gap-3 group transition-all hover:border-blue-500/30 shadow-lg">
                                    <div className="flex items-center gap-3">
                                        <pilar.icon size={24} weight="fill" className="text-blue-500" />
                                        <h5 className="text-white font-bold text-base uppercase tracking-tight">{pilar.title}</h5>
                                    </div>
                                    <p className="text-slate-400 text-xs leading-relaxed font-light">{pilar.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FRASE FINAL */}
                <div className="mt-24 flex justify-center border-t border-white/10 pt-16" data-aos="fade-up">
                    <p className="text-center text-slate-500 text-xs md:text-sm font-black uppercase tracking-[0.3em] max-w-2xl leading-relaxed">
                        Despertando a força que sempre esteve <span className="text-blue-300">dentro delas</span>.
                    </p>
                </div>

            </div>
        </section>
    )
}