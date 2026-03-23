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
  WarningCircle,
  PlayCircle,
  Users,
  Heartbeat,
  Scales,
  Smiley,
  EnvelopeSimple,
  PencilSimple,
  Heart,
  CalendarPlus,
  UsersThree,
  ShareNetwork,
  Clock,
  Waves,
  HandHeart
} from '@phosphor-icons/react'
import { Handshake } from 'lucide-react'

// GSAP
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

// Recharts (Gráficos)
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts'

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

// ==========================================
// DADOS ATUALIZADOS
// ==========================================
const PARTNERS = [
  { name: 'Associação Brasil Melhor', logo: '/brasilLogo.png', url: 'https://brasilmelhor.org.br/' }, 
  { name: 'Ascade', logo: '/logo-ascade.png', url: 'https://ascade.com.br/' },
]

const profileData = [
  { label: 'Ansiedade', value: 100, color: 'bg-white' },
  { label: 'Baixa autoestima', value: 95, color: 'bg-slate-200' },
  { label: 'Agressividade', value: 90, color: 'bg-slate-300' },
  { label: 'Falta de foco', value: 85, color: 'bg-slate-400' },
  { label: 'Depressão', value: 70, color: 'bg-slate-500' },
]

const impactData = [
  { name: 'Nenhuma Expectativa', Antes: 71.4, Depois: 0 },
  { name: 'Pouca Expectativa', Antes: 0, Depois: 7.1 },
  { name: 'Boa Expectativa', Antes: 0, Depois: 64.3 },
  { name: 'Excelente', Antes: 0, Depois: 28.6 },
]

const MEDIA_REPORTS = [
  { year: '2024', title: 'Reportagem Record', icon: PlayCircle, color: 'text-red-500', url: 'https://www.youtube.com/watch?v=bN5JhF3j0pI&t=11s' },
  { year: '2023', title: 'Projeto oferece Canoa...', icon: Smiley, color: 'text-blue-400', url: 'https://www.tjdft.jus.br/informacoes/infancia-e-juventude/noticias-e-destaques/2023/novembro/projeto-oferece-canoa-havaiana-para-criancas-acolhidas' },
  { year: '2022', title: 'Meninos praticam SUP...', icon: EnvelopeSimple, color: 'text-blue-400', url: 'https://www.tjdft.jus.br/informacoes/infancia-e-juventude/noticias-e-destaques/2022/junho/meninos-acolhidos-praticam-canoa-havaiana' },
  { year: '2019', title: 'Terapia e Esporte...', icon: PencilSimple, color: 'text-blue-400', url: 'https://www.tjdft.jus.br/informacoes/infancia-e-juventude/noticias-e-destaques/2019/setembro/combinacao-de-terapia-e-pratica-esportiva-apresenta-resultados-positivos-com-criancas-acolhidas' },
  { year: '2017', title: 'Rede solidária...', icon: Heart, color: 'text-red-500', url: 'https://www.tjdft.jus.br/informacoes/infancia-e-juventude/noticias-e-destaques/2017/outubro/rede-solidaria-oferece-sup-para-jovens-acolhidos' },
]

// NOVOS DADOS DOS CONTADORES 
const statsData = [
  { target: 300, label: 'Beneficiários / Ano', icon: CalendarPlus },
  { target: 750, label: 'Crianças e Adolescentes', icon: UsersThree },
  { target: 4500, label: 'Pessoas Impactadas (Indireto)', icon: ShareNetwork },
  { target: 900, label: 'Horas de Remada', icon: Clock },
  { target: 5000, label: 'Km de Remada', icon: Waves },
  { target: 250, label: 'Voluntários', icon: HandHeart },
]

