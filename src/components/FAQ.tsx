import React, { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [{
    question: 'Quanto tempo leva para ver resultados?',
    answer: 'Os resultados variam dependendo do tipo de campanha, mas geralmente você começará a ver melhorias mensuráveis dentro de 30-60 dias. Campanhas de longo prazo continuam a melhorar ao longo do tempo.'
  }, {
    question: 'Qual é o investimento mínimo necessário?',
    answer: 'Nossos projetos começam a partir de R$ 5.000/mês, dependendo do escopo e complexidade. Oferecemos pacotes personalizados para atender diferentes orçamentos e necessidades.'
  }, {
    question: 'Vocês trabalham com empresas de todos os tamanhos?',
    answer: 'Sim! Trabalhamos com startups, PMEs e grandes empresas. Cada cliente recebe uma estratégia personalizada adequada ao seu estágio de crescimento e objetivos.'
  }, {
    question: 'Como funciona o processo de onboarding?',
    answer: 'Começamos com uma reunião de descoberta para entender seu negócio, seguida por pesquisa de mercado e desenvolvimento de estratégia. O processo completo de onboarding leva cerca de 2 semanas.'
  }, {
    question: 'Que tipo de relatórios vocês fornecem?',
    answer: 'Fornecemos relatórios mensais detalhados com métricas-chave, insights e recomendações. Você também terá acesso a um dashboard em tempo real para acompanhar o progresso.'
  }];
  return <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hover-lift">
            Perguntas <span className="text-orange-500">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Encontre respostas para as perguntas mais comuns sobre nossos
            serviços.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 card-3d-subtle">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full px-8 py-6 flex items-center justify-between hover:bg-orange-50/50 transition-all group">
                <span className="font-bold text-lg text-left group-hover:text-orange-500 transition-colors">
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full bg-orange-100 group-hover:bg-orange-200 transition-all ${openIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDownIcon className="h-5 w-5 text-orange-500 transition-transform duration-300" />
                </div>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};