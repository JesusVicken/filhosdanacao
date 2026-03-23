'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { WhatsappLogo, HandHeart, CheckCircle, CaretRight } from '@phosphor-icons/react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import AOS from 'aos'
import 'aos/dist/aos.css'

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function CheckVaa() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        AOS.init({ duration: 1000, once: true })
    }, [])

    useGSAP(() => {
        // Correção: Usando gsap.fromTo para evitar que os elementos sumam no React Strict Mode
        const headerElements = gsap.utils.toArray('.cta-header > *')
        const cards = gsap.utils.toArray('.donation-card')
        const pixArea = gsap.utils.toArray('.pix-area')

        gsap.fromTo(
            headerElements,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            }
        )

        gsap.fromTo(
            cards,
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "back.out(1.2)",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 65%",
                }
            }
        )

        gsap.fromTo(
            pixArea,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 50%",
                }
            }
        )
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="relative bg-slate-950 py-24 md:py-32 px-4 md:px-6 border-t border-white/5 overflow-hidden font-sans">
            
            {/* Imagem de Fundo (Parallax Sutil) */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/filhosdanacao3.webp" 
                    alt="Crianças Remando" 
                    fill 
                    className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                
                {/* --- HEADER DA CTA --- */}
                <div className="cta-header text-center mb-16 md:mb-24 flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 border border-blue-500 text-white text-[10px] font-black tracking-widest uppercase mb-6 shadow-lg shadow-blue-600/20">
                        <HandHeart size={16} weight="fill" />
                        Faça Parte
                    </div>
                    
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-tight drop-shadow-lg">
                        Multiplique o <span className="text-blue-500 italic">Impacto</span>
                    </h2>
                    
                    <p className="text-slate-300 text-lg md:text-xl font-light max-w-3xl leading-relaxed">
                        Nossa meta é levar o projeto para mais de <strong className="text-white">300 crianças e adolescentes</strong> por ano. Pessoas físicas ou empresas que colaboram financeiramente ajudam a resgatar sorrisos e sonhos.
                    </p>
                </div>

                {/* --- GRID DE APOIO --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">

                    {/* CARD 01 - ASSINATURA/APADRINHAMENTO */}
                    <div className="donation-card bg-slate-900 border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between group hover:border-blue-500/50 transition-all duration-500 shadow-2xl min-h-[500px]">
                        
                        {/* Brilho superior */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 opacity-50 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10 flex-1">
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-slate-500 text-[10px] uppercase tracking-[0.3em] font-black">Apadrinhamento</span>
                                <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 uppercase rounded-full shadow-lg">Pessoa Física</span>
                            </div>

                            <h3 className="text-white text-3xl md:text-4xl font-black uppercase mb-4 tracking-tight text-left">
                                Assinatura <br /> Solidária
                            </h3>
                            
                            <p className="text-slate-400 text-sm md:text-base font-light mb-8 leading-relaxed">
                                Com menos do que um café por dia, você garante que uma criança continue tendo acesso ao esporte e à terapia.
                            </p>

                            {/* VALORES */}
                            <div className="space-y-4 mb-10 text-left border-t border-white/10 pt-8">
                                {[
                                    { valor: '30,00', dia: '1 real' },
                                    { valor: '60,00', dia: '2 reais' },
                                    { valor: '120,00', dia: '4 reais' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle size={20} className="text-blue-500" weight="fill" />
                                            <span className="text-white font-bold text-lg md:text-xl">R$ {item.valor} <span className="text-slate-500 text-sm font-light">/mês</span></span>
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-950 px-3 py-1 rounded-full hidden sm:block">
                                            Apenas R$ {item.dia}/dia
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <a
                            href="https://wa.me/556199791925?text=Ola,%20gostaria%20de%20fazer%20uma%20Assinatura%20Solidaria%20para%20o%20Filhos%20da%20Nacao!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-20 w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 px-6 rounded-full transition-all flex items-center justify-center gap-3 uppercase text-sm md:text-base tracking-widest shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:-translate-y-1 mt-6"
                        >
                            <WhatsappLogo size={24} weight="fill" />
                            Quero Apadrinhar
                        </a>
                    </div>

                    {/* CARD 02 - PATROCÍNIO/EMPRESAS */}
                    <div className="donation-card bg-slate-900 border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between group hover:border-white/30 transition-all duration-500 shadow-2xl min-h-[500px]">
                        
                        <div className="relative z-10 flex-1">
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-slate-500 text-[10px] uppercase tracking-[0.3em] font-black">Parcerias</span>
                                <span className="bg-white text-slate-950 text-[10px] font-black px-3 py-1 uppercase rounded-full shadow-lg">Empresas</span>
                            </div>

                            <h3 className="text-white text-3xl md:text-4xl font-black uppercase mb-4 tracking-tight text-left">
                                Responsabilidade <br /> Social
                            </h3>
                            
                            <p className="text-slate-400 text-sm md:text-base font-light mb-8 leading-relaxed">
                                Associe sua marca a um projeto com chancela do TJDFT. As mudanças acontecem de dentro para fora, e as empresas têm um papel fundamental nisso.
                            </p>

                            {/* CONTEÚDO */}
                            <div className="space-y-6 mb-10 text-left border-t border-white/10 pt-8">
                                <h4 className="text-white text-xs font-black uppercase tracking-widest mb-4">Como a empresa ajuda:</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-slate-300 text-sm md:text-base font-light leading-snug">
                                        <CaretRight size={18} className="text-blue-500 shrink-0 mt-0.5" weight="bold" />
                                        Apoio direto na infraestrutura do projeto.
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-300 text-sm md:text-base font-light leading-snug">
                                        <CaretRight size={18} className="text-blue-500 shrink-0 mt-0.5" weight="bold" />
                                        Custeio da equipe multidisciplinar e lanches.
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-300 text-sm md:text-base font-light leading-snug">
                                        <CaretRight size={18} className="text-blue-500 shrink-0 mt-0.5" weight="bold" />
                                        Expansão de vagas para novos acolhidos.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/556199791925?text=Ola,%20sou%20representante%20de%20uma%20empresa%20e%20gostaria%20de%20saber%20como%20apoiar%20o%20projeto."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-20 w-full bg-white text-slate-950 hover:bg-slate-200 font-black py-5 px-6 rounded-full transition-all flex items-center justify-center gap-3 uppercase text-sm md:text-base tracking-widest shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:-translate-y-1 mt-6"
                        >
                            <WhatsappLogo size={24} weight="fill" className="text-green-600" />
                            Apoio Corporativo
                        </a>
                    </div>

                </div>

                {/* --- DADOS PIX (TRANSPARÊNCIA) --- */}
                <div className="pix-area mt-20 flex flex-col items-center gap-4">
                    <div className="bg-slate-900 border border-white/10 p-6 md:p-8 rounded-3xl md:rounded-full flex flex-col md:flex-row items-center gap-6 md:gap-12 max-w-4xl w-full justify-center text-center md:text-left shadow-2xl">
                        <div>
                            <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black mb-1">Doação Avulsa (PIX)</p>
                            <p className="text-blue-400 font-black text-lg md:text-xl">07.533.843/0001-00</p>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-white/10" />
                        <div>
                            <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black mb-1">Instituição Gestora</p>
                            <p className="text-white font-bold text-sm md:text-base">Associação Brasil Melhor</p>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-white/10" />
                        <div>
                            <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black mb-1">Banco</p>
                            <p className="text-white font-bold text-sm md:text-base">Caixa Econômica Federal</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}