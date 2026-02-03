
import React from 'react';
import { CTA } from './CTA';
import { Award, ArrowRight, Shield, Users, Star, Heart, Target, Eye, History } from 'lucide-react';
import { Button } from './Button';
import { Process } from './Process';
import { TEAM } from '../constants';
import { AgencyStats } from './AgencyStats';

export const MarkPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Premium Banner Section */}
      <section className="relative pt-32 pb-20 bg-white text-black overflow-hidden z-20">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-100 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-multiply pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-sm animate-fade-up">
            <Award className="w-4 h-4 mr-2" />
            Excellence Since 2019
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-8 leading-[1.1] tracking-tight text-black animate-fade-up-delay-1">
            Architects of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700">
              Digital Growth.
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed mb-10 animate-fade-up-delay-2">
            We are <span className="text-black font-bold">CSE Marketing</span>, a data-driven digital agency with over <span className="text-yellow-600 font-bold">5 years of experience</span> in transforming ambitious businesses into market leaders.
          </p>

          <div className="flex justify-center animate-fade-up-delay-2">
            <Button 
                variant="primary" 
                size="lg" 
                className="h-16 px-12 rounded-2xl text-lg shadow-xl shadow-yellow-400/20 hover:scale-105"
                onClick={() => window.location.hash = 'contact'}
            >
                Start a Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About CSE Marketing (Agency Stats) */}
      <AgencyStats />

      {/* Our Story Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600">
                <History className="w-6 h-6" />
              </div>
              <h4 className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-sm">Our Story</h4>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-8 text-black leading-tight">
              From Humble Beginnings to <span className="text-yellow-500">Industry Leaders.</span>
            </h2>
            
            <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed font-medium">
              <p>
                The journey of <strong className="text-black">CSE Marketing</strong> began over <strong>5 years ago</strong> with a singular mission: to eliminate the guesswork from digital marketing. We noticed that too many agencies focused on "fluff" metrics rather than real business growth.
              </p>
              <p>
                Founded in 2019, we started as a small team of three enthusiasts in a shared workspace. Today, we have evolved into a full-service growth lab. Over the last half-decade, we have navigated algorithm changes, market shifts, and new technologies, always staying two steps ahead.
              </p>
              <p>
                With 5+ years of hands-on experience, we don't just execute campaigns; we engineer success stories. Our legacy is built on the revenue we generate for our partners, not just the awards on our shelf.
              </p>
            </div>
          </div>

          {/* Image Composition */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white max-w-full">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="CSE Marketing Team Collaboration" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-yellow-400 rounded-[2rem] md:rounded-[3rem] -z-10 hidden md:block"></div>
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="container mx-auto px-6 mb-24 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-black text-white p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            <Target className="w-12 h-12 md:w-14 md:h-14 text-yellow-400 mb-6" />
            <h3 className="text-2xl md:text-4xl font-heading font-black mb-4">Our Mission</h3>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed font-medium">
              To give business owners peace of mind by handling all their marketing complexities, so they can focus strictly on running their business operations.
            </p>
          </div>
          <div className="bg-yellow-400 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-xl shadow-yellow-400/20 text-black">
            <Eye className="w-12 h-12 md:w-14 md:h-14 text-black mb-6" />
            <h3 className="text-2xl md:text-4xl font-heading font-black mb-4">Our Vision</h3>
            <p className="text-base md:text-lg text-black/80 leading-relaxed font-bold">
              To be the most trusted, data-centric marketing partner for businesses globally who demand real, measurable, and scalable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h4 className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">Our Culture</h4>
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 text-black">Core Values</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">This is the code we live by at CSE Marketing.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Shield, title: 'Honesty', desc: 'We tell you the truth about what works and what does not. No sugarcoating.' },
              { icon: Users, title: 'Client First', desc: 'We care about your profit margin, not just our service fees.' },
              { icon: Star, title: 'Excellence', desc: 'We do premium work. We do not believe in shortcuts or templates.' },
              { icon: Heart, title: 'Passion', desc: 'We genuinely love seeing our clients grow and succeed in their market.' },
            ].map((v, i) => (
              <div key={i} className="text-center p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-400 transition-colors">
                  <v.icon className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-black">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - The Brains */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h4 className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">The Brains</h4>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-black">Meet the Experts</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <div key={i} className="group relative">
                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-6 bg-gray-100 border border-gray-100 shadow-sm">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                     <div className="absolute bottom-6 left-6 text-white">
                        <p className="font-bold text-sm">Experience: {member.experience}</p>
                     </div>
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-1">{member.name}</h3>
                <p className="text-yellow-600 font-bold text-xs uppercase tracking-widest mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Classified Process */}
      <Process />

      <CTA />
    </div>
  );
};
