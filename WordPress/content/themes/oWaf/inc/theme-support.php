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
    'width'         => 1024,
    'height'        => 650,
    'default-image' => get_template_directory_uri() . '/app/assets/images/header.jpg',
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



//
// // map api
//
// add_filter('acf/settings/google_api_key', function () {
//    return 'AIzaSyA2BwnfF3T6Nd_filKP5OIT7wfqsnsDyDo';
// });


// Map google_api_key
function my_theme_add_scripts() {
    if (is_page('map')) {
        wp_enqueue_script( 'google-map', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA2BwnfF3T6Nd_filKP5OIT7wfqsnsDyDo', array(), '3', true );
        wp_enqueue_script( 'google-map-init', get_template_directory_uri() . '/js/google-maps.js', array('google-map', 'jquery'), '0.1', true );
    }
}

add_action( 'wp_enqueue_scripts', 'my_theme_add_scripts' );

function my_acf_google_map_api( $api ){

	$api['key'] = 'AIzaSyA2BwnfF3T6Nd_filKP5OIT7wfqsnsDyDo';

	return $api;

}

add_filter('acf/fields/google_map/api', 'my_acf_google_map_api');
