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
