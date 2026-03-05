import React from 'react';
import { CheckCircle } from 'lucide-react';
export const About = () => {
  const values = ['Abordagem orientada por dados', 'Excelência criativa em tudo que fazemos', 'Comunicação transparente com clientes', 'Estratégias focadas em resultados'];
  return <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl animate-float" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre a <span className="text-orange-500">RD</span>
          </h2>
          <p className="text-xl text-gray-600">
            Não somos apenas mais uma agência de marketing. Somos uma equipe de
            estrategistas, criativos e analistas apaixonados dedicados ao seu
            sucesso.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-in-left">
            <div className="bg-gray-200 rounded-3xl overflow-hidden shadow-xl aspect-[4/3] card-3d">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Equipe RD Marketing" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
          <div className="animate-fade-in-right">
            <h3 className="text-3xl font-bold mb-6">Nossa História</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Fundada em 2010 em Foz do Iguaçu, a RD cresceu de uma pequena equipe de
              profissionais de marketing apaixonados para uma agência de serviço
              completo com expertise em todos os canais digitais.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Nossa missão é simples: entregar resultados excepcionais através
              de soluções de marketing inovadoras que conectam marcas com seus
              públicos de maneiras significativas.
            </p>
            <h4 className="text-xl font-bold mb-4">Nossos Valores</h4>
            <ul className="space-y-3 mb-8">
              {values.map((value, index) => <li key={index} className="flex items-center animate-slide-in-right" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span>{value}</span>
                </li>)}
            </ul>
            <a href="#contact" className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl hover:scale-105 animate-fade-in">
              Trabalhe Conosco
            </a>
          </div>
        </div>
      </div>
    </section>;
};