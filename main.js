
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

    // WhatsApp Form Handler
    $('.whatsapp-form').on('submit', function(e) {
        e.preventDefault();
        const form = $(this);
        const name = form.find('input[name="name"]').val();
        const phone = form.find('input[name="phone"]').val();
        const email = form.find('input[name="email"]').val();
        const message = form.find('textarea[name="message"]').val();
        const service = form.find('select[name="service"]').val() || 'General Inquiry';

        if (!name || !phone) {
            alert('Please fill in Name and Phone number.');
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

});
