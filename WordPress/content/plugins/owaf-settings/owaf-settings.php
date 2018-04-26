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

// Récuperation de la class Recipe_cpt
require plugin_dir_path(__FILE__) . 'inc/Recipe_cpt.php';
// Récuperation des roles & capacités
require plugin_dir_path(__FILE__) . 'inc/roles.php';
// Mise en place de notre Custom BO
require plugin_dir_path(__FILE__) . 'inc/settings_page.php';
// Chargement des utils
require plugin_dir_path(__FILE__) . 'inc/utils.php';
// Chargement des settings de ma rest api
require plugin_dir_path(__FILE__) . 'inc/settings_rest_api.php';


$recipe_cpt = new Recipe_cpt();

// A l'activation
register_activation_hook(__FILE__, [$recipe_cpt, 'activation']);

// A la désactivation
register_deactivation_hook(__FILE__, [$recipe_cpt, 'deactivation']);
