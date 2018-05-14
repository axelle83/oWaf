<?php

$category = get_category_by_slug('blog');

$wp_list_args = [
    'child_of' => $category->term_id,
    'title_li' => ''
];

wp_list_categories($wp_list_args);
