
import React from 'react';
import { PROCESS_STEPS } from '../constants';

export const Process: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Our <span className="text-yellow-400">Classified</span> Process
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Success isn't accidental. It's the result of a rigorous, repeatable methodology refined over hundreds of campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent -z-0"></div>
          
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gray-900 border-2 border-yellow-400 flex items-center justify-center text-2xl font-bold text-yellow-400 mb-6 shadow-[0_0_20px_rgba(250,204,21,0.2)]">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
