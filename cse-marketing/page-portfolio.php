
<?php 
/* Template Name: Portfolio Template */
get_header(); 
?>

<div class="bg-white min-h-screen w-full overflow-x-hidden">
      
      <!-- 1. New Premium Banner (Dark Theme) -->
      <section class="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-black rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden mb-20">
         <!-- Background Elements -->
         <div class="absolute top-0 left-0 w-full h-full opacity-20 mix-blend-overlay pointer-events-none" style="background-image: url('https://grainy-gradients.vercel.app/noise.svg');"></div>
         <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
         <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>
         
         <div class="container mx-auto px-6 relative z-10 text-center">
            <div class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-yellow-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md">
              <i data-lucide="star" class="w-4 h-4 mr-2 fill-current"></i>
              Selected Works
            </div>
            
            <h1 class="text-4xl sm:text-5xl md:text-7xl font-heading font-black mb-8 leading-[1.1] text-white max-w-6xl mx-auto tracking-tight">
              Our Work Across <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400">Digital Marketing Services</span>
            </h1>
         </div>
      </section>

      <!-- 2. Service Sections -->
      <div class="container mx-auto px-6 space-y-32 mb-32">
        <?php 
        $sections = [
            [
                'title' => "Social Media Marketing",
                'desc' => "Building brand communities through engaging content, viral reels, and consistent storytelling that resonates with your audience.",
                'images' => [
                    ['src' => "https://i.postimg.cc/J47VQ8mL/Whats-App-Image-2026-01-21-at-16-30-35.jpg", 'caption' => "Clothing Brand"],
                    ['src' => "https://i.postimg.cc/wB8w05Jv/Whats-App-Image-2026-01-21-at-16-30-36-(1).jpg", 'caption' => "Jewellery Brand"],
                    ['src' => "https://i.postimg.cc/SNHdxLgM/Whats-App-Image-2026-01-21-at-16-30-36-(2).jpg", 'caption' => "Travel Agency"],
                    ['src' => "https://i.postimg.cc/YCcNHrS3/Whats-App-Image-2026-01-21-at-16-30-36.jpg", 'caption' => "Interior Designer"]
                ]
            ],
            [
                'title' => "Meta Ads Mastery",
                'desc' => "Scaling brands with data-driven Meta advertising. We design high-converting campaigns that dominate feeds and deliver exceptional ROAS.",
                'images' => [],
                'heroImage' => "https://i.postimg.cc/vBwqtRvK/Meta-Ads-Result.png"
            ],
            [
                'title' => "Website Development",
                'desc' => "We build all types of websites including Dynamic, E-commerce, and Corporate platforms. High-performance, secure, and scalable solutions tailored to your business.",
                'images' => [
                    ['src' => "https://i.postimg.cc/HksrZ32f/ftfas-WDJYH.jpg", 'caption' => "Dynamic Corporate Site"],
                    ['src' => "https://i.postimg.cc/h414kTfJ/zxdv.png", 'caption' => ""] // Removed caption
                ]
            ],
            [
                'title' => "Google Ads & PPC",
                'desc' => "Capture high-intent intent leads instantly. Our Google Ads strategies ensure you appear exactly when your customers are searching.",
                'images' => [],
                'heroImage' => "https://i.postimg.cc/zG80vmjf/Meta-Ads-Result-20260131-165923-0000.png"
            ],
            [
                'title' => "Search engines optimization",
                'desc' => "Data-driven SEO strategies to rank your brand at the top of search results and drive organic traffic.",
                'images' => [],
                'heroImage' => "https://i.postimg.cc/MGW69GmN/Meta-Ads-Result-20260131-171747-0000.png"
            ]
        ];
        
        foreach($sections as $section): ?>
          <section class="scroll-mt-32">
             <div class="mb-16 text-center max-w-4xl mx-auto">
               <h2 class="text-3xl md:text-5xl font-heading font-black text-black mb-6"><?php echo $section['title']; ?></h2>
               <p class="text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
                 <?php echo $section['desc']; ?>
               </p>
             </div>
             
             <!-- Grid Images -->
             <?php if(!empty($section['images'])): ?>
             <div class="grid gap-4 md:gap-6 <?php echo ($section['title'] === 'Website Development') ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2 md:grid-cols-4'; ?>">
               <?php foreach($section['images'] as $img): ?>
                 <div class="group cursor-default">
                    <div class="relative rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 shadow-md border border-gray-100 <?php echo ($section['title'] === 'Website Development') ? 'aspect-auto' : 'aspect-[3/5]'; ?>">
                      <img 
                        src="<?php echo $img['src']; ?>" 
                        alt="<?php echo $img['caption']; ?>"
                        loading="lazy"
                        decoding="async"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <?php if($section['title'] !== "Social Media Marketing" && $section['title'] !== "Website Development"): ?>
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                      <?php endif; ?>
                    </div>
                    <?php if(!empty($img['caption'])): ?>
                    <p class="mt-3 text-xs font-bold uppercase tracking-widest text-gray-400 text-center group-hover:text-black transition-colors">
                      <?php echo $img['caption']; ?>
                    </p>
                    <?php endif; ?>
                 </div>
               <?php endforeach; ?>
             </div>
             <?php endif; ?>

             <!-- Social Media Marketing Extra Showcase -->
             <?php if($section['title'] === "Social Media Marketing"): ?>
                <div class="mt-12 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
                    <img 
                        src="https://i.postimg.cc/Tw3gnCDc/hhjkgvhvhgcvgh.png" 
                        alt="Social Media Marketing Portfolio Showcase" 
                        loading="lazy"
                        decoding="async"
                        class="w-full h-auto rounded-[2rem]" 
                    />
                </div>
             <?php endif; ?>

             <!-- Meta Ads, Google Ads & SEO Hero Image -->
             <?php if(isset($section['heroImage'])): ?>
                <div class="mt-8 rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] border-4 border-white bg-gray-50 p-2 md:p-4">
                    <img 
                        src="<?php echo $section['heroImage']; ?>" 
                        alt="<?php echo $section['title']; ?>" 
                        loading="lazy"
                        decoding="async"
                        class="w-full h-auto rounded-[2rem] object-cover" 
                    />
                </div>
             <?php endif; ?>
          </section>
        <?php endforeach; ?>
      </div>

      <!-- 4. WhatsApp CTA Section -->
      <section class="container mx-auto px-6 pb-24 text-center">
        <div class="max-w-4xl mx-auto py-20 px-6 md:px-12 bg-black rounded-[3rem] md:rounded-[60px] text-white relative overflow-hidden shadow-2xl">
          <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div class="relative z-10">
            <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <i data-lucide="arrow-down" class="w-8 h-8 text-yellow-400 animate-bounce"></i>
            </div>
            <h2 class="text-3xl md:text-4xl font-black mb-6">Need more details?</h2>
            <p class="text-base md:text-xl text-gray-400 mb-10 font-medium max-w-xl mx-auto">
                Connect with us on WhatsApp to discuss your business goals and see our comprehensive industry portfolio.
            </p>
            <?php 
                $wa_message = "Hi, I want to explore your full portfolio and understand how your agency can help grow my business. Please share the details.";
                $wa_link = "https://wa.me/919711044849?text=" . urlencode($wa_message);
            ?>
            <a href="<?php echo $wa_link; ?>" target="_blank" class="inline-flex items-center justify-center px-10 py-4 rounded-2xl w-full md:w-auto font-bold text-lg bg-yellow-400 text-black hover:bg-white hover:text-black transition-colors border-2 border-transparent hover:border-black">
               <i data-lucide="message-circle" class="w-5 h-5 mr-3"></i> View Our Full Portfolio
            </a>
          </div>
        </div>
      </section>
</div>

<?php get_footer(); ?>