// Tooltip do Gráfico Moderno
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl">
        <p className="text-white font-black uppercase tracking-widest text-[10px] mb-2 border-b border-white/10 pb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-slate-300 font-light text-xs">{entry.name}:</span>
            <span className="text-white font-bold text-xs">{entry.value}%</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export function Footer() {
  const containerRef = useRef<HTMLElement>(null)

  const whatsappNumber = '556199791925'
  const whatsappMessage = 'Olá, gostaria de saber mais sobre o projeto Filhos da Nação!'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  useGSAP(() => {
    // Barras do Perfil
    const profileBars = gsap.utils.toArray('.profile-bar')
    profileBars.forEach((bar: any) => {
      const targetWidth = bar.getAttribute('data-width')
      gsap.fromTo(bar, 
        { width: '0%' }, 
        { width: targetWidth, duration: 1.5, ease: "power4.out", scrollTrigger: { trigger: '.dashboard-grid', start: "top 80%" } }
      )
    })

    // Contadores Numéricos (Agora formatando os pontos de milhar)
    const counters = gsap.utils.toArray('.counter-number')
    counters.forEach((counter: any) => {
      const target = parseFloat(counter.getAttribute('data-target') || '0')
      gsap.fromTo(counter, 
        { innerText: 0 },
        {
          innerText: target, 
          duration: 2.5, 
          ease: "power3.out",
          snap: { innerText: 1 },
          scrollTrigger: { trigger: '.lives-section', start: "top 80%" },
          onUpdate: function() {
              // Pega o valor arredondado e formata no padrão brasileiro (Ex: 4500 -> 4.500)
              const val = Math.ceil(Number(this.targets()[0].innerText))
              counter.innerHTML = val.toLocaleString('pt-BR')
          }
        }
      )
    })
    
    // Cards do Grid de Mídia
    gsap.fromTo('.media-card', 
      { y: 40, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.8, 
        ease: "back.out(1.2)",
        scrollTrigger: { trigger: '.media-section', start: "top 85%" }
      }
    )
  }, { scope: containerRef })

  return (
    <footer ref={containerRef} className="bg-slate-950 text-slate-300 relative overflow-hidden flex flex-col font-sans">
      
      {/* Luz de Fundo Azul */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* =========================================
          SEÇÃO 1: DASHBOARD COMPACTO (PERFIL + GRÁFICO)
      ============================================= */}
      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-widest uppercase mb-4">
            <ChartBar size={16} weight="fill" /> Dashboard de Impacto
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            A Virada de <span className="text-blue-500 italic">Chave</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light text-base md:text-lg">
            Acompanhe o reflexo de 12 meses de Remoterapia na saúde mental dos jovens acolhidos.
          </p>
        </div>

        {/* GRID LADO A LADO */}
        <div className="dashboard-grid grid lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          
          {/* Lado Esquerdo: A Dor */}
          <div className="lg:col-span-5 bg-slate-900/50 backdrop-blur-xl border border-white/5 p-8 rounded-[2rem] shadow-2xl flex flex-col justify-center">
            <div className="flex items-center gap-2 text-slate-400 mb-6 border-b border-white/5 pb-4">
              <WarningCircle size={24} className="text-white" />
              <h3 className="font-black uppercase tracking-widest text-sm text-white">O Desafio Inicial</h3>
            </div>
            
            <div className="space-y-5">
              {profileData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-300 font-light">{item.label}</span>
                    <span className="text-white font-black">{item.value}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
                    <div className={`profile-bar h-full rounded-full ${item.color} shadow-[0_0_10px_rgba(255,255,255,0.3)]`} data-width={`${item.value}%`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: A Cura */}
          <div className="lg:col-span-7 bg-slate-900/80 backdrop-blur-xl border border-blue-500/20 p-6 md:p-8 rounded-[2rem] shadow-[0_0_30px_rgba(59,130,246,0.1)] relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full pointer-events-none" />
            
            <h3 className="font-black uppercase tracking-widest text-sm text-blue-400 mb-2 text-center">Expectativa de Futuro</h3>
            <div className="h-[250px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={impactData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }} barSize={35}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 600 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} tickFormatter={(val) => `${val}%`} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: '#ffffff05' }} />
                  
                  <Bar dataKey="Antes" name="Início" fill="#e2e8f0" radius={[6, 6, 6, 6]} />
                  <Bar dataKey="Depois" name="12 Meses" fill="#3b82f6" radius={[6, 6, 6, 6]}>
                    {impactData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.Depois > 0 ? '#3b82f6' : 'transparent'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-200" /><span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Início</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" /><span className="text-white text-xs font-bold uppercase tracking-widest">12 Meses</span></div>
            </div>
          </div>
        </div>

        {/* Embasamento Legal Compacto */}
        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-6xl mx-auto mt-6">
            <div className="flex items-start gap-3 bg-slate-900/40 p-4 rounded-xl border border-white/5 flex-1">
                <Scales size={24} className="text-blue-500 shrink-0" weight="fill" />
                <p className="text-xs text-slate-400 font-light italic leading-tight">"A criança e o adolescente têm direito à liberdade, ao respeito e à dignidade..." <br/><strong className="text-white text-[9px] uppercase tracking-widest not-italic mt-1 block">Art. 15, ECA</strong></p>
            </div>
            <div className="flex items-start gap-3 bg-slate-900/40 p-4 rounded-xl border border-white/5 flex-1">
                <Scales size={24} className="text-blue-500 shrink-0" weight="fill" />
                <p className="text-xs text-slate-400 font-light italic leading-tight">"É dever da família, da sociedade e do Estado assegurar à criança, com absoluta prioridade, o direito à vida..." <br/><strong className="text-white text-[9px] uppercase tracking-widest not-italic mt-1 block">Art. 227, CF</strong></p>
            </div>
        </div>
      </div>

      {/* =========================================
          SEÇÃO 2: VIDAS TRANSFORMADAS E NA MÍDIA
      ============================================= */}
      <div className="lives-section relative py-24 border-y border-white/10 overflow-hidden">
        
        {/* Imagem colorida no fundo com filtros modernos */}
        <div className="absolute inset-0 z-0">
            <Image src="/canoa5.jpg" alt="Fundo" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 z-0 bg-blue-950/40 backdrop-blur-[6px]" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-4 drop-shadow-lg">
              Vidas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Transformadas</span>
            </h2>
          </div>

          {/* GRID 3x2 DE CONTADORES ANIMADOS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
            {statsData.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-center shadow-[0_0_40px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:scale-105 hover:bg-white/20 flex flex-col items-center justify-center"
                >
                  <stat.icon size={40} weight="fill" className="text-blue-300 mb-4 drop-shadow-md" />
                  <div className="text-5xl md:text-6xl font-black text-white mb-2 drop-shadow-lg tracking-tighter">
                    +<span className="counter-number" data-target={stat.target}>0</span>
                  </div>
                  <p className="text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] drop-shadow-md leading-tight">
                    {stat.label}
                  </p>
                </div>
            ))}
          </div>

          {/* Grid Na Mídia */}
          <div className="media-section max-w-6xl mx-auto">
            <h3 className="text-center text-white font-black uppercase tracking-widest text-sm mb-6 drop-shadow-lg">Nosso Impacto na Mídia</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {MEDIA_REPORTS.map((media, idx) => (
                <a key={idx} href={media.url} target="_blank" rel="noopener noreferrer" className="media-card bg-slate-900/60 backdrop-blur-md hover:bg-white border border-white/10 hover:border-transparent p-5 rounded-2xl flex flex-col items-center text-center transition-all duration-300 group shadow-xl">
                  <media.icon size={32} weight="fill" className={`${media.color} mb-3 group-hover:scale-110 transition-transform`} />
                  <span className="text-white group-hover:text-slate-950 font-bold text-xs leading-tight mb-2 transition-colors">{media.title}</span>
                  <span className="text-blue-300 group-hover:text-blue-600 font-black text-[9px] uppercase tracking-widest transition-colors mt-auto">Ano {media.year}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* =========================================
          SEÇÃO 3: NOSSA LOCALIZAÇÃO (MAPA)
      ============================================= */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
        <div className="flex flex-col items-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-widest uppercase mb-4">
                <MapPin size={16} weight="fill" />
                Nossa Base
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter text-center">
                Onde o <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Projeto</span> Acontece
            </h3>
        </div>

        {/* Iframe do Mapa em Glassmorphism Container */}
        <div className="w-full max-w-6xl mx-auto h-[350px] md:h-[450px] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.6)] relative group">
            {/* Bordas internas e sobreposição para evitar que o Iframe cubra o border-radius nativo do Tailwind */}
            <div className="absolute inset-0 z-10 pointer-events-none rounded-[2rem] md:rounded-[3rem] shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] border border-white/5" />
            
            <iframe
                title="ASCADE Brasília - OndaSup"
                src="https://maps.google.com/maps?width=100%25&height=600&hl=pt-BR&q=Clube%20Ascade,%20St.%20de%20Clubes%20Esportivos%20Sul%20Trecho%202%20Conjunto%2010%20Lote%2018%20-%20Asa%20Sul,%20Bras%C3%ADlia%20-%20DF,%2070200-002+(OndaSup%20-%20Clube%20Ascade)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
                className="w-full h-full contrast-[1.1] grayscale-[0.3] transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100"
            />
        </div>
      </div>

      {/* =========================================
          SEÇÃO 4: FOOTER FINAL (LOGO LIMPA)
      ============================================= */}
      <div className="container mx-auto px-6 py-16 relative z-10 border-t border-white/5">
        
        {/* PARCEIROS */}
        <div className="border-b border-white/5 pb-16 mb-16">
          <h4 className="text-sm font-black mb-8 text-center text-slate-500 uppercase tracking-widest">Realização & Parcerias</h4>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {PARTNERS.map((item) => (
              <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] w-40 h-24 md:w-56 md:h-28">
                <div className="relative w-full h-full"><Image src={item.logo} alt={item.name} fill sizes="(max-width: 768px) 160px, 224px" className="object-contain" /></div>
              </a>
            ))}
          </div>
        </div>

        {/* GRID INFO DO FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div className="relative w-36 h-36 flex items-center justify-center">
                <Image src="/fdnlogo.png" alt="Logo Filhos da Nação" fill sizes="144px" className="object-contain" />
            </div>
            <p className="text-slate-400 text-sm font-light max-w-xs leading-relaxed">Transformando a dor em acolhimento e o medo em autoconfiança no Lago Paranoá.</p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <h3 className="text-sm font-black text-white uppercase tracking-widest">Nossa Base</h3>
            <ul className="space-y-4 text-slate-400 font-light text-sm">
              <li className="flex items-center gap-3"><Phone size={20} className="text-blue-500 shrink-0" weight="fill" /><span>(61) 9979-1925</span></li>
              <li className="flex items-start gap-3 max-w-xs"><MapPin size={24} className="text-blue-500 shrink-0 mt-0.5" weight="fill" /><span>Lago Paranoá<br /><span className="text-[9px] text-slate-500 uppercase font-black tracking-widest mt-1 block">Brasília - DF</span></span></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-6">
            <h3 className="text-sm font-black text-white uppercase tracking-widest">Redes Sociais</h3>
            <div className="flex gap-3">
              <SocialLink href="https://www.instagram.com/filhosdanacao/" icon={InstagramLogo} baseColor="text-pink-500" hoverColor="hover:bg-pink-500" label="Instagram" />
              <SocialLink href="https://www.youtube.com/" icon={YoutubeLogo} baseColor="text-red-500" hoverColor="hover:bg-red-500" label="YouTube" />
              <SocialLink href={whatsappLink} icon={WhatsappLogo} baseColor="text-green-500" hoverColor="hover:bg-green-500" label="WhatsApp" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-6 text-center border-t border-white/5 relative z-10">
        <p className="text-xs text-slate-600 font-light uppercase tracking-widest">
          © {new Date().getFullYear()} Projeto Filhos da Nação. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon: Icon, baseColor, hoverColor, label }: any) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={`bg-slate-900 border border-white/5 p-3 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg ${baseColor} ${hoverColor} hover:text-white hover:border-transparent`}>
      <Icon size={24} weight="fill" />
    </a>
  )
}