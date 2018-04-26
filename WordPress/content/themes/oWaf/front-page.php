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
      <div class="posts">
        <div class="post">
          <img src="images/chihuahua.jpg" alt="chihuahua">
          <h3>Titre de l'article</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis at eius animi perspiciatis. Neque, quis, ducimus. Voluptas ad rerum amet laboriosam nisi eligendi dolor, doloremque impedit ipsa odio sapiente doloribus.</p>
            <a href="#" class="post__category">Alimentation</a>
        </div>
        <div class="post">
          <img src="images/chien-poilu.jpg" alt="chien-poilu">
          <h3>Titre de l'article</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis at eius animi perspiciatis. Neque, quis, ducimus. Voluptas ad rerum amet laboriosam nisi eligendi dolor, doloremque impedit ipsa odio sapiente doloribus.</p>
            <a href="#" class="post__category">Alimentation</a>
        </div>
        <div class="post">
          <img src="images/cavalier-king-charles.jpg" alt="cavalier-king-charles">
          <h3>Titre de l'article</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis at eius animi perspiciatis. Neque, quis, ducimus. Voluptas ad rerum amet laboriosam nisi eligendi dolor, doloremque impedit ipsa odio sapiente doloribus.</p>
            <a href="#" class="post__category">Alimentation</a>
        </div>
        <div class="post">
          <img src="images/cesar.jpg" alt="cesar">
          <h3>Titre de l'article</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis at eius animi perspiciatis. Neque, quis, ducimus. Voluptas ad rerum amet laboriosam nisi eligendi dolor, doloremque impedit ipsa odio sapiente doloribus.</p>
            <a href="#" class="post__category">Alimentation</a>
        </div>
      </div>
    </section>
<?php get_footer(); ?>
