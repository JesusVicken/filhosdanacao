'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart } from 'lucide-react'

// DADOS (Com suporte a React Nodes no Título para formatação premium)
const gallery = [
    { 
        id: 1, 
        src: '/filhosdanacao3.webp', 
        // 🔥 UI Moderna: Título empilhado com destaque no meio 🔥
        title: (
            <span className="flex flex-col gap-1 md:gap-2 leading-[0.9]">
                <span>Sincronia.</span>
                <span className="text-blue-500">Pertencimento.</span>
                <span>Autonomia.</span>
            </span>
        ), 
        desc: 'Na canoa havaiana, ninguém rema sozinho. Trabalhamos a inteligência coletiva e o pertencimento em cada remada.' 
    },
    { 
        id: 2, 
        src: '/filhos1.jpg', 
        title: 'O Primeiro Contato', 
        desc: 'O medo se transforma em força. A água vira cura e liberdade.' 
    },
    { 
        id: 3, 
        src: '/filhos2.jpg', 
        title: 'Resgate do Sorriso', 
        desc: 'Cada sorriso devolvido é uma vida transformada.' 
    },
    { 
        id: 4, 
        src: '/comunidade.jpeg', 
        title: 'Base de Acolhimento', 
        desc: 'Um porto seguro no Lago Paranoá.' 
    },
    { 
        id: 5, 
        src: '/transicao.jpeg', 
        title: 'Vencendo Desafios', 
        desc: 'Resiliência construída remada após remada.' 
    },
]

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement | null>(null)

    const activeCard = gallery[activeIndex]
    const SLIDE_DURATION = 6000 // 6 segundos por foto (Tempo ideal para leitura e apreciação)

    // PRELOAD DAS IMAGENS
    useEffect(() => {
        gallery.forEach((item) => {
            const img = new window.Image()
            img.src = item.src
        })
    }, [])

    // 🔥 NOVA FEATURE: AUTO PLAY DO CARROSSEL 🔥
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % gallery.length)
        }, SLIDE_DURATION)

        // Se o usuário clicar (activeIndex mudar), o cronômetro reseta, 
        // garantindo que a foto não pule logo após a interação manual.
        return () => clearInterval(timer)
    }, [activeIndex])

    // 🔥 CORREÇÃO: SCROLL LOCAL APENAS NO CARROSSEL 🔥
    useEffect(() => {
        const el = containerRef.current
        if (!el) return

        const activeChild = el.children[activeIndex] as HTMLElement
        if (activeChild) {
            // Calcula o centro do elemento em relação ao container para não afetar o scroll da janela global
            const offsetTop = activeChild.offsetTop
            const halfContainer = el.clientHeight / 2
            const halfChild = activeChild.clientHeight / 2
            
            el.scrollTo({
                top: offsetTop - halfContainer + halfChild,
                behavior: 'smooth'
            })
        }
    }, [activeIndex])

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black text-white font-sans">

            {/* BACKGROUND CINEMÁTICO */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeCard.id}
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 z-0"
                >
                    <motion.div
                        animate={{ scale: 1.1 }}
                        transition={{ duration: 20, ease: "linear" }}
                        className="w-full h-full"
                    >
                        <Image
                            src={activeCard.src}
                            alt="Cena do Projeto"
                            fill
                            priority
                            sizes="100vw" 
                            className="object-cover"
                        />
                    </motion.div>

                    {/* OVERLAYS PRO (Gradientes e escurecimento) */}
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/30" />
                </motion.div>
            </AnimatePresence>

            {/* CONTEÚDO PRINCIPAL */}
            <div className="relative z-20 flex h-full">

                {/* TEXTO DA ESQUERDA */}
                <div className="flex flex-col justify-center px-6 md:px-20 max-w-4xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCard.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[10px] font-black uppercase tracking-widest mb-8 backdrop-blur-md shadow-lg shadow-blue-500/10">
                                <Heart size={14} className="fill-blue-400 text-blue-400" />
                                Impacto Visual
                            </div>

                            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter drop-shadow-2xl">
                                {activeCard.title}
                            </h2>

                            <p className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed drop-shadow-md">
                                {activeCard.desc}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* CARROSSEL LATERAL DIREITO */}
                <div className="ml-auto flex items-center pr-6 md:pr-12 z-30">
                    <div
                        ref={containerRef}
                        className="flex flex-col gap-6 overflow-y-auto max-h-[80vh] snap-y snap-mandatory px-4 py-10 relative
                        [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
                    >
                        {gallery.map((item, index) => (
                            <motion.div
                                key={item.id}
                                onClick={() => setActiveIndex(index)}
                                className={`relative w-28 h-40 md:w-36 md:h-52 rounded-[1.5rem] overflow-hidden cursor-pointer snap-center transition-all duration-500 border border-white/10 shrink-0
                                ${activeIndex === index
                                        ? 'scale-110 ring-2 ring-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.6)] z-10 border-transparent'
                                        : 'scale-90 opacity-40 hover:opacity-100 hover:scale-95'}
                                `}
                            >
                                <Image
                                    src={item.src}
                                    alt="Miniatura"
                                    fill
                                    sizes="(max-width: 768px) 150px, 200px" 
                                    className="object-cover"
                                />

                                {/* Glow animado interno na miniatura ativa */}
                                {activeIndex === index && (
                                    <motion.div
                                        className="absolute inset-0 rounded-[1.5rem] pointer-events-none"
                                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        style={{ boxShadow: 'inset 0 0 20px rgba(59,130,246,0.5)' }}
                                    />
                                )}

                                {/* 🔥 BARRA DE PROGRESSO DO AUTO-PLAY 🔥 */}
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                                        className="absolute bottom-0 left-0 h-1.5 bg-blue-500 z-20"
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}