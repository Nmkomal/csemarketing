
<?php 
/* Template Name: FAQ Template */
get_header(); 
?>

<div class="bg-white pt-32 pb-24">
    <!-- Header -->
    <section class="container mx-auto px-6 mb-24">
        <div class="max-w-4xl">
          <h4 class="text-yellow-600 font-black uppercase tracking-[0.3em] text-sm mb-6">FAQ</h4>
          <h1 class="text-5xl md:text-8xl font-heading font-black mb-10 leading-[1.1]">
            Curiosity <br />
            <span class="text-yellow-500">& Clarity.</span>
          </h1>
          <p class="text-2xl text-gray-600 font-medium leading-relaxed">
            Everything you need to know about partnering with Classify Skill Education for your next growth phase.
          </p>
        </div>
    </section>

    <section class="container mx-auto px-6 mb-24 grid lg:grid-cols-12 gap-16">
        <!-- Accordion List -->
        <div class="lg:col-span-8 space-y-6">
            <?php 
            $faqs = [
                ['q' => 'How quickly can I see results?', 'a' => 'For ads (PPC/Meta), you can see results in a few days. For SEO, it takes 3-6 months.'],
                ['q' => 'Do you create the content?', 'a' => 'Yes! We create all the designs, videos, and captions for your social media and ads.'],
                ['q' => 'What is your pricing?', 'a' => 'It depends on your needs. Contact us for a free quote customized for your budget.'],
                ['q' => 'Will I get reports?', 'a' => 'Yes, we send you simple reports every month showing how much you grew and what we did.'],
            ];
            foreach($faqs as $i => $faq): ?>
            <div class="faq-item border border-gray-100 rounded-[40px] overflow-hidden transition-all duration-300">
                <button class="faq-button w-full p-8 md:p-10 flex items-center justify-between text-left focus:outline-none">
                    <span class="text-xl md:text-2xl font-black pr-8"><?php echo $faq['q']; ?></span>
                    <div class="faq-icon-wrapper w-10 h-10 rounded-full bg-gray-100 text-black flex items-center justify-center shrink-0 transition-colors">
                        <i data-lucide="plus" class="faq-icon w-5 h-5"></i>
                    </div>
                </button>
                <div class="faq-answer px-8 md:px-10 pb-10 hidden">
                    <p class="text-lg text-gray-500 leading-relaxed max-w-2xl">
                        <?php echo $faq['a']; ?>
                    </p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>

        <!-- Support Card -->
        <div class="lg:col-span-4">
          <div class="sticky top-32 bg-black text-white p-12 rounded-[50px] overflow-hidden text-center">
             <div class="absolute top-0 left-0 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl"></div>
             <i data-lucide="help-circle" class="w-16 h-16 text-yellow-400 mx-auto mb-8"></i>
             <h3 class="text-3xl font-black mb-6">Still have questions?</h3>
             <p class="text-gray-400 mb-10 leading-relaxed">
               Can't find the answer you're looking for? Reach out to our strategy team directly for a personalized chat.
             </p>
             <a href="<?php echo home_url('/contact'); ?>" class="inline-flex items-center justify-center w-full py-3.5 bg-yellow-400 text-black font-bold rounded-2xl mb-6 hover:bg-white transition-colors">Chat with Us</a>
             <p class="text-xs font-bold uppercase tracking-widest text-gray-500">Typical response time: 2 hours</p>
          </div>
        </div>
    </section>

    <!-- Categories CTA -->
    <section class="container mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-8">
            <?php
            $cats = [
                ['title' => 'Strategic Planning', 'desc' => 'Questions about how we build roadmaps.', 'icon' => 'message-circle'],
                ['title' => 'Pricing & Tiers', 'desc' => 'Understanding our different investment levels.', 'icon' => 'help-circle'],
                ['title' => 'Execution & Flow', 'desc' => 'How we manage the daily workflow of your account.', 'icon' => 'help-circle'],
            ];
            foreach($cats as $c): ?>
            <div class="bg-gray-50 p-10 rounded-[40px] border border-gray-100 hover:border-yellow-400 transition-all group">
              <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors">
                <i data-lucide="<?php echo $c['icon']; ?>" class="w-6 h-6 text-black"></i>
              </div>
              <h4 class="text-xl font-bold mb-3"><?php echo $c['title']; ?></h4>
              <p class="text-gray-500 text-sm leading-relaxed mb-6"><?php echo $c['desc']; ?></p>
              <span class="text-xs font-black uppercase tracking-widest text-black group-hover:text-yellow-600 cursor-pointer flex items-center">
                Explore Category <i data-lucide="chevron-right" class="ml-1 w-3 h-3"></i>
              </span>
            </div>
            <?php endforeach; ?>
        </div>
    </section>
</div>

<?php get_footer(); ?>
