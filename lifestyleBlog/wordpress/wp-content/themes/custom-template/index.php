<?php get_header(); ?>

	<main role="main">
		<section class="featured-posts">
			<div class="container">
				<?php get_template_part('featured-posts'); ?>
			</div> 
		</section>

		<section>

			<?php get_template_part('loop'); ?>

			<?php get_template_part('pagination'); ?>

		</section>
		<!-- /section -->
	</main>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
