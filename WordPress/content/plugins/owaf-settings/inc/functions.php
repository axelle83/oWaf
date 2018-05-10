<?php

// Change le titre de la rubrique en nom du chien
function wpm_change_title_cpt( $title ){
         //la fonction get_current_screen() permet de récupérer le post type
         $screen = get_current_screen();

     	 // Si le post type de l'écran actuel est 'dog'
         if  ( 'dog' == $screen->post_type ) {
    	 	// Alors on modifie le titre d'origine par celui-la
              $title = 'Entrez le nom de votre chien';
         }

     	 // On renvoie notre nouveau titre
         return $title;
}

//Début de la customisation du tableau de bord à continuer

add_action('wp_dashboard_setup', 'my_custom_dashboard_widgets');
function my_custom_dashboard_widgets() {
global $wp_meta_boxes;
unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']);
unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);
unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']);
wp_add_dashboard_widget('custom_help_widget', 'Besoin d\'aide ?', 'custom_dashboard_help');
}


function custom_dashboard_help() {
echo '<p>Bienvenue dans votre espace d\'administration ! Si vous avez besoin d\'aide à la soumission d\'un article, n\'hésitez pas à consulter le support technique.</p>';
}


function example_dashboard_widget_function() {
echo "Bonjour à tous ! Ceci est un widget personnalisé où vous trouverez des informations et mises à jour importantes concernant ce portail d'actualités.";
}
function example_add_dashboard_widgets() {
wp_add_dashboard_widget('example_dashboard_widget', 'Mon Widget Personnalisé', 'example_dashboard_widget_function');
}
add_action('wp_dashboard_setup', 'example_add_dashboard_widgets' );
