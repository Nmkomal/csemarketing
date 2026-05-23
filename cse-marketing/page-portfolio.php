
<?php 
/* Template Name: Portfolio Template */
get_header(); 
?>

<div class="bg-white min-h-screen w-full overflow-x-hidden">
      
      <!-- 1. New Premium Banner (Dark Theme) - Completely Static -->
      <section class="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-black rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden mb-16">
         <!-- Solid Background - No Blobs/Gradients -->
         
         <div class="container mx-auto px-6 relative z-10 text-center">
            <div class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-yellow-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <i data-lucide="star" class="w-4 h-4 mr-2 fill-current"></i>
              Selected Works
            </div>
            
            <h1 class="text-4xl sm:text-5xl md:text-7xl font-heading font-black mb-8 leading-[1.1] text-white max-w-6xl mx-auto tracking-tight">
              Our Work Across <br/>
              <span class="text-yellow-400">Digital Marketing Services</span>
            </h1>
         </div>
      </section>

      <!-- 2. Service Sections - Compacted -->
      <div class="container mx-auto px-6 space-y-20 mb-20 max-w-6xl">
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
                ],
                'bottomImage' => "https://i.postimg.cc/wxyYr6MY/hhjkgvhvhgcvgh.png"
            ],
            [
                'title' => "Meta Ads",
                'desc' => "Scaling brands with data-driven Meta advertising. We design high-converting campaigns that dominate feeds and deliver exceptional ROAS.",
                'images' => [],
                'heroImage' => "https://i.postimg.cc/Z5gMpNPn/Meta-Ads-Result.png",
                'subImage' => "https://i.postimg.cc/6pYKkGpf/Screenshot-2026-02-04-144208-(1).png"
            ],
            [
                'title' => "Website Development",
                'desc' => "We build all types of websites including Dynamic, E-commerce, and Corporate platforms. High-performance, secure, and scalable solutions tailored to your business.",
                'images' => [
                    ['src' => "https://i.postimg.cc/hv7cnn0h/ftfas-WDJYH.jpg", 'caption' => "Dynamic Corporate Site"],
                    ['src' => "https://i.postimg.cc/1ztzdLbN/zxdv.png", 'caption' => ""] 
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
             <div class="mb-10 text-center max-w-3xl mx-auto">
               <h2 class="text-3xl md:text-4xl font-heading font-black text-black mb-4"><?php echo $section['title']; ?></h2>
               <p class="text-base md:text-lg text-gray-500 font-medium leading-relaxed">
                 <?php echo $section['desc']; ?>
               </p>
             </div>
             
             <!-- Grid Images -->
             <?php if(!empty($section['images'])): ?>
             <div class="grid gap-4 md:gap-6 <?php echo ($section['title'] === 'Website Development') ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2 md:grid-cols-4'; ?>">
               <?php foreach($section['images'] as $img): ?>
                 <div class="group cursor-default">
                    <div class="relative rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 shadow-md border border-gray-100 <?php echo ($section['title'] === 'Website Development') ? 'aspect-auto h-[300px]' : 'aspect-[3/4]'; ?>">
                      <img 
                        src="<?php echo $img['src']; ?>" 
                        alt="<?php echo $img['caption']; ?>"
                        loading="lazy"
                        decoding="async"
                        class="w-full h-full <?php echo ($section['title'] === 'Website Development') ? 'object-contain bg-white' : 'object-cover'; ?> <?php echo ($section['title'] === 'Social Media Marketing') ? 'object-[50%_8%]' : 'object-center'; ?>"
                      />
                      <?php if($section['title'] !== "Social Media Marketing" && $section['title'] !== "Website Development"): ?>
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent"></div>
                      <?php endif; ?>
                    </div>
                    <?php if(!empty($img['caption'])): ?>
                    <p class="mt-3 text-xs font-bold uppercase tracking-widest text-gray-400 text-center group-hover:text-black">
                      <?php echo $img['caption']; ?>
                    </p>
                    <?php endif; ?>
                 </div>
               <?php endforeach; ?>
             </div>
             <?php endif; ?>

             <!-- Social Media Marketing Extra Showcase -->
             <?php if($section['title'] === "Social Media Marketing"): ?>
                <!-- Row 1 -->
                <div class="mt-8 grid md:grid-cols-2 gap-6">
                    <div class="w-full rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-white p-2">
                        <img 
                            src="https://i.postimg.cc/sfLC4R0Z/imgi-129-4259e7241303371-6953f68c1ba5d.jpg" 
                            alt="Social Media Marketing Portfolio Showcase 1" 
                            loading="lazy"
                            decoding="async"
                            class="w-full h-auto rounded-[1.5rem]" 
                        />
                    </div>
                    <div class="w-full rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-white p-2">
                        <img 
                            src="https://i.postimg.cc/vHp1jkD3/imgi-131-5fef15241303371-6953f68c12a0a.jpg" 
                            alt="Social Media Marketing Portfolio Showcase 2" 
                            loading="lazy"
                            decoding="async"
                            class="w-full h-auto rounded-[1.5rem]" 
                        />
                    </div>
                </div>
                <!-- Row 2 (New) -->
                <div class="mt-6 grid md:grid-cols-2 gap-6">
                    <div class="w-full rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-white p-2">
                        <img 
                            src="https://i.postimg.cc/jdZWq28C/imgi-121-12e487241303371-6953f68c0fbb2.jpg" 
                            alt="Social Media Marketing Portfolio Showcase 3" 
                            loading="lazy"
                            decoding="async"
                            class="w-full h-auto rounded-[1.5rem]" 
                        />
                    </div>
                    <div class="w-full rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-white p-2">
                        <img 
                            src="https://i.postimg.cc/D0f2RdKn/imgi-117-5be6c5241303371-6953f68c09c18.jpg" 
                            alt="Social Media Marketing Portfolio Showcase 4" 
                            loading="lazy"
                            decoding="async"
                            class="w-full h-auto rounded-[1.5rem]" 
                        />
                    </div>
                </div>
             <?php endif; ?>

             <!-- Bottom Image -->
             <?php if(isset($section['bottomImage'])): ?>
                <div class="mt-8 flex justify-center">
                    <div class="w-full max-w-3xl rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-white p-2">
                        <img 
                            src="<?php echo $section['bottomImage']; ?>" 
                            alt="<?php echo $section['title']; ?>" 
                            loading="lazy"
                            decoding="async"
                            class="w-full h-auto rounded-[1.5rem]" 
                        />
                    </div>
                </div>
             <?php endif; ?>

             <!-- Meta Ads, Google Ads & SEO Hero Image - Resized -->
             <?php if(isset($section['heroImage'])): ?>
                <div class="mt-6 flex justify-center">
                    <div class="w-full max-w-3xl rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-white p-2">
                        <img 
                            src="<?php echo $section['heroImage']; ?>" 
                            alt="<?php echo $section['title']; ?>" 
                            loading="lazy"
                            decoding="async"
                            class="w-full h-auto rounded-[1.5rem] object-cover" 
                        />
                    </div>
                </div>
             <?php endif; ?>

             <!-- Sub Image - Resized -->
             <?php if(isset($section['subImage'])): ?>
                <div class="mt-8 flex justify-center">
                    <div class="w-full max-w-3xl rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-white p-2">
                        <img 
                            src="<?php echo $section['subImage']; ?>" 
                            alt="Additional Results" 
                            loading="lazy"
                            class="w-full h-auto rounded-[1.5rem]" 
                        />
                    </div>
                </div>
             <?php endif; ?>
          </section>
        <?php endforeach; ?>
      </div>

      <!-- 4. WhatsApp CTA Section - Compacted -->
      <section class="container mx-auto px-6 pb-20 text-center">
        <div class="max-w-4xl mx-auto py-12 px-6 md:px-10 bg-black rounded-[2.5rem] md:rounded-[40px] text-white relative overflow-hidden shadow-2xl">
          <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div class="relative z-10">
            <div class="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <i data-lucide="arrow-down" class="w-6 h-6 text-yellow-400 animate-bounce"></i>
            </div>
            <h2 class="text-2xl md:text-3xl font-black mb-4">Need more details?</h2>
            <p class="text-sm md:text-lg text-gray-400 mb-8 font-medium max-w-lg mx-auto">
                Connect with us on WhatsApp to discuss your business goals and see our comprehensive industry portfolio.
            </p>
            <?php 
                $wa_message = "Hi, I want to explore your full portfolio and understand how your agency can help grow my business. Please share the details.";
                $wa_link = "https://wa.me/919711044849?text=" . urlencode($wa_message);
            ?>
            <a href="<?php echo $wa_link; ?>" target="_blank" class="inline-flex items-center justify-center px-8 py-3 rounded-xl w-full md:w-auto font-bold text-base bg-yellow-400 text-black hover:bg-white hover:text-black transition-colors border-2 border-transparent hover:border-black">
               <i data-lucide="message-circle" class="w-4 h-4 mr-2"></i> View Our Full Portfolio
            </a>
          </div>
        </div>
      </section>
</div>

<?php get_footer(); ?>
