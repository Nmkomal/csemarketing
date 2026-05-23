
import React, { useState, useEffect, Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { About } from './components/About';
import { Industries } from './components/Industries';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AgencyStats } from './components/AgencyStats';

// Static imports to eliminate dynamic chunk loading and make tab transitions instant
import { ServicePage } from './components/ServicePage';
import { PortfolioPage } from './components/PortfolioPage';
import { IndustryPage } from './components/IndustryPage';
import { ContactPage } from './components/ContactPage';
import { QuotePage } from './components/QuotePage';
import { FaqPage } from './components/FaqPage';
import { AboutUsPage } from './components/AboutUsPage';
import { TermsPage } from './components/TermsPage';

// Simple Loading Component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-12 h-12 border-4 border-gray-100 border-t-yellow-400 rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [currentView, setCurrentView] = useState('home'); 
  
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['portfolio', 'industries-page', 'contact', 'quote', 'faq', 'services', 'about-us', 'terms'];
      
      if (hash) {
        if (validPages.includes(hash)) {
          setCurrentView(hash);
        } else if (hash.startsWith('s-')) { 
          setCurrentView(hash);
        } else {
          const homeSections = ['services-section', 'about-section', 'portfolio-section', 'industries-section', 'testimonials-section'];
          if (homeSections.includes(hash)) {
            setCurrentView('home');
            setTimeout(() => {
              const el = document.getElementById(hash);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          } else {
            setCurrentView('home');
          }
        }
      } else {
        setCurrentView('home');
      }
    };
    
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    if (currentView !== 'home') {
      window.scrollTo(0, 0);
    }
  }, [currentView]);

  const navigateTo = (view: string) => {
    window.location.hash = view;
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero />
            <section className="py-6 bg-white border-y border-gray-100 overflow-hidden">
              <div className="container mx-auto px-6">
                <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6">Trusted By Global Innovators</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                  {[
                    "https://i.postimg.cc/NMxMJWtS/1.png",
                    "https://i.postimg.cc/ZqQR1ryh/2.png",
                    "https://i.postimg.cc/g2w1g8dw/3.png",
                    "https://i.postimg.cc/7brJjSdq/4.png",
                    "https://i.postimg.cc/wjyB8wDT/5.png",
                    "https://i.postimg.cc/L6yV08VF/6.png"
                  ].map((logo, index) => (
                    <img 
                      key={index} 
                      src={logo} 
                      alt={`Partner Brand ${index + 1}`} 
                      className="h-10 md:h-14 w-auto object-contain hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            </section>
            <AgencyStats />
            <About onNavigate={navigateTo} />
            <Services onServiceClick={(id) => navigateTo(id)} onNavigate={navigateTo} isSimple={true} />
            <Process />
            {/* Portfolio Section Removed */}
            <Industries onNavigate={navigateTo} />
            <Testimonials />
            <CTA />
          </>
        );
      case 'portfolio':
        return <PortfolioPage />;
      case 'industries-page':
        return <IndustryPage />;
      case 'contact':
        return <ContactPage />;
      case 'quote':
        return <QuotePage />;
      case 'faq':
        return <FaqPage />;
      case 'services':
        return <Services onServiceClick={(id) => navigateTo(id)} onNavigate={navigateTo} isSimple={false} />;
      case 'about-us':
        return <AboutUsPage />;
      case 'terms':
        return <TermsPage />;
      default:
        if (currentView.length > 0) {
          return <ServicePage serviceId={currentView} onBack={() => navigateTo('services')} />;
        }
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-yellow-400 selection:text-black relative">
      <Header onNavigate={navigateTo} activeView={currentView} />
      
      <main>
        <Suspense fallback={<PageLoader />}>
          {renderContent()}
        </Suspense>
      </main>
      
      <Footer onNavigate={navigateTo} />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
