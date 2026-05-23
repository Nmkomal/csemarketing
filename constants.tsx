
import React from 'react';
import { 
  Share2, MousePointer2, Search, Layout, Target, Video, UserPlus, Facebook, 
  Palette, Scissors, Smartphone, ShoppingBag, Home, Coffee, Sparkles, Plane, 
  GraduationCap, Stethoscope, Gem, Dumbbell, Activity, Building2,
  BarChart, Lightbulb, Zap, PenTool, Rocket
} from 'lucide-react';
import { Service, Industry, CaseStudy, Testimonial, Step, BlogPost } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: 'home' },
  { name: 'Services', href: 'services' },
  { name: 'About Us', href: 'about-us' },
  { name: 'Industries', href: 'industries-page' },
  { name: 'Portfolio', href: 'portfolio' }
];

export const SERVICES: Service[] = [
  { id: 'smm', title: 'SMM', description: 'Social Media Marketing to grow your audience.', icon: Share2 },
  { id: 'leads', title: 'Leads Generation', description: 'Get more customers and sales for your business.', icon: MousePointer2 },
  { id: 'seo', title: 'SEO', description: 'Rank higher on Google and get free traffic.', icon: Search },
  { id: 'web-design', title: 'Website Design', description: 'Professional websites that look good and sell more.', icon: Layout },
  { id: 'graphic-design', title: 'Graphic Designing', description: 'Creative designs for your social media and marketing.', icon: PenTool },
  { id: 'ppc', title: 'PPC', description: 'Paid ads on Google to get instant results.', icon: Target },
  { id: 'video-shoot', title: 'Video Shoot', description: 'High-quality video production for your brand.', icon: Video },
  { id: 'influencer', title: 'Influencer Marketing', description: 'Promote your brand with famous social media stars.', icon: UserPlus },
  { id: 'meta-ads', title: 'Meta Ads', description: 'Ads on Facebook and Instagram to reach more people.', icon: Facebook },
  { id: 'branding', title: 'Branding', description: 'Logo, colors, and style that make you stand out.', icon: Palette },
  { id: 'video-edit', title: 'Video Editing', description: 'Professional editing for reels, youtube, and ads.', icon: Scissors },
  { id: 'app-dev', title: 'App Development', description: 'Custom mobile apps for iOS and Android.', icon: Smartphone }
];

