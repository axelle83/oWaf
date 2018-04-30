<div class="post">
  <img src="<?php the_post_thumbnail_url(); ?>" alt="">
  <h3><?php the_title() ?></h3>
    <p><?php the_excerpt(); ?></p>
    <a href="<?php the_permalink(); ?>">Lire la suite...</a>
    <div><?php the_category(); ?></div>
</div>
