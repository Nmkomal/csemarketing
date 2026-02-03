
import React, { useEffect } from 'react';
import { CheckCircle, ArrowLeft, Zap, Trophy, ArrowRight, Star } from 'lucide-react';
import { SERVICE_DETAILS } from '../constants';
import { Button } from './Button';

interface ServicePageProps {
  serviceId: string;
  onBack: () => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({ serviceId, onBack }) => {
  const data = SERVICE_DETAILS[serviceId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!data) return <div className="py-40 text-center">Service not found.</div>;

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* 1. Premium Hero Banner - Static */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gray-50 rounded-b-[40px] md:rounded-b-[60px] border-b border-gray-100">
        {/* Background Elements - Optimized */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            {/* Back Nav */}
            <button 
                onClick={onBack}
                className="group flex items-center text-xs font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-12"
            >
                <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center mr-3 group-hover:border-black transition-colors">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                </div>
                Back to All Services
            </button>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div>
                    <span className="inline-block py-2 px-5 rounded-full bg-white border border-gray-200 text-yellow-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm">
                        Service Spotlight
                    </span>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-black mb-8 leading-[1.1] text-black">
                        {data.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-10 font-medium max-w-xl">
                        {data.overview}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button 
                            variant="primary" 
                            size="lg" 
                            className="h-16 px-10 rounded-2xl shadow-xl shadow-yellow-400/20 hover:scale-105"
                            onClick={() => window.location.hash = 'contact'}
                        >
                            Book Free Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                    
                    <div className="mt-10 flex items-center space-x-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                        <div className="flex">
                            {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                        </div>
                        <span>Top Rated Service</span>
                    </div>
                </div>

                {/* Right Visual - Static */}
                <div className="relative hidden lg:block">
                    <div className="relative z-10 bg-white p-8 rounded-[3rem] shadow-2xl border border-gray-100 rotate-2 hover:rotate-0 transition-transform duration-700">
                        <div className="aspect-[4/3] bg-gray-50 rounded-[2rem] overflow-hidden mb-8 relative">
                            {/* Abstract Graphic */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-50"></div>
                            </div>
                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                <h2 className="text-4xl font-heading font-black text-black/10 scale-150 absolute top-4 left-4">{data.title.substring(0,3)}</h2>
                                <h2 className="text-4xl font-heading font-black text-black relative">
                                    {data.title}
                                </h2>
                            </div>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Impact</p>
                                <p className="text-2xl font-black text-black">{data.result}</p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                                <Zap className="w-6 h-6 text-yellow-400" />
                            </div>
                        </div>
                    </div>
                    {/* Decor */}
                    <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-yellow-400 rounded-[3rem] -z-10"></div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. Problem Solver Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h4 className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">The Challenge</h4>
              <h2 className="text-4xl font-heading font-black mb-8 text-black">Common Problems We Solve</h2>
              <div className="space-y-6">
                {data.problems.map((problem: string, i: number) => (
                  <div key={i} className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm group hover:bg-white hover:border-yellow-400 hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-200 text-red-500 flex items-center justify-center mr-4 shrink-0 group-hover:bg-yellow-400 group-hover:text-black group-hover:border-yellow-400 transition-colors">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-bold text-gray-700 pt-1.5">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-black text-white p-12 rounded-[50px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <h3 className="text-3xl font-bold mb-8">Our Process</h3>
              <div className="space-y-10">
                {data.process.map((step: string, i: number) => (
                  <div key={i} className="flex items-center group">
                    <div className="w-12 h-12 rounded-xl bg-gray-800 text-white flex items-center justify-center font-black mr-6 shrink-0 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                      0{i + 1}
                    </div>
                    <span className="text-xl font-medium text-gray-300 group-hover:text-white transition-colors">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tools & Tech Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-black mb-4 uppercase tracking-widest text-gray-400">Tools We Use</h2>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {data.tools.map((tool: string, i: number) => (
                <div key={i} className="px-8 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm text-lg font-bold hover:shadow-md hover:border-yellow-400 hover:text-yellow-600 transition-all cursor-default">
                  {tool}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-24">
            <div className="p-12 rounded-[40px] bg-yellow-400 border border-yellow-500 relative overflow-hidden group">
               <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <Trophy className="w-12 h-12 text-black mb-6" />
              <h3 className="text-3xl font-black mb-4 text-black">The Result</h3>
              <p className="text-4xl md:text-5xl font-black text-black leading-tight">
                {data.result}
              </p>
            </div>
            <div className="p-12 rounded-[40px] bg-white border border-gray-200 shadow-xl flex flex-col justify-center">
              <h3 className="text-2xl font-black mb-8 text-black">Why This Matters</h3>
              <ul className="space-y-4">
                {data.benefits.map((benefit: string, i: number) => (
                  <li key={i} className="flex items-center text-lg font-medium text-gray-600">
                    <CheckCircle className="w-6 h-6 text-yellow-500 mr-4 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Simple CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl bg-black rounded-[50px] p-12 md:p-20 text-center text-white relative overflow-hidden">
           {/* Glow */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-[100px] -mt-64 pointer-events-none"></div>
           
           <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to start with {data.title}?</h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                Stop guessing and start growing. Get a custom strategy built for your business goals.
            </p>
            <Button 
                variant="primary" 
                size="lg" 
                className="h-16 px-12 rounded-2xl text-lg font-bold shadow-xl shadow-yellow-400/20 hover:scale-105"
                onClick={() => window.location.hash = 'contact'}
            >
                Book Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
           </div>
        </div>
      </section>
    </div>
  );
};
