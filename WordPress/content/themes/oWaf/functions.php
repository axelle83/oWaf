<?php

require get_theme_file_path('inc/theme-support.php');

require get_theme_file_path('inc/theme-enqueue.php');

require get_theme_file_path('inc/theme-cleaner.php');

require get_theme_file_path('inc/customizer.php');



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
