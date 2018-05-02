<?php get_header(); ?>

  <section>
    <h2>Résultat de la recherche: "<?php echo get_search_query(); ?>"</h2>

    <div>
      <?php get_search_form(); ?>
    </div>

    <?php if(have_posts()): while(have_posts()): the_post();
      get_template_part('template-parts/post/excerpt');
    endwhile; endif; ?>

    <a href="<?php echo home_url(); ?>">Retourner à l'accueil</a>
  </section>

<?php get_footer(); ?>
