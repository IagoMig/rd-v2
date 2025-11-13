import React from 'react';
import { Lightbulb, Megaphone, PenTool, BarChart } from 'lucide-react';
export const Services = () => {
  const services = [{
    icon: <Lightbulb className="h-10 w-10 text-orange-500" />,
    title: 'Planejamento Estratégico',
    description: 'Desenvolvemos estratégias de marketing abrangentes adaptadas aos seus objetivos de negócio e público-alvo.'
  }, {
    icon: <PenTool className="h-10 w-10 text-orange-500" />,
    title: 'Criação de Conteúdo',
    description: 'Nossa equipe cria conteúdo envolvente e de alta qualidade que ressoa com seu público e gera resultados.'
  }, {
    icon: <Megaphone className="h-10 w-10 text-orange-500" />,
    title: 'Marketing Digital',
    description: 'De SEO a mídias sociais, implementamos campanhas de marketing digital eficazes que aumentam a visibilidade.'
  }, {
    icon: <BarChart className="h-10 w-10 text-orange-500" />,
    title: 'Analytics & Insights',
    description: 'Analisamos dados para fornecer insights acionáveis que otimizam seu desempenho de marketing.'
  }];
  return <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50/50 rounded-full blur-3xl animate-float-delayed" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hover-lift">
            Nossos <span className="text-orange-500">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600">
            Oferecemos uma gama completa de serviços de marketing projetados
            para elevar sua marca e impulsionar o crescimento do negócio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => <div key={index} className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 card-3d cursor-pointer animate-scale-in" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                {service.description}
              </p>
              <div className="mt-4 h-1 bg-gradient-to-r from-orange-500 to-orange-300 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
            </div>)}
        </div>
        <div className="mt-20 bg-gradient-to-br from-black via-gray-900 to-black text-white rounded-3xl p-12 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 card-3d-subtle animate-fade-in-up animation-delay-400">
          <h3 className="text-3xl font-bold mb-10 text-center">
            Nosso Impacto em Números
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{
            value: '500+',
            label: 'Projetos Concluídos'
          }, {
            value: '98%',
            label: 'Satisfação do Cliente'
          }, {
            value: '250%',
            label: 'ROI Médio'
          }, {
            value: '15+',
            label: 'Prêmios da Indústria'
          }].map((stat, index) => <div key={index} className="group hover-lift cursor-pointer animate-scale-in" style={{
            animationDelay: `${(index + 4) * 100}ms`
          }}>
                <p className="text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};