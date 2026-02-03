
<?php 
/* Template Name: Contact Template */
get_header(); 
?>

<div class="bg-gray-50 min-h-screen w-full overflow-hidden relative">
      
      <!-- 1. Header Area - Compacted -->
      <section class="pt-28 pb-12 px-6 container mx-auto text-center relative z-10">
          <h1 class="text-5xl md:text-7xl font-heading font-black mb-4 text-black tracking-tighter leading-none">
            Get In <span class="text-yellow-500">Touch.</span>
          </h1>
          <p class="text-base md:text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Ready to dominate your market? Let's engineer a growth engine for your business today.
          </p>
      </section>

      <!-- 2. Combined Contact Section (Direct Channels + Form) - Compacted -->
      <section class="container mx-auto px-6 pb-20 max-w-7xl relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
             
             <!-- LEFT COLUMN: Direct Channels -->
             <div class="flex flex-col gap-4">
                <div class="mb-2">
                    <h2 class="text-2xl font-heading font-bold mb-2 text-black flex items-center">
                        <span class="w-2.5 h-2.5 bg-green-500 rounded-full mr-3 animate-pulse"></span> Direct Channels
                    </h2>
                    <p class="text-gray-500 text-sm md:text-base font-medium leading-relaxed">
                        Reach out to us directly for immediate assistance.
                    </p>
                </div>

                <div class="grid sm:grid-cols-2 gap-4">
                    <!-- Phone Card -->
                    <a href="tel:+919711044849" class="group block bg-yellow-400 p-5 rounded-[2rem] shadow-lg shadow-yellow-400/20 relative overflow-hidden transition-transform hover:-translate-y-1 h-full">
                        <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <i data-lucide="phone" class="w-16 h-16 rotate-12"></i>
                        </div>
                        <div class="relative z-10 flex flex-col h-full justify-between min-h-[110px]">
                            <div class="w-8 h-8 bg-black rounded-full flex items-center justify-center mb-3 text-yellow-400">
                                <i data-lucide="phone" class="w-4 h-4"></i>
                            </div>
                            <div>
                                <h3 class="text-[10px] font-bold text-black mb-0.5 opacity-80 uppercase tracking-wider">Call / WhatsApp</h3>
                                <p class="text-lg font-heading font-black text-black tracking-tight">+91 97110 44849</p>
                            </div>
                        </div>
                    </a>

                    <!-- Email Card -->
                    <a href="mailto:classifyskilleducation@gmail.com" class="bg-white p-5 rounded-[2rem] shadow-sm border border-gray-100 group hover:border-yellow-400 transition-colors relative overflow-hidden h-full">
                        <div class="relative z-10 flex flex-col h-full justify-between min-h-[110px]">
                            <div class="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center mb-3 text-black border border-gray-200 group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-colors">
                                <i data-lucide="mail" class="w-4 h-4"></i>
                            </div>
                            <div>
                                <h3 class="text-[10px] font-bold text-gray-400 mb-0.5 uppercase tracking-wider">Email Us</h3>
                                <p class="text-sm font-heading font-bold text-black break-words leading-tight">classifyskilleducation@gmail.com</p>
                            </div>
                        </div>
                    </a>
                </div>

                <!-- Strategic Partnership -->
                <div class="bg-black p-6 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-transparent rounded-full blur-3xl group-hover:bg-yellow-400/40 transition-colors"></div>
                    <div class="relative z-10">
                        <div class="flex items-center justify-between mb-4">
                            <div class="p-2.5 bg-white/10 rounded-xl backdrop-blur-md border border-white/10">
                                <i data-lucide="user" class="w-5 h-5 text-yellow-400"></i>
                            </div>
                            <span class="text-[10px] font-bold text-yellow-400 border border-yellow-400/30 px-3 py-1 rounded-full uppercase tracking-widest">
                                CEO Direct
                            </span>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-1">Strategic Partnership</h3>
                        <p class="text-gray-400 font-medium leading-relaxed text-xs sm:text-sm">
                            Looking for a long-term growth partner? Schedule a 30-minute deep dive with our CEO.
                        </p>
                    </div>
                </div>

                <!-- Address Card -->
                <div class="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 relative overflow-hidden group">
                    <div class="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none" style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg');"></div>
                    <div class="relative z-10 flex items-start gap-4">
                        <div class="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center shrink-0 text-black border border-gray-200">
                            <i data-lucide="map-pin" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-black mb-1">Visit Our Lab</h3>
                            <p class="text-gray-500 font-medium leading-relaxed text-xs sm:text-sm max-w-md">
                                Pillar number 783, metro station, Dwarka Mor, Uttam Nagar, Bhagwati Garden, Nawada, New delhi, Delhi, 110059
                            </p>
                            <a href="https://www.google.com/maps/place/Classify+Skill+Education+Digital+Marketing+course+in+Dwarka+Mor/@28.6192331,77.0294023,17z/data=!3m1!4b1!4m6!3m5!1s0x390d05d898504e09:0xd0612bb7c8e45632!8m2!3d28.6192284!4d77.0319772!16s%2Fg%2F11wx70wgb_?entry=ttu&g_ep=EgoyMDI2MDEyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" class="inline-flex items-center mt-3 px-5 py-2 rounded-lg bg-black text-white text-[10px] font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg">
                                Get Directions <i data-lucide="arrow-up-right" class="ml-1.5 w-3 h-3"></i>
                            </a>
                        </div>
                    </div>
                </div>
             </div>

             <!-- RIGHT COLUMN: Lead Form - Compacted -->
             <div class="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-2xl shadow-gray-200/50 border border-gray-100 sticky top-24">
                <div class="text-left mb-6">
                    <h2 class="text-2xl md:text-3xl font-heading font-black mb-2 text-black">Send a Message</h2>
                    <p class="text-sm md:text-base text-gray-500">
                        Fill in the details below to connect directly with our team on WhatsApp.
                    </p>
                </div>

                <form class="whatsapp-form space-y-4">
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="space-y-1.5 group">
                            <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1 group-focus-within:text-yellow-600 transition-colors">Your Name *</label>
                            <div class="relative">
                                <i data-lucide="user" class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-yellow-500 transition-colors"></i>
                                <input name="name" required placeholder="e.g. Rahul Verma" class="w-full h-12 pl-10 pr-4 bg-gray-50 rounded-lg border-2 border-transparent focus:bg-white focus:border-yellow-400 outline-none font-bold text-black placeholder:text-gray-300 transition-all text-xs shadow-sm" />
                            </div>
                        </div>
                        <div class="space-y-1.5 group">
                            <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1 group-focus-within:text-yellow-600 transition-colors">Phone Number *</label>
                            <div class="relative">
                                <i data-lucide="phone" class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-yellow-500 transition-colors"></i>
                                <input name="phone" required type="tel" placeholder="+91..." class="w-full h-12 pl-10 pr-4 bg-gray-50 rounded-lg border-2 border-transparent focus:bg-white focus:border-yellow-400 outline-none font-bold text-black placeholder:text-gray-300 transition-all text-xs shadow-sm" />
                            </div>
                        </div>
                    </div>

                    <div class="space-y-1.5 group">
                        <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1 group-focus-within:text-yellow-600 transition-colors">Email Address</label>
                        <div class="relative">
                            <i data-lucide="mail" class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-yellow-500 transition-colors"></i>
                            <input name="email" type="email" placeholder="classifyskilleducation@gmail.com" class="w-full h-12 pl-10 pr-4 bg-white rounded-lg border-2 border-transparent focus:border-yellow-400 outline-none font-bold text-black placeholder:text-gray-300 transition-all text-xs shadow-sm" />
                        </div>
                    </div>

                    <div class="space-y-1.5 group">
                        <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1 group-focus-within:text-yellow-600 transition-colors">Service Required</label>
                        <div class="relative">
                            <i data-lucide="globe" class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-yellow-500 transition-colors pointer-events-none"></i>
                            <select name="service" class="w-full h-12 pl-10 pr-4 bg-white rounded-lg border-2 border-transparent focus:border-yellow-400 outline-none font-bold text-black transition-all appearance-none cursor-pointer text-xs shadow-sm">
                                <option value="SMM">SMM</option>
                                <option value="Leads Generation">Leads Generation</option>
                                <option value="SEO">SEO</option>
                                <option value="Website Design">Website Design</option>
                                <option value="Graphic Designing">Graphic Designing</option>
                                <option value="PPC">PPC</option>
                                <option value="Video Shoot">Video Shoot</option>
                                <option value="Influencer Marketing">Influencer Marketing</option>
                                <option value="Meta Ads">Meta Ads</option>
                                <option value="Branding">Branding</option>
                                <option value="Video Editing">Video Editing</option>
                                <option value="App Development">App Development</option>
                                <option value="Other">Other / Multiple Services</option>
                            </select>
                            <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <i data-lucide="arrow-right" class="w-3 h-3 rotate-90"></i>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-1.5 group">
                        <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1 group-focus-within:text-yellow-600 transition-colors">Project Details</label>
                        <textarea name="message" rows="3" placeholder="Tell us more about your business goals..." class="w-full p-4 bg-gray-50 rounded-lg border-2 border-transparent focus:bg-white focus:border-yellow-400 outline-none font-bold text-black placeholder:text-gray-300 transition-all resize-none text-xs leading-relaxed shadow-sm"></textarea>
                    </div>

                    <button type="submit" class="w-full h-14 flex items-center justify-center rounded-xl text-base font-black shadow-xl shadow-yellow-400/20 hover:shadow-yellow-400/40 hover:-translate-y-1 transition-all duration-300 bg-yellow-400 text-black">
                        Send to WhatsApp <i data-lucide="send" class="ml-3 w-4 h-4"></i>
                    </button>

                    <div class="flex flex-col sm:flex-row items-center justify-between pt-2 gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 border-t border-gray-200 mt-4">
                        <span class="flex items-center"><i data-lucide="shield-check" class="w-3 h-3 mr-2 text-green-500"></i> Encrypted</span>
                        <span class="flex items-center"><i data-lucide="clock" class="w-3 h-3 mr-2 text-yellow-500"></i> Fast Response</span>
                    </div>
                </form>
             </div>

          </div>
      </section>

</div>

<?php get_footer(); ?>
