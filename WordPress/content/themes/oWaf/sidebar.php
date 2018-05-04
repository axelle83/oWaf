<aside class="sidebar">
  <div class="sidebar__category">
    <h2>Catégories</h2>

      <?php get_template_part('template-parts/sidebar/category'); ?>


  </div>
  <div class="sidebar__posts">
    <h2>Articles</h2>

      <?php $searchform = get_search_form();

     echo strip_tags($searchform, '<input>');?>

      <!-- <?php
        if( is_active_sidebar( '1' ) ):
        dynamic_sidebar( '1' );
        endif;
        ?> -->

    <!-- <input type="text" placeholder="Recherche"><button type="button" name="button"><i class="fa fa-search"></i></button> -->

  </div>
  <div class="sidebar__add-post">
    <a href=""><span>+ </span>Ajouter un article</a>
  </div>
</aside>
