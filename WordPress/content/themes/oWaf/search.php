<?php get_header(); ?>

<<<<<<< HEAD
    <section>

        <h2>Résultat de la recherche: "il y'a <?php global $wp_query; $wp_query->found_posts; ?> résultats trouvés...<?php get_search_query(); ?>"</h2>

    </section>
=======
  <section class="postfull">

    <?php if(have_posts()): ?>

    <h2>Résultat de la recherche: "<?php echo get_search_query(); ?>"</h2>

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
>>>>>>> 660f8cd57953ac498da978ba4c95cacb7362994d

<?php get_footer(); ?>
