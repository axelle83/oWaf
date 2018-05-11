<aside class="sidebar">
  <div class="sidebar__category">
    <h2>Catégories</h2>
      <?php get_template_part('template-parts/sidebar/category'); ?>
  </div>
  <div class="sidebar__posts">
    <h2>Articles</h2>
      <?php $searchform = get_search_form();?>
  </div>
  <!-- Pour une prochaine version -->
  <!-- <div class="sidebar__add-post">
    <a href=""><span>+ </span>Ajouter un article</a>
  </div> -->
</aside>
