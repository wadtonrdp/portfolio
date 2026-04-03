'use client'

const experiences = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    company: "FatecSenai Cuiabá",
    period: "2024 — Presente",
    description: "Foco em arquitetura de software, estruturas de dados e desenvolvimento fullstack. Participação ativa em projetos acadêmicos utilizando metodologias ágeis.",
    tags: ["Ensino Superior", "Algoritmos", "Banco de Dados"]
  },
  {
    title: "Desenvolvedor Frontend Freelancer",
    company: "Autônomo",
    period: "2023 — 2024",
    description: "Criação de landing pages de alta conversão e interfaces modernas utilizando React e Tailwind CSS para clientes locais e regionais.",
    tags: ["React", "UI Design", "Freelance"]
  },
  {
    title: "Estudos em UI/UX & Web Design",
    company: "Autodidata / Cursos Online",
    period: "2022 — 2023",
    description: "Início da jornada no desenvolvimento focado em design de interface. Especialização em Figma e prototipação de experiências de usuário.",
    tags: ["Figma", "HTML/CSS", "JavaScript"]
  }
]

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 bg-[#0f0f0f] relative">
      
      <div className="max-w-5xl mx-auto px-6 relative">
        
        {/* Título da Seção */}
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#534AB7]" />
            <span className="text-[#AFA9EC] text-xs font-medium uppercase tracking-[0.4em]">Trajetória</span>
            <div className="w-8 h-[1px] bg-[#534AB7]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#EEEDFE]">
            Minha <span className="text-[#7F77DD]">Experiência</span>
          </h2>
        </div>

        {/* Linha Central da Timeline (Desktop) */}
        <div className="absolute left-[31px] md:left-1/2 top-48 bottom-0 w-[1px] bg-gradient-to-b from-[#534AB7] via-[#2a2a3d] to-transparent hidden md:block" />

        {/* Itens da Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Ponto na Timeline */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#0f0f0f] border-2 border-[#534AB7] -translate-x-[7px] md:-translate-x-2 z-10 hidden md:block" />

              {/* Card de Conteúdo */}
              <div className={`w-full md:w-[45%] group`}>
                <div className="p-8 rounded-2xl bg-[#16161a] border border-[#2a2a3d] hover:border-[#534AB7]/50 transition-all duration-300 shadow-xl hover:shadow-[#534AB7]/5">
                  
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#7F77DD] mb-2 block">
                    {exp.period}
                  </span>
                  
                  <h3 className="text-xl font-bold text-[#EEEDFE] mb-1 group-hover:text-[#AFA9EC] transition-colors">
                    {exp.title}
                  </h3>
                  
                  <p className="text-[#AFA9EC] text-sm mb-4 font-medium">
                    {exp.company}
                  </p>
                  
                  <p className="text-[#6b6b80] text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-[9px] px-2 py-1 rounded bg-[#0f0f0f] border border-[#2a2a3d] text-[#9d9d9d]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Espaçador para o outro lado (Desktop) */}
              <div className="md:w-[45%]" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}