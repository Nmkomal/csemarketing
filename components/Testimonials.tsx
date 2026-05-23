
import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // We clone the first 'itemsPerView' elements and append them to the end
  // This allows us to slide "past" the end seamlessly
  const extendedTestimonials = [
    ...TESTIMONIALS,
    ...TESTIMONIALS.slice(0, 2) // Clone first 2 for safety buffer
  ];

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth >= 768 ? 2 : 1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (!isTransitioning) return;
    
    // Move forward
    setCurrentIndex((prev) => prev + itemsPerView);
  };

  const prevSlide = () => {
    if (!isTransitioning) return;

    // Move backward
    if (currentIndex === 0) {
      // If at start, instantly jump to the corresponding spot at the end (real end, not clone)
      setIsTransitioning(false);
      const realEndIndex = TESTIMONIALS.length;
      setCurrentIndex(realEndIndex);
      
      // Then slide back one step after a tiny delay to allow the jump to render
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCurrentIndex(realEndIndex - itemsPerView);
        });
      });
    } else {
      setCurrentIndex((prev) => prev - itemsPerView);
    }
  };

  // Handle the "Seamless Reset" when transition ends
  const handleTransitionEnd = () => {
    // If we have slid past the real items into the clones
    if (currentIndex >= TESTIMONIALS.length) {
      // Disable transition temporarily
      setIsTransitioning(false);
      // Jump back to the beginning (index 0 or offset)
      setCurrentIndex(currentIndex - TESTIMONIALS.length);
      
      // Re-enable transition for next click (after browser paint)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
    setTouchStart(0);
    setTouchEnd(0);
  };

  const percentage = 100 / itemsPerView;
  
  return (
    <section id="testimonials-section" className="py-16 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-heading font-black mb-4 text-black">
            Client <span className="text-yellow-500">Success Stories</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto font-medium">
             See what our partners have to say about our results-driven approach.
          </p>
        </div>

        <div className="relative group">
            {/* Left Button */}
            <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-400 hover:border-yellow-400 transition-all -ml-4 md:-ml-6 opacity-0 group-hover:opacity-100 duration-300 cursor-pointer hidden md:flex"
                aria-label="Previous testimonial"
            >
                <ChevronLeft className="w-6 h-6 text-black" />
            </button>

            {/* Slider Track */}
            <div 
                className="overflow-hidden px-2"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div 
                    className="flex items-stretch"
                    style={{ 
                        transform: `translateX(-${currentIndex * percentage}%)`,
                        transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none'
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {extendedTestimonials.map((testimonial, index) => (
                        <div 
                            key={`${testimonial.id}-${index}`}
                            className="flex-shrink-0 px-3 md:px-4 box-border"
                            style={{ width: `${percentage}%` }}
                        >
                            <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col hover:border-yellow-400 transition-colors h-full">
                                <div className="flex items-center space-x-1 mb-6">
                                    {[1,2,3,4,5].map(i => (
                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 font-medium italic flex-grow">
                                    "{testimonial.content}"
                                </p>
                                
                                <div className="mt-auto pt-6 border-t border-gray-200">
                                    <h5 className="font-bold text-base text-black font-heading">{testimonial.author}</h5>
                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Button */}
            <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-400 hover:border-yellow-400 transition-all -mr-4 md:-mr-6 opacity-0 group-hover:opacity-100 duration-300 cursor-pointer hidden md:flex"
                aria-label="Next testimonial"
            >
                <ChevronRight className="w-6 h-6 text-black" />
            </button>
        </div>
      </div>
    </section>
  );
};
