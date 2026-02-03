
<?php get_header(); ?>

<div class="bg-white pt-32 pb-24 min-h-screen">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); 
        $cats = get_the_category();
        $cat_name = !empty($cats) ? $cats[0]->name : 'Article';
    ?>
    <article class="container mx-auto px-6 max-w-4xl">
        <!-- Post Header -->
        <div class="text-center mb-16">
            <a href="<?php echo get_category_link($cats[0]->term_id); ?>" class="inline-block px-4 py-1 bg-yellow-100 text-yellow-800 text-xs font-black uppercase tracking-widest rounded-full mb-6">
                <?php echo esc_html($cat_name); ?>
            </a>
            <h1 class="text-4xl md:text-6xl font-heading font-black mb-8 text-black leading-tight">
                <?php the_title(); ?>
            </h1>
            <div class="flex items-center justify-center space-x-6 text-sm font-bold text-gray-500 uppercase tracking-widest mb-10">
                <span class="flex items-center"><i data-lucide="calendar" class="w-4 h-4 mr-2"></i> <?php echo get_the_date(); ?></span>
                <span class="flex items-center"><i data-lucide="user" class="w-4 h-4 mr-2"></i> <?php the_author(); ?></span>
            </div>
            
            <?php if ( has_post_thumbnail() ) : ?>
                <div class="rounded-[40px] overflow-hidden shadow-2xl mb-12">
                    <?php the_post_thumbnail('full', ['class' => 'w-full h-auto object-cover aspect-video']); ?>
                </div>
            <?php endif; ?>
        </div>

        <!-- Content -->
        <div class="prose prose-xl max-w-none text-gray-600 prose-headings:font-heading prose-headings:font-black prose-headings:text-black prose-a:text-yellow-600 prose-img:rounded-[30px] prose-blockquote:border-yellow-400 prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl">
            <?php the_content(); ?>
        </div>

        <!-- Share / Tags -->
        <div class="mt-20 pt-10 border-t border-gray-100 flex justify-between items-center">
            <div class="flex gap-2">
                <?php the_tags('<span class="text-xs font-bold bg-gray-100 px-3 py-1 rounded-full text-gray-500">', '</span><span class="text-xs font-bold bg-gray-100 px-3 py-1 rounded-full text-gray-500">', '</span>'); ?>
            </div>
            <div class="flex items-center space-x-4">
                <span class="font-bold text-sm text-black">Share:</span>
                <a href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>" target="_blank" class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform"><i data-lucide="facebook" class="w-4 h-4"></i></a>
                <a href="https://twitter.com/intent/tweet?url=<?php the_permalink(); ?>&text=<?php the_title(); ?>" target="_blank" class="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center hover:scale-110 transition-transform"><i data-lucide="twitter" class="w-4 h-4"></i></a>
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=<?php the_permalink(); ?>" target="_blank" class="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center hover:scale-110 transition-transform"><i data-lucide="linkedin" class="w-4 h-4"></i></a>
            </div>
        </div>
        
        <!-- Navigation -->
        <div class="grid md:grid-cols-2 gap-8 mt-12">
            <?php
            $prev_post = get_previous_post();
            $next_post = get_next_post();
            if($prev_post): ?>
                <a href="<?php echo get_permalink($prev_post); ?>" class="group p-8 rounded-[30px] border border-gray-100 hover:border-yellow-400 hover:shadow-lg transition-all text-left">
                    <span class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Previous Article</span>
                    <h4 class="text-xl font-heading font-black group-hover:text-yellow-600 transition-colors"><?php echo $prev_post->post_title; ?></h4>
                </a>
            <?php else: echo '<div></div>'; endif; ?>

            <?php if($next_post): ?>
                <a href="<?php echo get_permalink($next_post); ?>" class="group p-8 rounded-[30px] border border-gray-100 hover:border-yellow-400 hover:shadow-lg transition-all text-right">
                    <span class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Next Article</span>
                    <h4 class="text-xl font-heading font-black group-hover:text-yellow-600 transition-colors"><?php echo $next_post->post_title; ?></h4>
                </a>
            <?php endif; ?>
        </div>

    </article>
    <?php endwhile; endif; ?>
</div>

<?php get_footer(); ?>
