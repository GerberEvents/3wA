<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Baby_On_Board
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<?php
			while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content', 'page' );

			endwhile; // End of the loop.

      // The Query
      $the_query = new WP_Query(array ('posts_per_page' => 4)); // Afficher 3 messages par page

      // The Loop
      if ( $the_query->have_posts() ) {
      	echo '<article>';
      	while ( $the_query->have_posts() ) {
      		$the_query->the_post();
      		echo '<h2>' . get_the_title() . '</h2>';
          echo '<span>' . get_the_post_thumbnail() . '</span>';
          echo '<p>' . get_the_content() . '</p>';

      	}
      	echo '</article>';
      	/* Restore original Post Data */
      	wp_reset_postdata();
      } else {
      	// no posts found
      }

			?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
