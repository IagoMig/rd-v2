import React, { useEffect, useState } from 'react';
import { ArrowDownIcon, SparklesIcon } from 'lucide-react';
export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth * 100,
        y: e.clientY / window.innerHeight * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return <section id="home" className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-60" style={{
      background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(249, 115, 22, 0.15) 0%, rgba(251, 146, 60, 0.1) 25%, rgba(255, 255, 255, 0) 50%)`
    }} />
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-white to-orange-50/20" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>
      <div className="relative z-20 h-full flex flex-col justify-center items-center px-6 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-orange-200/50 mb-8 shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <SparklesIcon className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">
              Bem-vindo à Nova Era do Marketing
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Transformando{' '}
            <span className="text-orange-500 inline-block hover:scale-110 transition-transform">
              Ideias
            </span>{' '}
            em{' '}
            <span className="text-orange-500 inline-block hover:scale-110 transition-transform">
              Realidade
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 animate-fade-in-up animation-delay-200">
            Somos a RD, uma agência de marketing criativo especializada em
            construir marcas poderosas e experiências digitais.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up animation-delay-400">
            <a href="#services" className="group relative px-8 py-4 bg-black text-white rounded-full font-medium overflow-hidden transition-all shadow-lg hover:shadow-2xl hover:scale-105">
              <span className="relative z-10">Nossos Serviços</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
            <a href="#portfolio" className="group relative px-8 py-4 bg-orange-500 text-white rounded-full font-medium overflow-hidden transition-all shadow-lg hover:shadow-2xl hover:scale-105">
              <span className="relative z-10">Ver Nosso Trabalho</span>
              <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <a href="#services" className="flex flex-col items-center text-gray-500 hover:text-orange-500 transition-colors group">
            <span className="mb-2 text-sm font-medium">Role para baixo</span>
            <div className="p-2 rounded-full border-2 border-gray-300 group-hover:border-orange-500 transition-colors">
              <ArrowDownIcon className="h-5 w-5" />
            </div>
          </a>
        </div>
      </div>
    </section>;
};