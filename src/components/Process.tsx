import React from 'react';
import { Search, Lightbulb, Rocket, TrendingUp } from 'lucide-react';
export const Process = () => {
  const steps = [{
    icon: <Search className="h-12 w-12 text-orange-500" />,
    title: 'Descoberta',
    description: 'Analisamos seu negócio, mercado e concorrência para entender suas necessidades únicas.'
  }, {
    icon: <Lightbulb className="h-12 w-12 text-orange-500" />,
    title: 'Estratégia',
    description: 'Desenvolvemos uma estratégia personalizada alinhada com seus objetivos de negócio.'
  }, {
    icon: <Rocket className="h-12 w-12 text-orange-500" />,
    title: 'Execução',
    description: 'Implementamos campanhas criativas e eficazes em todos os canais relevantes.'
  }, {
    icon: <TrendingUp className="h-12 w-12 text-orange-500" />,
    title: 'Otimização',
    description: 'Monitoramos, analisamos e otimizamos continuamente para maximizar resultados.'
  }];
  return <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hover-lift">
            Nosso <span className="text-orange-500">Processo</span>
          </h2>
          <p className="text-xl text-gray-600">
            Uma abordagem estruturada e comprovada para entregar resultados
            excepcionais.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => <div key={index} className="relative group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 card-3d h-full">
                <div className="absolute -top-4 left-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <div className="mb-6 mt-4 transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-300 to-orange-500 z-20" />}
            </div>)}
        </div>
      </div>
    </section>;
};