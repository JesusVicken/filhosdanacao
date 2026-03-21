'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart } from 'lucide-react'

// DADOS
const gallery = [
    { id: 1, src: '/filhosdanacao3.webp', title: 'Sincronia e Respeito', desc: 'Na canoa havaiana, ninguém rema sozinho. Trabalhamos a inteligência coletiva e o pertencimento.' },
    { id: 2, src: '/filhos1.jpg', title: 'O Primeiro Contato', desc: 'O medo se transforma em força. A água vira cura e liberdade.' },
    { id: 3, src: '/filhos2.jpg', title: 'Resgate do Sorriso', desc: 'Cada sorriso devolvido é uma vida transformada.' },
    { id: 4, src: '/comunidade.jpeg', title: 'Base de Acolhimento', desc: 'Um porto seguro no Lago Paranoá.' },
    { id: 5, src: '/transicao.jpeg', title: 'Vencendo Desafios', desc: 'Resiliência construída remada após remada.' },
]

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement | null>(null)

    const activeCard = gallery[activeIndex]

    // PRELOAD
    useEffect(() => {
        gallery.forEach((item) => {
            const img = new window.Image()
            img.src = item.src
        })
    }, [])

    // AUTO SCROLL DO CARROSSEL
    useEffect(() => {
        const el = containerRef.current
        if (!el) return

        const activeChild = el.children[activeIndex]
        if (activeChild) {
            activeChild.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }
    }, [activeIndex])

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black text-white">

            {/* BACKGROUND CINEMATIC */}
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
                            alt=""
                            fill
                            priority
                            className="object-cover"
                        />
                    </motion.div>

                    {/* OVERLAYS PRO */}
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* CONTEÚDO */}
            <div className="relative z-20 flex h-full">

                {/* TEXTO */}
                <div className="flex flex-col justify-center px-6 md:px-20 max-w-3xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCard.id}
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -60 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs uppercase mb-6 backdrop-blur-md">
                                <Heart size={14} className="fill-blue-300" />
                                Impacto Visual
                            </div>

                            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
                                {activeCard.title}
                            </h2>

                            <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
                                {activeCard.desc}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* CARROSSEL DIREITA */}
                <div className="ml-auto flex items-center pr-6 md:pr-12">
                    <div
                        ref={containerRef}
                        className="flex flex-col gap-6 overflow-y-auto max-h-[80vh] snap-y snap-mandatory px-2
                        [&::-webkit-scrollbar]:hidden"
                    >
                        {gallery.map((item, index) => (
                            <motion.div
                                key={item.id}
                                onClick={() => setActiveIndex(index)}
                                className={`relative w-32 h-48 md:w-40 md:h-60 rounded-2xl overflow-hidden cursor-pointer snap-center transition-all duration-500
                                ${activeIndex === index
                                        ? 'scale-110 ring-4 ring-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.8)]'
                                        : 'scale-90 opacity-40 hover:opacity-80'}
                                `}
                            >
                                <Image
                                    src={item.src}
                                    alt=""
                                    fill
                                    className="object-cover"
                                />

                                {/* Glow animado */}
                                {activeIndex === index && (
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl"
                                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        style={{
                                            boxShadow: '0 0 40px rgba(59,130,246,0.8)'
                                        }}
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