export const SERVICE_DETAILS: Record<string, any> = {
  'smm': {
    title: 'Social Media Marketing (SMM)',
    overview: 'We manage your social media accounts like Instagram, Facebook, and LinkedIn. We post content, reply to comments, and help you grow your followers.',
    problems: ['Low engagement', 'No time to post', 'Few followers'],
    process: ['Plan Content', 'Create Designs', 'Post Daily', 'Engage with Fans'],
    tools: ['Instagram', 'Facebook', 'LinkedIn', 'Canva'],
    benefits: ['More followers', 'Active community', 'Better brand image'],
    result: 'Consistent growth in followers and likes.'
  },
  'leads': {
    title: 'Lead Generation',
    overview: 'We find people who are interested in your business and want to buy from you. We use smart strategies to get you phone numbers and emails of potential clients.',
    problems: ['Not enough customers', 'Empty sales pipeline', 'Low quality leads'],
    process: ['Identify Target Audience', 'Create Offers', 'Run Campaigns', 'Collect Leads'],
    tools: ['Facebook Ads', 'Google Ads', 'Landing Pages'],
    benefits: ['More sales calls', 'Higher revenue', 'Busy sales team'],
    result: 'Steady flow of new customers every month.'
  },
  'seo': {
    title: 'SEO (Search Engine Optimization)',
    overview: 'We help your website appear at the top of Google search results. When people search for your services, they will find you first.',
    problems: ['Website not on Google', 'No organic traffic', 'Competitors ranking higher'],
    process: ['Keyword Research', 'Fix Website Errors', 'Write Content', 'Build Links'],
    tools: ['Google Search Console', 'Analytics', 'Keyword Tools'],
    benefits: ['Free traffic', 'Long-term results', 'Trust from customers'],
    result: 'Rank on Page 1 of Google.'
  },
  'web-design': {
    title: 'Website Design',
    overview: 'We build modern, fast, and mobile-friendly websites. Your website is your online shop/office, so we make sure it looks perfect.',
    problems: ['Ugly website', 'Slow loading', 'Not mobile friendly'],
    process: ['Design Layout', 'Develop Website', 'Add Content', 'Launch'],
    tools: ['WordPress', 'React', 'Shopify'],
    benefits: ['Professional look', 'Easy to use', 'Works on mobile'],
    result: 'A website you are proud to show.'
  },
  'graphic-design': {
    title: 'Graphic Designing',
    overview: 'We create beautiful visuals for your brand. From social media posts to brochures and banners, we make sure everything looks professional and catchy.',
    problems: ['Ugly designs', 'Inconsistent look', 'Low engagement'],
    process: ['Understand Needs', 'Create Concepts', 'Design', 'Final Polish'],
    tools: ['Photoshop', 'Illustrator', 'Canva'],
    benefits: ['Better brand image', 'More attention', 'Professional look'],
    result: 'Eye-catching designs that sell.'
  },
  'ppc': {
    title: 'PPC (Pay Per Click)',
    overview: 'We run ads on Google where you only pay when someone clicks. It is the fastest way to get visitors to your website.',
    problems: ['Need sales now', 'New website with no traffic'],
    process: ['Setup Ad Account', 'Write Ads', 'Set Budget', 'Optimize'],
    tools: ['Google Ads', 'Bing Ads'],
    benefits: ['Instant traffic', 'Control budget', 'Track every sale'],
    result: 'Immediate visitors and calls.'
  },
  'video-shoot': {
    title: 'Video Shoot',
    overview: 'We come to your location and shoot professional videos. Whether it is for ads, social media, or your website, we handle the camera, lighting, and sound.',
    problems: ['Bad phone videos', 'Poor lighting', 'No equipment'],
    process: ['Scripting', 'Filming', 'Direction', 'Production'],
    tools: ['Professional Cameras', 'Lights', 'Mics'],
    benefits: ['High quality look', 'Engaging content', 'Showcase products better'],
    result: 'Cinematic videos for your brand.',
  },
  'influencer': {
    title: 'Influencer Marketing',
    overview: 'We connect you with popular social media influencers who can promote your products to their followers.',
    problems: ['Hard to reach new people', 'Need social proof'],
    process: ['Find Influencers', 'Negotiate Deal', 'Review Content', 'Post'],
    tools: ['Instagram', 'YouTube', 'TikTok'],
    benefits: ['Reach millions', 'Trusted recommendations', 'Viral potential'],
    result: 'Brand exposure to huge audiences.'
  },
  'meta-ads': {
    title: 'Meta Ads (Facebook & Instagram)',
    overview: 'We run targeted ads on Facebook and Instagram to show your products to the right people based on their interests and behavior.',
    problems: ['Posts not reaching enough people', 'Need targeted sales'],
    process: ['Audience Targeting', 'Ad Creative', 'Campaign Setup', 'Monitoring'],
    tools: ['Meta Ads Manager'],
    benefits: ['Visual advertising', 'Cheap reach', 'Retargeting'],
    result: 'High return on ad spend.'
  },
  'branding': {
    title: 'Branding',
    overview: 'We give your business a personality. From your logo to the colors you use, we make sure everything looks consistent and professional.',
    problems: ['Confusing brand image', 'Old logo', 'No style guide'],
    process: ['Logo Design', 'Color Palette', 'Typography', 'Brand Guidelines'],
    tools: ['Illustrator', 'Photoshop'],
    benefits: ['Memorable brand', 'Professional image', 'Customer trust'],
    result: 'A brand identity people remember.'
  },
  'video-edit': {
    title: 'Video Editing',
    overview: 'You send us raw footage, and we turn it into polished videos with music, text, and effects.',
    problems: ['Boring videos', 'Long raw footage', 'No time to edit'],
    process: ['Cutting', 'Color Grading', 'Adding Music', 'Effects'],
    tools: ['Premiere Pro', 'After Effects'],
    benefits: ['Engaging reels', 'Professional ads', 'Save time'],
    result: 'Ready-to-post video content.'
  },
  'app-dev': {
    title: 'App Development',
    overview: 'We create custom mobile apps for your business. Perfect for loyalty programs, booking systems, or online stores.',
    problems: ['Need a custom solution', 'Website not enough'],
    process: ['Design App', 'Code Features', 'Test', 'Publish to Stores'],
    tools: ['iOS', 'Android', 'Flutter'],
    benefits: ['Direct customer channel', 'Push notifications', 'Better experience'],
    result: 'Your own app on the App Store.'
  }
};

