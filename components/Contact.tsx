'use client'

export default function Contact() {
  return (
    <footer id="contato" className="py-24 bg-[#0f0f0f] relative overflow-hidden">
      {/* Glow de fundo para finalização */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[#534AB7]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Lado Esquerdo: Texto e Infos */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-[#534AB7]" />
              <span className="text-[#AFA9EC] text-sm font-medium uppercase tracking-[0.3em]">Contato</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-[#EEEDFE] mb-8 leading-tight">
              Vamos criar algo <span className="text-[#7F77DD]">incrível</span> juntos?
            </h2>

            <p className="text-[#9d9d9d] text-lg mb-12 max-w-md">
              Estou sempre aberto a novas oportunidades, colaborações ou apenas para trocar uma ideia sobre desenvolvimento e design.
            </p>

            {/* Links Rápidos */}
            <div className="space-y-6">
              <a href="mailto:seu-email@gmail.com" className="group flex items-center gap-4 text-[#EEEDFE] hover:text-[#AFA9EC] transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#16161a] border border-[#2a2a3d] flex items-center justify-center group-hover:border-[#534AB7] transition-all">
                  📧
                </div>
                <span className="text-sm font-medium">wadton.contato@email.com</span>
              </a>

              <a href="https://linkedin.com/in/seu-perfil" target="_blank" className="group flex items-center gap-4 text-[#EEEDFE] hover:text-[#AFA9EC] transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#16161a] border border-[#2a2a3d] flex items-center justify-center group-hover:border-[#534AB7] transition-all">
                  in
                </div>
                <span className="text-sm font-medium">linkedin.com/in/wadton</span>
              </a>
            </div>
          </div>

          {/* Lado Direito: Formulário Minimalista */}
          <div className="bg-[#16161a] border border-[#2a2a3d] p-8 md:p-10 rounded-3xl shadow-2xl relative">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#AFA9EC] uppercase tracking-widest ml-1">Nome</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full bg-[#0f0f0f] border border-[#2a2a3d] rounded-xl px-4 py-3 text-sm text-[#EEEDFE] focus:outline-none focus:border-[#534AB7] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#AFA9EC] uppercase tracking-widest ml-1">E-mail</label>
                  <input 
                    type="email" 
                    placeholder="seu@email.com"
                    className="w-full bg-[#0f0f0f] border border-[#2a2a3d] rounded-xl px-4 py-3 text-sm text-[#EEEDFE] focus:outline-none focus:border-[#534AB7] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#AFA9EC] uppercase tracking-widest ml-1">Mensagem</label>
                <textarea 
                  rows={4}
                  placeholder="Como posso te ajudar?"
                  className="w-full bg-[#0f0f0f] border border-[#2a2a3d] rounded-xl px-4 py-3 text-sm text-[#EEEDFE] focus:outline-none focus:border-[#534AB7] transition-colors resize-none"
                ></textarea>
              </div>

              <button className="w-full py-4 bg-[#534AB7] text-[#EEEDFE] font-bold rounded-xl hover:bg-[#7F77DD] active:scale-[0.98] transition-all shadow-lg shadow-[#534AB7]/20">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        {/* Rodapé Final */}
        <div className="mt-24 pt-8 border-t border-[#2a2a3d] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#6b6b80] text-xs">
            © {new Date().getFullYear()} Wadton.dev — Feito com Next.js e muito ☕ em Cuiabá.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#hero" className="text-[#6b6b80] hover:text-[#EEEDFE] text-xs transition-colors">Voltar ao topo</a>
            <div className="w-1 h-1 rounded-full bg-[#2a2a3d]" />
            <span className="text-[#6b6b80] text-xs italic font-serif">Status: Aberto a projetos</span>
          </div>
        </div>
      </div>
    </footer>
  )
}