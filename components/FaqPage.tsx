
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus, HelpCircle, MessageCircle, ChevronRight } from 'lucide-react';
import { Button } from './Button';

export const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white pt-32 pb-24">
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl">
          <h4 className="text-yellow-600 font-black uppercase tracking-[0.3em] text-sm mb-6">FAQ</h4>
          <h1 className="text-5xl md:text-8xl font-heading font-black mb-10 leading-[1.1]">
            Curiosity <br />
            <span className="text-yellow-500">& Clarity.</span>
          </h1>
          <p className="text-2xl text-gray-600 font-medium leading-relaxed">
            Everything you need to know about partnering with CSE Marketing for your next growth phase.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 mb-24 grid lg:grid-cols-12 gap-16">
        {/* Accordion List */}
        <div className="lg:col-span-8 space-y-6">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-[40px] overflow-hidden transition-all duration-300 ${
                openIndex === idx ? 'border-yellow-400 bg-gray-50 shadow-lg' : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-8 md:p-10 flex items-center justify-between text-left"
              >
                <span className="text-xl md:text-2xl font-black pr-8">{faq.question}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    openIndex === idx ? 'bg-black text-yellow-400' : 'bg-gray-100 text-black'
                }`}>
                  {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              <div 
                className={`px-8 md:px-10 pb-10 transition-all duration-300 ${
                    openIndex === idx ? 'block opacity-100' : 'hidden opacity-0'
                }`}
              >
                <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                    {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Support Card */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 bg-black text-white p-12 rounded-[50px] overflow-hidden text-center">
             <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl"></div>
             <HelpCircle className="w-16 h-16 text-yellow-400 mx-auto mb-8" />
             <h3 className="text-3xl font-black mb-6">Still have questions?</h3>
             <p className="text-gray-400 mb-10 leading-relaxed">
               Can't find the answer you're looking for? Reach out to our strategy team directly for a personalized chat.
             </p>
             <Button variant="primary" className="w-full py-4 rounded-2xl mb-6" onClick={() => window.location.hash = 'contact'}>Chat with Us</Button>
             <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Typical response time: 2 hours</p>
          </div>
        </div>
      </section>

      {/* Categories CTA */}
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
            {[
                { title: 'Strategic Planning', desc: 'Questions about how we build roadmaps.', icon: MessageCircle },
                { title: 'Pricing & Tiers', desc: 'Understanding our different investment levels.', icon: HelpCircle },
                { title: 'Execution & Flow', desc: 'How we manage the daily workflow of your account.', icon: HelpCircle },
            ].map((c, i) => (
                <div key={i} className="bg-gray-50 p-10 rounded-[40px] border border-gray-100 hover:border-yellow-400 transition-all group cursor-pointer">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors">
                    <c.icon className="w-6 h-6 text-black" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{c.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{c.desc}</p>
                  <span className="text-xs font-black uppercase tracking-widest text-black group-hover:text-yellow-600 flex items-center">
                    Explore Category <ChevronRight className="ml-1 w-3 h-3" />
                  </span>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};
