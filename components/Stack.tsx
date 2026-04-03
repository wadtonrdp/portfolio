'use client'

const technologies = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: "Avançado", icon: "⚛️" },
      { name: "Next.js", level: "Avançado", icon: "▲" },
      { name: "TypeScript", level: "Intermediário", icon: "TS" },
      { name: "Tailwind CSS", level: "Avançado", icon: "🎨" },
    ]
  },
  {
    category: "Design & 3D",
    skills: [
      { name: "Spline 3D", level: "Intermediário", icon: "🌀" },
      { name: "Figma", level: "Intermediário", icon: "❖" },
      { name: "Framer Motion", level: "Intermediário", icon: "🎬" },
    ]
  },
  {
    category: "Ferramentas",
    skills: [
      { name: "Git & GitHub", level: "Avançado", icon: "🚀" },
      { name: "Node.js", level: "Básico", icon: "🟢" },
      { name: "Vercel", level: "Avançado", icon: "☁️" },
    ]
  }
]

export default function Stack() {
  return (
    <section id="stack" className="py-24 bg-[#0f0f0f] relative overflow-hidden">
      {/* Detalhe de luz no fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#534AB7]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Título da Seção */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-[#534AB7]" />
            <span className="text-[#AFA9EC] text-sm font-medium uppercase tracking-[0.3em]">Minha Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#EEEDFE]">
            Tecnologias que <span className="text-[#7F77DD]">domino</span>
          </h2>
        </div>

        {/* Grid de Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((group, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-3xl bg-[#16161a]/50 border border-[#2a2a3d] backdrop-blur-sm hover:border-[#534AB7]/50 transition-all duration-300"
            >
              <h3 className="text-[#AFA9EC] font-bold text-lg mb-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#534AB7]" />
                {group.category}
              </h3>

              <div className="space-y-6">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#0f0f0f] border border-[#2a2a3d] flex items-center justify-center text-lg group-hover:border-[#534AB7] group-hover:text-[#7F77DD] transition-all">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="text-[#EEEDFE] font-medium text-sm">{skill.name}</h4>
                        <p className="text-[#6b6b80] text-[10px] uppercase tracking-widest">{skill.level}</p>
                      </div>
                    </div>
                    
                    {/* Barrinha de progresso minimalista */}
                    <div className="w-12 h-[2px] bg-[#2a2a3d] rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-[#534AB7] transition-all duration-1000 ${
                          skill.level === 'Avançado' ? 'w-full' : 
                          skill.level === 'Intermediário' ? 'w-2/3' : 'w-1/3'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Badge de aprendizado */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-[#534AB7]/10 to-transparent border border-[#534AB7]/20 flex items-center justify-center gap-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7F77DD] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#534AB7]"></span>
          </span>
          <p className="text-[#9d9d9d] text-sm">
            Atualmente aprofundando estudos em <span className="text-[#EEEDFE] font-semibold text-white">Back-end com Node.js</span> e <span className="text-[#EEEDFE] font-semibold text-white">Cloud Computing</span>.
          </p>
        </div>

      </div>
    </section>
  )
}