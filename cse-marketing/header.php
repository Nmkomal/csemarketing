
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#FACC15',
                        dark: '#050505',
                    },
                    fontFamily: {
                        sans: ['Manrope', 'sans-serif'],
                        heading: ['Space Grotesk', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <?php wp_head(); ?>
</head>
<body <?php body_class('bg-white text-black antialiased selection:bg-yellow-400 selection:text-black'); ?>>
<?php wp_body_open(); ?>

<?php
// Define Nav Links at the top to ensure they are available for both Desktop and Mobile menus
$nav_links = [
    'home' => 'Home',
    'services' => 'Services',
    'about-us' => 'About Us',
    'industries' => 'Industries',
    'portfolio' => 'Portfolio'
];
?>

<!-- Header -->
<header id="main-header" class="fixed top-0 left-0 right-0 z-[60] transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-transparent">
    <!-- Added h-20 to ensure fixed height across all pages -->
    <div class="container mx-auto px-6 h-20 flex items-center justify-between">
        <!-- Logo -->
        <a href="<?php echo home_url(); ?>" class="flex items-center space-x-2 group cursor-pointer relative z-[60]">
            <img 
                src="https://i.postimg.cc/GhzNPgvR/uuytukt.png" 
                alt="Classify Skill Education" 
                class="h-9 md:h-12 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300" 
            />
            <span class="font-heading text-sm md:text-base font-bold tracking-tight text-black leading-tight hidden sm:block">
                Classify Skill <span class="text-yellow-500">Education</span>
            </span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-6">
            <?php
            global $post;
            $current_slug = $post ? $post->post_name : '';
            if(is_front_page()) $current_slug = 'home';

            foreach ($nav_links as $slug => $label) : 
                $url = ($slug === 'home') ? home_url('/') : home_url('/' . $slug);
                $isActive = ($current_slug === $slug);
            ?>
                <a href="<?php echo esc_url($url); ?>" class="nav-link text-[11px] font-black uppercase tracking-widest transition-all duration-300 border-b-2 py-0.5 <?php echo $isActive ? 'text-black border-yellow-400' : 'text-gray-500 border-transparent hover:text-black hover:border-gray-200'; ?>">
                    <?php echo esc_html($label); ?>
                </a>
            <?php endforeach; ?>
        </nav>

        <!-- CTA -->
        <div class="hidden lg:flex items-center space-x-3">
            <a href="<?php echo home_url('/contact'); ?>" class="inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full bg-yellow-400 text-black hover:bg-black hover:text-yellow-400 focus:ring-yellow-400 shadow-md shadow-yellow-400/20 text-xs px-5 py-2">
                Contact Us
            </a>
        </div>

        <!-- Mobile Toggle (Standardized Size & Position) -->
        <button id="mobile-menu-toggle" class="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-black border border-gray-100 relative z-[60] focus:outline-none hover:bg-yellow-400 transition-colors duration-300" aria-label="Toggle Menu">
            <i data-lucide="menu" class="w-5 h-5 menu-icon"></i>
            <i data-lucide="x" class="w-5 h-5 close-icon hidden"></i>
        </button>
    </div>
</header>

<!-- Mobile Menu Overlay -->
<div id="mobile-menu" class="fixed inset-0 z-[50] bg-white lg:hidden transition-all duration-300 ease-in-out flex flex-col opacity-0 translate-x-full pointer-events-none">
    <div class="flex-1 flex flex-col pt-24 pb-8 px-6 overflow-y-auto">
        <nav class="flex flex-col space-y-2 mb-8">
            <?php foreach ($nav_links as $slug => $label) : 
                 $url = ($slug === 'home') ? home_url('/') : home_url('/' . $slug);
            ?>
                <a href="<?php echo esc_url($url); ?>" class="mobile-nav-link text-2xl font-heading font-black tracking-tight border-b border-gray-50 py-4 flex items-center justify-between group text-black">
                    <?php echo esc_html($label); ?>
                    <i data-lucide="arrow-right" class="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></i>
                </a>
            <?php endforeach; ?>
        </nav>

        <div class="mt-auto space-y-6">
            <a href="<?php echo home_url('/contact'); ?>" class="mobile-nav-link w-full flex items-center justify-center py-4 text-lg font-bold bg-yellow-400 text-black rounded-2xl shadow-xl shadow-yellow-400/20">
                Contact Us
            </a>
            
            <div class="text-center">
                <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Contact Us</p>
                <a href="tel:+919711044849" class="block text-lg font-black text-black hover:text-yellow-500 transition-colors">+91 97110 44849</a>
            </div>
        </div>
    </div>
</div>
