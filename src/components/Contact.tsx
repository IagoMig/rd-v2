import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
export const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  return <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl animate-float" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hover-lift">
            Entre em <span className="text-orange-500">Contato</span>
          </h2>
          <p className="text-xl text-gray-600">
            Tem um projeto em mente? Vamos conversar sobre como podemos ajudá-lo
            a alcançar seus objetivos de marketing.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-gradient-to-br from-white to-orange-50/30 rounded-3xl shadow-2xl p-8 border border-gray-100 card-3d animate-fade-in-left">
            {formStatus === 'success' ? <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-scale-in">
                <div className="bg-green-100 p-6 rounded-full mb-6 animate-bounce-slow">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Mensagem Enviada!</h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Obrigado por entrar em contato. Responderemos em breve.
                </p>
                <button onClick={() => setFormStatus('idle')} className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                  Enviar Outra Mensagem
                </button>
              </div> : <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Seu Nome
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${focusedField === 'name' ? 'border-orange-500 ring-4 ring-orange-100 shadow-lg' : 'border-gray-300 hover:border-orange-300'} focus:outline-none`} placeholder="João Silva" required />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Seu Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${focusedField === 'email' ? 'border-orange-500 ring-4 ring-orange-100 shadow-lg' : 'border-gray-300 hover:border-orange-300'} focus:outline-none`} placeholder="joao@exemplo.com" required />
                </div>
                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} onFocus={() => setFocusedField('subject')} onBlur={() => setFocusedField(null)} className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${focusedField === 'subject' ? 'border-orange-500 ring-4 ring-orange-100 shadow-lg' : 'border-gray-300 hover:border-orange-300'} focus:outline-none`} placeholder="Consulta sobre Projeto" required />
                </div>
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Sua Mensagem
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} rows={5} className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${focusedField === 'message' ? 'border-orange-500 ring-4 ring-orange-100 shadow-lg' : 'border-gray-300 hover:border-orange-300'} focus:outline-none resize-none`} placeholder="Conte-nos sobre seu projeto..." required />
                </div>
                <button type="submit" disabled={formStatus === 'submitting'} className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-all flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 disabled:opacity-50">
                  {formStatus === 'submitting' ? <span className="flex items-center">
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                      Enviando...
                    </span> : <>
                      Enviar Mensagem <Send className="ml-2 h-5 w-5" />
                    </>}
                </button>
              </form>}
          </div>
          <div className="space-y-8 animate-fade-in-right">
            <h3 className="text-2xl font-bold">Informações de Contato</h3>
            <div className="space-y-6">
              {[{
              icon: Mail,
              title: 'Email',
              items: ['contato@rdmarketing.com.br', 'suporte@rdmarketing.com.br']
            }, {
              icon: Phone,
              title: 'Telefone',
              items: ['(41) 3333-3333', '(41) 9 9999-9999']
            }, {
              icon: MapPin,
              title: 'Endereço',
              items: ['Rua XV de Novembro, 1000', 'Curitiba, PR - 80020-310']
            }].map((contact, index) => <div key={index} className="flex items-start group hover-lift cursor-pointer animate-slide-in-right" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-4 rounded-2xl mr-4 group-hover:from-orange-200 group-hover:to-orange-100 transition-all shadow-md group-hover:shadow-lg">
                    <contact.icon className="h-6 w-6 text-orange-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1 group-hover:text-orange-500 transition-colors">
                      {contact.title}
                    </h4>
                    {contact.items.map((item, i) => <p key={i} className="text-gray-600">
                        {item}
                      </p>)}
                  </div>
                </div>)}
            </div>
            <div className="animate-fade-in">
              <h4 className="text-xl font-bold mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => <a key={social} href="#" className="bg-gray-100 hover:bg-gradient-to-br hover:from-orange-100 hover:to-orange-50 p-4 rounded-2xl transition-all shadow-md hover:shadow-lg hover:scale-110 active:scale-95 animate-scale-in" style={{
                animationDelay: `${index * 100}ms`
              }}>
                      <img src={`https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/${social}.svg`} alt={social} className="h-5 w-5" />
                    </a>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};