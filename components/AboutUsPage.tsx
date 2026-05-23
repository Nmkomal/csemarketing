
import React from 'react';
import { Award, ArrowRight, History, Target, Eye, Shield, Users, Star, Heart } from 'lucide-react';
import { Button } from './Button';
import { AgencyStats } from './AgencyStats';
import { Process } from './Process';
import { CTA } from './CTA';
import { TEAM } from '../constants';

export const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen w-full overflow-hidden relative">
      
      {/* 1. Premium Banner Section - Compacted */}
      <section className="relative pt-28 pb-12 bg-white text-black rounded-b-[2.5rem] overflow-hidden border-b border-gray-100 z-20">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-400/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-5 shadow-sm">
            <Award className="w-3 h-3 mr-2" />
            Excellence Since 2019
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-black mb-5 leading-[1.1] tracking-tight text-black">
            Architects of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700">
              Digital Growth.
            </span>
          </h1>
          
          <p className="text-sm md:text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed mb-8">
            We are <span className="text-black font-bold">CSE Marketing</span>, a data-driven digital agency with over <span className="text-yellow-600 font-bold">5 years of experience</span> in transforming ambitious businesses into market leaders.
          </p>

          <div className="flex justify-center">
            <Button 
                variant="primary" 
                size="md" 
                className="h-12 px-8 rounded-xl text-sm font-bold shadow-xl shadow-yellow-400/20 hover:scale-105"
                onClick={() => window.location.hash = 'contact'}
            >
                Start a Project <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Agency Stats - Compacted & Plain White Background */}
      <div className="py-8 bg-white">
         <div className="container mx-auto max-w-5xl">
            <AgencyStats className="bg-white border-none shadow-none py-0" hideDecor={true} />
         </div>
      </div>

      {/* 3. Our Story Section - Compacted & Centered */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center max-w-5xl">
          <div className="order-2 lg:order-1">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">
                <History className="w-4 h-4" />
              </div>
              <h4 className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-[10px]">Our Story</h4>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-heading font-black mb-3 text-black leading-tight">
              From Humble Beginnings to <span className="text-yellow-500">Industry Leaders.</span>
            </h2>
            
            <div className="space-y-3 text-sm text-gray-600 leading-relaxed font-medium">
              <p>
                The journey of <strong className="text-black">CSE Marketing</strong> began over <strong>5 years ago</strong> with a singular mission: to eliminate the guesswork from digital marketing.
              </p>
              <p>
                Founded in 2019, we started as a small team of three enthusiasts in a shared workspace. Today, we have evolved into a full-service growth lab.
              </p>
              <p>
                With 5+ years of hands-on experience, we don't just execute campaigns; we engineer success stories. Our legacy is built on the revenue we generate for our partners.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg border-4 border-white w-full max-w-[350px]">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" 
                alt="CSE Marketing Team Collaboration" 
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-yellow-400 rounded-2xl -z-10 hidden md:block max-w-[350px]"></div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision - Compacted */}
      <section className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black text-white p-8 rounded-[2rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl -mr-16 -mt-16"></div>
            <Target className="w-8 h-8 text-yellow-400 mb-4" />
            <h3 className="text-xl font-black mb-3">Our Mission</h3>
            <p className="text-sm text-gray-400 leading-relaxed font-medium">
              To give business owners peace of mind by handling all their marketing complexities, so they can focus strictly on running their business operations.
            </p>
          </div>
          <div className="bg-yellow-400 p-8 rounded-[2rem] relative overflow-hidden group shadow-lg shadow-yellow-400/20 text-black">
            <Eye className="w-8 h-8 text-black mb-4" />
            <h3 className="text-xl font-black mb-3 text-black">Our Vision</h3>
            <p className="text-sm text-black/80 leading-relaxed font-bold">
              To be the most trusted, data-centric marketing partner for businesses globally who demand real, measurable, and scalable growth.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Team Section - Compacted */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <h4 className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-2">The Brains</h4>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-black">Meet the Experts</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <div key={i} className="group relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-3 bg-gray-50 border border-gray-100 shadow-sm">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-bold text-xs">Experience: {member.experience}</p>
                     </div>
                  </div>
                </div>
                <h3 className="text-lg font-black mb-0.5">{member.name}</h3>
                <p className="text-yellow-600 font-bold text-[10px] uppercase tracking-widest mb-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Core Values - Compacted */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <h4 className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-2">Our Culture</h4>
            <h2 className="text-3xl md:text-4xl font-heading font-black mb-3 text-black">Core Values</h2>
            <p className="text-gray-500 text-sm font-medium">This is the code we live by at CSE Marketing.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Shield, title: 'Honesty', desc: 'No sugarcoating. Only the truth about what works.' },
              { icon: Users, title: 'Client First', desc: 'We care about your profit margin, not just fees.' },
              { icon: Star, title: 'Excellence', desc: 'Premium work. No shortcuts or templates.' },
              { icon: Heart, title: 'Passion', desc: 'We genuinely love seeing our clients grow.' },
            ].map((v, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white border border-gray-100 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 group">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-400 transition-colors">
                  <v.icon className="w-5 h-5 text-black" />
                </div>
                <h4 className="text-base font-bold mb-2">{v.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Process Section (Using Shared Component but wrapper can constrain it if needed) */}
      <Process />
      
      {/* 8. CTA */}
      <CTA />

    </div>
  );
};
