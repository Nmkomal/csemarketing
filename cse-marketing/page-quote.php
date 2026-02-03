
<?php 
/* Template Name: Quote Template */
get_header(); 
?>

<div class="bg-white pt-32 pb-24">
    <!-- Header -->
    <section class="container mx-auto px-6 mb-20 text-center">
        <div class="max-w-4xl mx-auto">
          <h4 class="text-yellow-600 font-black uppercase tracking-[0.3em] text-sm mb-6">Custom Proposals</h4>
          <h1 class="text-4xl sm:text-5xl md:text-8xl font-heading font-black mb-10 leading-[1.1]">
            Build Your <span class="text-yellow-500">Growth Plan</span>
          </h1>
          <p class="text-lg md:text-2xl text-gray-500 font-medium leading-relaxed">
            Select the services you need and provide some context. We’ll craft a tailored proposal to hit your specific KPIs.
          </p>
        </div>
    </section>

    <section class="container mx-auto px-6">
        <form id="quote-form" class="max-w-5xl mx-auto">
          <!-- Service Selection -->
          <div class="mb-20">
            <h3 class="text-2xl font-black mb-10 flex items-center">
              <span class="w-10 h-10 bg-black text-yellow-400 rounded-xl flex items-center justify-center mr-4 text-sm font-black">01</span>
              Select Services of Interest
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <?php 
              $services = ['SMM', 'Leads Generation', 'SEO', 'Website Design', 'Graphic Designing', 'PPC', 'Video Shoot', 'Influencer Marketing', 'Meta Ads', 'Branding', 'Video Editing', 'App Development'];
              foreach($services as $s): ?>
                <div 
                  class="quote-service-card p-6 rounded-3xl border-2 border-gray-100 bg-white hover:border-gray-200 shadow-sm cursor-pointer transition-all duration-300 flex items-center space-x-4"
                  data-service="<?php echo $s; ?>"
                >
                  <div class="service-checkbox w-6 h-6 rounded-md border-2 border-gray-300 flex items-center justify-center transition-colors flex-shrink-0"></div>
                  <span class="font-bold text-sm uppercase tracking-wider"><?php echo $s; ?></span>
                </div>
              <?php endforeach; ?>
            </div>
          </div>

          <!-- Details & Budget -->
          <div class="mb-20 grid lg:grid-cols-2 gap-16">
            <div>
              <h3 class="text-2xl font-black mb-10 flex items-center">
                <span class="w-10 h-10 bg-black text-yellow-400 rounded-xl flex items-center justify-center mr-4 text-sm font-black">02</span>
                Company Details
              </h3>
              <div class="space-y-6">
                <input id="quote-name" type="text" placeholder="Full Name" required class="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400/20 transition-all" />
                <input id="quote-email" type="email" placeholder="Work Email" required class="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400/20 transition-all" />
                <input id="quote-company" type="text" placeholder="Company Name" required class="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400/20 transition-all" />
                <input id="quote-website" type="url" placeholder="Website URL" class="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400/20 transition-all" />
              </div>
            </div>
            <div>
              <h3 class="text-2xl font-black mb-10 flex items-center">
                <span class="w-10 h-10 bg-black text-yellow-400 rounded-xl flex items-center justify-center mr-4 text-sm font-black">03</span>
                Estimated Monthly Budget
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <?php $budgets = ['$1k - $5k', '$5k - $15k', '$15k - $50k', '$50k+']; 
                foreach($budgets as $b): ?>
                  <label class="budget-option relative cursor-pointer group">
                    <input type="radio" name="budget" value="<?php echo $b; ?>" class="peer sr-only" />
                    <div class="p-5 border-2 border-gray-100 rounded-2xl text-center font-bold hover:bg-gray-50 transition-all">
                      <?php echo $b; ?>
                    </div>
                  </label>
                <?php endforeach; ?>
              </div>
              <textarea id="quote-goals" placeholder="Any specific goals or timeline?" rows="4" class="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400/20 transition-all resize-none"></textarea>
            </div>
          </div>

          <!-- Submit -->
          <div class="bg-black p-8 md:p-16 rounded-[40px] md:rounded-[60px] text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="flex items-center text-center md:text-left flex-col md:flex-row">
              <div class="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-4 md:mb-0 md:mr-6 rotate-3">
                <i data-lucide="rocket" class="w-8 h-8 text-black"></i>
              </div>
              <div>
                <h4 class="text-2xl font-black">Ready to scale?</h4>
                <p class="text-gray-400">Secure your free strategic analysis today.</p>
              </div>
            </div>
            <button type="submit" class="w-full md:w-auto h-16 md:h-18 px-10 md:px-16 rounded-2xl shadow-2xl shadow-yellow-400/20 bg-yellow-400 text-black text-lg md:text-xl font-bold flex items-center justify-center hover:bg-white transition-colors">
              Submit Request <i data-lucide="chevron-right" class="ml-2 w-5 h-5"></i>
            </button>
          </div>
          
          <div class="mt-8 flex flex-col md:flex-row items-center justify-center text-gray-400 gap-4 md:space-x-6 text-xs font-bold uppercase tracking-[0.2em]">
            <span class="flex items-center"><i data-lucide="shield-check" class="w-4 h-4 mr-2 text-yellow-500"></i> Data Protected</span>
            <span class="flex items-center"><i data-lucide="check-circle-2" class="w-4 h-4 mr-2 text-yellow-500"></i> No-Obligation</span>
          </div>
        </form>
    </section>
</div>

<?php get_footer(); ?>
