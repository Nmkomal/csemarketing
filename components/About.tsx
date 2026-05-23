
import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US } from '../constants';
import { Button } from './Button';
import { OptimizedImage } from './OptimizedImage';

interface AboutProps {
  onNavigate?: (href: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <section id="about-section" className="py-16 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Section - Hidden on Mobile/Tablet, Visible on Desktop */}
          <div className="order-2 lg:order-1 hidden lg:flex justify-center">
             <div className="relative w-full max-w-md">
                {/* Graphic Composition */}
                <div className="relative z-10 rounded-tr-[60px] rounded-bl-[60px] overflow-hidden shadow-2xl bg-white border border-gray-100 aspect-[4/5]">
                  <OptimizedImage 
                    src="https://i.postimg.cc/YqPQQ6y1/Gemini-Generated-Image-wi5eliwi5eliwi5e.png" 
                    alt="Digital Marketing Analytics & Strategy" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 z-20"></div>
                </div>
                
                {/* Decorative Border */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-dashed border-yellow-400/30 rounded-tr-[60px] rounded-bl-[60px] -z-10"></div>
                
                {/* ROI Card */}
                <div className="absolute top-1/2 -left-12 -translate-y-1/2 bg-white p-5 shadow-xl rounded-2xl border border-gray-100 max-w-[200px] animate-float z-30">
                   <div className="flex items-center justify-between mb-3">
                     <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black shadow-md">
                       <Zap className="w-5 h-5 fill-current" />
                     </div>
                     <span className="text-3xl font-heading font-black text-black">3.5x</span>
                   </div>
                   <div className="h-1.5 w-full bg-gray-100 rounded-full mb-2 overflow-hidden">
                      <div className="h-full bg-black w-[85%] rounded-full"></div>
                   </div>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Average ROI Increase</p>
                </div>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h4 className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 flex items-center">
                <span className="w-8 h-px bg-yellow-600 mr-3"></span> About CSE Marketing
              </h4>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-black leading-snug">
                <span className="relative z-10">Not Just An Agency.</span> <br />
                A <span className="bg-yellow-100 px-2 italic relative z-0">Growth Lab.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 font-medium">
                We believe digital marketing is broken. Too much fluff, not enough engineering. CSE Marketing was founded to bring a rigorous, scientific approach to creativity.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {WHY_CHOOSE_US.map((item, idx) => (
                <div key={idx} className="group p-6 rounded-[1.5rem] bg-gray-50 hover:bg-black hover:text-white transition-all duration-300 cursor-default border border-transparent hover:border-black">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-yellow-400 transition-colors">
                    <item.icon className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-base font-bold mb-2 font-heading">{item.title}</h3>
                  <p className="text-xs text-gray-500 group-hover:text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
