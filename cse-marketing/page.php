
<?php get_header(); ?>

<div class="bg-white pt-32 pb-24 min-h-screen">
    <div class="container mx-auto px-6 max-w-4xl">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <div class="text-center mb-16">
                <h1 class="text-4xl md:text-6xl font-heading font-black mb-6 text-black"><?php the_title(); ?></h1>
                <?php if ( has_post_thumbnail() ) : ?>
                    <div class="rounded-[40px] overflow-hidden shadow-2xl mb-12">
                        <?php the_post_thumbnail('full', ['class' => 'w-full h-auto object-cover']); ?>
                    </div>
                <?php endif; ?>
            </div>
            
            <div class="prose prose-lg max-w-none text-gray-600 prose-headings:font-heading prose-headings:font-bold prose-a:text-yellow-600 prose-img:rounded-[30px]">
                <?php the_content(); ?>
            </div>
        <?php endwhile; endif; ?>
    </div>
</div>

<?php get_footer(); ?>
