<?php
// pour pointer vers une categorie parente et pour afficher que les enfant de la catégorie par le titre de la catégo parente
$category = get_category_by_slug('blog');

$wp_list_args = [
    'child_of' => $category->term_id,
    'title_li' => ''
];

wp_list_categories($wp_list_args);