export const WHY_CHOOSE_US = [
  { title: 'Proven Results', description: 'We focus on getting you real customers and sales, not just likes.', icon: BarChart },
  { title: 'Creative Team', description: 'Our designers and editors make your brand look amazing.', icon: Palette },
  { title: 'Expert Strategy', description: 'We know what works in your industry and use the best methods.', icon: Lightbulb },
  { title: 'Fast Execution', description: 'We work quickly to get your campaigns live and generating money.', icon: Zap }
];

export const INDUSTRIES: Industry[] = [
  { 
    id: 'fashion', 
    name: 'Fashion', 
    icon: ShoppingBag, 
    description: 'Clothing Brands & Boutiques',
    workDescription: "We create a strong content plan for fashion brands. We make viral reels, trendy videos, and do professional video editing to grow their brand on social media.",
    growthMethod: "We run targeted ads to generate sales and bring customers who are interested in buying fashion products."
  },
  { 
    id: 'interior', 
    name: 'Interior Design', 
    icon: Home, 
    description: 'Designers & Decorators',
    workDescription: "We handle social media marketing and also create professional interior websites. We showcase their work online to build a strong brand image.",
    growthMethod: "We generate qualified leads of people who genuinely want interior work and are ready to connect."
  },
  { 
    id: 'realestate', 
    name: 'Real Estate', 
    icon: Building2, 
    description: 'Agents & Developers',
    workDescription: "We grow real estate brands online by improving their visibility and digital presence through social media and websites.",
    growthMethod: "We run ads and generate qualified enquiries and leads from buyers who are actively searching for properties."
  },
  { 
    id: 'cafe', 
    name: 'Café', 
    icon: Coffee, 
    description: 'Coffee Shops & Restaurants',
    workDescription: "We build online brand visibility through posts, photos, posters, reels, and video editing that reflects the café vibe.",
    growthMethod: "We run ads and local marketing to increase walk-in customers and daily footfall."
  },
  { 
    id: 'salon', 
    name: 'Salon', 
    icon: Scissors, 
    description: 'Hair & Beauty Salons',
    workDescription: "We create high-quality content that builds the salon’s brand and shows their services professionally. We also create salon websites.",
    growthMethod: "We run ads to bring walk-in customers, generate leads, and convert them into paying clients."
  },
  { 
    id: 'beauty', 
    name: 'Beauty', 
    icon: Sparkles, 
    description: 'Cosmetics & Skincare Brands',
    workDescription: "We manage complete branding through social media marketing, custom poster design, graphics, video editing, and influencer marketing. We also create websites and e-commerce stores.",
    growthMethod: "We run ads to generate sales and help beauty brands grow their customer base."
  },
  { 
    id: 'travel', 
    name: 'Travel', 
    icon: Plane, 
    description: 'Travel Agencies & Tourism',
    workDescription: "We build a strong online brand for travel agencies through social media and websites, showcasing their packages and services.",
    growthMethod: "We run ads to generate leads from people who are planning trips and looking for travel packages."
  },
  { 
    id: 'education', 
    name: 'Education', 
    icon: GraduationCap, 
    description: 'Schools, Institutes & Courses',
    workDescription: "We create a professional online presence through social media marketing and websites to build trust with students and parents.",
    growthMethod: "We generate qualified admission enquiries for courses and institutions."
  },
  { 
    id: 'doctors', 
    name: 'Doctors', 
    icon: Stethoscope, 
    description: 'Clinics, Dentists & Hospitals',
    workDescription: "We build doctors’ online brands through social media marketing and professional websites.",
    growthMethod: "We generate qualified leads and walk-in patients for clinics and hospitals."
  },
  { 
    id: 'jewellery', 
    name: 'Jewellery', 
    icon: Gem, 
    description: 'Jewelry Stores',
    workDescription: "We edit professional jewellery photos, create posters, and manage social media branding. We also build jewellery and e-commerce websites.",
    growthMethod: "We run ads to generate sales and customer enquiries."
  },
  { 
    id: 'health', 
    name: 'Health & Fitness', 
    icon: Activity, 
    description: 'Gyms & Trainers',
    workDescription: "We manage social media marketing and create websites to build a strong fitness brand.",
    growthMethod: "We generate leads and enquiries from people interested in joining gyms or fitness programs."
  },
  { 
    id: 'tech', 
    name: 'Tech & Startups', 
    icon: Rocket, 
    description: 'Startups & Digital Businesses',
    workDescription: "We help startups grow online by building their brand through social media marketing, creative content, and websites.",
    growthMethod: "We run ads to attract clients and create high-quality creatives to increase conversions."
  }
];

