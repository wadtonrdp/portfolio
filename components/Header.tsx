'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const links = [
  { label: 'Sobre',      href: '#sobre' },
  { label: 'Projetos',   href: '#projetos' },
  { label: 'Stack',      href: '#stack' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato',    href: '#contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f0f0f]/90 backdrop-blur-md border-b border-[#2a2a3d]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo-wr.svg"
            alt="Logo WR"
            width={40}
            height={40}
          />
        </a>

        {/* Links de navegação */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            // AQUI: Adicionei a tag <a> que faltava
            <a 
              key={link.href}
              href={link.href}
              className="text-sm text-[#9d9d9d] hover:text-[#AFA9EC] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botão currículo */}
        {/* AQUI: Também faltava a tag <a> de abertura aqui embaixo */}
        <a 
          href="/curriculo-wadton.pdf"
          target="_blank"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#534AB7] text-sm text-[#AFA9EC] hover:bg-[#534AB7]/20 transition-all duration-200"
        >
          Currículo
        </a>

      </div>
    </header>
  )
}