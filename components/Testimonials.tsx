
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials-section" className="py-20 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-black mb-4 text-black">
            Client <span className="text-yellow-500">Success Stories</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto font-medium">
             See what our partners have to say about our results-driven approach.
          </p>
        </div>

        {/* Optimized: Native Horizontal Scroll instead of JS Marquee */}
        <div className="relative w-full overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory">
          <div className="flex space-x-6 px-4 w-max">
            {TESTIMONIALS.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="w-[300px] md:w-[400px] snap-center flex-shrink-0 bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col hover:border-yellow-400 transition-colors"
              >
                <div className="flex items-center space-x-1 mb-6">
                   {[1,2,3,4,5].map(i => (
                     <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                   ))}
                </div>
                
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 font-medium italic flex-grow">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mt-auto pt-6 border-t border-gray-200">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 shrink-0">
                    <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author} 
                        loading="lazy"
                        className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                      <h5 className="font-bold text-sm text-black font-heading">{testimonial.author}</h5>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll Hint */}
        <div className="flex justify-center mt-4 gap-1 md:hidden">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </section>
  );
};
