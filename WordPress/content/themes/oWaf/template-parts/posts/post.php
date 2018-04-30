<div class="post">
  <img src="<?php the_post_thumbnail_url(); ?>" alt="">
  <h3><?php the_title() ?></h3>
    <p><?php the_excerpt(); ?></p>
    <a href="<?php the_permalink(); ?>"><?php the_title(); ?> : lire la suite</a>
    <a href="#" class="post__category"><? the_categorie(); ?></a>
</div>
