'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="sobre" className="relative py-24 bg-[#0f0f0f] overflow-hidden">
      {/* Elementos decorativos de fundo (Glows) */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#534AB7]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#7F77DD]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Lado Esquerdo: Imagem/Card Visual */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#534AB7] to-[#7F77DD] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />

            {/* ✅ Container único com position relative e dimensões definidas */}
            <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl bg-[#1a1a1a] border border-[#2a2a3d] overflow-hidden">
              <Image
                src="/wadton_profile.png"
                alt="Wadton Rodrigues"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Badge flutuante de experiência/estudo */}
            <div className="absolute -bottom-6 -right-6 bg-[#1a1a1a]/80 backdrop-blur-xl border border-[#534AB7] p-6 rounded-2xl shadow-2xl">
              <span className="block text-3xl font-bold text-[#EEEDFE]">ADS</span>
              <span className="text-xs text-[#AFA9EC] uppercase tracking-widest font-medium">FatecSenai Cuiabá</span>
            </div>
          </div>

          {/* Lado Direito: Texto */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-[#534AB7]" />
              <span className="text-[#AFA9EC] text-sm font-medium uppercase tracking-[0.3em]">Sobre mim</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#EEEDFE] mb-8 leading-tight">
              Desenvolvedor com foco em <span className="text-[#7F77DD]">performance</span> e design.
            </h2>

            <div className="space-y-6 text-[#9d9d9d] leading-relaxed text-lg">
              <p>
                Olá! Meu nome é <span className="text-[#EEEDFE] font-medium">Wadton</span>. Minha jornada na tecnologia começou pela curiosidade de como as interfaces modernas eram construídas. Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas na <span className="text-[#AFA9EC]">FatecSenai Cuiabá</span>.
              </p>

              <p>
                Meu foco principal é o ecossistema <strong>React</strong>, onde busco criar aplicações que não apenas funcionem bem, mas que também ofereçam uma experiência visualmente impactante e fluida para o usuário.
              </p>

              <p>
                Acredito que o aprendizado contínuo é a chave, por isso estou sempre explorando novas ferramentas como Next.js, Tailwind CSS e animações 3D com Spline para elevar o nível dos meus projetos.
              </p>
            </div>

            {/* Grid de mini-infos */}
            <div className="grid grid-cols-2 gap-8 mt-10 w-full">
              <div>
                <h4 className="text-[#EEEDFE] font-semibold mb-2">Localização</h4>
                <p className="text-[#6b6b80] text-sm">Cuiabá, MT - Brasil</p>
              </div>
              <div>
                <h4 className="text-[#EEEDFE] font-semibold mb-2">Educação</h4>
                <p className="text-[#6b6b80] text-sm">Superior em ADS</p>
              </div>
              <div>
                <h4 className="text-[#EEEDFE] font-semibold mb-2">Interesses</h4>
                <p className="text-[#6b6b80] text-sm">UI/UX, 3D Web, Frontend</p>
              </div>
              <div>
                <h4 className="text-[#EEEDFE] font-semibold mb-2">Idiomas</h4>
                <p className="text-[#6b6b80] text-sm">Português (Nativo)</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
