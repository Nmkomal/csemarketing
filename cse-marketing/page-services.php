
<?php 
/* Template Name: Services Template */
get_header(); 
?>

<!-- Master Wrapper -->
<div class="bg-white min-h-screen w-full overflow-hidden relative">
      
      <!-- 1. Enhanced Banner Section - Compacted -->
      <section class="w-full relative pt-24 pb-12 md:pt-32 md:pb-20 bg-gray-50 rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden mb-20 border-b border-gray-100">
         <!-- Background Elements -->
         <div class="absolute top-0 left-0 w-full h-full opacity-20 mix-blend-multiply pointer-events-none" style="background-image: url('https://grainy-gradients.vercel.app/noise.svg');"></div>
         <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
         <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

         <div class="container mx-auto px-6 relative z-10">
            <div class="flex flex-col items-center text-center max-w-5xl mx-auto">
                <span class="inline-flex items-center px-5 py-2 rounded-full bg-white border border-gray-200 text-yellow-600 text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-sm">
                  <i data-lucide="zap" class="w-4 h-4 mr-2 text-yellow-500 fill-current"></i>
                  Full-Service Agency
                </span>
                
                <h1 class="text-4xl sm:text-5xl md:text-7xl font-heading font-black mb-8 leading-[1.1] text-black tracking-tight">
                  We Build <br/>
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Growth Engines.</span>
                </h1>
                
                <p class="text-base md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium mb-10">
                  From pixel-perfect designs to high-ROI ad campaigns, our services are engineered to scale your revenue.
                </p>

                <div class="flex flex-col sm:flex-row items-center gap-6">
                  <a href="<?php echo home_url('/contact'); ?>" class="inline-flex items-center justify-center h-14 px-10 rounded-2xl text-base font-bold bg-yellow-400 text-black hover:bg-black hover:text-yellow-400 shadow-xl shadow-yellow-400/20 w-full sm:w-auto hover:scale-105 transform transition-all">
                    Start a Project <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
                  </a>
                  <button onclick="document.getElementById('all-services').scrollIntoView({behavior: 'smooth'})" class="inline-flex items-center justify-center h-14 px-10 rounded-2xl text-base font-bold border-2 border-black text-black hover:bg-black hover:text-white w-full sm:w-auto transition-all">
                     Explore Services
                  </button>
                </div>
            </div>
         </div>
      </section>

      <!-- 2. Services List -->
      <section id="all-services" class="container mx-auto px-6 max-w-7xl mb-32 relative z-10">
        <!-- Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <?php
          // Use helper function to get data
          $services_data = cse_get_service_data();
          
          foreach ($services_data as $id => $service): 
              $link = home_url('/' . $id);
          ?>
              <!-- Card Component -->
              <div onclick="window.location.href='<?php echo esc_url($link); ?>'" class="bg-white border-2 border-transparent hover:border-yellow-400 rounded-[2.5rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col items-start relative overflow-hidden group h-full cursor-pointer">
                
                <!-- Icon -->
                <div class="w-20 h-20 bg-gray-50 rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-yellow-400 transition-colors duration-300">
                    <i data-lucide="<?php echo $service['icon']; ?>" class="w-10 h-10 text-black"></i>
                </div>
                
                <!-- Title -->
                <h3 class="text-3xl font-heading font-black text-black mb-6 group-hover:text-yellow-600 transition-colors">
                    <?php echo $service['title']; ?>
                </h3>
                
                <!-- Description -->
                <p class="text-gray-500 leading-relaxed font-medium mb-10 text-base group-hover:text-gray-600">
                    <?php echo isset($service['overview']) ? substr($service['overview'], 0, 100) . '...' : $service['desc']; ?>
                </p>
                
                <!-- Benefits -->
                <div class="mt-auto space-y-4 w-full pt-6 border-t border-gray-100">
                    <?php foreach(array_slice($service['benefits'], 0, 3) as $benefit): ?>
                    <div class="flex items-center">
                        <div class="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center mr-3 shrink-0 text-green-600">
                            <i data-lucide="check" class="w-3 h-3"></i>
                        </div>
                        <span class="text-gray-700 font-bold text-sm"><?php echo $benefit; ?></span>
                    </div>
                    <?php endforeach; ?>
                </div>

                <div class="mt-8 w-full">
                   <button 
                        class="book-service-btn w-full inline-flex items-center justify-center px-6 py-4 rounded-xl border-2 border-gray-200 text-black font-bold text-sm uppercase tracking-wider hover:bg-yellow-400 hover:border-yellow-400 transition-all z-20 relative"
                        data-service="<?php echo esc_attr($service['title']); ?>"
                   >
                        Book This Service <i data-lucide="arrow-right" class="ml-2 w-4 h-4"></i>
                   </button>
                </div>

              </div>
          <?php endforeach; ?>
        </div>
      </section>

      <!-- 3. Proven Process Section -->
      <section class="py-24 bg-black text-white rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden">
        <div class="container mx-auto px-6 max-w-7xl relative z-10">
            <div class="text-center mb-16">
              <span class="text-yellow-400 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">How We Work</span>
              <h2 class="text-4xl md:text-5xl font-heading font-black mb-6 text-white">
                 Our Proven <span class="text-yellow-500">Process</span>
              </h2>
              <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium">
                 A simple, transparent workflow designed to get you results fast.
              </p>
            </div>
            
            <div class="grid md:grid-cols-4 gap-8 relative">
               <div class="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent -z-0"></div>
               
               <?php 
               $process = [
                  ['num' => '01', 'title' => 'Consultation', 'desc' => 'We analyze your business goals and identify opportunities for growth.'],
                  ['num' => '02', 'title' => 'Strategy', 'desc' => 'We create a custom roadmap tailored to your specific market and audience.'],
                  ['num' => '03', 'title' => 'Execution', 'desc' => 'Our experts implement the plan using cutting-edge tools and creativity.'],
                  ['num' => '04', 'title' => 'Result', 'desc' => 'We monitor results and refine strategies to maximize your ROI.'],
               ];
               foreach($process as $step): ?>
                  <div class="relative z-10 flex flex-col items-center text-center group">
                     <div class="w-24 h-24 bg-gray-900 border-4 border-gray-800 rounded-full flex items-center justify-center mx-auto mb-8 text-3xl font-black text-yellow-400 shadow-sm group-hover:border-yellow-400/50 transition-colors duration-300">
                        <?php echo $step['num']; ?>
                     </div>
                     <h3 class="text-xl font-bold mb-4"><?php echo $step['title']; ?></h3>
                     <p class="text-sm text-gray-400 leading-relaxed font-medium px-2">
                        <?php echo $step['desc']; ?>
                     </p>
                  </div>
               <?php endforeach; ?>
            </div>
        </div>
      </section>

      <!-- 4. CTA Section -->
      <section class="py-20 bg-white relative overflow-hidden border-t border-gray-100">
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

    <!-- Modal Popup -->
    <div id="service-modal" class="fixed inset-0 z-[100] flex items-center justify-center px-4 opacity-0 pointer-events-none transition-opacity duration-300">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/70 backdrop-blur-md" id="service-modal-backdrop"></div>
        
        <!-- Modal Content -->
        <div class="relative bg-white rounded-[2.5rem] w-full max-w-md p-8 md:p-10 shadow-2xl transform scale-95 transition-transform duration-300" id="service-modal-content">
            <button id="close-service-modal" class="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <i data-lucide="x" class="w-5 h-5 text-gray-600"></i>
            </button>

            <div class="text-center mb-8">
                <span class="inline-block py-1 px-3 rounded-full bg-yellow-100 text-yellow-700 text-[10px] font-black uppercase tracking-widest mb-3">
                    Book Service
                </span>
                <h3 class="text-2xl font-heading font-black text-black leading-tight" id="modal-service-title">
                    Service Name
                </h3>
                <p class="text-gray-500 text-sm mt-2 font-medium">
                    Fill the form below to get a quick quote or consultation for this service.
                </p>
            </div>

            <form id="service-modal-form" class="space-y-4">
                <input type="hidden" id="service-name-input" name="service" value="">
                
                <div class="relative group">
                    <i data-lucide="user" class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"></i>
                    <input name="name" required placeholder="Your Name *" class="w-full h-12 pl-10 pr-4 bg-gray-50 rounded-xl border-2 border-transparent focus:bg-white focus:border-yellow-400 outline-none font-bold text-black placeholder:text-gray-400 transition-all text-sm" />
                </div>
                <div class="relative group">
                    <i data-lucide="phone" class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"></i>
                    <input name="phone" required type="tel" maxlength="10" placeholder="Phone Number (10 digits) *" class="w-full h-12 pl-10 pr-4 bg-gray-50 rounded-xl border-2 border-transparent focus:bg-white focus:border-yellow-400 outline-none font-bold text-black placeholder:text-gray-400 transition-all text-sm" />
                </div>
                <div class="relative group">
                    <i data-lucide="mail" class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"></i>
                    <input name="email" type="email" placeholder="Email Address (Optional)" class="w-full h-12 pl-10 pr-4 bg-gray-50 rounded-xl border-2 border-transparent focus:bg-white focus:border-yellow-400 outline-none font-bold text-black placeholder:text-gray-400 transition-all text-sm" />
                </div>

                <button type="submit" class="w-full h-14 flex items-center justify-center rounded-xl text-base font-bold shadow-xl shadow-yellow-400/20 transition-all mt-2 bg-yellow-400 text-black hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed">
                    Send Request <i data-lucide="send" class="ml-2 w-4 h-4"></i>
                </button>
            </form>
        </div>
    </div>

