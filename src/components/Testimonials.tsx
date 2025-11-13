import React from 'react';
import { Star, QuoteIcon } from 'lucide-react';
export const Testimonials = () => {
  const testimonials = [{
    name: 'Maria Silva',
    role: 'CEO, TechStart',
    content: 'A RD transformou completamente nossa presença digital. O ROI superou todas as expectativas e a equipe foi excepcional do início ao fim.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  }, {
    name: 'João Santos',
    role: 'Diretor de Marketing, Inovação Corp',
    content: 'Profissionalismo, criatividade e resultados. A RD entende realmente o que significa marketing estratégico e entrega além do prometido.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
  }, {
    name: 'Ana Costa',
    role: 'Fundadora, EcoVida',
    content: 'Trabalhar com a RD foi uma experiência transformadora. Eles não apenas criaram uma campanha incrível, mas nos ajudaram a entender nosso público.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
  }];
  return <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hover-lift">
            O Que Dizem Nossos <span className="text-orange-500">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Veja o que nossos clientes têm a dizer sobre trabalhar conosco.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 card-3d relative overflow-hidden" style={{
          animationDelay: `${index * 150}ms`
        }}>
              <div className="absolute top-0 right-0 text-orange-100 transform translate-x-4 -translate-y-4 group-hover:text-orange-200 transition-colors">
                <QuoteIcon className="h-24 w-24" />
              </div>
              <div className="relative z-10">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-orange-500 fill-current transform group-hover:scale-110 transition-transform" style={{
                transitionDelay: `${i * 50}ms`
              }} />)}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-orange-200 group-hover:ring-orange-400 transition-all">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold group-hover:text-orange-500 transition-colors">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};