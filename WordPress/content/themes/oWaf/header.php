<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <link href="https://fonts.googleapis.com/css?family=Pacifico|Roboto" rel="stylesheet">

  <?php wp_head(); ?>

</head>
<body>
  <div class="wrapper">
    <header>
      <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <div class="navbar-item" href="#">
            <h1><?php bloginfo('name'); ?></h1>
            <p>La communauté qui a du chien!</p>
          </div>
        </div>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <div class="navbar-menu ">
          <div class="navbar-end">
            <?php get_template_part('template-parts/nav/nav-menu'); ?>
          </div>
        </div>
      </nav>
    </header>
