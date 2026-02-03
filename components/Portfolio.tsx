
import React from 'react';
import { CASE_STUDIES } from '../constants';
import { Button } from './Button';
import { ArrowUpRight } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

interface PortfolioProps {
  onNavigate?: (href: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onNavigate }) => {
  return (
    <section id="portfolio-section" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
          <div className="max-w-2xl">
            <h4 className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">Selected Works</h4>
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">
              We Let The Numbers <br /> Do The Talking.
            </h2>
          </div>
          <Button 
            variant="outline" 
            size="lg" 
            className="hidden md:flex rounded-2xl"
            onClick={() => onNavigate?.('portfolio')}
          >
            View Full Portfolio
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {CASE_STUDIES.map((item, idx) => (
            <div key={item.id} className={`group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-16' : ''}`}>
              <div className="relative overflow-hidden rounded-[2.5rem] mb-8 aspect-[4/3] shadow-md border border-gray-100 bg-gray-50">
                <OptimizedImage 
                  src={item.image} 
                  alt={item.client} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm z-20">
                  <div className="bg-white text-black px-6 py-3 rounded-full font-bold flex items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-sm">
                    View Case Study <ArrowUpRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start border-b border-gray-100 pb-6 group-hover:border-black transition-colors duration-500">
                <div>
                    <h3 className="text-3xl font-heading font-bold mb-1 group-hover:text-yellow-600 transition-colors">{item.client}</h3>
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{item.category}</span>
                </div>
                <div className="text-right">
                    <p className="text-xl font-black text-black">{item.result}</p>
                    <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Key Metric</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center md:hidden">
            <Button 
              variant="outline" 
              className="w-full h-16 rounded-2xl"
              onClick={() => onNavigate?.('portfolio')}
            >
              View Full Portfolio
            </Button>
        </div>
      </div>
    </section>
  );
};
