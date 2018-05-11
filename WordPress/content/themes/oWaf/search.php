<?php get_header(); ?>

  <section class="postfull">

    <?php if(have_posts()): ?>

    <h2 style="display: flex;
    justify-content: center;">Résultat de la recherche: "<?php echo get_search_query(); ?>"</h2>

  <?php else: ?>

    <h3>Aucun résultat pour votre recherche</h3>

  <?php endif; ?>

    <?php
      if(have_posts()): while(have_posts()): the_post();
        get_template_part('template-parts/posts/post');
      endwhile; endif;
    ?>

    <a style="border: none;" href="<?php echo home_url(); ?>">Retourner à l'accueil</a>
  </section>

<?php get_footer(); ?>
