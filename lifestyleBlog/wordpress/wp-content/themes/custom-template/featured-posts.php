<!-- Start the Loop. -->
<h1>
	<em>
		<span class="txt-secondary-color">//</span>
		 Últimas <b>notícias:</b>
	</em>
</h1>

<div id="carousel-featured-posts" class="carousel slide" data-ride="carousel">
	<!-- Wrapper for slides -->
	<div class="carousel-inner" role="listbox">
		 <?php query_posts( 'tag=featured' );
		 	if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

		 	<!-- Test if the current post is in category 3. -->
		 	<!-- If it is, the div box is given the CSS class "post-cat-three". -->
		 	<!-- Otherwise, the div box is given the CSS class "post". -->


		 		<div class="<?php if( $wp_query->current_post ==0 && !is_paged() ) echo ' active '; ?> item">
			 	<!-- Display the Title as a link to the Post's permalink. -->
			 	<a class="post-anchor" href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
				 	<div class='box'> 
				 		<div class='content'>
						 	<!-- post thumbnail -->
						 	<?php if ( has_post_thumbnail()) : // Check if thumbnail exists ?>
					 			<?php the_post_thumbnail( 'full' ); // Declare pixel size you need inside the array ?>
						 	<?php endif; ?>
						 	<!-- /post thumbnail -->
				 		</div> 
				 	</div>
				 	

				 	<h2 rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>">
						<span>
							<?php the_title(); ?>
						</span>
					</h2>
				</a>


			 	<!-- Display the date (November 16th, 2009 format) and a link to other posts by this posts author. -->
		 	</div> <!-- closes the first div box -->



		 	<!-- Stop The Loop (but note the "else:" - see next line). -->

		 <?php endwhile; else : ?>


		 	<!-- The very first "if" tested to see if there were any Posts to -->
		 	<!-- display.  This "else" part tells what do if there weren't any. -->
		 	<p>
				<?php _e( 'Sorry, no posts matched your criteria.' ); ?>
			</p>


		 	<!-- REALLY stop The Loop. -->
		 <?php endif; ?>
	</div>

	<!-- Controls -->
	<a class="left carousel-control" href="#carousel-featured-posts" role="button" data-slide="prev">
		<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		<span class="sr-only">Previous</span>
	</a>
	<a class="right carousel-control" href="#carousel-featured-posts" role="button" data-slide="next">
		<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		<span class="sr-only">Next</span>
	</a>
</div>


 