
import React, { useState, useEffect, Suspense, lazy } from 'react';
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

// Lazy Load Pages to reduce initial bundle size
// We use a helper promise to handle named exports with React.lazy
const ServicePage = lazy(() => import('./components/ServicePage').then(module => ({ default: module.ServicePage })));
const PortfolioPage = lazy(() => import('./components/PortfolioPage').then(module => ({ default: module.PortfolioPage })));
const IndustryPage = lazy(() => import('./components/IndustryPage').then(module => ({ default: module.IndustryPage })));
const ContactPage = lazy(() => import('./components/ContactPage').then(module => ({ default: module.ContactPage })));
const QuotePage = lazy(() => import('./components/QuotePage').then(module => ({ default: module.QuotePage })));
const FaqPage = lazy(() => import('./components/FaqPage').then(module => ({ default: module.FaqPage })));
const AboutUsPage = lazy(() => import('./components/AboutUsPage').then(module => ({ default: module.AboutUsPage })));

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
      const validPages = ['portfolio', 'industries-page', 'contact', 'quote', 'faq', 'services', 'about-us'];
      
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
            <section className="py-10 bg-white border-y border-gray-100 overflow-hidden">
              <div className="container mx-auto px-6">
                <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-8">Trusted By Global Innovators</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                  {['TECHNO', 'GrowthX', 'Aura', 'PRISM.', 'MODERN', 'ELITE'].map((brand) => (
                    <span key={brand} className="text-xl font-black tracking-tighter hover:text-black transition-colors cursor-default">
                      {brand}
                    </span>
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
