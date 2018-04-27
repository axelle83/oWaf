<?php
/*
Plugin Name: oWaf Settings
Description: Réglages pour le thème oWaf
Author: IL
Author URI: cactushappy27@gmail.com
Version: 1.0.0
*/


if (!defined('WPINC')) {
  die('');
}

// Récuperation de la class Place_cpt
require plugin_dir_path(__FILE__) . 'inc/Place_cpt.php';
// Récuperation de la class Blog_cpt
require plugin_dir_path(__FILE__) . 'inc/Blog_cpt.php';
// Récuperation des roles & capacités
require plugin_dir_path(__FILE__) . 'inc/roles.php';
// Chargement des settings de ma rest api
require plugin_dir_path(__FILE__) . 'inc/settings_rest_api.php';


$place_cpt = new Place_cpt();

// A l'activation
register_activation_hook(__FILE__, [$place_cpt, 'activation']);

// A la désactivation
register_deactivation_hook(__FILE__, [$place_cpt, 'deactivation']);

$blog_cpt = new Blog_cpt();

// A l'activation
register_activation_hook(__FILE__, [$blog_cpt, 'activation']);

// A la désactivation
register_deactivation_hook(__FILE__, [$blog_cpt, 'deactivation']);
