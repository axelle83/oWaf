<?php get_header(); ?>
    <section class="main">
      <div class="sidebar">
        <div class="sidebar__category">
          <h2>Catégories</h2>
          <ul>
            <li><a href="#">Education</a></li>
            <li><a href="#">Alimentation</a></li>
            <li><a href="#">Soins</a></li>
            <li><a href="#">Trucs et astuces</a></li>
          </ul>
        </div>
        <div class="sidebar__posts">
          <h2>Articles</h2>
          <input type="text" placeholder="Recherche"><i class="fa fa-search"></i>
        </div>
        <div class="sidebar__add-post">
          <a href=""><span>+ </span>Ajouter un article</a>
        </div>
      </div>

        <?php get_template_part('template-parts/posts/posts-front-page'); ?>

    </section>
<?php get_footer(); ?>