</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const btns = document.querySelectorAll('.book-service-btn');
    const modal = document.getElementById('service-modal');
    const modalContent = document.getElementById('service-modal-content');
    const modalTitle = document.getElementById('modal-service-title');
    const serviceInput = document.getElementById('service-name-input');
    const closeBtn = document.getElementById('close-service-modal');
    const backdrop = document.getElementById('service-modal-backdrop');
    const form = document.getElementById('service-modal-form');
    
    // Validation Logic
    const phoneInput = form.querySelector('input[name="phone"]');
    const submitBtn = form.querySelector('button[type="submit"]');

    // Initial disable
    submitBtn.disabled = true;
    submitBtn.classList.add('opacity-50', 'cursor-not-allowed');

    phoneInput.addEventListener('input', function(e) {
        let val = this.value.replace(/\D/g, '').slice(0, 10);
        this.value = val;
        
        if (val.length === 10) {
            submitBtn.disabled = false;
            submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
        }
    });

    // Open Modal
    btns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const serviceName = this.getAttribute('data-service');
            
            modalTitle.textContent = serviceName;
            serviceInput.value = serviceName;
            
            modal.classList.remove('opacity-0', 'pointer-events-none');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
        });
    });

    // Close Modal Function
    function closeModal() {
        modal.classList.add('opacity-0', 'pointer-events-none');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');
    }

    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    // Form Submit
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = form.querySelector('input[name="name"]').value;
        const phone = form.querySelector('input[name="phone"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const service = serviceInput.value;

        if (phone.length !== 10) return;

        const text = `Hi Classify Skill Education,%0A%0AI am interested in booking your service: *${service}*%0A%0A*My Details:*%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email || 'Not provided'}`;
        
        window.open(`https://wa.me/919711044849?text=${text}`, '_blank');
        closeModal();
        form.reset();
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
    });
});
</script>

<?php get_footer(); ?>
