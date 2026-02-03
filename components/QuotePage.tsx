
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Check, CheckCircle2, ChevronRight, DollarSign, Rocket, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

export const QuotePage: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Real submission logic typically goes here
    
    // Open WhatsApp
    const name = (document.getElementById('quote-name') as HTMLInputElement).value;
    const email = (document.getElementById('quote-email') as HTMLInputElement).value;
    const company = (document.getElementById('quote-company') as HTMLInputElement).value;
    const website = (document.getElementById('quote-website') as HTMLInputElement).value;
    const budget = (document.querySelector('input[name="budget"]:checked') as HTMLInputElement)?.value || 'Not selected';
    const goals = (document.getElementById('quote-goals') as HTMLTextAreaElement).value;
    
    const serviceNames = SERVICES.filter(s => selectedServices.includes(s.id)).map(s => s.title).join(', ');

    const text = `Hi CSE Marketing,%0A%0A*New Quote Request*%0A*Name:* ${name}%0A*Email:* ${email}%0A*Company:* ${company}%0A*Website:* ${website}%0A*Budget:* ${budget}%0A*Services:* ${serviceNames}%0A*Goals:* ${goals}`;
    window.open(`https://wa.me/919711044849?text=${text}`, '_blank');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-white pt-24 px-6">
        <div className="max-w-xl w-full text-center bg-gray-50 p-10 md:p-24 rounded-[40px] md:rounded-[60px] border border-gray-100 shadow-2xl">
          <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg animate-bounce-slow">
            <Check className="w-12 h-12 text-black" strokeWidth={3} />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-6">Proposal Request Sent!</h2>
          <p className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed">
            Our strategy team has received your details. Expect a personalized analysis and quote in your inbox within 24 hours.
          </p>
          <Button variant="secondary" size="lg" className="rounded-2xl" onClick={() => window.location.hash = 'home'}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pt-32 pb-24">
      <section className="container mx-auto px-6 mb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-yellow-600 font-black uppercase tracking-[0.3em] text-sm mb-6">Custom Proposals</h4>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-heading font-black mb-10 leading-[1.1]">
            Build Your <span className="text-yellow-500">Growth Plan</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-500 font-medium leading-relaxed">
            Select the services you need and provide some context. We’ll craft a tailored proposal to hit your specific KPIs.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
          {/* Service Selection */}
          <div className="mb-20">
            <h3 className="text-2xl font-black mb-10 flex items-center">
              <span className="w-10 h-10 bg-black text-yellow-400 rounded-xl flex items-center justify-center mr-4 text-sm font-black">01</span>
              Select Services of Interest
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((s) => (
                <div 
                  key={s.id}
                  onClick={() => toggleService(s.id)}
                  className={`p-6 rounded-3xl border-2 cursor-pointer transition-all duration-300 flex items-center space-x-4 ${
                    selectedServices.includes(s.id) 
                      ? 'border-yellow-400 bg-yellow-50' 
                      : 'border-gray-100 bg-white hover:border-gray-200 shadow-sm'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors flex-shrink-0 ${
                    selectedServices.includes(s.id) ? 'bg-black border-black' : 'border-gray-300'
                  }`}>
                    {selectedServices.includes(s.id) && <Check className="w-4 h-4 text-yellow-400" />}
                  </div>
                  <span className="font-bold text-sm uppercase tracking-wider">{s.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Details & Budget */}
          <div className="mb-20 grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-black mb-10 flex items-center">
                <span className="w-10 h-10 bg-black text-yellow-400 rounded-xl flex items-center justify-center mr-4 text-sm font-black">02</span>
                Company Details
              </h3>
              <div className="space-y-6">
                <input id="quote-name" type="text" placeholder="Full Name" required className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400/20 transition-all" />
                <input id="quote-email" type="email" placeholder="Work Email" required className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400/20 transition-all" />
                <input id="quote-company" type="text" placeholder="Company Name" required className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400/20 transition-all" />
                <input id="quote-website" type="url" placeholder="Website URL" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400/20 transition-all" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-10 flex items-center">
                <span className="w-10 h-10 bg-black text-yellow-400 rounded-xl flex items-center justify-center mr-4 text-sm font-black">03</span>
                Estimated Monthly Budget
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {['$1k - $5k', '$5k - $15k', '$15k - $50k', '$50k+'].map(budget => (
                  <label key={budget} className="relative cursor-pointer group">
                    <input type="radio" name="budget" value={budget} className="peer sr-only" />
                    <div className="p-5 border-2 border-gray-100 rounded-2xl text-center font-bold peer-checked:border-yellow-400 peer-checked:bg-yellow-50 hover:bg-gray-50 transition-all">
                      {budget}
                    </div>
                  </label>
                ))}
              </div>
              <textarea id="quote-goals" placeholder="Any specific goals or timeline?" rows={4} className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400/20 transition-all resize-none"></textarea>
            </div>
          </div>

          {/* Submit */}
          <div className="bg-black p-8 md:p-16 rounded-[40px] md:rounded-[60px] text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center text-center md:text-left flex-col md:flex-row">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-4 md:mb-0 md:mr-6 rotate-3">
                <Rocket className="w-8 h-8 text-black" />
              </div>
              <div>
                <h4 className="text-2xl font-black">Ready to scale?</h4>
                <p className="text-gray-400">Secure your free strategic analysis today.</p>
              </div>
            </div>
            <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto h-16 md:h-18 px-10 md:px-16 rounded-2xl shadow-2xl shadow-yellow-400/20">
              Submit Request <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center text-gray-400 gap-4 md:space-x-6 text-xs font-bold uppercase tracking-[0.2em]">
            <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-yellow-500" /> Data Protected</span>
            <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-yellow-500" /> No-Obligation</span>
          </div>
        </form>
      </section>
    </div>
  );
};
