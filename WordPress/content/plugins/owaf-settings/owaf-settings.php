<?php
/*
Plugin Name: oWaf lieu
Description: Réglages pour le thème oWaf
Author: IL
Author URI: cactushappy27@gmail.com
Version: 1.0.0
*/


if (!defined('WPINC')) {
  die('');
}

// Récuperation de la class cpt_lieu
require plugin_dir_path(__FILE__) . 'inc/cpt_lieu.php';

// Chargement des lieu de ma rest api
require plugin_dir_path(__FILE__) . 'inc/cpt_dog.php';

// Chargement des lieu de ma rest api
require plugin_dir_path(__FILE__) . 'inc/settings_rest_api.php';


$cpt_lieu = new cpt_lieu();

// A l'activation
register_activation_hook(__FILE__, [$cpt_lieu, 'activation']);

// A la désactivation
register_deactivation_hook(__FILE__, [$cpt_lieu, 'deactivation']);


$cpt_dog = new cpt_dog();

// A l'activation
register_activation_hook(__FILE__, [$cpt_dog, 'activation']);

// A la désactivation
register_deactivation_hook(__FILE__, [$cpt_dog, 'deactivation']);

add_filter( 'dog', 'wpm_change_title_cpt' );

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
