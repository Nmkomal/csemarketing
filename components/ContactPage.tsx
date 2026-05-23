
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, ShieldCheck, Clock, User, Globe, ArrowUpRight } from 'lucide-react';
import { Button } from './Button';
import { SERVICES } from '../constants';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: SERVICES[0].title,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    let value = e.target.value;
    if (e.target.name === 'phone') {
        value = value.replace(/\D/g, '').slice(0, 10);
    }
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || formData.phone.length !== 10) return;

    const text = `Hi CSE Marketing team,%0A%0A*New Inquiry from Contact Page*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email || 'Not provided'}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message || 'No message provided'}`;
    window.open(`https://wa.me/919711044849?text=${text}`, '_blank');
  };

  const googleMapsLink = "https://www.google.com/maps/place/Classify+Skill+Education+Digital+Marketing+course+in+Dwarka+Mor/@28.6192331,77.0294023,17z/data=!3m1!4b1!4m6!3m5!1s0x390d05d898504e09:0xd0612bb7c8e45632!8m2!3d28.6192284!4d77.0319772!16s%2Fg%2F11wx70wgb_?entry=ttu&g_ep=EgoyMDI2MDEyNS4wIKXMDSoASAFQAw%3D%3D";

  const isPhoneValid = formData.phone.length === 10;

  return (
    <div className="bg-white min-h-screen selection:bg-yellow-400 selection:text-black">
      
      {/* 1. Hero Banner Section - Compacted */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-black rounded-b-[2.5rem] md:rounded-b-[4rem] overflow-hidden z-20">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-full h-full opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>
         
         <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-yellow-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2 animate-pulse"></span>
              Contact Us
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-black mb-6 leading-[1.1] text-white max-w-4xl mx-auto tracking-tight">
              Let's Start a <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400">
                Conversation.
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
              Whether you're looking to scale your revenue or build a world-class digital presence, our experts are ready.
            </p>
         </div>
      </section>

      {/* 2. Unified Contact Section (Direct Channels + Form) - Highly Compacted */}
      <section className="container mx-auto px-6 py-16 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
             
             {/* LEFT COLUMN: Direct Channels */}
             <div className="flex flex-col gap-4">
                <div className="mb-2">
                   <h2 className="text-2xl font-heading font-black text-black mb-2">Direct Channels</h2>
                   <p className="text-gray-500 text-sm md:text-base font-medium">Reach out to us directly for immediate assistance.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    {/* Call / WhatsApp Card */}
                    <a href="tel:+919711044849" className="group block bg-yellow-400 p-5 rounded-[2rem] shadow-lg shadow-yellow-400/20 relative overflow-hidden transition-transform hover:-translate-y-1 h-full">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Phone className="w-16 h-16 rotate-12" />
                        </div>
                        <div className="relative z-10 flex flex-col h-full justify-between min-h-[110px]">
                            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mb-3 text-yellow-400">
                                <Phone className="w-4 h-4" />
                            </div>
                            <div>
                                <h3 className="text-[10px] font-bold text-black mb-0.5 opacity-80 uppercase tracking-wider">Call / WhatsApp</h3>
                                <p className="text-lg font-heading font-black text-black tracking-tight">+91 97110 44849</p>
                            </div>
                        </div>
                    </a>

                    {/* Email Card */}
                    <a href="mailto:info@csemarketing.com" className="bg-white p-5 rounded-[2rem] shadow-sm border border-gray-100 group hover:border-yellow-400 transition-colors relative overflow-hidden h-full">
                        <div className="relative z-10 flex flex-col h-full justify-between min-h-[110px]">
                            <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center mb-3 text-black border border-gray-200 group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-colors">
                                <Mail className="w-4 h-4" />
                            </div>
                            <div>
                                <h3 className="text-[10px] font-bold text-gray-400 mb-0.5 uppercase tracking-wider">Email Us</h3>
                                <p className="text-sm font-heading font-bold text-black break-all leading-tight">info@csemarketing.com</p>
                            </div>
                        </div>
                    </a>
                </div>

                {/* Strategic Partnership */}
                <div className="bg-black p-6 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-transparent rounded-full blur-3xl group-hover:bg-yellow-400/40 transition-colors"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-md border border-white/10">
                                <User className="w-5 h-5 text-yellow-400" />
                            </div>
                            <span className="text-[10px] font-bold text-yellow-400 border border-yellow-400/30 px-3 py-1 rounded-full uppercase tracking-widest">
                                CEO Direct
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">Strategic Partnership</h3>
                        <p className="text-gray-400 font-medium leading-relaxed text-xs sm:text-sm">
                            Looking for a long-term growth partner? Schedule a 30-minute deep dive with our CEO.
                        </p>
                    </div>
                </div>

                {/* Address Card */}
                <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center pointer-events-none"></div>
                    
                    <div className="relative z-10 flex items-start gap-4">
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center shrink-0 text-black border border-gray-200">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-heading font-bold text-black mb-1">Visit Our Office</h3>
                            <p className="text-gray-500 font-medium leading-relaxed text-xs sm:text-sm max-w-md">
                                Pillar number 783, metro station, Dwarka Mor, Uttam Nagar, Bhagwati Garden, Nawada, New delhi, Delhi, 110059
                            </p>
                            <a 
                                href={googleMapsLink} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="inline-flex items-center mt-3 px-5 py-2 rounded-lg bg-black text-white text-[10px] font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg"
                            >
                                Get Directions <ArrowUpRight className="ml-1.5 w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </div>
             </div>

             {/* RIGHT COLUMN: Lead Form - Compacted */}
             <div className="bg-gray-50 rounded-[2.5rem] p-6 md:p-8 shadow-2xl shadow-gray-200/50 border border-gray-100 sticky top-24">
                <div className="text-left mb-6">
                    <h2 className="text-2xl md:text-3xl font-heading font-black mb-2 text-black">Send a Message</h2>
                    <p className="text-sm md:text-base text-gray-500">
                        Fill in the details below to connect directly with our team on WhatsApp.
                    </p>
                </div>

                <form onSubmit={handleWhatsApp} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-1.5 group">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1 group-focus-within:text-yellow-600 transition-colors">Your Name *</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-yellow-500 transition-colors" />
                                <input 
                                    name="name" 
                                    required 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    placeholder="e.g. Rahul Verma" 
                                    className="w-full h-12 pl-10 pr-4 bg-white rounded-xl border-2 border-transparent focus:border-yellow-400 outline-none font-bold text-black placeholder:text-gray-300 transition-all text-xs shadow-sm" 
                                />
                            </div>
                        </div>
                        <div className="space-y-1.5 group">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1 group-focus-within:text-yellow-600 transition-colors">Phone Number *</label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-yellow-500 transition-colors" />
                                <input 
                                    name="phone" 
                                    required 
                                    value={formData.phone} 
                                    onChange={handleChange} 
                                    type="tel" 
                                    placeholder="Phone Number (10 digits) *" 
                                    className="w-full h-12 pl-10 pr-4 bg-white rounded-xl border-2 border-transparent focus:border-yellow-400 outline-none font-bold text-black placeholder:text-gray-300 transition-all text-xs shadow-sm" 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1.5 group">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1 group-focus-within:text-yellow-600 transition-colors">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-yellow-500 transition-colors" />
                            <input 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                type="email" 
                                placeholder="info@csemarketing.com" 
                                className="w-full h-12 pl-10 pr-4 bg-white rounded-xl border-2 border-transparent focus:border-yellow-400 outline-none font-bold text-black placeholder:text-gray-300 transition-all text-xs shadow-sm" 
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5 group">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1 group-focus-within:text-yellow-600 transition-colors">Service Required</label>
                        <div className="relative">
                            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-yellow-500 transition-colors pointer-events-none" />
                            <select 
                                name="service" 
                                value={formData.service} 
                                onChange={handleChange} 
                                className="w-full h-12 pl-10 pr-4 bg-white rounded-xl border-2 border-transparent focus:border-yellow-400 outline-none font-bold text-black transition-all appearance-none cursor-pointer text-xs shadow-sm"
                            >
                                {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                                <option value="Other">Other / Multiple Services</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <ArrowRight className="w-3 h-3 rotate-90" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1.5 group">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1 group-focus-within:text-yellow-600 transition-colors">Project Details</label>
                        <textarea 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            rows={3} 
                            placeholder="Tell us more about your business goals..." 
                            className="w-full p-4 bg-white rounded-xl border-2 border-transparent focus:border-yellow-400 outline-none font-bold text-black placeholder:text-gray-300 transition-all resize-none text-xs leading-relaxed shadow-sm"
                        ></textarea>
                    </div>

                    <Button 
                        type="submit" 
                        variant="primary" 
                        disabled={!isPhoneValid}
                        className={`w-full h-14 rounded-xl text-base font-black shadow-xl shadow-yellow-400/20 hover:shadow-yellow-400/40 hover:-translate-y-1 transition-all duration-300 ${!isPhoneValid ? 'opacity-50 cursor-not-allowed bg-gray-300 text-gray-500 hover:bg-gray-300 hover:text-gray-500 hover:translate-y-0' : ''}`}
                    >
                        Send to WhatsApp <Send className="ml-2 w-4 h-4" />
                    </Button>

                    <div className="flex flex-col sm:flex-row items-center justify-between pt-2 gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 border-t border-gray-200 mt-4">
                        <span className="flex items-center"><ShieldCheck className="w-3 h-3 mr-2 text-green-500" /> Encrypted</span>
                        <span className="flex items-center"><Clock className="w-3 h-3 mr-2 text-yellow-500" /> Fast Response</span>
                    </div>
                </form>
             </div>

          </div>
      </section>

      {/* 3. How It Works Section - Reduced Vertical Padding */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-heading font-black text-black">How It Works</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
               {/* Step 1 */}
               <div className="text-center group">
                  <div className="w-14 h-14 mx-auto bg-black text-yellow-400 rounded-2xl flex items-center justify-center text-xl font-black mb-4 shadow-xl group-hover:scale-110 transition-transform cursor-default">1</div>
                  <h3 className="text-lg font-bold mb-2 text-black">Pick Your Service</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Choose the service that best fits your business needs.</p>
               </div>
               {/* Step 2 */}
               <div className="text-center group">
                  <div className="w-14 h-14 mx-auto bg-yellow-400 text-black rounded-2xl flex items-center justify-center text-xl font-black mb-4 shadow-xl group-hover:scale-110 transition-transform cursor-default">2</div>
                  <h3 className="text-lg font-bold mb-2 text-black">Book Your Slot</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Select a convenient date and time to discuss your project.</p>
               </div>
               {/* Step 3 */}
               <div className="text-center group">
                  <div className="w-14 h-14 mx-auto bg-black text-yellow-400 rounded-2xl flex items-center justify-center text-xl font-black mb-4 shadow-xl group-hover:scale-110 transition-transform cursor-default">3</div>
                  <h3 className="text-lg font-bold mb-2 text-black">Fill Out Form</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Provide your business details and requirements.</p>
               </div>
               {/* Step 4 */}
               <div className="text-center group">
                  <div className="w-14 h-14 mx-auto bg-yellow-400 text-black rounded-2xl flex items-center justify-center text-xl font-black mb-4 shadow-xl group-hover:scale-110 transition-transform cursor-default">4</div>
                  <h3 className="text-lg font-bold mb-2 text-black">We Connect & Plan</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Our team will review your details and get back to you.</p>
               </div>
            </div>
        </div>
      </section>

    </div>
  )
}
