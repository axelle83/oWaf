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


// Customisation du tableau de bord

add_action('wp_dashboard_setup', 'my_custom_dashboard_widgets');
function my_custom_dashboard_widgets() {
global $wp_meta_boxes;
unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']);
unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);
unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']);
wp_add_dashboard_widget('custom_help_widget', 'Besoin d\'aide ?', 'custom_dashboard_help');
}
function custom_dashboard_help() {
echo '<p>Bienvenu dans votre espace d\'administration ! Si vous avez besoin d\'aide à la soumission d\'un article, n\'hésitez pas à consulter le support technique.</p>';
}


function example_dashboard_widget_function() {
echo "Bonjour à tous ! Ceci est un widget personnalisé où vous trouverez des informations et mises à jour importantes concernant ce portail d'actualités.";
}
function example_add_dashboard_widgets() {
wp_add_dashboard_widget('example_dashboard_widget', 'Mon Widget Personnalisé', 'example_dashboard_widget_function');
}
add_action('wp_dashboard_setup', 'example_add_dashboard_widgets' );


// barre de recherche
function add_search_box($items, $args) {

        ob_start();
        get_search_form();
        $searchform = ob_get_contents();
        ob_end_clean();

        $items .= '<li>' . $searchform . '</li>';
        return $items;
}
add_filter('wp_nav_menu_items','add_search_box', 10, 2);
