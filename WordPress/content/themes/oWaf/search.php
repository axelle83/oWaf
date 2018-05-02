<?php get_header(); ?>

    <section>

        <h2>Résultat de la recherche: "il y'a <?php global $wp_query; $wp_query->found_posts; ?> résultats trouvés...<?php get_search_query(); ?>"</h2>

    </section>

<?php get_footer(); ?>
