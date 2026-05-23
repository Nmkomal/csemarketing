
jQuery(document).ready(function($) {
    
    // Header Scroll Effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $('#main-header').addClass('shadow-sm py-0.5 border-gray-100').removeClass('py-1 border-transparent');
        } else {
            $('#main-header').removeClass('shadow-sm py-0.5 border-gray-100').addClass('py-1 border-transparent');
        }
    });

    // Mobile Menu Toggle
    const $toggleBtn = $('#mobile-menu-toggle');
    const $mobileMenu = $('#mobile-menu');
    const $menuIcon = $toggleBtn.find('.menu-icon');
    const $closeIcon = $toggleBtn.find('.close-icon');

    $toggleBtn.on('click', function() {
        if ($mobileMenu.hasClass('translate-x-full')) {
            // Open
            $mobileMenu.removeClass('translate-x-full opacity-0 pointer-events-none').addClass('translate-x-0 opacity-100');
            $('body').addClass('mobile-menu-active');
            $menuIcon.addClass('hidden');
            $closeIcon.removeClass('hidden');
        } else {
            // Close
            $mobileMenu.addClass('translate-x-full opacity-0 pointer-events-none').removeClass('translate-x-0 opacity-100');
            $('body').removeClass('mobile-menu-active');
            $menuIcon.removeClass('hidden');
            $closeIcon.addClass('hidden');
        }
    });

    // Phone Validation Logic for all forms
    $('input[name="phone"]').on('input', function() {
        let val = $(this).val().replace(/\D/g, '').substring(0, 10);
        $(this).val(val);
        
        const $form = $(this).closest('form');
        const $btn = $form.find('button[type="submit"]');
        
        if (val.length === 10) {
            $btn.prop('disabled', false).removeClass('opacity-50 cursor-not-allowed');
        } else {
            $btn.prop('disabled', true).addClass('opacity-50 cursor-not-allowed');
        }
    });
    
    // Initial check for all phone inputs on page load
    $('input[name="phone"]').each(function() {
        const $form = $(this).closest('form');
        const $btn = $form.find('button[type="submit"]');
        if ($(this).val().length !== 10) {
            $btn.prop('disabled', true).addClass('opacity-50 cursor-not-allowed');
        }
    });

    // WhatsApp Form Handler (Contact Page & Home)
    $('.whatsapp-form').on('submit', function(e) {
        e.preventDefault();
        const form = $(this);
        const name = form.find('input[name="name"]').val();
        const phone = form.find('input[name="phone"]').val();
        const email = form.find('input[name="email"]').val();
        const message = form.find('textarea[name="message"]').val();
        const service = form.find('select[name="service"]').val() || 'General Inquiry';

        if (!name || !phone || phone.length !== 10) {
            alert('Please fill in Name and a valid 10-digit Phone number.');
            return;
        }

        const text = `Hi Classify Skill Education,%0A%0A*New Inquiry*%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Service:* ${service}%0A*Message:* ${message}`;
        window.open(`https://wa.me/919711044849?text=${text}`, '_blank');
    });

    // Portfolio Filtering
    $('.portfolio-filter-btn').on('click', function() {
        const filter = $(this).data('filter');
        
        // Update Active State
        $('.portfolio-filter-btn').removeClass('bg-black text-white').addClass('bg-gray-100 text-gray-500');
        $(this).removeClass('bg-gray-100 text-gray-500').addClass('bg-black text-white');

        if(filter === 'All') {
            $('.portfolio-item').show();
        } else {
            $('.portfolio-item').hide();
            $('.portfolio-item[data-category*="' + filter + '"]').show();
        }
    });

    // FAQ Accordion Logic
    $('.faq-button').on('click', function() {
        const $parent = $(this).closest('.faq-item');
        const $answer = $parent.find('.faq-answer');
        const $icon = $(this).find('.faq-icon');
        
        // Close others
        $('.faq-item').not($parent).removeClass('border-yellow-400 bg-gray-50 shadow-lg').addClass('border-gray-100');
        $('.faq-answer').not($answer).slideUp();
        $('.faq-item').not($parent).find('.faq-icon-wrapper').removeClass('bg-black text-yellow-400').addClass('bg-gray-100 text-black');
        $('.faq-item').not($parent).find('.faq-icon').attr('data-lucide', 'plus');
        
        if ($answer.is(':visible')) {
            $answer.slideUp();
            $parent.removeClass('border-yellow-400 bg-gray-50 shadow-lg').addClass('border-gray-100');
            $parent.find('.faq-icon-wrapper').removeClass('bg-gray-100 text-black').addClass('bg-black text-yellow-400');
        } else {
            $answer.slideDown();
            $parent.removeClass('border-gray-100').addClass('border-yellow-400 bg-gray-50 shadow-lg');
            $parent.find('.faq-icon-wrapper').removeClass('bg-gray-100 text-black').addClass('bg-black text-yellow-400');
        }
    });

    // Quote Page - Service Selection
    $('.quote-service-card').on('click', function() {
        $(this).toggleClass('selected border-yellow-400 bg-yellow-50 border-gray-100 bg-white');
        
        const $checkbox = $(this).find('.service-checkbox');
        if ($(this).hasClass('selected')) {
            $checkbox.removeClass('border-gray-300').addClass('bg-black border-black');
            $checkbox.html('<i data-lucide="check" class="w-4 h-4 text-yellow-400"></i>');
            if(typeof lucide !== 'undefined') lucide.createIcons();
        } else {
            $checkbox.removeClass('bg-black border-black').addClass('border-gray-300');
            $checkbox.empty();
        }
    });

    // Quote Page - Budget Selection
    $('.budget-option input').on('change', function() {
        $('.budget-option div').removeClass('border-yellow-400 bg-yellow-50').addClass('border-gray-100');
        if($(this).is(':checked')) {
            $(this).next('div').removeClass('border-gray-100').addClass('border-yellow-400 bg-yellow-50');
        }
    });

    // Quote Page - Form Submission
    $('#quote-form').on('submit', function(e) {
        e.preventDefault();
        
        // Collect Selected Services
        let services = [];
        $('.quote-service-card.selected').each(function() {
            services.push($(this).data('service'));
        });

        const name = $('#quote-name').val();
        const email = $('#quote-email').val();
        const company = $('#quote-company').val();
        const website = $('#quote-website').val();
        const budget = $('input[name="budget"]:checked').val();
        const goals = $('#quote-goals').val();

        const text = `Hi Classify Skill Education,%0A%0A*New Quote Request*%0A*Name:* ${name}%0A*Email:* ${email}%0A*Company:* ${company}%0A*Website:* ${website}%0A*Budget:* ${budget}%0A*Services:* ${services.join(', ')}%0A*Goals:* ${goals}`;
        
        window.open(`https://wa.me/919711044849?text=${text}`, '_blank');
        
        // Show Success Message
        $(this).parent().html(`
            <div class="max-w-xl w-full mx-auto text-center bg-gray-50 p-10 md:p-24 rounded-[40px] md:rounded-[60px] border border-gray-100 shadow-2xl">
              <div class="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg animate-bounce-slow">
                <i data-lucide="check" class="w-12 h-12 text-black"></i>
              </div>
              <h2 class="text-3xl md:text-4xl font-heading font-black mb-6">Proposal Request Sent!</h2>
              <p class="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed">
                Our strategy team has received your details. Expect a personalized analysis and quote in your inbox within 24 hours.
              </p>
              <a href="${window.location.origin}" class="inline-flex items-center justify-center font-semibold bg-black text-white px-8 py-3.5 rounded-full hover:bg-gray-800 transition-colors">Return Home</a>
            </div>
        `);
        if(typeof lucide !== 'undefined') lucide.createIcons();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ---------------------------------------------------------
    // Seamless Infinite Loop Slider Logic (JS + CSS Transform)
    // ---------------------------------------------------------
    const $track = $('#testimonial-track');
    const $slides = $track.find('.testimonial-slide');
    const totalOriginalSlides = $slides.length;
    let currentIndex = 0;
    let isTransitioning = false;

    // We clone the first 2 slides (since max desktop view is 2) and append to end
    // This allows us to slide 'past' the end, then silently jump back to start
    if(totalOriginalSlides > 0) {
        const $clones = $slides.slice(0, 2).clone(true).addClass('cloned-slide');
        $track.append($clones);
    }

    function getItemsPerView() {
        return window.innerWidth >= 768 ? 2 : 1;
    }

    function updateSlider(withTransition = true) {
        const itemsPerView = getItemsPerView();
        const percentage = 100 / itemsPerView;
        const translateX = -(currentIndex * percentage);
        
        if (withTransition) {
            $track.css('transition', 'transform 0.5s ease-in-out');
        } else {
            $track.css('transition', 'none');
        }
        
        $track.css('transform', `translateX(${translateX}%)`);
    }

    $('#testi-next').on('click', function() {
        if (isTransitioning) return;
        
        const itemsPerView = getItemsPerView();
        isTransitioning = true;
        currentIndex += itemsPerView;
        updateSlider(true);

        // Check if we hit the clones
        if (currentIndex >= totalOriginalSlides) {
            // Wait for transition to finish (500ms), then reset without transition
            setTimeout(function() {
                $track.css('transition', 'none');
                currentIndex = currentIndex - totalOriginalSlides;
                // Re-calculate transform immediately
                const percentage = 100 / itemsPerView;
                const translateX = -(currentIndex * percentage);
                $track.css('transform', `translateX(${translateX}%)`);
                
                isTransitioning = false;
            }, 500);
        } else {
            setTimeout(function() {
                isTransitioning = false;
            }, 500);
        }
    });

    $('#testi-prev').on('click', function() {
        if (isTransitioning) return;
        
        const itemsPerView = getItemsPerView();
        isTransitioning = true;

        if (currentIndex === 0) {
            // Jump to the end (virtual position) instantly
            $track.css('transition', 'none');
            currentIndex = totalOriginalSlides;
            const percentage = 100 / itemsPerView;
            const startX = -(currentIndex * percentage);
            $track.css('transform', `translateX(${startX}%)`);

            // Force reflow
            $track[0].offsetHeight; 

            // Slide back to the real item
            currentIndex -= itemsPerView;
            updateSlider(true);
            
            setTimeout(function() {
                isTransitioning = false;
            }, 500);
        } else {
            currentIndex -= itemsPerView;
            if (currentIndex < 0) currentIndex = 0; // Safety
            updateSlider(true);
            setTimeout(function() {
                isTransitioning = false;
            }, 500);
        }
    });

    $(window).on('resize', function() {
        // Reset to 0 on resize to prevent calculation errors
        $track.css('transition', 'none');
        currentIndex = 0;
        updateSlider(false);
    });

});
