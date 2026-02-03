
<?php 
/* Template Name: CSE Template */
get_header(); 
?>

<div class="bg-white min-h-screen w-full overflow-x-hidden">
    
    <!-- 1. Premium Banner Section -->
    <section class="relative pt-32 pb-24 bg-white text-black rounded-b-[40px] md:rounded-b-[60px] overflow-hidden border-b border-gray-100 z-20">
        <!-- Background Decor -->
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-100 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>
        <div class="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none" style="background-image: url('https://grainy-gradients.vercel.app/noise.svg');"></div>

        <div class="container mx-auto px-6 relative z-10 text-center">
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-sm">
            <i data-lucide="award" class="w-4 h-4 mr-2"></i>
            Excellence Since 2019
          </div>
          
          <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-8 leading-[1.1] tracking-tight text-black">
            Architects of <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700">
              Digital Growth.
            </span>
          </h1>
          
          <p class="text-lg md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed">
            We are <span class="text-black font-bold">Classify Skill Education</span>, a data-driven digital agency with over <span class="text-yellow-600 font-bold">5 years of experience</span> in transforming ambitious businesses into market leaders.
          </p>
        </div>
    </section>

    <!-- 2. Agency Stats (About Classify Skill Education) -->
    <section class="pb-8 pt-16 bg-white text-black relative overflow-hidden">
        <!-- Background Decor -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-gray-100 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2"></div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                
                <!-- Text Content -->
                <div class="order-1 lg:order-1">
                    <h2 class="text-3xl md:text-4xl font-heading font-black mb-6 leading-tight text-black">
                        About Classify Skill <span class="text-yellow-600">Education</span>
                    </h2>
                    <div class="w-20 h-1.5 bg-yellow-400 rounded-full mb-6"></div>
                    <p class="text-lg text-gray-700 mb-6 leading-relaxed font-light">
                        We are a forward-thinking digital marketing agency dedicated to helping businesses grow through innovative marketing strategies and cutting-edge technology.
                    </p>
                    <p class="text-base text-gray-600 leading-relaxed">
                        Our team of experts combines creativity with data-driven insights to deliver exceptional results for our clients across various industries.
                    </p>
                </div>

                <!-- Stats Grid -->
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

    <!-- 3. Our Story Section -->
    <section class="py-24 bg-white">
        <div class="container mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div class="order-2 lg:order-1">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600">
                <i data-lucide="history" class="w-6 h-6"></i>
              </div>
              <h4 class="text-yellow-600 font-bold uppercase tracking-[0.2em] text-sm">Our Story</h4>
            </div>
            
            <h2 class="text-3xl md:text-5xl font-heading font-black mb-8 text-black leading-tight">
              From Humble Beginnings to <span class="text-yellow-500">Industry Leaders.</span>
            </h2>
            
            <div class="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed font-medium">
              <p>
                The journey of <strong class="text-black">Classify Skill Education</strong> began over <strong>5 years ago</strong> with a singular mission: to eliminate the guesswork from digital marketing. We noticed that too many agencies focused on "fluff" metrics rather than real business growth.
              </p>
              <p>
                Founded in 2019, we started as a small team of three enthusiasts in a shared workspace. Today, we have evolved into a full-service growth lab. Over the last half-decade, we have navigated algorithm changes, market shifts, and new technologies, always staying two steps ahead.
              </p>
              <p>
                With 5+ years of hands-on experience, we don't just execute campaigns; we engineer success stories. Our legacy is built on the revenue we generate for our partners, not just the awards on our shelf.
              </p>
            </div>
          </div>

          <div class="order-1 lg:order-2 relative">
            <div class="relative z-10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Classify Skill Team Collaboration" 
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-black/10"></div>
            </div>
            <!-- Decorative Elements -->
            <div class="absolute -bottom-10 -left-10 w-full h-full border-2 border-yellow-400 rounded-[2rem] md:rounded-[3rem] -z-10 hidden md:block"></div>
            <div class="absolute -top-12 -right-12 w-48 h-48 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </div>
        </div>
    </section>

    <!-- 4. Mission & Vision -->
    <section class="container mx-auto px-6 mb-24">
        <div class="grid md:grid-cols-2 gap-8 md:gap-12">
          <div class="bg-black text-white p-8 md:p-16 rounded-[3rem] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
            <div class="absolute top-0 right-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <i data-lucide="target" class="w-12 h-12 md:w-16 md:h-16 text-yellow-400 mb-6 md:mb-8"></i>
            <h3 class="text-3xl md:text-4xl font-black mb-6">Our Mission</h3>
            <p class="text-lg md:text-xl text-gray-400 leading-relaxed font-medium">
              To give business owners peace of mind by handling all their marketing complexities, so they can focus strictly on running their business operations.
            </p>
          </div>
          <div class="bg-yellow-400 p-8 md:p-16 rounded-[3rem] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-xl shadow-yellow-400/20">
            <i data-lucide="eye" class="w-12 h-12 md:w-16 md:h-16 text-black mb-6 md:mb-8"></i>
            <h3 class="text-3xl md:text-4xl font-black mb-6 text-black">Our Vision</h3>
            <p class="text-lg md:text-xl text-black/80 leading-relaxed font-bold">
              To be the most trusted, data-centric marketing partner for businesses globally who demand real, measurable, and scalable growth.
            </p>
          </div>
        </div>
    </section>

    <!-- 5. Core Values -->
    <section class="py-24 bg-gray-50 border-y border-gray-100">
        <div class="container mx-auto px-6">
          <div class="text-center mb-20">
            <h4 class="text-yellow-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">Our Culture</h4>
            <h2 class="text-4xl md:text-5xl font-heading font-black mb-4">Core Values</h2>
            <p class="text-gray-500 max-w-2xl mx-auto font-medium">This is the code we live by at Classify Skill Education.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <?php 
            $values = [
              ['icon' => 'shield', 'title' => 'Honesty', 'desc' => 'We tell you the truth about what works and what does not. No sugarcoating.'],
              ['icon' => 'users', 'title' => 'Client First', 'desc' => 'We care about your profit margin, not just our service fees.'],
              ['icon' => 'star', 'title' => 'Excellence', 'desc' => 'We do premium work. We do not believe in shortcuts or templates.'],
              ['icon' => 'heart', 'title' => 'Passion', 'desc' => 'We genuinely love seeing our clients grow and succeed in their market.'],
            ];
            foreach($values as $v): ?>
              <div class="text-center p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 group">
                <div class="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-400 transition-colors">
                  <i data-lucide="<?php echo $v['icon']; ?>" class="w-8 h-8 text-black"></i>
                </div>
                <h4 class="text-xl font-bold mb-3"><?php echo $v['title']; ?></h4>
                <p class="text-gray-500 text-sm leading-relaxed font-medium"><?php echo $v['desc']; ?></p>
              </div>
            <?php endforeach; ?>
          </div>
        </div>
    </section>

    <!-- 6. Team Section -->
    <section class="py-24 bg-white">
        <div class="container mx-auto px-6">
          <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div class="max-w-2xl">
              <h4 class="text-yellow-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">The Brains</h4>
              <h2 class="text-4xl md:text-5xl font-heading font-black">Meet the Experts</h2>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <?php 
            $team = [
              ['name' => 'Shweta Sharma', 'role' => 'Founder', 'image' => 'https://i.postimg.cc/ZK421Tjh/Yellow-and-Brown-Illustrated-Makar-Sankranti-Greetings-Instagram-Post.png', 'bio' => 'Visionary Leader & Strategist', 'experience' => '7+ Years'],
              ['name' => 'Akshay Singh', 'role' => 'Co-Founder', 'image' => 'https://i.postimg.cc/52xQWXkF/Yellow-and-Brown-Illustrated-Makar-Sankranti-Greetings-Instagram-Post-(1).png', 'bio' => 'Digital Marketing & Operations Expert', 'experience' => '6+ Years'],
              ['name' => 'Darshan Prajapati', 'role' => 'Marketing Head', 'image' => 'https://i.postimg.cc/BZMdBk9c/Yellow-and-Brown-Illustrated-Makar-Sankranti-Greetings-Instagram-Post-(2).png', 'bio' => 'Ads Manager & Growth Strategist', 'experience' => '4+ Years'],
              ['name' => 'Mohit Deswal', 'role' => 'Video Editor', 'image' => 'https://i.postimg.cc/nL02B8NM/Yellow-and-Brown-Illustrated-Makar-Sankranti-Greetings-Instagram-Post-(6).jpg', 'bio' => 'Visual Storyteller & Post-Production Specialist', 'experience' => '3+ Years'],
              ['name' => 'Komal Mukhiya', 'role' => 'Marketing Manager', 'image' => 'https://i.postimg.cc/5N4cM11g/Yellow-and-Brown-Illustrated-Makar-Sankranti-Greetings-Instagram-Post-(5).jpg', 'bio' => 'Campaign Strategy & Client Success', 'experience' => '4+ Years'],
              ['name' => 'Sonu Kumar', 'role' => 'Marketing Coordinator', 'image' => 'https://i.postimg.cc/j2n8Qgrq/Yellow-and-Brown-Illustrated-Makar-Sankranti-Greetings-Instagram-Post-(2).jpg', 'bio' => 'Operations & Project Management', 'experience' => '2+ Years'],
            ];
            foreach($team as $member): ?>
              <div class="group relative">
                <div class="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-6 bg-gray-100 border border-gray-100 shadow-sm">
                  <img 
                    src="<?php echo $member['image']; ?>" 
                    alt="<?php echo $member['name']; ?>" 
                    class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                     <div class="absolute bottom-6 left-6 text-white">
                        <p class="font-bold text-sm">Experience: <?php echo $member['experience']; ?></p>
                     </div>
                  </div>
                </div>
                <h3 class="text-2xl font-black mb-1"><?php echo $member['name']; ?></h3>
                <p class="text-yellow-600 font-bold text-xs uppercase tracking-widest mb-3"><?php echo $member['role']; ?></p>
                <p class="text-gray-500 text-sm leading-relaxed font-medium"><?php echo $member['bio']; ?></p>
              </div>
            <?php endforeach; ?>
          </div>
        </div>
    </section>

    <!-- 7. Process Section -->
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

    <!-- 8. CTA Section -->
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

</div>

<?php get_footer(); ?>
