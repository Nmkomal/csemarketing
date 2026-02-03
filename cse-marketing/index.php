
<?php get_header(); ?>

<div class="bg-white pt-32 pb-24">
    <!-- Header -->
    <section class="container mx-auto px-6 mb-20 text-center lg:text-left">
        <h4 class="text-yellow-600 font-black uppercase tracking-[0.3em] text-sm mb-6">Our Blog</h4>
        <h1 class="text-5xl md:text-8xl font-heading font-black mb-10 leading-[1.1]">
          Marketing <br />
          <span class="text-yellow-500">Tips & Tricks</span>
        </h1>
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <p class="text-2xl text-gray-500 max-w-2xl font-medium">
            Learn simple ways to improve your marketing, SEO, and social media game.
          </p>
          <div class="relative w-full lg:w-96">
            <form method="get" action="<?php echo esc_url(home_url('/')); ?>">
                <input 
                  type="text" 
                  name="s"
                  placeholder="Search..." 
                  class="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-yellow-400 transition-colors"
                />
                <i data-lucide="search" class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"></i>
            </form>
          </div>
        </div>
    </section>

    <!-- Featured Post (Latest 1) -->
    <?php 
    $featured_args = array(
        'posts_per_page' => 1,
        'ignore_sticky_posts' => 1
    );
    $featured_query = new WP_Query($featured_args);
    if ($featured_query->have_posts()) :
    ?>
    <section class="container mx-auto px-6 mb-24">
        <?php while ($featured_query->have_posts()) : $featured_query->the_post(); 
             $thumb_url = get_the_post_thumbnail_url(get_the_ID(), 'full');
        ?>
        <a href="<?php the_permalink(); ?>" class="group relative bg-black rounded-[60px] overflow-hidden grid lg:grid-cols-2 gap-0 shadow-2xl">
          <div class="aspect-[16/10] lg:aspect-auto">
            <?php if($thumb_url): ?>
            <img 
              src="<?php echo esc_url($thumb_url); ?>" 
              alt="<?php the_title(); ?>" 
              class="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            <?php else: ?>
            <div class="w-full h-full bg-gray-800"></div>
            <?php endif; ?>
          </div>
          <div class="p-12 md:p-20 flex flex-col justify-center">
            <?php 
            $cats = get_the_category();
            $cat_name = !empty($cats) ? $cats[0]->name : 'Marketing';
            ?>
            <span class="inline-block px-4 py-1 bg-yellow-400 text-black text-xs font-black uppercase tracking-widest rounded-full mb-8 w-fit">
              Latest Post • <?php echo esc_html($cat_name); ?>
            </span>
            <h2 class="text-4xl md:text-5xl font-heading font-black text-white mb-8 leading-tight group-hover:text-yellow-400 transition-colors">
              <?php the_title(); ?>
            </h2>
            <div class="text-xl text-gray-400 mb-10 leading-relaxed line-clamp-3">
              <?php the_excerpt(); ?>
            </div>
            <div class="flex items-center space-x-6 text-sm font-bold text-gray-500 uppercase tracking-widest mb-12">
              <span class="flex items-center"><i data-lucide="calendar" class="w-4 h-4 mr-2"></i> <?php echo get_the_date('M d, Y'); ?></span>
              <span class="flex items-center"><i data-lucide="clock" class="w-4 h-4 mr-2"></i> 5 min read</span>
            </div>
            <span class="inline-flex items-center justify-center font-semibold bg-yellow-400 text-black px-8 py-3.5 rounded-2xl w-fit group-hover:bg-white transition-colors">Read More</span>
          </div>
        </a>
        <?php endwhile; wp_reset_postdata(); ?>
    </section>
    <?php endif; ?>

    <!-- Category List -->
    <section class="container mx-auto px-6 mb-16">
        <div class="flex flex-wrap gap-3">
          <a href="<?php echo esc_url(get_permalink( get_option( 'page_for_posts' ) )); ?>" class="px-6 py-2 bg-black text-white rounded-full text-sm font-bold transition-all">All Posts</a>
          <?php 
          $categories = get_categories();
          foreach($categories as $category) {
             echo '<a href="' . get_category_link($category->term_id) . '" class="px-6 py-2 bg-gray-50 hover:bg-yellow-400 hover:text-black rounded-full text-sm font-bold transition-all">' . $category->name . '</a>';
          }
          ?>
        </div>
    </section>

    <!-- Posts Grid (Offset 1) -->
    <section class="container mx-auto px-6 mb-24">
        <div class="grid md:grid-cols-3 gap-12">
          <?php 
          // Default loop checks
          $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
          $args = array(
              'post_type' => 'post',
              'paged' => $paged,
              'offset' => 1 // Skip the featured one
          );
          $query = new WP_Query($args);
          if($query->have_posts()): while($query->have_posts()): $query->the_post(); 
             $thumb_url = get_the_post_thumbnail_url(get_the_ID(), 'medium_large');
             $cats = get_the_category();
             $cat_name = !empty($cats) ? $cats[0]->name : 'Article';
          ?>
            <a href="<?php the_permalink(); ?>" class="group cursor-pointer">
              <div class="relative aspect-[16/10] rounded-[40px] overflow-hidden mb-8 shadow-md">
                <?php if($thumb_url): ?>
                <img 
                  src="<?php echo esc_url($thumb_url); ?>" 
                  alt="<?php the_title(); ?>" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <?php else: ?>
                <div class="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300"><i data-lucide="image" class="w-12 h-12"></i></div>
                <?php endif; ?>
              </div>
              <div class="px-2">
                <span class="text-yellow-600 font-black text-xs uppercase tracking-widest mb-4 block"><?php echo esc_html($cat_name); ?></span>
                <h3 class="text-2xl font-black mb-4 leading-tight group-hover:text-yellow-600 transition-colors"><?php the_title(); ?></h3>
                <div class="text-gray-500 leading-relaxed mb-6 line-clamp-3 text-sm"><?php the_excerpt(); ?></div>
                <div class="flex items-center text-black font-black text-xs uppercase tracking-widest group/link">
                  Read Article 
                  <i data-lucide="arrow-right" class="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform"></i>
                </div>
              </div>
            </a>
          <?php endwhile; endif; wp_reset_postdata(); ?>
        </div>
        
        <!-- Pagination -->
        <div class="mt-16 flex justify-center space-x-2">
            <?php 
            echo paginate_links(array(
                'prev_text' => '<i data-lucide="chevron-left" class="w-5 h-5"></i>',
                'next_text' => '<i data-lucide="chevron-right" class="w-5 h-5"></i>',
                'type'      => 'list',
                'end_size'  => 3,
                'mid_size'  => 3,
            ));
            ?>
        </div>
    </section>

    <!-- Newsletter -->
    <section class="container mx-auto px-6 mb-24">
        <div class="bg-yellow-400 rounded-[60px] p-16 md:p-24 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-80 h-80 bg-black/5 rounded-full blur-[100px] -mr-40 -mt-40"></div>
          <div class="relative z-10 max-w-2xl">
            <h2 class="text-4xl md:text-6xl font-heading font-black text-black mb-8 leading-tight">
              Join Our Newsletter
            </h2>
            <p class="text-xl text-black/60 mb-12">Get simple marketing tips delivered to your email every week.</p>
            <form class="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                class="flex-1 px-8 py-5 bg-white rounded-2xl focus:outline-none focus:ring-4 focus:ring-black/5 transition-all"
              />
              <button type="button" class="inline-flex items-center justify-center h-18 px-12 bg-black text-white font-bold rounded-2xl hover:bg-gray-800 transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>
