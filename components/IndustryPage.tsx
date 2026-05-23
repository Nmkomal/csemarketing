
import React from 'react';
import { INDUSTRIES, SERVICES, WHY_CHOOSE_US } from '../constants';
import { TrendingUp, Zap } from 'lucide-react';
import { CTA } from './CTA';

export const IndustryPage: React.FC = () => {
  return (
    <div className="bg-white pt-24 md:pt-28">
      {/* 1. Header Section - Compacted */}
      <section className="container mx-auto px-6 mb-12 text-center">
        <h4 className="text-yellow-600 font-black uppercase tracking-[0.3em] text-sm mb-3">Our Expertise</h4>
        <h1 className="text-4xl md:text-6xl font-heading font-black mb-4 leading-[1.1]">
          Industries We <br />
          <span className="text-yellow-500">Transform.</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
          We understand your market. Here is exactly how we help businesses in your industry grow.
        </p>
      </section>

      {/* 2. Industries List Grid - Compacted */}
      <section className="container mx-auto px-6 mb-20">
        <div className="grid gap-8">
          {INDUSTRIES.map((industry, index) => (
            <div 
              key={industry.id} 
              className={`flex flex-col lg:flex-row gap-8 items-start p-8 rounded-[40px] border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-500 group ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Icon / Title Column */}
              <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-4 shadow-md group-hover:bg-yellow-400 transition-colors duration-500">
                  <industry.icon className="w-10 h-10 text-black" />
                </div>
                <h2 className="text-3xl font-heading font-black mb-2">{industry.name}</h2>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">{industry.description}</p>
                <div className="hidden lg:block w-full h-px bg-gray-200 mt-2"></div>
              </div>

              {/* Details Column */}
              <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm group-hover:border-yellow-200 transition-colors">
                  <div className="flex items-center mb-3">
                    <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                    <h3 className="text-lg font-bold">How We Work</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {industry.workDescription}
                  </p>
                </div>

                <div className="bg-black text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <div className="flex items-center mb-3 relative z-10">
                    <TrendingUp className="w-5 h-5 text-yellow-400 mr-2" />
                    <h3 className="text-lg font-bold">Growth Method</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-base relative z-10">
                    {industry.growthMethod}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Simplified Services Grid - Compacted */}
      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 text-black">
              Our <span className="text-yellow-500">Services</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="group relative bg-white border border-gray-100 rounded-3xl p-6 flex flex-col items-center text-center hover:border-yellow-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-full blur-2xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-yellow-400 transition-all duration-300 shrink-0 relative z-10 shadow-sm">
                  <service.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-sm md:text-base font-black text-black group-hover:text-yellow-600 transition-colors relative z-10">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section - Compacted */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h4 className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">The CSE Advantage</h4>
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">Why Choose <span className="text-yellow-500">Us?</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-black hover:text-white transition-all duration-500 group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-yellow-400 transition-colors">
                  <item.icon className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-lg font-black mb-2 font-heading">{item.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-400 leading-relaxed font-medium text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <CTA />
    </div>
  );
};
