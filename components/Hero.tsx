'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Isso evita o erro de carregamento e o lag inicial
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#0f0f0f]" />
})

const fullText = 'Dev Frontend.'

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1))
      i++
      if (i === fullText.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#0f0f0f]"
    >

      {/* CAMADA 2: Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/50 to-transparent z-10 pointer-events-none" />

      {/* CAMADA 3: Conteúdo */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 w-full flex justify-start">
        <div className="flex flex-col items-start max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#534AB7] bg-[#0f0f0f]/80 backdrop-blur-md w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-[#7F77DD] animate-pulse" />
            <span className="text-xs text-[#AFA9EC]">disponível para oportunidades</span>
          </div>

          {/* Título */}
          <h1 className="text-5xl md:text-8xl font-bold text-[#EEEDFE] leading-[1.1] mb-6 tracking-tight">
            Olá, sou <span className="text-[#AFA9EC]">Wadton</span> —<br />
            <span className="text-[#7F77DD]">
              {displayed}
              {!done && (
                <span className="inline-block w-[4px] h-[0.9em] bg-[#7F77DD] ml-2 animate-pulse align-middle" />
              )}
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-[#9d9d9d] leading-relaxed mb-10 max-w-lg">
            Estudante de ADS na FatecSenai Cuiabá, construindo interfaces
            modernas com React, TypeScript e Next.js.
          </p>

          {/* Botões */}
          <div className="flex flex-wrap items-center gap-5">
            <a 
              href="#projetos" 
              className="px-10 py-4 rounded-xl bg-[#534AB7] text-[#EEEDFE] text-sm font-bold hover:bg-[#7F77DD] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#534AB7]/25"
            >
              Ver projetos
            </a>
            <a 
              href="/curriculo-wadton.pdf" 
              target="_blank" 
              className="px-10 py-4 rounded-xl border border-[#2a2a3d] bg-[#0f0f0f]/60 backdrop-blur-md text-[#9d9d9d] text-sm font-medium hover:border-[#534AB7] hover:text-[#AFA9EC] transition-all"
            >
              Baixar currículo
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Decorativo */}
      <div className="absolute bottom-12 left-16 hidden lg:flex flex-col items-center gap-4 z-20">
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#534AB7] to-transparent" />
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#6b6b80] [writing-mode:vertical-lr]">Scroll</span>
      </div>
    </section>
  )
}