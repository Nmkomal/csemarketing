
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Phone, User, Mail, Send, MessageSquare } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const text = `Hi CSE Marketing,%0A%0AMy Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}%0A%0AI am interested in your services.`;
    window.open(`https://wa.me/919711044849?text=${text}`, '_blank');
  };

  return (
    <section id="home" className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden bg-white">
      {/* Static Graphic Backgrounds - Optimized */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-gradient-to-b from-yellow-100/50 to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>
      
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content - No Animation */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-black/5 border border-black/10 text-black text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
              Accelerating Business Growth
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] lg:leading-[0.95] mb-6 text-black tracking-tight">
              Scale Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 relative">
                Digital Impact
              </span>
            </h1>
            
            <p className="text-base md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium px-2 lg:px-0">
              We create data-driven digital marketing strategies for ambitious brands that want sustainable growth, complete visibility, and full control over their marketing performance.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full sm:w-auto h-12 px-8 text-base shadow-xl shadow-yellow-400/20 hover:scale-105 transform transition-transform" 
                onClick={() => {
                  window.location.hash = 'contact';
                  window.scrollTo(0, 0);
                }}
              >
                Book Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <div className="flex -space-x-4">
                 {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" loading="lazy" width="40" height="40" />
                    </div>
                 ))}
                 <div className="w-10 h-10 rounded-full border-2 border-white bg-black text-white flex items-center justify-center text-[10px] font-bold pl-1">
                    1k+
                 </div>
              </div>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
               {/* Meta */}
               <div className="hidden md:flex items-center group cursor-default" title="Meta">
                 <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png" 
                    alt="Meta" 
                    className="h-8 md:h-12 w-auto object-contain" 
                    loading="lazy"
                 />
               </div>

               {/* Instagram */}
               <div className="h-8 flex items-center group cursor-default" title="Instagram">
                  <svg className="h-5 md:h-6 w-auto text-[#E1306C]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.011-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  <span className="ml-2 font-heading font-bold text-lg hidden sm:block">Instagram</span>
               </div>

               {/* Google */}
               <div className="h-8 flex items-center group cursor-default" title="Google">
                 <svg className="h-5 md:h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" className="text-[#4285F4]"/>
                   <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" className="text-[#34A853]"/>
                   <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.24.81-.6z" className="text-[#FBBC05]"/>
                   <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" className="text-[#EA4335]"/>
                 </svg>
                 <span className="ml-2 font-heading font-bold text-lg hidden sm:block">Google</span>
               </div>

               {/* Facebook */}
               <div className="h-8 flex items-center group cursor-default" title="Facebook">
                 <svg className="h-5 md:h-6 w-auto text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                 </svg>
                 <span className="ml-2 font-heading font-bold text-lg hidden sm:block">Facebook</span>
               </div>
            </div>
          </div>

          {/* Right Lead Form - No Delay */}
          <div className="relative mt-10 lg:mt-0 px-2 sm:px-0">
            {/* Form Card */}
            <div className="relative z-10 bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 max-w-md mx-auto transform hover:-translate-y-1 transition-transform duration-300">
              
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-full mb-2 text-yellow-600">
                    <MessageSquare className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-heading font-black text-black mb-1">Get Free Consultation</h3>
                <p className="text-gray-500 text-[10px] font-medium">Fill the form to connect on WhatsApp instantly.</p>
              </div>

              <form className="space-y-3" onSubmit={handleWhatsApp}>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-yellow-500 transition-colors" />
                  <input 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Your Name *" 
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-100 transition-all text-sm font-bold placeholder:text-gray-400"
                  />
                </div>

                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-yellow-500 transition-colors" />
                  <input 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel" 
                    placeholder="Phone Number *" 
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-100 transition-all text-sm font-bold placeholder:text-gray-400"
                  />
                </div>

                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-yellow-500 transition-colors" />
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-100 transition-all text-sm font-bold placeholder:text-gray-400"
                  />
                </div>
                
                <div className="relative group">
                   <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message (Optional)"
                      rows={2}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-100 transition-all text-sm font-bold placeholder:text-gray-400 resize-none"
                   ></textarea>
                </div>

                <Button 
                    type="submit"
                    variant="primary" 
                    className="w-full h-12 rounded-xl text-sm shadow-xl shadow-yellow-400/20 mt-1 hover:shadow-yellow-400/30"
                >
                    Contact Now <Send className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest mt-2 flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3 text-green-500 mr-1.5" /> 100% Confidential
                </p>
              </form>
            </div>
            
            {/* Background Graphic Blobs - Reduced effects */}
            <div className="hidden md:block absolute -top-12 -right-12 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="hidden md:block absolute -bottom-12 -left-12 w-48 h-48 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