export const TEAM = [
  { name: 'Shweta Sharma', role: 'Founder', image: 'https://i.postimg.cc/ZK421Tjh/Yellow-and-Brown-Illustrated-Makar-Sankranti-Greetings-Instagram-Post.png', bio: 'Visionary Leader & Strategist', experience: '7+ Years' },
  { name: 'Akshay Singh', role: 'Co-Founder', image: 'https://i.postimg.cc/52xQWXkF/Yellow-and-Brown-Illustrated-Makar-Sankranti-Greetings-Instagram-Post-(1).png', bio: 'Digital Marketing & Operations Expert', experience: '6+ Years' },
  { name: 'Mohit Deswal', role: 'Video Editor', image: 'https://i.postimg.cc/nL02B8NM/Yellow-and-Brown-Illustrated-Makar-Sankranti-Greetings-Instagram-Post-(6).jpg', bio: 'Visual Storyteller & Post-Production Specialist', experience: '3+ Years' },
  { name: 'Komal Mukhiya', role: 'Marketing Manager', image: 'https://i.postimg.cc/8PjzpCWp/Yellow-and-Brown-Illustrated-Makar-Sankranti-Greetings-Instagram-Post-(7)-(1).jpg', bio: 'Campaign Strategy & Client Success', experience: '2 Years' },
];

export const FAQS = [
  { question: 'How quickly can I see results?', answer: 'For ads (PPC/Meta), you can see results in a few days. For SEO, it takes 3-6 months.' },
  { question: 'Do you create the content?', answer: 'Yes! We create all the designs, videos, and captions for your social media and ads.' },
  { question: 'What is your pricing?', answer: 'It depends on your needs. Contact us for a free quote customized for your budget.' },
  { question: 'Will I get reports?', answer: 'Yes, we send you simple reports every month showing how much you grew and what we did.' }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '10 Marketing Trends to Watch in 2024',
    summary: 'Discover the latest strategies that are shaping the future of digital marketing. From AI-driven content to hyper-personalization, stay ahead of the curve.',
    date: 'Oct 15, 2023',
    category: 'Business Growth',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'How to Optimize Your Instagram Bio',
    summary: 'Your bio is your digital business card. Learn how to craft a compelling bio that converts visitors into followers and customers.',
    date: 'Sep 28, 2023',
    category: 'Instagram Tips',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'The Ultimate Guide to Local SEO',
    summary: 'Want to rank higher on Google Maps? Follow our step-by-step guide to dominating local search results for your business.',
    date: 'Sep 10, 2023',
    category: 'SEO Guides',
    image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Maximizing ROI on Facebook Ads',
    summary: 'Stop wasting money on ads that don\'t convert. Learn the secret targeting strategies we use to get high returns for our clients.',
    date: 'Aug 22, 2023',
    category: 'Ads Strategy',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  }
];

