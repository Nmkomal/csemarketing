
import React from 'react';
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin, ArrowUpRight, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  // Define links with specific view IDs to match App.tsx routing
  const exploreLinks = [
    { label: 'Services', view: 'services' },
    { label: 'About Us', view: 'about-us' },
    { label: 'Industries', view: 'industries-page' },
    { label: 'Portfolio', view: 'portfolio' },
    { label: 'Contact', view: 'contact' }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/classifyskilleducation/' }, 
    { icon: Youtube, href: 'https://www.youtube.com/@ClassifySkill-education' }, 
    { icon: Linkedin, href: 'https://www.linkedin.com/company/classify-skill-education/posts/?feedView=all' }, 
    { icon: Facebook, href: 'https://www.facebook.com/people/Classify-Skill-Education/61575861164329/' }
  ];

  const handleNavClick = (e: React.MouseEvent, view: string) => {
    e.preventDefault();
    onNavigate(view);
  };

  return (
    <footer className="bg-white text-black pt-16 md:pt-24 pb-10 rounded-t-[3rem] mt-10 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <div 
              className="flex items-center space-x-3 cursor-pointer group w-fit"
              onClick={(e) => handleNavClick(e, 'home')}
            >
              <img 
                src="https://i.postimg.cc/GhzNPgvR/uuytukt.png" 
                alt="Marketing" 
                loading="lazy"
                width="80"
                height="80"
                className="h-16 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
              />
              <span className="font-heading text-2xl font-bold tracking-tight text-black">
                Marketing
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed text-base max-w-sm font-medium">
              We engineer digital growth. A premium agency dedicated to scaling brands through data-driven strategies and world-class design.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a 
                    key={idx} 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 group shadow-sm hover:shadow-md"
                  >
                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:pl-12">
            <h4 className="font-bold text-xl mb-8 text-black flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
              Explore
            </h4>
            <ul className="space-y-4">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <a 
                    href={`#${item.view}`}
                    onClick={(e) => handleNavClick(e, item.view)}
                    className="group flex items-center text-gray-500 hover:text-black transition-colors text-base font-medium w-fit cursor-pointer"
                  >
                    <ArrowUpRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-yellow-500" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-xl mb-8 text-black flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
              Office & Contact
            </h4>
            <ul className="space-y-8">
              <li className="flex items-start space-x-4 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-gray-600 group-hover:text-black" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Visit Us</span>
                  <span className="text-gray-800 font-bold text-sm lg:text-base leading-snug block group-hover:text-yellow-600 transition-colors">
                    Pillar number 783, metro station,<br /> Dwarka Mor, Uttam Nagar, Bhagwati Garden,<br /> Nawada, New delhi, Delhi, 110059
                  </span>
                </div>
              </li>
              
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300">
                    <Phone className="w-5 h-5 text-gray-600 group-hover:text-black" />
                </div>
                <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Call / WhatsApp</span>
                    <a href="https://wa.me/919711044849" className="text-gray-800 font-bold text-lg hover:text-yellow-600 transition-colors block">
                      +91 97110 44849
                    </a>
                </div>
              </li>

              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300">
                    <Mail className="w-5 h-5 text-gray-600 group-hover:text-black" />
                </div>
                <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email Us</span>
                    <a href="mailto:classifyskilleducation@gmail.com" className="text-gray-800 font-bold text-base lg:text-lg hover:text-yellow-600 transition-colors block break-all">
                      classifyskilleducation@gmail.com
                    </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500 text-center md:text-left">
          <p className="font-medium">© 2024 CSE Marketing. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
