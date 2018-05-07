<?php

if (!function_exists('owaf_setup')):

function owaf_setup() {
  // Background
  add_theme_support( 'custom-background' );
  // RSS
  add_theme_support('automatic-feed-links');
  // Title automatique
  add_theme_support('title-tag');
  //Pour le custom header - image -
  $args = array(
<<<<<<< HEAD
	'width'         => 1024,
	'height'        => 100,
	'default-image' => get_template_directory_uri() . 'images/header.jpg',
=======
	'width'         => 980,
	'height'        => 200,
	'default-image' => get_template_directory_uri() . '/images/header.jpg',
>>>>>>> 9bf999f43c276cee9475e5e1d2c33d7bd3b5cf23
	'uploads'       => true,
);
add_theme_support( 'custom-header', $args );
  // Menus de navigation
  register_nav_menus([
    'header' => 'Menu principal de oWaf'
  ]);
  register_sidebar( array(
        'name'          => __( 'Sidebar d\'oWaf', 'owaf' ),
        'id'            => '1',
        'description'   => 'sidebar d\oWaf',
        'class'         => '.sidebar__posts',
	      'before_widget' => '<div id="%1$s" class="widget %2$s">',
	      'after_widget'  => '</div>',
	      'before_title'  => '<h2 class="widgettitle">',
	      'after_title'   => '</h2>'
      )
  );
  // // sidebar
  // register_sidebar('sidebar');
  // Les images de mise en avant
  add_theme_support('post-thumbnails');
  // Je viens déclarer à WordPress que les traductions du domaine "owaf" se trouvent dans le dossier du thème "/languages"
  load_theme_textdomain( 'owaf', get_template_directory() . '/languages');
}

endif;
add_action('after_setup_theme', 'owaf_setup');