export const PROCESS_STEPS: Step[] = [
  { number: '01', title: 'Consultation', description: 'We analyze your business goals and identify opportunities for growth.' },
  { number: '02', title: 'Strategy', description: 'We create a custom roadmap tailored to your specific market and audience.' },
  { number: '03', title: 'Execution', description: 'Our experts implement the plan using cutting-edge tools and creativity.' },
  { number: '04', title: 'Result', description: 'We monitor results and refine strategies to maximize your ROI.' }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    client: 'Urban Fashion',
    category: 'Social Media Marketing',
    result: '300% Growth',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    client: 'TechStart Inc.',
    category: 'SEO & Content',
    result: '#1 Google Rank',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    client: 'Green Homes',
    category: 'Lead Generation',
    result: '50+ Leads/Mo',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    client: 'FitLife Gym',
    category: 'PPC Advertising',
    result: '5x ROAS',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Arham Interior',
    role: 'Client',
    company: 'Interior Design',
    content: 'CSE Marketing handled our social media marketing and paid ads with a clear focus on lead generation. We started receiving quality enquiries regularly, and our brand visibility improved significantly. Their strategy is practical and result-driven.',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: '2',
    author: 'The New Nari',
    role: 'Client',
    company: 'Fashion & Clothing Brand',
    content: 'As a growing fashion brand, we needed strong social media presence and sales support. CSE Marketing helped us with SMM and performance campaigns that resulted in increased engagement and consistent sales. Very professional execution.',
    avatar: 'https://i.pravatar.cc/150?img=5'
  },
  {
    id: '3',
    author: 'OSR Foundation',
    role: 'Client',
    company: 'NGO / Social Organization',
    content: 'CSE Marketing developed our website and managed our social media platforms. The website looks professional and has helped us reach more people online. Their team understood our purpose and delivered exactly what we needed.',
    avatar: 'https://i.pravatar.cc/150?img=3'
  },
  {
    id: '4',
    author: 'Omkar Interior',
    role: 'Client',
    company: 'Interior Services',
    content: 'CSE Marketing managed our Instagram, video editing, and lead generation. The content quality and reels performance improved a lot, and we started getting genuine enquiries. The team works fast and understands the interior market well.',
    avatar: 'https://i.pravatar.cc/150?img=8'
  },
  {
    id: '5',
    author: 'Chaap & Curry Junction',
    role: 'Client',
    company: 'Food & Restaurant Brand',
    content: 'CSE Marketing supported our brand with creative video editing and social media growth. Our reels started getting better reach, and our local audience engagement increased. Their content helped us build a strong food brand presence online.',
    avatar: 'https://i.pravatar.cc/150?img=11'
  },
  {
    id: '6',
    author: 'Wear Vardaan',
    role: 'Client',
    company: 'Fashion & Clothing Brand',
    content: 'CSE Marketing created our website and helped generate sales through digital channels. The website design is clean, user-friendly, and optimized for conversions. We saw a positive impact on our online sales.',
    avatar: 'https://i.pravatar.cc/150?img=9'
  },
  {
    id: '7',
    author: 'Urban Lifestyle Store',
    role: 'Client',
    company: 'Retail & Lifestyle',
    content: 'CSE Marketing provided complete digital marketing support including strategy, creatives, and ads. Everything was well-planned and performance-focused. We could clearly see improvement in reach, engagement, and enquiries.',
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    id: '8',
    author: 'Bloomify Studio',
    role: 'Client',
    company: 'Startup / Creative Brand',
    content: 'CSE Marketing helped us build our digital presence from the ground up. From content creation to paid campaigns, everything was handled professionally. A reliable partner for brands looking for real growth.',
    avatar: 'https://i.pravatar.cc/150?img=32'
  }
];
