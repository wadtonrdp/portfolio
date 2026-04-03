'use client'

import Image from 'next/image'

const projectsList = [
  {
    title: 'E-commerce Moderno',
    description: 'Plataforma completa com carrinho, pagamentos via Stripe e painel administrativo.',
    tech: ['Next.js', 'Tailwind', 'Prisma'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000' // Substitua pelas suas prints
  },
  {
    title: 'Dashboard de Finanças',
    description: 'Interface de monitoramento financeiro com gráficos interativos e filtros avançados.',
    tech: ['React', 'TypeScript', 'Chart.js'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bb8c803bd746?q=80&w=1000'
  },
  {
    title: 'Social App Design',
    description: 'Rede social focada em conexões rápidas, com foco total em UX e micro-interações.',
    tech: ['Next.js', 'Framer Motion', 'Zustand'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000'
  }
]

export default function Projects() {
  return (
    <section id="projetos" className="py-24 bg-[#0f0f0f] relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#534AB7]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#534AB7]" />
            <span className="text-[#AFA9EC] text-xs font-medium uppercase tracking-[0.4em]">Portfólio</span>
            <div className="w-8 h-[1px] bg-[#534AB7]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#EEEDFE]">
            Projetos em <span className="text-[#7F77DD]">Destaque</span>
          </h2>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-[#16161a] border border-[#2a2a3d] rounded-2xl overflow-hidden hover:border-[#534AB7]/50 transition-all duration-500"
            >
              {/* Container da Imagem */}
              <div className="relative h-52 w-full overflow-hidden">
                <div className="absolute inset-0 bg-[#534AB7]/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-[#0f0f0f] rounded-full text-white hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href={project.link} className="p-3 bg-[#534AB7] rounded-full text-white hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-[#1a1a1a] border border-[#2a2a3d] text-[#AFA9EC] rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-[#EEEDFE] mb-3 group-hover:text-[#7F77DD] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#6b6b80] text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-[#AFA9EC] text-sm font-medium group/btn">
                  Ver Detalhes 
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action no final */}
        <div className="mt-16 text-center">
          <p className="text-[#6b6b80] text-sm mb-6">Quer ver mais?</p>
          <a 
            href="https://github.com/seu-usuario" 
            target="_blank"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-[#2a2a3d] text-[#EEEDFE] hover:border-[#534AB7] hover:bg-[#534AB7]/10 transition-all duration-300"
          >
            GitHub Completo
          </a>
        </div>
      </div>
    </section>
  )
}