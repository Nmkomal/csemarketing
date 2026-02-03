
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
                    $links = ['Services', 'Portfolio', 'About', 'Industries', 'Contact'];
                    foreach($links as $link): 
                        $url = home_url('/' . strtolower($link));
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
                            <a href="mailto:classifyskilleducation@gmail.com" class="text-gray-800 font-bold text-base lg:text-lg hover:text-yellow-600 transition-colors block break-all">
                                classifyskilleducation@gmail.com
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500 text-center md:text-left">
            <p class="font-medium">© <?php echo date('Y'); ?> Classify Skill Education. All Rights Reserved.</p>
            <div class="flex space-x-8">
                <a href="#" class="hover:text-black transition-colors">Privacy Policy</a>
                <a href="#" class="hover:text-black transition-colors">Terms of Service</a>
            </div>
        </div>
    </div>
</footer>

<!-- Floating WhatsApp -->
<a href="https://wa.me/919711044849" target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 z-[100] group" aria-label="Chat on WhatsApp">
    <div class="relative flex items-center justify-center">
        <span class="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping duration-1000"></span>
        <span class="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-20 animate-pulse duration-2000 scale-125"></span>
        <div class="relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300">
            <svg class="w-9 h-9 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
        </div>
    </div>
</a>

<?php wp_footer(); ?>
<script>
    // Initialize Lucide Icons
    if(typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
</script>
</body>
</html>
