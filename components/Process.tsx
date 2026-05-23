
import React from 'react';
import { PROCESS_STEPS } from '../constants';

export const Process: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">How We Work</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
            Our Proven <span className="text-yellow-400">Process</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg font-medium leading-relaxed">
            A simple, transparent workflow designed to get you results fast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent -z-0"></div>
          
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-gray-900 border-4 border-gray-800 flex items-center justify-center text-2xl font-black text-yellow-400 mb-8 shadow-[0_0_30px_rgba(250,204,21,0.15)] group-hover:border-yellow-400/50 transition-colors duration-300">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-medium px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
