'use client'

import { WhatsappLogo, CheckCircle } from '@phosphor-icons/react'

export default function CheckVaa() {
    return (
        <section className="bg-zinc-950 py-24 px-6 text-center border-t border-white/5 font-sans">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
                    Garanta Sua Vaga
                </h2>
                <p className="text-gray-400 text-lg mb-12 italic font-serif">
                    "Invista na sua técnica com quem é referência nacional e mundial."
                </p>

                {/* GRID DE INVESTIMENTO */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* CARD 01 - CANOA GERAL (SEXTA E SÁBADO) */}
                    <div className="bg-black border border-white/10 p-8 md:p-10 relative overflow-hidden flex flex-col justify-between group hover:border-white/30 transition-all duration-500 shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-black">Módulo 01</span>
                                <span className="bg-white text-black text-[10px] font-black px-2 py-0.5 uppercase">Sex + Sáb</span>
                            </div>

                            <h3 className="text-white text-3xl font-black uppercase mb-2 tracking-tight text-left">Clínica Geral</h3>
                            <div className="text-left mb-8">
                                <div className="text-4xl font-black text-white tracking-tighter">R$ 175</div>
                            </div>

                            {/* CRONOGRAMA DETALHADO */}
                            <div className="space-y-6 mb-10 text-left border-t border-white/10 py-6">
                                <div>
                                    <h4 className="text-white text-xs font-black uppercase mb-3 tracking-widest opacity-50">Sexta-feira</h4>
                                    <ul className="space-y-2">
                                        {["Acolhimento", "Apresentação", "Técnica em solo"].map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-gray-400 text-sm">
                                                <CheckCircle size={16} className="text-white shrink-0" weight="fill" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-white text-xs font-black uppercase mb-3 tracking-widest opacity-50">Sábado</h4>
                                    <ul className="space-y-2">
                                        {["Acolhimento", "Partiu água"].map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-gray-400 text-sm">
                                                <CheckCircle size={16} className="text-white shrink-0" weight="fill" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/5527996314135?text=Ola,%20gostaria%20de%20me%20inscrever%20na%20Clinica%20Geral%20(R$175)"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-white text-black hover:bg-zinc-200 font-black py-4 px-6 transition-all flex items-center justify-center gap-3 uppercase text-sm tracking-widest"
                        >
                            <WhatsappLogo size={24} weight="fill" />
                            Inscrever na Clínica
                        </a>
                    </div>

                    {/* CARD 02 - LEME PRO (DOMINGO) */}
                    <div className="bg-black border border-white/20 p-8 md:p-10 relative overflow-hidden flex flex-col justify-between group hover:border-white/40 shadow-[0_0_50px_rgba(255,255,255,0.03)] transition-all duration-500">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-white shadow-[0_0_20px_rgba(255,255,255,0.4)]"></div>

                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-black">Módulo 02</span>
                                <span className="bg-[#25D366] text-white text-[10px] font-black px-2 py-0.5 uppercase">Domingo</span>
                            </div>

                            <h3 className="text-white text-3xl font-black uppercase mb-2 tracking-tight text-left">Masterclass Leme</h3>
                            <div className="text-left mb-8">
                                <div className="text-4xl font-black text-white tracking-tighter">R$ 65</div>
                            </div>

                            {/* CRONOGRAMA DETALHADO */}
                            <div className="space-y-6 mb-10 text-left border-t border-white/10 py-6">
                                <div>
                                    <h4 className="text-white text-xs font-black uppercase mb-3 tracking-widest opacity-50">Domingo</h4>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3 text-gray-300 text-lg font-bold leading-tight">
                                            <CheckCircle size={22} className="text-[#25D366] shrink-0 mt-1" weight="fill" />
                                            <span>Leme: solo e água</span>
                                        </li>
                                    </ul>
                                </div>
                                <p className="text-gray-500 text-xs italic leading-relaxed">
                                    Conteúdo avançado focado exclusivamente em performance e condução de leme.
                                </p>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/5527996314135?text=Ola,%20gostaria%20de%20me%20inscrever%20na%20Masterclass%20de%20Leme%20(R$65)"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-[#25D366] text-white hover:bg-[#1eb957] font-black py-4 px-6 transition-all flex items-center justify-center gap-3 uppercase text-sm tracking-widest shadow-[0_10px_30px_rgba(37,211,102,0.2)]"
                        >
                            <WhatsappLogo size={24} weight="fill" />
                            Inscrever no Leme
                        </a>
                    </div>

                </div>

                <div className="mt-16 flex flex-col items-center gap-4">
                    <p className="text-[10px] text-gray-600 uppercase tracking-[0.4em] font-bold">
                        Vagas limitadas • Brasília/DF • CPP Extreme
                    </p>
                </div>
            </div>
        </section>
    )
}