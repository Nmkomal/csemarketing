
<?php 
/* Template Name: Service Detail Template */
get_header(); 

// Get current page slug
global $post;
$slug = $post->post_name;

// Normalize slug for mapping if necessary (e.g., if page slug is 'smm-marketing', map to 'smm')
// For simplicity, we assume page slug matches the keys in cse_get_service_data
$data = cse_get_service_data($slug);

// Fallback if data not found in our array, use standard WP fields
$title = $data ? $data['title'] : get_the_title();
$overview = $data ? $data['overview'] : get_the_excerpt();
$result = $data ? $data['result'] : 'Growth';
$problems = $data ? $data['problems'] : [];
$process = $data ? $data['process'] : [];
$tools = $data ? $data['tools'] : [];
$benefits = $data ? $data['benefits'] : [];
?>

<div class="bg-white min-h-screen pb-24">
    <!-- 1. Premium Hero Banner - Compacted -->
    <section class="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gray-50 rounded-b-[40px] md:rounded-b-[60px] border-b border-gray-100">
        <!-- Background Elements -->
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div class="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none" style="background-image: url('https://grainy-gradients.vercel.app/noise.svg');"></div>

        <div class="container mx-auto px-6 relative z-10">
            <!-- Back Nav -->
            <a href="<?php echo home_url('/services'); ?>" class="group flex items-center text-xs font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-10 w-fit">
                <div class="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center mr-3 group-hover:border-black transition-colors">
                    <i data-lucide="arrow-left" class="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"></i>
                </div>
                Back to All Services
            </a>

            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <!-- Left Content -->
                <div>
                    <span class="inline-block py-2 px-5 rounded-full bg-white border border-gray-200 text-yellow-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm">
                        Service Spotlight
                    </span>
                    <h1 class="text-4xl sm:text-5xl md:text-6xl font-heading font-black mb-6 leading-[1.1] text-black">
                        <?php echo esc_html($title); ?>
                    </h1>
                    <p class="text-lg md:text-xl text-gray-500 leading-relaxed mb-8 font-medium max-w-xl">
                        <?php echo esc_html($overview); ?>
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a href="<?php echo home_url('/contact'); ?>" class="inline-flex items-center justify-center h-14 px-8 rounded-2xl bg-yellow-400 text-black font-bold text-base shadow-xl shadow-yellow-400/20 hover:scale-105 transition-transform">
                            Book Free Strategy Call <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
                        </a>
                    </div>
                    
                    <div class="mt-8 flex items-center space-x-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                        <div class="flex text-yellow-400">
                            <?php for($i=0; $i<5; $i++) echo '<i data-lucide="star" class="w-4 h-4 fill-current"></i>'; ?>
                        </div>
                        <span>Top Rated Service</span>
                    </div>
                </div>

                <!-- Right Visual -->
                <div class="relative hidden lg:block">
                    <div class="relative z-10 bg-white p-8 rounded-[3rem] shadow-2xl border border-gray-100 rotate-2 hover:rotate-0 transition-transform duration-700">
                        <div class="aspect-[4/3] bg-gray-50 rounded-[2rem] overflow-hidden mb-8 relative">
                            <!-- Abstract Graphic -->
                            <div class="absolute inset-0 flex items-center justify-center">
                                <div class="w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-50"></div>
                            </div>
                            <div class="relative z-10 w-full h-full flex items-center justify-center">
                                <h2 class="text-4xl font-heading font-black text-black/10 scale-150 absolute top-4 left-4"><?php echo substr($title, 0, 3); ?></h2>
                                <h2 class="text-4xl font-heading font-black text-black relative text-center px-4">
                                    <?php echo esc_html($title); ?>
                                </h2>
                            </div>
                        </div>
                        <div class="flex justify-between items-end">
                            <div>
                                <p class="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Impact</p>
                                <p class="text-2xl font-black text-black"><?php echo esc_html($result); ?></p>
                            </div>
                            <div class="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                                <i data-lucide="zap" class="w-6 h-6 text-yellow-400"></i>
                            </div>
                        </div>
                    </div>
                    <!-- Decor -->
                    <div class="absolute -bottom-10 -right-10 w-full h-full border-2 border-yellow-400 rounded-[3rem] -z-10"></div>
                </div>
            </div>
        </div>
    </section>

    <?php if(!empty($problems)): ?>
    <!-- 2. Problem Solver Section -->
    <section class="py-24 bg-white">
        <div class="container mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h4 class="text-yellow-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">The Challenge</h4>
              <h2 class="text-4xl font-heading font-black mb-8 text-black">Common Problems We Solve</h2>
              <div class="space-y-6">
                <?php foreach($problems as $problem): ?>
                  <div class="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm group hover:bg-white hover:border-yellow-400 hover:shadow-lg transition-all duration-300">
                    <div class="w-10 h-10 rounded-full bg-white border border-gray-200 text-red-500 flex items-center justify-center mr-4 shrink-0 group-hover:bg-yellow-400 group-hover:text-black group-hover:border-yellow-400 transition-colors">
                      <i data-lucide="zap" class="w-5 h-5"></i>
                    </div>
                    <span class="text-lg font-bold text-gray-700 pt-1.5"><?php echo esc_html($problem); ?></span>
                  </div>
                <?php endforeach; ?>
              </div>
            </div>
            <div class="bg-black text-white p-12 rounded-[50px] relative overflow-hidden">
              <div class="absolute top-0 right-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <h3 class="text-3xl font-bold mb-8">Our Process</h3>
              <div class="space-y-10">
                <?php foreach($process as $i => $step): ?>
                  <div class="flex items-center group">
                    <div class="w-12 h-12 rounded-xl bg-gray-800 text-white flex items-center justify-center font-black mr-6 shrink-0 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                      0<?php echo $i + 1; ?>
                    </div>
                    <span class="text-xl font-medium text-gray-300 group-hover:text-white transition-colors"><?php echo esc_html($step); ?></span>
                  </div>
                <?php endforeach; ?>
              </div>
            </div>
          </div>
        </div>
    </section>
    <?php endif; ?>

    <!-- 3. Tools & Tech Section -->
    <section class="py-24 bg-gray-50 border-y border-gray-100">
        <div class="container mx-auto px-6">
          <?php if(!empty($tools)): ?>
          <div class="text-center mb-16">
            <h2 class="text-3xl font-heading font-black mb-4 uppercase tracking-widest text-gray-400">Tools We Use</h2>
            <div class="flex flex-wrap justify-center gap-6 mt-8">
              <?php foreach($tools as $tool): ?>
                <div class="px-8 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm text-lg font-bold hover:shadow-md hover:border-yellow-400 hover:text-yellow-600 transition-all cursor-default">
                  <?php echo esc_html($tool); ?>
                </div>
              <?php endforeach; ?>
            </div>
          </div>
          <?php endif; ?>

          <div class="grid md:grid-cols-2 gap-12 mt-24">
            <div class="p-12 rounded-[40px] bg-yellow-400 border border-yellow-500 relative overflow-hidden group">
               <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <i data-lucide="trophy" class="w-12 h-12 text-black mb-6"></i>
              <h3 class="text-3xl font-black mb-4 text-black">The Result</h3>
              <p class="text-4xl md:text-5xl font-black text-black leading-tight">
                <?php echo esc_html($result); ?>
              </p>
            </div>
            
            <?php if(!empty($benefits)): ?>
            <div class="p-12 rounded-[40px] bg-white border border-gray-200 shadow-xl flex flex-col justify-center">
              <h3 class="text-2xl font-black mb-8 text-black">Why This Matters</h3>
              <ul class="space-y-4">
                <?php foreach($benefits as $benefit): ?>
                  <li class="flex items-center text-lg font-medium text-gray-600">
                    <i data-lucide="check-circle" class="w-6 h-6 text-yellow-500 mr-4 shrink-0"></i>
                    <?php echo esc_html($benefit); ?>
                  </li>
                <?php endforeach; ?>
              </ul>
            </div>
            <?php endif; ?>
          </div>
        </div>
    </section>

    <!-- 4. Simple CTA -->
    <section class="py-20 px-6">
        <div class="container mx-auto max-w-5xl bg-black rounded-[50px] p-12 md:p-20 text-center text-white relative overflow-hidden">
           <!-- Glow -->
           <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-[100px] -mt-64 pointer-events-none"></div>
           
           <div class="relative z-10">
            <h2 class="text-4xl md:text-5xl font-black mb-6">Ready to start with <?php echo esc_html($title); ?>?</h2>
            <p class="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                Stop guessing and start growing. Get a custom strategy built for your business goals.
            </p>
            <a href="<?php echo home_url('/contact'); ?>" class="inline-flex items-center justify-center h-16 px-12 rounded-2xl text-lg font-bold bg-yellow-400 text-black shadow-xl shadow-yellow-400/20 hover:scale-105 transition-transform">
                Book Free Consultation <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
            </a>
           </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>
