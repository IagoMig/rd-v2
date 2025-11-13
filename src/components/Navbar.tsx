import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon, ChevronDownIcon } from 'lucide-react';
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-5'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <div className="text-3xl font-bold">
              <span className="text-black">R</span>
              <span className="text-orange-500">D</span>
            </div>
          </a>
          <nav className="hidden lg:flex items-center space-x-8">
            {[{
            name: 'Início',
            href: '#home'
          }, {
            name: 'Serviços',
            href: '#services'
          }, {
            name: 'Sobre',
            href: '#about'
          }, {
            name: 'Portfólio',
            href: '#portfolio'
          }, {
            name: 'Contato',
            href: '#contact'
          }].map(item => <a key={item.name} href={item.href} className="text-black font-medium hover:text-orange-500 transition-colors">
                {item.name}
              </a>)}
            <div className="relative">
              <button onClick={() => toggleDropdown('solutions')} className="flex items-center text-black font-medium hover:text-orange-500 transition-colors">
                Soluções <ChevronDownIcon className="ml-1 w-4 h-4" />
              </button>
              {activeDropdown === 'solutions' && <div className="absolute right-0 mt-2 w-56 bg-white shadow-xl rounded-lg border border-gray-100">
                  {['Marketing Digital', 'Estratégia de Marca', 'Criação de Conteúdo', 'Analytics'].map(item => <a key={item} href="#services" className="block px-6 py-3 hover:bg-orange-50 transition-colors text-sm font-medium">
                      {item}
                    </a>)}
                </div>}
            </div>
          </nav>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden">
            {mobileMenuOpen ? <XIcon className="h-6 w-6 text-black" /> : <MenuIcon className="h-6 w-6 text-black" />}
          </button>
        </div>
        {mobileMenuOpen && <div className="lg:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              {[{
            name: 'Início',
            href: '#home'
          }, {
            name: 'Serviços',
            href: '#services'
          }, {
            name: 'Sobre',
            href: '#about'
          }, {
            name: 'Portfólio',
            href: '#portfolio'
          }, {
            name: 'Contato',
            href: '#contact'
          }].map(item => <a key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium hover:text-orange-500 transition-colors">
                  {item.name}
                </a>)}
            </nav>
          </div>}
      </div>
    </header>;
};