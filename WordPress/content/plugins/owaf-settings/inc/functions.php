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
