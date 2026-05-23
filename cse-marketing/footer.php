
<footer class="bg-white text-black pt-16 md:pt-24 pb-10 rounded-t-[3rem] mt-10 border-t border-gray-100">
    <div class="container mx-auto px-6 max-w-7xl">
        <div class="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
            <!-- Brand Column -->
            <div class="space-y-8">
                <div class="flex items-center space-x-3">
                    <img 
                        src="https://i.postimg.cc/GhzNPgvR/uuytukt.png" 
                        alt="Classify Skill Education" 
                        class="h-16 md:h-20 w-auto object-contain" 
                    />
                    <span class="font-heading text-2xl font-bold tracking-tight text-black">
                        Classify Skill <span class="text-yellow-500">Education</span>
                    </span>
                </div>
                <p class="text-gray-500 leading-relaxed text-base max-w-sm font-medium">
                    We engineer digital growth. A premium agency dedicated to scaling brands through data-driven strategies and world-class design.
                </p>
                <div class="flex space-x-4 pt-2">
                    <a href="https://www.instagram.com/classifyskilleducation/" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 group shadow-sm hover:shadow-md">
                        <i data-lucide="instagram" class="w-5 h-5 group-hover:scale-110 transition-transform"></i>
                    </a>
                    <a href="https://www.youtube.com/@ClassifySkill-education" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 group shadow-sm hover:shadow-md">
                        <i data-lucide="youtube" class="w-5 h-5 group-hover:scale-110 transition-transform"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/classify-skill-education/posts/?feedView=all" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 group shadow-sm hover:shadow-md">
                        <i data-lucide="linkedin" class="w-5 h-5 group-hover:scale-110 transition-transform"></i>
                    </a>
                    <a href="https://www.facebook.com/people/Classify-Skill-Education/61575861164329/" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 group shadow-sm hover:shadow-md">
                        <i data-lucide="facebook" class="w-5 h-5 group-hover:scale-110 transition-transform"></i>
                    </a>
                </div>
            </div>

            <!-- Navigation Links -->
            <div class="lg:pl-12">
                <h4 class="font-bold text-xl mb-8 text-black flex items-center">
                    <span class="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Explore
                </h4>
                <ul class="space-y-4">
                    <?php 
                    $links = ['Services', 'About Us', 'Industries', 'Portfolio', 'Contact'];
                    foreach($links as $link): 
                        $slug = strtolower(str_replace(' ', '-', $link));
                        $url = home_url('/' . $slug);
                    ?>
                    <li>
                        <a href="<?php echo esc_url($url); ?>" class="group flex items-center text-gray-500 hover:text-black transition-colors text-base font-medium w-fit">
                            <i data-lucide="arrow-up-right" class="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-yellow-500"></i>
                            <?php echo $link; ?>
                        </a>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </div>

            <!-- Contact Details -->
            <div>
                <h4 class="font-bold text-xl mb-8 text-black flex items-center">
                    <span class="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Office & Contact
                </h4>
                <ul class="space-y-8">
                    <li class="flex items-start space-x-4 group cursor-default">
                        <div class="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300">
                            <i data-lucide="map-pin" class="w-5 h-5 text-gray-600 group-hover:text-black"></i>
                        </div>
                        <div>
                            <span class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Visit Us</span>
                            <span class="text-gray-800 font-bold text-sm lg:text-base leading-snug block group-hover:text-yellow-600 transition-colors">
                                Pillar number 783, metro station,<br /> Dwarka Mor, Uttam Nagar, Bhagwati Garden,<br /> Nawada, New delhi, Delhi, 110059
                            </span>
                        </div>
                    </li>
                    <li class="flex items-start space-x-4 group">
                        <div class="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300">
                            <i data-lucide="phone" class="w-5 h-5 text-gray-600 group-hover:text-black"></i>
                        </div>
                        <div>
                            <span class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Call / WhatsApp</span>
                            <a href="https://wa.me/919711044849" class="text-gray-800 font-bold text-lg hover:text-yellow-600 transition-colors block">
                                +91 97110 44849
                            </a>
                        </div>
                    </li>
                    <li class="flex items-start space-x-4 group">
                        <div class="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300">
                            <i data-lucide="mail" class="w-5 h-5 text-gray-600 group-hover:text-black"></i>
                        </div>
                        <div>
                            <span class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email Us</span>
                            <a href="mailto:info@csemarketing.com" class="text-gray-800 font-bold text-base lg:text-lg hover:text-yellow-600 transition-colors block break-all">
                                info@csemarketing.com
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500 text-center md:text-left">
            <p class="font-medium">© 2019 Classify Skill Education. All Rights Reserved.</p>
            <div class="flex space-x-8">
                <a href="<?php echo home_url('/terms'); ?>" class="hover:text-black transition-colors">Terms & Conditions</a>
            </div>
        </div>
    </div>
</footer>
