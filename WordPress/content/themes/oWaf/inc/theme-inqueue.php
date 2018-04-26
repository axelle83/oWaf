<?php
// On ajoute ici ce qui sera executé dans les hooks WP_HEAD & WP_FOOTER
function owaf_scripts() {
  // Mon fichier de style css
  wp_enqueue_style(
    'owaf-css',
    get_theme_file_uri('/public/css/app.css'));
  // Je déclare mon app.js après vendor.js & dans le footer
  wp_enqueue_script(
    'owaf-app-js',
    get_theme_file_uri('/public/js/app.js'),
    ['owaf-vendor-js'],
    '1.0.0',
    true);
  // Je déclare mon vendor.js dans le footer
  wp_enqueue_script(
    'owaf-vendor-js',
    get_theme_file_uri('/public/js/vendor.js'),
    [],
    '1.0.0',
    true);
}
add_action('wp_enqueue_scripts', 'owaf_scripts');
