
import React from 'react';
import { Briefcase, Users, Clock, Headphones } from 'lucide-react';

interface AgencyStatsProps {
  className?: string;
  hideDecor?: boolean;
}

export const AgencyStats: React.FC<AgencyStatsProps> = ({ className = "bg-white", hideDecor = false }) => {
  const stats = [
    { label: 'Projects Completed', value: '170+', icon: Briefcase },
    { label: 'Client Satisfaction', value: '98%', icon: Users },
    { label: 'Years Experience', value: '5+', icon: Clock },
    { label: 'Support Available', value: '24/7', icon: Headphones },
  ];

  return (
    <section className={`py-12 text-black relative overflow-hidden border-t border-gray-100 ${className}`}>
      {!hideDecor && (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-100 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2"></div>
        </>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-heading font-black mb-6 leading-tight text-black">
              About CSE <span className="text-yellow-600">Marketing</span>
            </h2>
            <div className="w-20 h-1.5 bg-yellow-400 rounded-full mb-6"></div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed font-light">
              We are a forward-thinking digital marketing agency dedicated to helping businesses grow through innovative marketing strategies and cutting-edge technology.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Our team of experts combines creativity with data-driven insights to deliver exceptional results for our clients across various industries.
            </p>
          </div>
          <div className="order-2 lg:order-2 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-100 p-6 rounded-[1.5rem] hover:bg-white hover:shadow-xl hover:border-yellow-200 transition-all duration-300 group shadow-sm">
                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center mb-4 text-yellow-400 shadow-md group-hover:scale-110 transition-transform group-hover:bg-yellow-400 group-hover:text-black">
                  <stat.icon className="w-5 h-5" />
                </div>
                <h3 className="text-3xl font-heading font-black text-black mb-1">{stat.value}</h3>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider group-hover:text-black transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
