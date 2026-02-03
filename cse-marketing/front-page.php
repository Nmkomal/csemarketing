
<?php 
/* Template Name: Home Template */
get_header(); 
?>

<main>
    <!-- HERO SECTION -->
    <section class="relative pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden bg-white">
        <!-- Backgrounds -->
        <div class="absolute inset-0 bg-grid-pattern opacity-[0.4] pointer-events-none"></div>
        <div class="absolute top-0 right-0 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-gradient-to-b from-yellow-100/50 to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>

        <div class="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <!-- Text Content -->
                <div class="text-center lg:text-left animate-fade-up">
                    <div class="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-black/5 border border-black/10 text-black text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
                        <span class="w-2 h-2 rounded-full bg-yellow-400 mr-2 animate-pulse"></span>
                        Accelerating Business Growth
                    </div>
                    
                    <h1 class="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] lg:leading-[0.95] mb-6 text-black tracking-tight">
                        Scale Your <br />
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 relative">
                            Digital Impact
                            <svg class="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-yellow-300 opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h1>
                    
                    <p class="text-base md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium animate-fade-up-delay-1 px-2 lg:px-0">
                        We create data-driven digital marketing strategies for ambitious brands that want sustainable growth, complete visibility, and full control over their marketing performance.
                    </p>
                    
                    <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-up-delay-2">
                        <a href="<?php echo home_url('/contact'); ?>" class="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-full bg-yellow-400 text-black hover:bg-black hover:text-yellow-400 shadow-xl shadow-yellow-400/20 hover:scale-105 transform transition-transform">
                            Book Consultation <i data-lucide="arrow-right" class="ml-2 w-4 h-4"></i>
                        </a>
                        <div class="flex -space-x-4">
                            <?php for($i=1; $i<=3; $i++): ?>
                            <div class="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold overflow-hidden">
                                <img src="https://i.pravatar.cc/100?img=<?php echo 10+$i; ?>" alt="Client" />
                            </div>
                            <?php endfor; ?>
                            <div class="w-10 h-10 rounded-full border-2 border-white bg-black text-white flex items-center justify-center text-[10px] font-bold pl-1">
                                1k+
                            </div>
                        </div>
                    </div>

                    <!-- Tech Stack Icons -->
                    <div class="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 animate-fade-up-delay-2">
                         <div class="hidden md:flex items-center group cursor-default" title="Meta">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png" alt="Meta" class="h-8 md:h-12 w-auto object-contain" />
                        </div>
                        <div class="h-8 flex items-center group cursor-default" title="Instagram">
                             <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" class="h-5 md:h-6 w-auto" alt="Instagram">
                             <span class="ml-2 font-heading font-bold text-lg hidden sm:block">Instagram</span>
                        </div>
                         <div class="h-8 flex items-center group cursor-default" title="Google">
                             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" class="h-5 md:h-6 w-auto" alt="Google">
                        </div>
                    </div>
                </div>

                <!-- Right Form -->
                <div class="relative animate-fade-up-delay-1 mt-10 lg:mt-0 px-2 sm:px-0">
                    <div class="relative z-10 bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 max-w-md mx-auto transform hover:-translate-y-1 transition-transform duration-500">
                        <div class="text-center mb-4">
                            <div class="inline-flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-full mb-2 text-yellow-600">
                                <i data-lucide="message-square" class="w-4 h-4"></i>
                            </div>
                            <h3 class="text-lg font-heading font-black text-black mb-1">Get Free Consultation</h3>
                            <p class="text-gray-500 text-[10px] font-medium">Fill the form to connect on WhatsApp instantly.</p>
                        </div>

                        <form class="whatsapp-form space-y-3">
                            <div class="relative group">
                                <i data-lucide="user" class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-yellow-500 transition-colors"></i>
                                <input name="name" required type="text" placeholder="Your Name *" class="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-100 transition-all text-sm font-bold placeholder:text-gray-400" />
                            </div>
                            <div class="relative group">
                                <i data-lucide="phone" class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-yellow-500 transition-colors"></i>
                                <input name="phone" required type="tel" placeholder="Phone Number *" class="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-100 transition-all text-sm font-bold placeholder:text-gray-400" />
                            </div>
                            <div class="relative group">
                                <i data-lucide="mail" class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-yellow-500 transition-colors"></i>
                                <input name="email" type="email" placeholder="Your Email" class="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-100 transition-all text-sm font-bold placeholder:text-gray-400" />
                            </div>
                            <div class="relative group">
                                <textarea name="message" placeholder="Your Message (Optional)" rows="2" class="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-100 transition-all text-sm font-bold placeholder:text-gray-400 resize-none"></textarea>
                            </div>
                            <button type="submit" class="w-full h-12 rounded-xl text-sm shadow-xl shadow-yellow-400/20 mt-1 hover:shadow-yellow-400/30 bg-yellow-400 text-black font-semibold flex items-center justify-center hover:bg-black hover:text-yellow-400 transition-all duration-300">
                                Contact Now <i data-lucide="send" class="ml-2 w-4 h-4"></i>
                            </button>
                            <p class="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest mt-2 flex items-center justify-center">
                                <i data-lucide="check-circle-2" class="w-3 h-3 text-green-500 mr-1.5"></i> 100% Confidential
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- BRANDS TICKER -->
    <section class="py-10 bg-white border-y border-gray-100 overflow-hidden">
        <div class="container mx-auto px-6">
            <p class="text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-8">Trusted By Global Innovators</p>
            <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                <span class="text-xl font-black tracking-tighter hover:text-black transition-colors cursor-default">TECHNO</span>
                <span class="text-xl font-black tracking-tighter hover:text-black transition-colors cursor-default">GrowthX</span>
                <span class="text-xl font-black tracking-tighter hover:text-black transition-colors cursor-default">Aura</span>
                <span class="text-xl font-black tracking-tighter hover:text-black transition-colors cursor-default">PRISM.</span>
                <span class="text-xl font-black tracking-tighter hover:text-black transition-colors cursor-default">MODERN</span>
                <span class="text-xl font-black tracking-tighter hover:text-black transition-colors cursor-default">ELITE</span>
            </div>
        </div>
    </section>

    <!-- AGENCY STATS -->
    <section class="py-16 bg-white text-black relative overflow-hidden border-t border-gray-100">
        <div class="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-gray-100 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2"></div>
        <div class="container mx-auto px-6 relative z-10">
            <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div class="order-1 lg:order-1">
                    <h2 class="text-3xl md:text-4xl font-heading font-black mb-6 leading-tight text-black">
                        About Classify Skill <span class="text-yellow-600">Education</span>
                    </h2>
                    <div class="w-20 h-1.5 bg-yellow-400 rounded-full mb-6"></div>
                    <p class="text-lg text-gray-700 mb-6 leading-relaxed font-light">
                        We are a forward-thinking digital marketing agency dedicated to helping businesses grow through innovative marketing strategies and cutting-edge technology.
                    </p>
                </div>
                <div class="order-2 lg:order-2 grid grid-cols-2 gap-4">
                    <?php 
                    $stats = [
                        ['label' => 'Projects Completed', 'value' => '170+', 'icon' => 'briefcase'],
                        ['label' => 'Client Satisfaction', 'value' => '98%', 'icon' => 'users'],
                        ['label' => 'Years Experience', 'value' => '5+', 'icon' => 'clock'],
                        ['label' => 'Support Available', 'value' => '24/7', 'icon' => 'headphones'],
                    ];
                    foreach($stats as $stat): ?>
                    <div class="bg-gray-50 border border-gray-100 p-6 rounded-[1.5rem] hover:bg-white hover:shadow-xl hover:border-yellow-200 transition-all duration-300 group shadow-sm">
                        <div class="w-10 h-10 bg-black rounded-xl flex items-center justify-center mb-4 text-yellow-400 shadow-md group-hover:scale-110 transition-transform group-hover:bg-yellow-400 group-hover:text-black">
                            <i data-lucide="<?php echo $stat['icon']; ?>" class="w-5 h-5"></i>
                        </div>
                        <h3 class="text-3xl font-heading font-black text-black mb-1"><?php echo $stat['value']; ?></h3>
                        <p class="text-xs font-bold text-gray-500 uppercase tracking-wider group-hover:text-black transition-colors"><?php echo $stat['label']; ?></p>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- SIMPLE SERVICES (Home Version) -->
    <section class="py-24 bg-white">
        <div class="container mx-auto px-6 max-w-7xl">
            <div class="text-center mb-16">
                <span class="text-yellow-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Our Expertise</span>
                <h2 class="text-4xl md:text-5xl font-heading font-black mb-6 text-black">
                  Digital <span class="text-yellow-500">Services.</span>
                </h2>
                <p class="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                  High-performance solutions tailored to your business goals.
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
                <?php
                // Use simplified data for home or full data
                $services = cse_get_service_data();
                
                foreach ($services as $id => $s): ?>
                <a href="<?php echo home_url('/' . $id); ?>" class="group relative bg-gray-50 border border-gray-100 rounded-3xl p-6 md:p-10 flex flex-col items-center text-center hover:bg-white hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-2xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-all duration-300 shrink-0 relative z-10 shadow-sm">
                        <i data-lucide="<?php echo $s['icon']; ?>" class="w-8 h-8 text-black"></i>
                    </div>
                    <h3 class="text-lg md:text-xl font-black text-black group-hover:text-yellow-600 transition-colors relative z-10 leading-tight">
                        <?php echo $s['title']; ?>
                    </h3>
                </a>
                <?php endforeach; ?>
            </div>
            <div class="flex justify-center">
                 <a href="<?php echo home_url('/services'); ?>" class="inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full bg-yellow-400 text-black hover:bg-black hover:text-yellow-400 px-10 h-16 text-lg shadow-xl shadow-yellow-400/20 group">
                    View All Services <i data-lucide="arrow-right" class="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
                 </a>
            </div>
        </div>
    </section>

    <!-- PROCESS SECTION -->
    <section class="py-16 bg-black text-white overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-heading font-bold mb-4">
            Our <span class="text-yellow-400">Classified</span> Process
          </h2>
          <p class="text-gray-400 max-w-xl mx-auto text-base">
            Success isn't accidental. It's the result of a rigorous, repeatable methodology refined over hundreds of campaigns.
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          <div class="hidden lg:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent -z-0"></div>
          <?php 
          $steps = [
              ['num' => '01', 'title' => 'We Plan', 'desc' => 'We study your business and plan the best strategy.'],
              ['num' => '02', 'title' => 'We Create', 'desc' => 'We design the ads, posts, or website for you.'],
              ['num' => '03', 'title' => 'We Launch', 'desc' => 'We put everything live to reach your customers.'],
              ['num' => '04', 'title' => 'You Grow', 'desc' => 'You get more leads, sales, and popularity.'],
          ];
          foreach($steps as $st): ?>
          <div class="relative z-10 flex flex-col items-center text-center">
              <div class="w-16 h-16 rounded-full bg-gray-900 border-2 border-yellow-400 flex items-center justify-center text-2xl font-bold text-yellow-400 mb-6 shadow-[0_0_20px_rgba(250,204,21,0.2)]">
                <?php echo $st['num']; ?>
              </div>
              <h3 class="text-xl font-bold mb-3"><?php echo $st['title']; ?></h3>
              <p class="text-sm text-gray-400 leading-relaxed"><?php echo $st['desc']; ?></p>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS SECTION -->
    <section class="py-20 bg-white relative overflow-hidden border-t border-gray-100">
        <div class="container mx-auto px-6 max-w-7xl">
            <div class="text-center mb-16">
              <h2 class="text-4xl font-heading font-black mb-4 text-black">
                Client <span class="text-yellow-500">Success Stories</span>
              </h2>
              <p class="text-gray-500 text-base max-w-2xl mx-auto">
                 See what our partners have to say about our results-driven approach.
              </p>
            </div>
            <!-- Simple Horizontal Scroll for Testimonials (simulating marquee) -->
            <div class="relative w-full overflow-x-auto pb-8 hide-scrollbar">
              <div class="flex space-x-8 min-w-max px-4">
                <?php 
                $testimonials = [
                    ['author' => 'Aarav Sharma', 'role' => 'TechSolutions India', 'text' => 'We were struggling to get qualified leads. Classify Skill Education completely revamped our LinkedIn ads.', 'img' => 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150'],
                    ['author' => 'Priya Patel', 'role' => 'The Ethnic Vibe', 'text' => 'Our followers grew by 20k in 4 months and sales doubled. Amazing team!', 'img' => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150'],
                    ['author' => 'Rajesh Kumar', 'role' => 'Dream Homes', 'text' => 'I have worked with many agencies, but none delivered ROI like this.', 'img' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'],
                    ['author' => 'Sneha Gupta', 'role' => 'Glow Skincare', 'text' => 'My online sales are up 40% thanks to the new Shopify store.', 'img' => 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150'],
                    ['author' => 'Vikram Malhotra', 'role' => 'Iron Fitness', 'text' => 'We are now the top-rated gym in our area with a full batch.', 'img' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'],
                ];
                foreach($testimonials as $t): ?>
                <div class="w-[300px] md:w-[350px] flex-shrink-0 bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col">
                    <div class="flex items-center space-x-1 mb-6">
                       <?php for($i=0; $i<5; $i++) echo '<i data-lucide="star" class="w-4 h-4 text-yellow-400 fill-yellow-400"></i>'; ?>
                    </div>
                    <p class="text-gray-600 text-sm leading-relaxed mb-8 font-medium italic flex-grow">"<?php echo $t['text']; ?>"</p>
                    <div class="flex items-center mt-auto pt-6 border-t border-gray-50">
                      <img src="<?php echo $t['img']; ?>" alt="<?php echo $t['author']; ?>" class="w-12 h-12 rounded-full mr-4 object-cover ring-2 ring-gray-50" />
                      <div>
                          <h5 class="font-bold text-sm text-black font-heading"><?php echo $t['author']; ?></h5>
                          <p class="text-gray-400 text-xs font-bold uppercase tracking-wider"><?php echo $t['role']; ?></p>
                      </div>
                    </div>
                </div>
                <?php endforeach; ?>
              </div>
            </div>
        </div>
    </section>

    <!-- CTA SECTION -->
    <section id="contact" class="py-20 bg-gray-50 relative overflow-hidden border-t border-gray-100">
       <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
       <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-200/40 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
       <div class="container mx-auto px-6 relative z-10">
          <div class="flex flex-col items-center max-w-4xl mx-auto text-center">
            <div class="inline-flex items-center px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-yellow-600 text-[10px] font-bold uppercase tracking-widest mb-8">
              <span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2 animate-pulse"></span>
              Accepting New Partners
            </div>
            <h2 class="text-4xl md:text-6xl font-heading font-black text-black mb-6 leading-tight tracking-tight">
              Let's Grow Your <br />
              <span class="text-yellow-500">Business Today.</span>
            </h2>
            <p class="text-gray-500 text-base md:text-lg mb-10 max-w-xl leading-relaxed font-medium mx-auto">
              Partner with Classify Skill Education to engineer a predictable, high-performance growth engine for your brand.
            </p>
            <div class="flex flex-col items-center w-full">
              <a href="<?php echo home_url('/contact'); ?>" class="inline-flex items-center justify-center h-14 px-10 rounded-xl text-lg font-bold bg-yellow-400 text-black shadow-xl shadow-yellow-400/20 hover:shadow-yellow-400/30 hover:-translate-y-1 transition-all duration-300">
                Book Free Consultation <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
              </a>
              <div class="mt-10 flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-widest text-gray-400">
                <span class="flex items-center"><i data-lucide="check-circle-2" class="w-4 h-4 mr-2 text-yellow-500"></i> Data-Driven</span>
                <span class="flex items-center"><i data-lucide="trending-up" class="w-4 h-4 mr-2 text-yellow-500"></i> Proven ROI</span>
                <span class="flex items-center"><i data-lucide="check-circle-2" class="w-4 h-4 mr-2 text-yellow-500"></i> 100% Transparent</span>
              </div>
            </div>
          </div>
      </div>
    </section>
</main>

<?php get_footer(); ?>
