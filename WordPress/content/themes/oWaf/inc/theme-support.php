<?php

function owaf_setup() {
  // Background
  add_theme_support( 'custom-background' );
  // RSS
  add_theme_support('automatic-feed-links');
  // Title automatique
  add_theme_support('title-tag');
  //Pour le custom header - image -
  add_theme_support( 'custom-header' );
  // Menus de navigation
  register_nav_menus([
    'main-nav' => 'Menu principal de oWaf'
  ]);
  // // sidebar
  // register_sidebar('sidebar');
  // Les images de mise en avant
  add_theme_support('post-thumbnails');
  // Je viens déclarer à WordPress que les traductions du domaine "owaf" se trouvent dans le dossier du thème "/languages"
  load_theme_textdomain( 'owaf', get_template_directory() . '/languages');
}
add_action('after_setup_theme', 'owaf_setup');
