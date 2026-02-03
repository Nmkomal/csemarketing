
import React from 'react';
import { Button } from './Button';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section id="home-contact" className="py-20 bg-gray-50 relative overflow-hidden border-t border-gray-100">
       
       {/* Full Width Background Decor */}
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-200/40 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-yellow-600 text-[10px] font-bold uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2 animate-pulse"></span>
              Accepting New Partners
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-heading font-black text-black mb-6 leading-tight tracking-tight">
              Let's Grow Your <br />
              <span className="text-yellow-500">Business Today.</span>
            </h2>

            {/* Subtext */}
            <p className="text-gray-500 text-base md:text-lg mb-10 max-w-xl leading-relaxed font-medium mx-auto">
              Partner with CSE Marketing to engineer a predictable, high-performance growth engine for your brand.
            </p>

            {/* Action Area */}
            <div className="flex flex-col items-center w-full">
              <Button 
                variant="primary" 
                size="lg" 
                className="h-14 px-10 rounded-xl text-lg font-bold shadow-xl shadow-yellow-400/20 hover:shadow-yellow-400/30 hover:-translate-y-1 transition-all duration-300 flex items-center"
                onClick={() => window.location.hash = 'contact'}
              >
                Book Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              {/* Trust Indicators */}
              <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-widest text-gray-400">
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-yellow-500" /> Data-Driven</span>
                <span className="flex items-center"><TrendingUp className="w-4 h-4 mr-2 text-yellow-500" /> Proven ROI</span>
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-yellow-500" /> 100% Transparent</span>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};
