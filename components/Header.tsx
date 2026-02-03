
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  onNavigate: (href: string) => void;
  activeView: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 bg-white/95 backdrop-blur-md ${
          isScrolled ? 'shadow-sm py-0.5 border-b border-gray-100' : 'py-1 border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo - Slightly smaller for compact feel */}
          <div 
              onClick={(e) => handleLinkClick(e, 'home')}
              className="flex items-center space-x-2 group cursor-pointer relative z-[60]"
          >
            <img 
              src="https://i.postimg.cc/GhzNPgvR/uuytukt.png" 
              alt="CSE Marketing" 
              className="h-9 md:h-12 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300" 
            />
            <span className="font-heading text-lg md:text-xl font-bold tracking-tight text-black leading-tight hidden sm:block">
              Marketing
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={`#${link.href}`}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[11px] font-black uppercase tracking-widest transition-all duration-300 border-b-2 py-0.5 ${
                    activeView === link.href 
                    ? 'text-black border-yellow-400' 
                    : 'text-gray-500 border-transparent hover:text-black hover:border-gray-200'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA - Compact Version */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="primary" 
              size="sm" 
              className="shadow-md shadow-yellow-400/20 text-xs px-5 py-2"
              onClick={() => onNavigate('contact')}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-1.5 text-black relative z-[60] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[50] bg-white lg:hidden transition-all duration-300 ease-in-out flex flex-col ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex-1 flex flex-col pt-20 pb-8 px-6 overflow-y-auto">
          <nav className="flex flex-col space-y-2 mb-8">
            {NAV_LINKS.map((link, idx) => (
              <a 
                key={link.name} 
                href={`#${link.href}`}
                className={`text-2xl font-heading font-black tracking-tight border-b border-gray-50 py-4 flex items-center justify-between group ${
                  activeView === link.href ? 'text-yellow-500' : 'text-black'
                }`}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{ 
                  opacity: isMobileMenuOpen ? 1 : 0, 
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.3s ease-out ${idx * 0.05}s`
                }}
              >
                {link.name}
                <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                  activeView === link.href ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
                }`} />
              </a>
            ))}
          </nav>

          <div 
            className="mt-auto space-y-6"
            style={{ 
              opacity: isMobileMenuOpen ? 1 : 0, 
              transition: 'opacity 0.5s ease-out 0.3s'
            }}
          >
            {/* Mobile CTA */}
            <Button 
              variant="primary" 
              className="w-full py-4 text-lg rounded-2xl shadow-xl shadow-yellow-400/20"
              onClick={() => {
                onNavigate('contact');
                setIsMobileMenuOpen(false);
              }}
            >
              Contact Us
            </Button>
            
            <div className="text-center">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Contact Us</p>
              <a href="tel:+919711044849" className="block text-lg font-black text-black hover:text-yellow-500 transition-colors">+91 97110 44849</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
