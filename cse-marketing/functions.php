
<?php

if ( ! function_exists( 'cse_marketing_setup' ) ) :
	function cse_marketing_setup() {
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );

		register_nav_menus( array(
			'primary' => esc_html__( 'Primary Menu', 'cse-marketing' ),
		) );
	}
endif;
add_action( 'after_setup_theme', 'cse_marketing_setup' );

function cse_marketing_scripts() {
	// Tailwind CSS
	wp_enqueue_script( 'tailwind', 'https://cdn.tailwindcss.com', array(), '3.4.0', false );

	// Google Fonts
	wp_enqueue_style( 'cse-fonts', 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap', array(), null );

	// Lucide Icons
	wp_enqueue_script( 'lucide', 'https://unpkg.com/lucide@latest', array(), 'latest', false );

	// Theme CSS
	wp_enqueue_style( 'cse-style', get_template_directory_uri() . '/style.css', array(), '1.0.0' );
	wp_enqueue_style( 'cse-main-css', get_template_directory_uri() . '/assets/css/main.css', array(), '1.0.0' );

	// Theme JS
	wp_enqueue_script( 'cse-main-js', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'cse_marketing_scripts' );

// Allow SVG Uploads
function cse_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cse_mime_types');

// Service Data Helper
function cse_get_service_data($slug = null) {
    $data = [
        'smm' => [
            'title' => 'Social Media Marketing (SMM)',
            'overview' => 'We manage your social media accounts like Instagram, Facebook, and LinkedIn. We post content, reply to comments, and help you grow your followers.',
            'problems' => ['Low engagement', 'No time to post', 'Few followers'],
            'process' => ['Plan Content', 'Create Designs', 'Post Daily', 'Engage with Fans'],
            'tools' => ['Instagram', 'Facebook', 'LinkedIn', 'Canva'],
            'benefits' => ['More followers', 'Active community', 'Better brand image'],
            'result' => 'Consistent growth in followers and likes.',
            'icon' => 'share-2'
        ],
        'leads' => [
            'title' => 'Lead Generation',
            'overview' => 'We find people who are interested in your business and want to buy from you. We use smart strategies to get you phone numbers and emails of potential clients.',
            'problems' => ['Not enough customers', 'Empty sales pipeline', 'Low quality leads'],
            'process' => ['Identify Target Audience', 'Create Offers', 'Run Campaigns', 'Collect Leads'],
            'tools' => ['Facebook Ads', 'Google Ads', 'Landing Pages'],
            'benefits' => ['More sales calls', 'Higher revenue', 'Busy sales team'],
            'result' => 'Steady flow of new customers every month.',
            'icon' => 'mouse-pointer-2'
        ],
        'seo' => [
            'title' => 'SEO (Search Engine Optimization)',
            'overview' => 'We help your website appear at the top of Google search results. When people search for your services, they will find you first.',
            'problems' => ['Website not on Google', 'No organic traffic', 'Competitors ranking higher'],
            'process' => ['Keyword Research', 'Fix Website Errors', 'Write Content', 'Build Links'],
            'tools' => ['Google Search Console', 'Analytics', 'Keyword Tools'],
            'benefits' => ['Free traffic', 'Long-term results', 'Trust from customers'],
            'result' => 'Rank on Page 1 of Google.',
            'icon' => 'search'
        ],
        'web-design' => [
            'title' => 'Website Design',
            'overview' => 'We build modern, fast, and mobile-friendly websites. Your website is your online shop/office, so we make sure it looks perfect.',
            'problems' => ['Ugly website', 'Slow loading', 'Not mobile friendly'],
            'process' => ['Design Layout', 'Develop Website', 'Add Content', 'Launch'],
            'tools' => ['WordPress', 'React', 'Shopify'],
            'benefits' => ['Professional look', 'Easy to use', 'Works on mobile'],
            'result' => 'A website you are proud to show.',
            'icon' => 'layout'
        ],
        'graphic-design' => [ 
            'title' => 'Graphic Designing',
            'overview' => 'We create beautiful visuals for your brand. From social media posts to brochures and banners, we make sure everything looks professional and catchy.',
            'problems' => ['Ugly designs', 'Inconsistent look', 'Low engagement'],
            'process' => ['Understand Needs', 'Create Concepts', 'Design', 'Final Polish'],
            'tools' => ['Photoshop', 'Illustrator', 'Canva'],
            'benefits' => ['Better brand image', 'More attention', 'Professional look'],
            'result' => 'Eye-catching designs that sell.',
            'icon' => 'pen-tool'
        ],
        'ppc' => [
            'title' => 'PPC (Pay Per Click)',
            'overview' => 'We run ads on Google where you only pay when someone clicks. It is the fastest way to get visitors to your website.',
            'problems' => ['Need sales now', 'New website with no traffic'],
            'process' => ['Setup Ad Account', 'Write Ads', 'Set Budget', 'Optimize'],
            'tools' => ['Google Ads', 'Bing Ads'],
            'benefits' => ['Instant traffic', 'Control budget', 'Track every sale'],
            'result' => 'Immediate visitors and calls.',
            'icon' => 'target'
        ],
        'video-shoot' => [
            'title' => 'Video Shoot',
            'overview' => 'We come to your location and shoot professional videos. Whether it is for ads, social media, or your website, we handle the camera, lighting, and sound.',
            'problems' => ['Bad phone videos', 'Poor lighting', 'No equipment'],
            'process' => ['Scripting', 'Filming', 'Direction', 'Production'],
            'tools' => ['Professional Cameras', 'Lights', 'Mics'],
            'benefits' => ['High quality look', 'Engaging content', 'Showcase products better'],
            'result' => 'Cinematic videos for your brand.',
            'icon' => 'video'
        ],
        'influencer' => [
            'title' => 'Influencer Marketing',
            'overview' => 'We connect you with popular social media influencers who can promote your products to their followers.',
            'problems' => ['Hard to reach new people', 'Need social proof'],
            'process' => ['Find Influencers', 'Negotiate Deal', 'Review Content', 'Post'],
            'tools' => ['Instagram', 'YouTube', 'TikTok'],
            'benefits' => ['Reach millions', 'Trusted recommendations', 'Viral potential'],
            'result' => 'Brand exposure to huge audiences.',
            'icon' => 'user-plus'
        ],
        'meta-ads' => [
            'title' => 'Meta Ads (Facebook & Instagram)',
            'overview' => 'We run targeted ads on Facebook and Instagram to show your products to the right people based on their interests and behavior.',
            'problems' => ['Posts not reaching enough people', 'Need targeted sales'],
            'process' => ['Audience Targeting', 'Ad Creative', 'Campaign Setup', 'Monitoring'],
            'tools' => ['Meta Ads Manager'],
            'benefits' => ['Visual advertising', 'Cheap reach', 'Retargeting'],
            'result' => 'High return on ad spend.',
            'icon' => 'facebook'
        ],
        'branding' => [
            'title' => 'Branding',
            'overview' => 'We give your business a personality. From your logo to the colors you use, we make sure everything looks consistent and professional.',
            'problems' => ['Confusing brand image', 'Old logo', 'No style guide'],
            'process' => ['Logo Design', 'Color Palette', 'Typography', 'Brand Guidelines'],
            'tools' => ['Illustrator', 'Photoshop'],
            'benefits' => ['Memorable brand', 'Professional image', 'Customer trust'],
            'result' => 'A brand identity people remember.',
            'icon' => 'palette'
        ],
        'video-edit' => [ 
            'title' => 'Video Editing',
            'overview' => 'You send us raw footage, and we turn it into polished videos with music, text, and effects.',
            'problems' => ['Boring videos', 'Long raw footage', 'No time to edit'],
            'process' => ['Cutting', 'Color Grading', 'Adding Music', 'Effects'],
            'tools' => ['Premiere Pro', 'After Effects'],
            'benefits' => ['Engaging reels', 'Professional ads', 'Save time'],
            'result' => 'Ready-to-post video content.',
            'icon' => 'scissors'
        ],
        'app-dev' => [
            'title' => 'App Development',
            'overview' => 'We create custom mobile apps for your business. Perfect for loyalty programs, booking systems, or online stores.',
            'problems' => ['Need a custom solution', 'Website not enough'],
            'process' => ['Design App', 'Code Features', 'Test', 'Publish to Stores'],
            'tools' => ['iOS', 'Android', 'Flutter'],
            'benefits' => ['Direct customer channel', 'Push notifications', 'Better experience'],
            'result' => 'Your own app on the App Store.',
            'icon' => 'smartphone'
        ]
    ];

    if ($slug) {
        return isset($data[$slug]) ? $data[$slug] : null;
    }
    return $data;
}
