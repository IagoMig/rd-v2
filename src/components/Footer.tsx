import React from 'react';
import { ArrowUpIcon } from 'lucide-react';
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-500 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="animate-fade-in">
            <div className="text-3xl font-bold mb-6">
              <span className="text-white">R</span>
              <span className="text-black">D</span>
            </div>
            <p className="mb-6 opacity-90">
              Agência de marketing em Curitiba focada em gerar resultados
              através da criatividade estratégica.
            </p>
            <button onClick={scrollToTop} className="flex items-center text-sm font-medium hover:text-black transition-all hover:scale-105">
              Voltar ao Topo <ArrowUpIcon className="ml-1 h-4 w-4" />
            </button>
          </div>
          <div className="animate-slide-up animation-delay-100">
            <h3 className="text-lg font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {['Planejamento Estratégico', 'Criação de Conteúdo', 'Marketing Digital', 'Estratégia de Marca', 'Analytics'].map((item, index) => <li key={item} className="animate-fade-in" style={{
              animationDelay: `${index * 50}ms`
            }}>
                  <a href="#services" className="opacity-90 hover:opacity-100 hover:text-black transition-all hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>
          <div className="animate-slide-up animation-delay-200">
            <h3 className="text-lg font-bold mb-6">Empresa</h3>
            <ul className="space-y-3">
              {['Sobre Nós', 'Nosso Trabalho', 'Carreiras', 'Contato'].map((item, index) => <li key={item} className="animate-fade-in" style={{
              animationDelay: `${index * 50}ms`
            }}>
                    <a href="#" className="opacity-90 hover:opacity-100 hover:text-black transition-all hover:translate-x-1 inline-block">
                      {item}
                    </a>
                  </li>)}
            </ul>
          </div>
          <div className="animate-slide-up animation-delay-300">
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="opacity-90 mb-4">
              Inscreva-se para receber insights de marketing.
            </p>
            <form className="flex">
              <input type="email" placeholder="Seu email" className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-black focus:ring-2 focus:ring-white transition-all" />
              <button type="submit" className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-800 transition-all hover:scale-105">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} RD Marketing - Foz do Iguaçu, PR. Todos os
            direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-all hover:scale-105">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-all hover:scale-105">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>;
};