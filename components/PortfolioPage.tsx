
import React from 'react';
import { ArrowDown, MessageCircle, Star } from 'lucide-react';
import { Button } from './Button';

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
      ],
      bottomImage: "https://i.postimg.cc/wxyYr6MY/hhjkgvhvhgcvgh.png"
    },
    {
      title: "Meta Ads",
      description: "Scaling brands with data-driven Meta advertising. We design high-converting campaigns that dominate feeds and deliver exceptional ROAS.",
      images: [], // No grid for this section, just the hero image
      heroImage: "https://i.postimg.cc/Z5gMpNPn/Meta-Ads-Result.png",
      subImage: "https://i.postimg.cc/6pYKkGpf/Screenshot-2026-02-04-144208-(1).png"
    },
    {
      title: "Website Development",
      description: "We build all types of websites including Dynamic, E-commerce, and Corporate platforms. High-performance, secure, and scalable solutions tailored to your business.",
      images: [
        { src: "https://i.postimg.cc/hv7cnn0h/ftfas-WDJYH.jpg", caption: "Dynamic Corporate Site" },
        { src: "https://i.postimg.cc/1ztzdLbN/zxdv.png", caption: "" }
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
      
      {/* 1. New Premium Banner (Dark Theme) - Completely Static */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-black rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden mb-12">
         {/* Solid Background */}
         
         <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-yellow-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Selected Works
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black mb-6 leading-[1.1] text-white max-w-6xl mx-auto tracking-tight">
              Our Work Across <br/>
              <span className="text-yellow-400">Digital Marketing Services</span>
            </h1>
         </div>
      </section>

      {/* 2. Service Sections - Compacted */}
      <div className="container mx-auto px-6 space-y-16 mb-16 max-w-6xl">
        {portfolioSections.map((section, idx) => (
          <section key={idx} className="scroll-mt-32">
             <div className="mb-8 text-center max-w-3xl mx-auto">
               <h2 className="text-3xl md:text-4xl font-heading font-black text-black mb-3">{section.title}</h2>
               <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed">
                 {section.description}
               </p>
             </div>
             
             {/* Grid Images (if any) */}
             {section.images.length > 0 && (
                <div className={`grid gap-4 md:gap-6 ${section.title === "Website Development" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-2 md:grid-cols-4"}`}>
                {section.images.map((img, i) => (
                    <div key={i} className="group cursor-default">
                        <div className={`relative rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 shadow-md border border-gray-100 ${section.title === "Website Development" ? "aspect-auto h-[300px]" : "aspect-[3/4]"}`}>
                        <img 
                            src={img.src} 
                            alt={img.caption || section.title}
                            loading="lazy"
                            className={`w-full h-full ${section.title === "Website Development" ? "object-contain bg-white" : "object-cover"} ${section.title === "Social Media Marketing" ? "object-[50%_8%]" : "object-center"}`}
                        />
                        {section.title !== "Social Media Marketing" && section.title !== "Website Development" && (
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent z-20"></div>
                        )}
                        </div>
                        {img.caption && (
                            <p className="mt-3 text-xs font-bold uppercase tracking-widest text-gray-400 text-center group-hover:text-black">
                            {img.caption}
                            </p>
                        )}
                    </div>
                ))}
                </div>
             )}

             {/* Social Media Marketing Extra Showcase - Two Images Side by Side */}
             {section.title === "Social Media Marketing" && (
                <>
                    {/* Row 1 */}
                    <div className="mt-8 grid md:grid-cols-2 gap-6">
                        <div className="w-full rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-white p-2 relative">
                            <img 
                                src="https://i.postimg.cc/sfLC4R0Z/imgi-129-4259e7241303371-6953f68c1ba5d.jpg" 
                                alt="Social Media Marketing Portfolio Showcase 1" 
                                loading="lazy"
                                className="w-full h-auto rounded-[1.5rem]" 
                            />
                        </div>
                        <div className="w-full rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-white p-2 relative">
                            <img 
                                src="https://i.postimg.cc/vHp1jkD3/imgi-131-5fef15241303371-6953f68c12a0a.jpg" 
                                alt="Social Media Marketing Portfolio Showcase 2" 
                                loading="lazy"
                                className="w-full h-auto rounded-[1.5rem]" 
                            />
                        </div>
                    </div>
                    {/* Row 2 - Added New Images */}
                    <div className="mt-6 grid md:grid-cols-2 gap-6">
                        <div className="w-full rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-white p-2 relative">
                            <img 
                                src="https://i.postimg.cc/jdZWq28C/imgi-121-12e487241303371-6953f68c0fbb2.jpg" 
                                alt="Social Media Marketing Portfolio Showcase 3" 
                                loading="lazy"
                                className="w-full h-auto rounded-[1.5rem]" 
                            />
                        </div>
                        <div className="w-full rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-white p-2 relative">
                            <img 
                                src="https://i.postimg.cc/D0f2RdKn/imgi-117-5be6c5241303371-6953f68c09c18.jpg" 
                                alt="Social Media Marketing Portfolio Showcase 4" 
                                loading="lazy"
                                className="w-full h-auto rounded-[1.5rem]" 
                            />
                        </div>
                    </div>
                </>
             )}

             {/* Bottom Image (For SMM or others) */}
             {/* @ts-ignore */}
             {section.bottomImage && (
                <div className="mt-8 flex justify-center">
                    <div className="w-full max-w-3xl rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-white p-2 relative">
                        <img 
                            // @ts-ignore
                            src={section.bottomImage} 
                            alt={section.title} 
                            loading="lazy"
                            className="w-full h-auto rounded-[1.5rem]" 
                        />
                    </div>
                </div>
             )}

             {/* Hero Image (Meta Ads, Google Ads, SEO) - Resized */}
             {/* @ts-ignore */}
             {section.heroImage && (
                <div className="mt-6 flex justify-center">
                    <div className="w-full max-w-3xl rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-white p-2 relative">
                        <img 
                            // @ts-ignore
                            src={section.heroImage} 
                            alt={section.title} 
                            loading="lazy"
                            className="w-full h-auto rounded-[1.5rem] object-cover" 
                        />
                    </div>
                </div>
             )}

             {/* Sub Image (Meta Ads Extra) */}
             {/* @ts-ignore */}
             {section.subImage && (
                <div className="mt-6 flex justify-center">
                    <div className="w-full max-w-3xl rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-white p-2">
                        <img 
                            // @ts-ignore
                            src={section.subImage} 
                            alt="Additional Results" 
                            loading="lazy"
                            className="w-full h-auto rounded-[1.5rem]" 
                        />
                    </div>
                </div>
             )}
          </section>
        ))}
      </div>

      {/* 4. WhatsApp CTA Section - Compacted */}
      <section className="container mx-auto px-6 pb-16 text-center">
        <div className="max-w-4xl mx-auto py-10 px-6 md:px-10 bg-black rounded-[2.5rem] md:rounded-[40px] text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <ArrowDown className="w-5 h-5 text-yellow-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black mb-3">Need more details?</h2>
            <p className="text-sm md:text-base text-gray-400 mb-6 font-medium max-w-lg mx-auto">
                Connect with us on WhatsApp to discuss your business goals and see our comprehensive industry portfolio.
            </p>
            <Button 
                variant="primary" 
                size="md" 
                className="px-8 py-3 rounded-xl w-full md:w-auto font-bold text-base flex items-center justify-center mx-auto hover:!bg-white hover:!text-black transition-colors"
                onClick={handleWhatsAppRequest}
            >
               <MessageCircle className="w-4 h-4 mr-2" /> View Our Full Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
