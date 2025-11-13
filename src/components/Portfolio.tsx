import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
export const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projects = [{
    title: 'Rebranding Tech Global',
    category: 'Estratégia de Marca',
    description: 'Transformação completa da marca para uma empresa de tecnologia líder, incluindo nova identidade visual e framework de mensagens.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1170&q=80'
  }, {
    title: 'Lançamento Produto Sustentável',
    category: 'Marketing Digital',
    description: 'Campanha digital abrangente para lançamento de produto sustentável, resultando em aumento de 200% nas vendas no primeiro trimestre.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1170&q=80'
  }, {
    title: 'Redesign UX App Financeiro',
    category: 'Experiência do Usuário',
    description: 'Reformulação completa da experiência do usuário para aplicativo de serviços financeiros, aumentando a retenção em 45%.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1170&q=80'
  }, {
    title: 'Campanha Varejo Luxo',
    category: 'Criação de Conteúdo',
    description: 'Estratégia e produção de conteúdo premiada para campanha sazonal de marca de varejo de luxo.',
    image: 'https://images.unsplash.com/photo-1664575599736-c5197c684128?auto=format&fit=crop&w=1170&q=80'
  }];
  const nextProject = () => setActiveProject(prev => (prev + 1) % projects.length);
  const prevProject = () => setActiveProject(prev => (prev - 1 + projects.length) % projects.length);
  return <section id="portfolio" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hover-lift">
            Nosso <span className="text-orange-500">Trabalho</span>
          </h2>
          <p className="text-xl text-gray-600">
            Explore nosso portfólio de projetos bem-sucedidos e veja como
            ajudamos marcas a alcançar seus objetivos de marketing.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
            <div className="group bg-gray-200 rounded-3xl overflow-hidden shadow-xl aspect-[4/3] card-3d cursor-pointer">
              <img src={projects[activeProject].image} alt={projects[activeProject].title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                {projects[activeProject].category}
              </div>
              <h3 className="text-3xl font-bold hover:text-orange-500 transition-colors">
                {projects[activeProject].title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {projects[activeProject].description}
              </p>
              <a href="#contact" className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors group">
                Ver Caso de Estudo
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <button onClick={prevProject} className="p-4 rounded-full bg-black text-white hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:scale-110 active:scale-95">
              <ArrowLeftIcon className="h-6 w-6" />
            </button>
            <div className="flex space-x-2">
              {projects.map((_, index) => <button key={index} onClick={() => setActiveProject(index)} className={`h-3 rounded-full transition-all duration-300 ${activeProject === index ? 'w-8 bg-orange-500' : 'w-3 bg-gray-300 hover:bg-orange-300'}`} />)}
            </div>
            <button onClick={nextProject} className="p-4 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl hover:scale-110 active:scale-95">
              <ArrowRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>;
};