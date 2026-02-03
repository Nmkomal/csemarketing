
import React from 'react';
import { SERVICES, SERVICE_DETAILS, PROCESS_STEPS } from '../constants';
import { CTA } from './CTA';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { Button } from './Button';

interface ServicesProps {
  onServiceClick: (id: string) => void;
  onNavigate?: (href: string) => void;
  isSimple?: boolean;
}

export const Services: React.FC<ServicesProps> = ({ onServiceClick, onNavigate, isSimple = false }) => {
  // 1. Simplified Version (For Home Page Section)
  if (isSimple) {
    return (
      <section id="services-section" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 text-black">
              Digital <span className="text-yellow-500">Services.</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
              High-performance solutions tailored to your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id} 
                  className="group relative bg-gray-50 border border-gray-100 rounded-3xl p-6 md:p-10 flex flex-col items-center text-center hover:bg-white hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => onServiceClick(service.id)}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-2xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-all duration-300 shrink-0 relative z-10 shadow-sm">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-black group-hover:text-yellow-600 transition-colors relative z-10 leading-tight">
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
             <Button 
                variant="primary" 
                size="lg" 
                className="h-16 px-10 rounded-2xl shadow-xl shadow-yellow-400/20 group w-full sm:w-auto"
                onClick={() => onNavigate?.('services')}
             >
                View All 12 Services <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </Button>
          </div>
        </div>
      </section>
    );
  }

  // 2. Full Version
  return (
    <div className="bg-white min-h-screen w-full overflow-hidden relative">
      
      {/* 1. Services Banner Section */}
      <section className="w-full relative pt-32 pb-20 md:py-32 bg-gray-50 rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden mb-24 border-b border-gray-100">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply pointer-events-none"></div>
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                <span className="inline-flex items-center px-5 py-2 rounded-full bg-white border border-gray-200 text-yellow-600 text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-sm">
                  <Zap className="w-4 h-4 mr-2 text-yellow-500 fill-current" />
                  Full-Service Agency
                </span>
                
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-heading font-black mb-10 leading-[1.1] text-black tracking-tight">
                  We Build <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Growth Engines.</span>
                </h1>
                
                <p className="text-lg md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium mb-12">
                  From pixel-perfect designs to high-ROI ad campaigns, our services are engineered to scale your revenue.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="h-16 px-12 rounded-2xl text-lg shadow-xl shadow-yellow-400/20 w-full sm:w-auto hover:scale-105"
                    onClick={() => window.location.hash = 'contact'}
                  >
                    Start a Project <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                     variant="outline" 
                     size="lg"
                     className="h-16 px-12 rounded-2xl text-lg w-full sm:w-auto bg-white hover:bg-gray-100"
                     onClick={() => {
                        const el = document.getElementById('all-services');
                        if(el) el.scrollIntoView({ behavior: 'smooth' });
                     }}
                  >
                     Explore Services
                  </Button>
                </div>
            </div>
         </div>
      </section>

      {/* 2. Services List */}
      <section id="all-services" className="container mx-auto px-6 max-w-7xl mb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const details = SERVICE_DETAILS[service.id];
            const Icon = service.icon;
            
            return (
              <div 
                key={service.id}
                onClick={() => onServiceClick(service.id)}
                className="bg-white border-2 border-transparent hover:border-yellow-400 rounded-[2.5rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col items-start relative overflow-hidden group h-full cursor-pointer"
              >
                {/* Icon */}
                <div className="w-20 h-20 bg-gray-50 rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-yellow-400 transition-colors duration-300">
                    <Icon className="w-10 h-10 text-black" />
                </div>
                
                {/* Title */}
                <h3 className="text-3xl font-heading font-black text-black mb-6 group-hover:text-yellow-600 transition-colors">
                    {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-500 leading-relaxed font-medium mb-10 text-base group-hover:text-gray-600">
                    {details?.overview ? details.overview.substring(0, 120) + '...' : service.description}
                </p>
                
                {/* Benefits */}
                {details?.benefits && (
                    <div className="mt-auto space-y-4 w-full pt-6 border-t border-gray-100 mb-8">
                        {details.benefits.slice(0, 3).map((benefit: string, idx: number) => (
                        <div key={idx} className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center mr-3 shrink-0 text-green-600">
                                <Check className="w-3 h-3" />
                            </div>
                            <span className="text-gray-700 font-bold text-sm">{benefit}</span>
                        </div>
                        ))}
                    </div>
                )}
                
                {/* Contact Button */}
                <div className="w-full mt-auto">
                    <Button 
                        variant="outline" 
                        className="w-full rounded-xl border-gray-200 hover:bg-yellow-400 hover:border-yellow-400 hover:text-black group-hover:bg-black group-hover:text-white group-hover:border-black transition-all"
                        onClick={(e) => {
                            e.stopPropagation();
                            window.location.hash = 'contact';
                        }}
                    >
                        Book This Service <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Proven Process Section */}
      <section className="py-24 bg-black text-white rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
            <span className="text-yellow-400 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 text-white">
               Our Proven <span className="text-yellow-500">Process</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-16 font-medium">
               A simple, transparent workflow designed to get you results fast.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 relative">
               <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-800 -z-10"></div>
               
               {PROCESS_STEPS.map((step, idx) => (
                  <div key={idx} className="relative bg-gray-900 p-8 rounded-[2rem] border border-gray-800 hover:border-yellow-400/50 hover:-translate-y-2 transition-transform duration-300">
                     <div className="w-24 h-24 bg-gray-900 border-4 border-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-black text-gray-500 shadow-sm group-hover:text-yellow-500 group-hover:border-yellow-900 transition-colors">
                        <span className="text-yellow-500">{step.number}</span>
                     </div>
                     <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                     <p className="text-sm text-gray-400 leading-relaxed font-medium">
                        {step.description}
                     </p>
                  </div>
               ))}
            </div>
        </div>
      </section>

      {/* 4. CTA */}
      <CTA />

    </div>
  );
};
