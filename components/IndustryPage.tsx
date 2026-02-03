
import React from 'react';
import { INDUSTRIES, SERVICES, WHY_CHOOSE_US } from '../constants';
import { TrendingUp, Zap } from 'lucide-react';
import { CTA } from './CTA';

export const IndustryPage: React.FC = () => {
  return (
    <div className="bg-white pt-32">
      {/* 1. Header Section */}
      <section className="container mx-auto px-6 mb-24 text-center">
        <h4 className="text-yellow-600 font-black uppercase tracking-[0.3em] text-sm mb-6">Our Expertise</h4>
        <h1 className="text-5xl md:text-8xl font-heading font-black mb-10 leading-[1.1]">
          Industries We <br />
          <span className="text-yellow-500">Transform.</span>
        </h1>
        <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
          We understand your market. Here is exactly how we help businesses in your industry grow.
        </p>
      </section>

      {/* 2. Industries List Grid */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid gap-12">
          {INDUSTRIES.map((industry, index) => (
            <div 
              key={industry.id} 
              className={`flex flex-col lg:flex-row gap-12 items-start p-10 rounded-[50px] border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-500 group ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Icon / Title Column */}
              <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-md group-hover:bg-yellow-400 transition-colors duration-500">
                  <industry.icon className="w-12 h-12 text-black" />
                </div>
                <h2 className="text-4xl font-heading font-black mb-2">{industry.name}</h2>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">{industry.description}</p>
                <div className="hidden lg:block w-full h-px bg-gray-200 mt-4"></div>
              </div>

              {/* Details Column */}
              <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm group-hover:border-yellow-200 transition-colors">
                  <div className="flex items-center mb-4">
                    <Zap className="w-6 h-6 text-yellow-500 mr-3" />
                    <h3 className="text-xl font-bold">How We Work</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {industry.workDescription}
                  </p>
                </div>

                <div className="bg-black text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <div className="flex items-center mb-4 relative z-10">
                    <TrendingUp className="w-6 h-6 text-yellow-400 mr-3" />
                    <h3 className="text-xl font-bold">Growth Method</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg relative z-10">
                    {industry.growthMethod}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Simplified Services Grid */}
      <section className="bg-gray-50 py-24 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h4 className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">Our Services</h4>
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">Expertise <span className="text-yellow-500">at a Glance.</span></h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="group relative bg-white border border-gray-100 rounded-3xl p-6 md:p-8 flex flex-col items-center text-center hover:border-yellow-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-full blur-2xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-yellow-400 transition-all duration-300 shrink-0 relative z-10 shadow-sm">
                  <service.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-lg md:text-xl font-black text-black group-hover:text-yellow-600 transition-colors relative z-10">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h4 className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">The CSE Advantage</h4>
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">Why Choose <span className="text-yellow-500">Us?</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-black hover:text-white transition-all duration-500 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-yellow-400 transition-colors">
                  <item.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-black mb-4 font-heading">{item.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-400 leading-relaxed font-medium">{item.description}</p>
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
