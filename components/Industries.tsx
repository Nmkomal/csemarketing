
import React from 'react';
import { INDUSTRIES } from '../constants';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

interface IndustriesProps {
  onNavigate?: (href: string) => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onNavigate }) => {
  return (
    <section id="industries-section" className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h4 className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Market Focus</h4>
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-6">Industries We <span className="text-yellow-500">Transform.</span></h2>
          <p className="text-lg text-gray-600 font-medium">
            We have special experience engineering growth systems for high-impact sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-10">
          {INDUSTRIES.map((industry) => (
            <div 
              key={industry.id} 
              className="bg-white p-6 rounded-3xl text-center border border-gray-100 hover:border-yellow-400 transition-all group shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400 transition-colors">
                <industry.icon className="w-7 h-7 text-black" />
              </div>
              <h3 className="font-black text-sm mb-1">{industry.name}</h3>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-black">{industry.description.split('&')[0]}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
           <Button 
            variant="secondary" 
            size="lg" 
            className="h-16 px-10 rounded-2xl shadow-xl group"
            onClick={() => onNavigate?.('industries-page')}
           >
              Detailed Industry Solutions <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
           </Button>
        </div>
      </div>
    </section>
  );
};
