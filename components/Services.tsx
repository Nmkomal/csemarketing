
import React, { useState } from 'react';
import { SERVICES, SERVICE_DETAILS, PROCESS_STEPS } from '../constants';
import { CTA } from './CTA';
import { Check, ArrowRight, Zap, X, User, Phone, Mail, Send } from 'lucide-react';
import { Button } from './Button';

interface ServicesProps {
  onServiceClick: (id: string) => void;
  onNavigate?: (href: string) => void;
  isSimple?: boolean;
}

export const Services: React.FC<ServicesProps> = ({ onServiceClick, onNavigate, isSimple = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleBookClick = (e: React.MouseEvent, title: string) => {
    e.stopPropagation();
    setSelectedServiceTitle(title);
    setIsModalOpen(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    // Enforce 10 digit number for phone
    if (e.target.name === 'phone') {
        value = value.replace(/\D/g, '').slice(0, 10);
    }
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!formData.name || formData.phone.length !== 10) return;

    const text = `Hi CSE Marketing,%0A%0AI am interested in booking your service: *${selectedServiceTitle}*%0A%0A*My Details:*%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email || 'Not provided'}`;
    window.open(`https://wa.me/919711044849?text=${text}`, '_blank');
    setIsModalOpen(false);
    setFormData({ name: '', phone: '', email: '' });
  };

  const isPhoneValid = formData.phone.length === 10;

  // 1. Simplified Version (For Home Page Section)
  if (isSimple) {
    return (
      <section id="services-section" className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-10">
            <span className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 text-black">
              Digital <span className="text-yellow-500">Services.</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
              High-performance solutions tailored to your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
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
      
      {/* 1. Services Banner Section - Compacted */}
      <section className="w-full relative pt-24 pb-12 md:pt-28 md:pb-16 bg-gray-50 rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden mb-12 border-b border-gray-100">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply pointer-events-none"></div>
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                <span className="inline-flex items-center px-5 py-2 rounded-full bg-white border border-gray-200 text-yellow-600 text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-sm">
                  <Zap className="w-4 h-4 mr-2 text-yellow-500 fill-current" />
                  Full-Service Agency
                </span>
                
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black mb-8 leading-[1.1] text-black tracking-tight">
                  We Build <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Growth Engines.</span>
                </h1>
                
                <p className="text-base md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium mb-10">
                  From pixel-perfect designs to high-ROI ad campaigns, our services are engineered to scale your revenue.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="h-14 px-10 rounded-2xl text-base font-bold shadow-xl shadow-yellow-400/20 w-full sm:w-auto hover:scale-105"
                    onClick={() => window.location.hash = 'contact'}
                  >
                    Start a Project <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                     variant="outline" 
                     size="lg"
                     className="h-14 px-10 rounded-2xl text-base font-bold w-full sm:w-auto bg-white hover:bg-gray-100"
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

      {/* 2. Services List - Reduced Margin */}
      <section id="all-services" className="container mx-auto px-6 max-w-7xl mb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        onClick={(e) => handleBookClick(e, service.title)}
                    >
                        Book This Service <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Proven Process Section - Padding Adjusted */}
      <section className="py-12 bg-black text-white rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
            <span className="text-yellow-400 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 text-white">
               Our Proven <span className="text-yellow-500">Process</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium">
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

      {/* Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-fade-in">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity" 
                onClick={() => setIsModalOpen(false)}
            ></div>
            
            {/* Modal Content */}
            <div className="relative bg-white rounded-[2.5rem] w-full max-w-md p-8 md:p-10 shadow-2xl scale-100 opacity-100 transition-all transform">
                <button 
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                    <X className="w-5 h-5 text-gray-600" />
                </button>

                <div className="text-center mb-8">
                    <span className="inline-block py-1 px-3 rounded-full bg-yellow-100 text-yellow-700 text-[10px] font-black uppercase tracking-widest mb-3">
                        Book Service
                    </span>
                    <h3 className="text-2xl font-heading font-black text-black leading-tight">
                        {selectedServiceTitle}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2 font-medium">
                        Fill the form below to get a quick quote or consultation for this service.
                    </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-yellow-500 transition-colors" />
                        <input 
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            required 
                            placeholder="Your Name *" 
                            className="w-full h-12 pl-10 pr-4 bg-gray-50 rounded-xl border-2 border-transparent focus:bg-white focus:border-yellow-400 outline-none font-bold text-black placeholder:text-gray-400 transition-all text-sm" 
                        />
                    </div>
                    <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-yellow-500 transition-colors" />
                        <input 
                            name="phone"
                            value={formData.phone}
                            onChange={handleFormChange}
                            required 
                            type="tel" 
                            placeholder="Phone Number (10 digits) *" 
                            className="w-full h-12 pl-10 pr-4 bg-gray-50 rounded-xl border-2 border-transparent focus:bg-white focus:border-yellow-400 outline-none font-bold text-black placeholder:text-gray-400 transition-all text-sm" 
                        />
                    </div>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-yellow-500 transition-colors" />
                        <input 
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            type="email" 
                            placeholder="Email Address (Optional)" 
                            className="w-full h-12 pl-10 pr-4 bg-gray-50 rounded-xl border-2 border-transparent focus:bg-white focus:border-yellow-400 outline-none font-bold text-black placeholder:text-gray-400 transition-all text-sm" 
                        />
                    </div>

                    <Button 
                        type="submit" 
                        variant="primary" 
                        disabled={!isPhoneValid}
                        className={`w-full h-14 rounded-xl text-base font-bold shadow-xl shadow-yellow-400/20 hover:shadow-yellow-400/40 transition-all mt-2 ${!isPhoneValid ? 'opacity-50 cursor-not-allowed bg-gray-300 text-gray-500 hover:bg-gray-300 hover:text-gray-500' : ''}`}
                    >
                        Send Request <Send className="ml-2 w-4 h-4" />
                    </Button>
                </form>
            </div>
        </div>
      )}

    </div>
  );
};
