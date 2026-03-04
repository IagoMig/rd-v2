import React, { useEffect, useState } from 'react';
import { ArrowDownIcon, SparklesIcon } from 'lucide-react';

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 50, // Centralizado por padrão para mobile
    y: 50
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    // Só adiciona o listener se não for um dispositivo touch primário
    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-white flex items-center">
      {/* Background Dinâmico - Otimizado */}
      <div 
        className="absolute inset-0 opacity-60 transition-opacity duration-1000" 
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(249, 115, 22, 0.15) 0%, rgba(251, 146, 60, 0.1) 25%, rgba(255, 255, 255, 0) 50%)`
        }} 
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-white to-orange-50/30" />

      {/* Blobs de fundo - Redimensionados para mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-48 h-48 md:w-72 md:h-72 bg-orange-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 -right-10 w-64 h-64 md:w-96 md:h-96 bg-orange-300/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="relative z-20 w-full px-6 py-12 md:pt-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge de boas-vindas */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-orange-200/50 mb-6 md:mb-8 shadow-sm hover:shadow-md transition-all">
            <SparklesIcon className="h-4 w-4 text-orange-500" />
            <span className="text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap">
              Bem-vindo à Nova Era do Marketing
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 leading-[1.1]">
            Transformando{' '}
            <span className="text-orange-500 inline-block">
              Ideias
            </span>{' '}
            em{' '}
            <span className="text-orange-500 inline-block">
              Realidade
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Somos a RD, uma agência de marketing criativo especializada em
            construir marcas poderosas e experiências digitais.
          </p>

          {/* CTAs Responsivos */}
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 px-4 sm:px-0">
            <a href="#services" className="group relative px-8 py-4 bg-black text-white rounded-full font-semibold text-center transition-all active:scale-95 shadow-lg">
              <span className="relative z-10">Nossos Serviços</span>
              <div className="absolute inset-0 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
            </a>
            
            <a href="#portfolio" className="group px-8 py-4 bg-orange-500 text-white rounded-full font-semibold text-center transition-all active:scale-95 shadow-lg">
              Ver Nosso Trabalho
            </a>
          </div>
        </div>


      </div>
    </section>
  );
};