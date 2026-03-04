import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // IDs do EmailJS
    const SERVICE_ID = 'service_your_id';
    const TEMPLATE_ID = 'template_your_id';
    const PUBLIC_KEY = 'your_public_key';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY)
      .then(() => {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, (error) => {
        console.error('Erro ao enviar:', error);
        setFormStatus('error');
        alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      items: ['contato@rdmarketing.com.br'],
      link: 'mailto:contato@rdmarketing.com.br'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      items: ['+55 45 98841-5019'],
      link: 'https://wa.me/5545988415019'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      items: ['Foz do Iguaçu, PR'],
      link: 'https://www.google.com/maps/search/?api=1&query=Foz+do+Iguaçu+PR'
    }
  ];

  // Link de incorporação do Google Maps para Foz do Iguaçu
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57604.75013146433!2d-54.5973752!3d-25.5312781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f690899757656d%3A0x44869507f154a3e7!2sFoz%20do%20Igua%C3%A7u%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr";

  return (
    <section id="contact" className="py-12 md:py-24 bg-white relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-orange-100/30 rounded-full blur-3xl animate-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Entre em <span className="text-orange-500">Contato</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Tem um projeto em mente? Vamos conversar sobre como podemos ajudá-lo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Coluna 1: Formulário */}
          <div className="bg-gradient-to-br from-white to-orange-50/30 rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="bg-green-100 p-6 rounded-full mb-6">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Mensagem Enviada!</h3>
                <p className="text-gray-600 mb-8">Obrigado! Responderemos em breve.</p>
                <button onClick={() => setFormStatus('idle')} className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                  Enviar Outra
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Seu Nome</label>
                  <input 
                    type="text" name="name" 
                    value={formData.name} onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-all ${focusedField === 'name' ? 'border-orange-500 ring-2 ring-orange-100' : 'border-gray-300'}`}
                    onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Seu Email</label>
                  <input 
                    type="email" name="email" 
                    value={formData.email} onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-all ${focusedField === 'email' ? 'border-orange-500 ring-2 ring-orange-100' : 'border-gray-300'}`}
                    onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                  <textarea 
                    name="message" 
                    value={formData.message} onChange={handleChange}
                    required rows={4}
                    className={`w-full px-4 py-3 rounded-xl border transition-all resize-none ${focusedField === 'message' ? 'border-orange-500 ring-2 ring-orange-100' : 'border-gray-300'}`}
                    onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full px-6 py-4 bg-orange-500 text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-all disabled:opacity-50 active:scale-95 shadow-lg shadow-orange-200"
                >
                  {formStatus === 'submitting' ? 'Enviando...' : (
                    <>Enviar Mensagem <Send className="h-5 w-5" /></>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Coluna 2: Info e Mapa */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start group hover:translate-x-2 transition-transform"
                >
                  <div className="bg-orange-100 p-4 rounded-2xl mr-4 group-hover:bg-orange-500 transition-colors">
                    <item.icon className="h-6 w-6 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    {item.items.map((line, i) => (
                      <p key={i} className="text-gray-600">{line}</p>
                    ))}
                  </div>
                </a>
              ))}
            </div>

            {/* MAPA GOOGLE INTEGRADO */}
            <div className="w-full h-72 rounded-3xl overflow-hidden shadow-xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
              <iframe
                title="Localização RD Marketing"
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h4 className="text-xl font-bold mb-6">Siga-nos</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/rdmarketingevendas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-4 rounded-2xl hover:bg-gradient-to-tr hover:from-orange-500 hover:to-pink-500 hover:text-white transition-all hover:scale-110 shadow-sm"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};