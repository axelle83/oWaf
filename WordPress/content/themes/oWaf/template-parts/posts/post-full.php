<div class="postfull">
  <img src="<?php the_post_thumbnail_url(); ?>" alt="">
  <h3><?php the_title() ?></h3>
    <p><?php the_content(); ?></p>
    <p><?php the_author(); ?></p>
    <p><?php modified_gmt(); ?></p>
    <a href="#" class="post__category"><? the_categorie(); ?></a>
</div>
