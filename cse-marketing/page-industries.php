
<?php 
/* Template Name: Industries Template */
get_header(); 
?>

<div class="bg-white pt-24 md:pt-32 min-h-screen w-full overflow-x-hidden">
      <!-- 1. Header Section - Compacted -->
      <section class="container mx-auto px-6 mb-16 text-center">
        <h4 class="text-yellow-600 font-black uppercase tracking-[0.3em] text-sm mb-4">Our Expertise</h4>
        <h1 class="text-4xl md:text-7xl font-heading font-black mb-6 leading-[1.1]">
          Industries We <br />
          <span class="text-yellow-500">Transform.</span>
        </h1>
        <p class="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
          We understand your market. Here is exactly how we help businesses in your industry grow.
        </p>
      </section>

      <!-- 2. Industries List Grid -->
      <section class="container mx-auto px-6 mb-32">
        <div class="grid gap-12">
          <?php 
          $industries = [
              [
                  'name' => 'Fashion',
                  'desc' => 'Clothing Brands & Boutiques',
                  'icon' => 'shopping-bag',
                  'work' => "We create a strong content plan for fashion brands. We make viral reels, trendy videos, and do professional video editing to grow their brand on social media.",
                  'growth' => "We run targeted ads to generate sales and bring customers who are interested in buying fashion products."
              ],
              [
                  'name' => 'Interior Design',
                  'desc' => 'Designers & Decorators',
                  'icon' => 'home',
                  'work' => "We handle social media marketing and also create professional interior websites. We showcase their work online to build a strong brand image.",
                  'growth' => "We generate qualified leads of people who genuinely want interior work and are ready to connect."
              ],
              [
                  'name' => 'Real Estate',
                  'desc' => 'Agents & Developers',
                  'icon' => 'building-2',
                  'work' => "We grow real estate brands online by improving their visibility and digital presence through social media and websites.",
                  'growth' => "We run ads and generate qualified enquiries and leads from buyers who are actively searching for properties."
              ],
              [
                  'name' => 'Café',
                  'desc' => 'Coffee Shops & Restaurants',
                  'icon' => 'coffee',
                  'work' => "We build online brand visibility through posts, photos, posters, reels, and video editing that reflects the café vibe.",
                  'growth' => "We run ads and local marketing to increase walk-in customers and daily footfall."
              ],
              [
                  'name' => 'Salon',
                  'desc' => 'Hair & Beauty Salons',
                  'icon' => 'scissors',
                  'work' => "We create high-quality content that builds the salon’s brand and shows their services professionally. We also create salon websites.",
                  'growth' => "We run ads to bring walk-in customers, generate leads, and convert them into paying clients."
              ],
              [
                  'name' => 'Beauty',
                  'desc' => 'Cosmetics & Skincare Brands',
                  'icon' => 'sparkles',
                  'work' => "We manage complete branding through social media marketing, custom poster design, graphics, video editing, and influencer marketing. We also create websites and e-commerce stores.",
                  'growth' => "We run ads to generate sales and help beauty brands grow their customer base."
              ],
              [
                  'name' => 'Travel',
                  'desc' => 'Travel Agencies & Tourism',
                  'icon' => 'plane',
                  'work' => "We build a strong online brand for travel agencies through social media and websites, showcasing their packages and services.",
                  'growth' => "We run ads to generate leads from people who are planning trips and looking for travel packages."
              ],
              [
                  'name' => 'Education',
                  'desc' => 'Schools, Institutes & Courses',
                  'icon' => 'graduation-cap',
                  'work' => "We create a professional online presence through social media marketing and websites to build trust with students and parents.",
                  'growth' => "We generate qualified admission enquiries for courses and institutions."
              ],
              [
                  'name' => 'Doctors',
                  'desc' => 'Clinics, Dentists & Hospitals',
                  'icon' => 'stethoscope',
                  'work' => "We build doctors’ online brands through social media marketing and professional websites.",
                  'growth' => "We generate qualified leads and walk-in patients for clinics and hospitals."
              ],
              [
                  'name' => 'Jewellery',
                  'desc' => 'Jewelry Stores',
                  'icon' => 'gem',
                  'work' => "We edit professional jewellery photos, create posters, and manage social media branding. We also build jewellery and e-commerce websites.",
                  'growth' => "We run ads to generate sales and customer enquiries."
              ],
              [
                  'name' => 'Health & Fitness',
                  'desc' => 'Gyms & Trainers',
                  'icon' => 'activity',
                  'work' => "We manage social media marketing and create websites to build a strong fitness brand.",
                  'growth' => "We generate leads and enquiries from people interested in joining gyms or fitness programs."
              ],
              [
                  'name' => 'Tech & Startups',
                  'desc' => 'Startups & Digital Businesses',
                  'icon' => 'rocket',
                  'work' => "We help startups grow online by building their brand through social media marketing, creative content, and websites.",
                  'growth' => "We run ads to attract clients and create high-quality creatives to increase conversions."
              ]
          ];
          foreach($industries as $index => $industry): ?>
            <div class="flex flex-col lg:flex-row gap-12 items-start p-10 rounded-[50px] border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-500 group <?php echo $index % 2 === 1 ? 'lg:flex-row-reverse' : ''; ?>">
              <!-- Icon / Title Column -->
              <div class="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div class="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-md group-hover:bg-yellow-400 transition-colors duration-500">
                  <i data-lucide="<?php echo $industry['icon']; ?>" class="w-12 h-12 text-black"></i>
                </div>
                <h2 class="text-4xl font-heading font-black mb-2"><?php echo $industry['name']; ?></h2>
                <p class="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6"><?php echo $industry['desc']; ?></p>
                <div class="hidden lg:block w-full h-px bg-gray-200 mt-4"></div>
              </div>

              <!-- Details Column -->
              <div class="lg:w-2/3 grid md:grid-cols-2 gap-8">
                <div class="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm group-hover:border-yellow-200 transition-colors">
                  <div class="flex items-center mb-4">
                    <i data-lucide="zap" class="w-6 h-6 text-yellow-500 mr-3"></i>
                    <h3 class="text-xl font-bold">How We Work</h3>
                  </div>
                  <p class="text-gray-600 leading-relaxed text-lg">
                    <?php echo $industry['work']; ?>
                  </p>
                </div>

                <div class="bg-black text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
                  <div class="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <div class="flex items-center mb-4 relative z-10">
                    <i data-lucide="trending-up" class="w-6 h-6 text-yellow-400 mr-3"></i>
                    <h3 class="text-xl font-bold">Growth Method</h3>
                  </div>
                  <p class="text-gray-300 leading-relaxed text-lg relative z-10">
                    <?php echo $industry['growth']; ?>
                  </p>
                </div>
              </div>
            </div>
          <?php endforeach; ?>
        </div>
      </section>

      <!-- 3. Why Choose Us Section -->
      <section class="py-24 bg-white">
        <div class="container mx-auto px-6 max-w-7xl">
          <div class="text-center mb-20">
            <h4 class="text-yellow-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">The Classify Advantage</h4>
            <h2 class="text-4xl md:text-5xl font-heading font-black mb-6">Why Choose <span className="text-yellow-500">Us?</span></h2>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <?php
             $features = [
                ['title' => 'Proven Results', 'desc' => 'We focus on getting you real customers and sales, not just likes.', 'icon' => 'bar-chart'],
                ['title' => 'Creative Team', 'desc' => 'Our designers and editors make your brand look amazing.', 'icon' => 'palette'],
                ['title' => 'Expert Strategy', 'desc' => 'We know what works in your industry and use the best methods.', 'icon' => 'lightbulb'],
                ['title' => 'Fast Execution', 'desc' => 'We work quickly to get your campaigns live and generating money.', 'icon' => 'zap'],
            ];
            foreach($features as $f): ?>
              <div class="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-black hover:text-white transition-all duration-500 group">
                <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-yellow-400 transition-colors">
                  <i data-lucide="<?php echo $f['icon']; ?>" class="w-6 h-6 text-black"></i>
                </div>
                <h3 class="text-xl font-black mb-4 font-heading"><?php echo $f['title']; ?></h3>
                <p class="text-gray-500 group-hover:text-gray-400 leading-relaxed font-medium"><?php echo $f['desc']; ?></p>
              </div>
            <?php endforeach; ?>
          </div>
        </div>
      </section>
      
      <!-- 4. Simplified Services Grid - Compacted -->
      <section class="bg-gray-50 py-16 border-y border-gray-100">
        <div class="container mx-auto px-6 max-w-7xl">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-heading font-black mb-4 text-black">
              Our <span class="text-yellow-500">Services</span>
            </h2>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <?php 
            $services = [
                ['id' => 'smm', 'title' => 'SMM', 'icon' => 'share-2'],
                ['id' => 'leads', 'title' => 'Leads Generation', 'icon' => 'mouse-pointer-2'],
                ['id' => 'seo', 'title' => 'SEO', 'icon' => 'search'],
                ['id' => 'web-design', 'title' => 'Website Design', 'icon' => 'layout'],
                ['id' => 'graphic-design', 'title' => 'Graphic Designing', 'icon' => 'pen-tool'],
                ['id' => 'ppc', 'title' => 'PPC', 'icon' => 'target'],
                ['id' => 'video-shoot', 'title' => 'Video Shoot', 'icon' => 'video'],
                ['id' => 'influencer', 'title' => 'Influencer Marketing', 'icon' => 'user-plus'],
                ['id' => 'meta-ads', 'title' => 'Meta Ads', 'icon' => 'facebook'],
                ['id' => 'branding', 'title' => 'Branding', 'icon' => 'palette'],
                ['id' => 'video-edit', 'title' => 'Video Editing', 'icon' => 'scissors'],
                ['id' => 'app-dev', 'title' => 'App Development', 'icon' => 'smartphone'],
            ];
            foreach($services as $service): 
                $link = home_url('/' . $service['id']);
            ?>
              <a href="<?php echo $link; ?>" class="group relative bg-white border border-gray-100 rounded-3xl p-6 flex flex-col items-center text-center hover:border-yellow-400 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-full blur-2xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div class="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-yellow-400 transition-all duration-300 shrink-0 relative z-10 shadow-sm">
                  <i data-lucide="<?php echo $service['icon']; ?>" class="w-6 h-6 text-black"></i>
                </div>
                <h3 class="text-sm md:text-base font-black text-black group-hover:text-yellow-600 transition-colors relative z-10">
                  <?php echo $service['title']; ?>
                </h3>
              </a>
            <?php endforeach; ?>
          </div>
        </div>
      </section>
</div>

<?php get_footer(); ?>
