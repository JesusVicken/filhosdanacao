'use client'

import { useRef } from 'react'
import Image from 'next/image'
import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  WhatsappLogo,
  MapPin,
  Phone,
  ChartBar,
  Info
} from '@phosphor-icons/react'
import { Handshake } from 'lucide-react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

// Parceiros do Projeto Filhos da Nação
const PARTNERS = [
  { name: 'OndaSup', logo: '/logoazul.jpg', url: 'https://ondasup.com.br' },
  { name: 'Associação Brasil Melhor', logo: '/logo-ascade.png', url: '#' }, // Usando logo da ascade provisoriamente
]

export function Footer() {
  const containerRef = useRef<HTMLElement>(null)

  const whatsappNumber = '556199791925'
  const whatsappMessage = 'Olá, gostaria de saber mais sobre o projeto Filhos da Nação!'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  useGSAP(() => {
    // Animação das Barras de Progresso (Gráfico Customizado)
    const bars = gsap.utils.toArray('.progress-bar')
    
    bars.forEach((bar: any) => {
      const targetWidth = bar.getAttribute('data-width')
      gsap.fromTo(bar, 
        { width: '0%' }, 
        {
          width: targetWidth,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: '.chart-container',
            start: "top 80%",
          }
        }
      )
    })

    // Animação dos Parceiros
    gsap.from('.partner-item', {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: '.partners-container',
        start: "top 85%",
      }
    })
  }, { scope: containerRef })

  return (
    <footer ref={containerRef} className="bg-slate-950 text-slate-300 border-t border-white/5 relative overflow-hidden flex flex-col font-sans">
      
      {/* Luz de Fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* =========================================
          SEÇÃO 1: DASHBOARD DE IMPACTO (GRÁFICOS)
      ============================================= */}
      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10 border-b border-white/5">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-widest uppercase mb-4 shadow-lg shadow-blue-900/20">
            <ChartBar size={16} weight="fill" />
            Impacto Mensurado
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            A Capacidade de <span className="text-blue-500 italic">Sonhar</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light text-lg">
            "Qual sua expectativa em relação ao futuro?" <br className="hidden md:block"/> Essa foi a pergunta feita aos participantes do projeto. Veja a transformação:
          </p>
        </div>

        <div className="chart-container grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* GRÁFICO 1: INÍCIO */}
          <div className="bg-slate-900/50 border border-white/10 p-8 rounded-[2rem] shadow-2xl backdrop-blur-sm">
            <h3 className="text-white font-black uppercase tracking-widest mb-8 text-sm border-b border-white/10 pb-4">
              Início das Atividades
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400 font-medium">"Absolutamente nenhuma" ou "Quase nenhuma"</span>
                  <span className="text-slate-500 font-black">71,42%</span>
                </div>
                {/* Barra de Progresso */}
                <div className="w-full h-4 bg-slate-950 rounded-full overflow-hidden border border-white/5">
                  <div 
                    className="progress-bar h-full bg-slate-600 rounded-full relative"
                    data-width="71.42%"
                  >
                    <div className="absolute inset-0 bg-white/10 w-full h-full animate-pulse" />
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2 font-light">A grande maioria chega sem perspectiva de futuro.</p>
              </div>
            </div>
          </div>

          {/* GRÁFICO 2: DEPOIS DE 12 MESES */}
          <div className="bg-slate-900 border border-blue-500/30 p-8 rounded-[2rem] shadow-[0_0_40px_rgba(59,130,246,0.1)] relative overflow-hidden">
            {/* Brilho de sucesso */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full pointer-events-none" />

            <h3 className="text-blue-400 font-black uppercase tracking-widest mb-8 text-sm border-b border-white/10 pb-4">
              Após 12 meses de Projeto
            </h3>

            <div className="space-y-6 relative z-10">
              {/* Barra 1 - Excelente */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white font-bold">"Excelente" expectativa</span>
                  <span className="text-blue-400 font-black">28,57%</span>
                </div>
                <div className="w-full h-4 bg-slate-950 rounded-full overflow-hidden border border-white/5">
                  <div className="progress-bar h-full bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]" data-width="28.57%" />
                </div>
              </div>

              {/* Barra 2 - Boa */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-200 font-medium">"Alguma" ou "Boa" expectativa</span>
                  <span className="text-blue-500 font-black">64,27%</span>
                </div>
                <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-white/5">
                  <div className="progress-bar h-full bg-blue-600 rounded-full" data-width="64.27%" />
                </div>
              </div>

              {/* Barra 3 - Pouca */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400 font-light">"Pouca" expectativa</span>
                  <span className="text-slate-500 font-black">7,14%</span>
                </div>
                <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-white/5">
                  <div className="progress-bar h-full bg-slate-700 rounded-full" data-width="7.14%" />
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="max-w-5xl mx-auto mt-6 flex items-start gap-2 text-slate-500 text-[10px] uppercase tracking-widest">
            <Info size={14} className="shrink-0" />
            <p>*As pesquisas de mensuração de impacto ocorreram ao longo de 2023 e contaram com a participação dos técnicos das instituições de acolhimento.</p>
        </div>
      </div>

      {/* =========================================
          SEÇÃO 2: PARCEIROS E FOOTER PADRÃO
      ============================================= */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        
        {/* PARCEIROS */}
        <div className="partners-container border-b border-white/5 pb-16 mb-16">
          <h4 className="text-xl md:text-2xl font-black mb-10 text-center flex items-center justify-center gap-3 text-white uppercase tracking-widest">
            <Handshake className="w-6 h-6 text-blue-500" />
            Realização & Parcerias
          </h4>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {PARTNERS.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-item bg-white p-6 rounded-3xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] w-48 h-32 md:w-56 md:h-36"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* GRID INFO DO FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* SOBRE O PROJETO */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <div className="relative w-32 h-32 bg-slate-900 rounded-full border border-white/10 flex items-center justify-center">
                <Image src="/fdnlogo.png" alt="Logo" fill className="object-contain p-4" />
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm font-light">
              Transformando a dor em acolhimento e o medo em autoconfiança nas águas do Lago Paranoá.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition-all hover:scale-105 shadow-lg shadow-blue-900/40 uppercase text-xs tracking-widest"
            >
              <WhatsappLogo size={20} weight="fill" />
              Fale Conosco
            </a>
          </div>

          {/* CONTATO E LOCAL */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 lg:pl-10">
            <h3 className="text-lg font-black text-white uppercase tracking-widest">
              Nossa Base
            </h3>
            <ul className="space-y-5 text-slate-400 font-light">
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-500 shrink-0" weight="fill" />
                <span>(61) 9979-1925</span>
              </li>
              <li className="flex items-start gap-3 max-w-xs">
                <MapPin size={24} className="text-blue-500 shrink-0 mt-0.5" weight="fill" />
                <span>
                  Lago Paranoá
                  <br />
                  <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1 block">
                    Brasília - DF
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* REDES SOCIAIS */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-6">
            <h3 className="text-lg font-black text-white uppercase tracking-widest">
              Acompanhe
            </h3>

            <div className="flex gap-3">
              <SocialLink
                href="https://www.instagram.com/"
                icon={InstagramLogo}
                baseColor="text-pink-500"
                hoverColor="hover:bg-pink-500"
                label="Instagram"
              />
              <SocialLink
                href="https://www.youtube.com/"
                icon={YoutubeLogo}
                baseColor="text-red-500"
                hoverColor="hover:bg-red-500"
                label="YouTube"
              />
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-black py-6 text-center border-t border-white/5 relative z-10">
        <p className="text-xs text-slate-600 font-light uppercase tracking-widest">
          © {new Date().getFullYear()} Projeto Filhos da Nação. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  icon: Icon,
  baseColor,
  hoverColor,
  label,
}: {
  href: string
  icon: any
  baseColor: string
  hoverColor: string
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`bg-slate-900 border border-white/5 p-3 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg ${baseColor} ${hoverColor} hover:text-white hover:border-transparent`}
    >
      <Icon size={24} weight="fill" />
    </a>
  )
}