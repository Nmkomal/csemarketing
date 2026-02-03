
import React from 'react';
import { ArrowDown, MessageCircle, Star } from 'lucide-react';
import { Button } from './Button';
import { OptimizedImage } from './OptimizedImage';

export const PortfolioPage: React.FC = () => {
  
  const portfolioSections = [
    {
      title: "Social Media Marketing",
      description: "Building brand communities through engaging content, viral reels, and consistent storytelling that resonates with your audience.",
      images: [
        { src: "https://i.postimg.cc/J47VQ8mL/Whats-App-Image-2026-01-21-at-16-30-35.jpg", caption: "Clothing Brand" },
        { src: "https://i.postimg.cc/wB8w05Jv/Whats-App-Image-2026-01-21-at-16-30-36-(1).jpg", caption: "Jewellery Brand" },
        { src: "https://i.postimg.cc/SNHdxLgM/Whats-App-Image-2026-01-21-at-16-30-36-(2).jpg", caption: "Travel Agency" },
        { src: "https://i.postimg.cc/YCcNHrS3/Whats-App-Image-2026-01-21-at-16-30-36.jpg", caption: "Interior Designer" }
      ]
    },
    {
      title: "Meta Ads Mastery",
      description: "Scaling brands with data-driven Meta advertising. We design high-converting campaigns that dominate feeds and deliver exceptional ROAS.",
      images: [], // No grid for this section, just the hero image
      heroImage: "https://i.postimg.cc/vBwqtRvK/Meta-Ads-Result.png"
    },
    {
      title: "Website Development",
      description: "We build all types of websites including Dynamic, E-commerce, and Corporate platforms. High-performance, secure, and scalable solutions tailored to your business.",
      images: [
        { src: "https://i.postimg.cc/HksrZ32f/ftfas-WDJYH.jpg", caption: "Dynamic Corporate Site" },
        { src: "https://i.postimg.cc/h414kTfJ/zxdv.png", caption: "" }
      ]
    },
    {
      title: "Google Ads & PPC",
      description: "Capture high-intent intent leads instantly. Our Google Ads strategies ensure you appear exactly when your customers are searching.",
      images: [],
      heroImage: "https://i.postimg.cc/zG80vmjf/Meta-Ads-Result-20260131-165923-0000.png"
    },
    {
      title: "Search engines optimization",
      description: "Data-driven SEO strategies to rank your brand at the top of search results and drive organic traffic.",
      images: [],
      heroImage: "https://i.postimg.cc/MGW69GmN/Meta-Ads-Result-20260131-171747-0000.png"
    }
  ];

  const handleWhatsAppRequest = () => {
    const message = "Hi, I want to explore your full portfolio and understand how your agency can help grow my business. Please share the details.";
    window.open(`https://wa.me/919711044849?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. New Premium Banner (Dark Theme) - No Animations */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-black rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden mb-20">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>
         
         <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-yellow-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Selected Works
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black mb-8 leading-[1.1] text-white max-w-6xl mx-auto tracking-tight">
              Our Work Across <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400">Digital Marketing Services</span>
            </h1>
         </div>
      </section>

      {/* 2. Service Sections - Images Lazy Loaded */}
      <div className="container mx-auto px-6 space-y-32 mb-32">
        {portfolioSections.map((section, idx) => (
          <section key={idx} className="scroll-mt-32">
             <div className="mb-16 text-center max-w-4xl mx-auto">
               <h2 className="text-3xl md:text-5xl font-heading font-black text-black mb-6">{section.title}</h2>
               <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
                 {section.description}
               </p>
             </div>
             
             {/* Grid Images (if any) */}
             {section.images.length > 0 && (
                <div className={`grid gap-4 md:gap-6 ${section.title === "Website Development" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-2 md:grid-cols-4"}`}>
                {section.images.map((img, i) => (
                    <div key={i} className="group cursor-default">
                        <div className={`relative rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 shadow-md border border-gray-100 ${section.title === "Website Development" ? "aspect-auto h-[400px]" : "aspect-[3/5]"}`}>
                        <OptimizedImage 
                            src={img.src} 
                            alt={img.caption || section.title}
                            className="w-full h-full object-cover"
                        />
                        {section.title !== "Social Media Marketing" && section.title !== "Website Development" && (
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-20"></div>
                        )}
                        </div>
                        {img.caption && (
                            <p className="mt-3 text-xs font-bold uppercase tracking-widest text-gray-400 text-center group-hover:text-black transition-colors">
                            {img.caption}
                            </p>
                        )}
                    </div>
                ))}
                </div>
             )}

             {/* Social Media Marketing Extra Showcase */}
             {section.title === "Social Media Marketing" && (
                <div className="mt-12 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white p-2 relative">
                    <OptimizedImage 
                        src="https://i.postimg.cc/Tw3gnCDc/hhjkgvhvhgcvgh.png" 
                        alt="Social Media Marketing Portfolio Showcase" 
                        className="w-full h-auto rounded-[2rem]" 
                    />
                </div>
             )}

             {/* Hero Image (Meta Ads, Google Ads, SEO) */}
             {/* @ts-ignore */}
             {section.heroImage && (
                <div className="mt-8 rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] border-4 border-white bg-gray-50 p-2 md:p-4 relative">
                    <OptimizedImage 
                        // @ts-ignore
                        src={section.heroImage} 
                        alt={section.title} 
                        className="w-full h-auto rounded-[2rem] object-cover" 
                    />
                </div>
             )}
          </section>
        ))}
      </div>

      {/* 4. WhatsApp CTA Section */}
      <section className="container mx-auto px-6 pb-24 text-center">
        <div className="max-w-4xl mx-auto py-20 px-6 md:px-12 bg-black rounded-[3rem] md:rounded-[60px] text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <ArrowDown className="w-8 h-8 text-yellow-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Need more details?</h2>
            <p className="text-base md:text-xl text-gray-400 mb-10 font-medium max-w-xl mx-auto">
                Connect with us on WhatsApp to discuss your business goals and see our comprehensive industry portfolio.
            </p>
            <Button 
                variant="primary" 
                size="lg" 
                className="px-10 py-4 rounded-2xl w-full md:w-auto font-bold text-lg flex items-center justify-center mx-auto hover:!bg-white hover:!text-black transition-colors"
                onClick={handleWhatsAppRequest}
            >
               <MessageCircle className="w-5 h-5 mr-3" /> View Our Full Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
