<?php
$menuParameters = [
  'container' => false,
  'echo' => false,
  'depth' => 0,
  'items_wrap' => '%3$s',
  'theme_location' => 'header'
];

$menu = wp_nav_menu($menuParameters);
echo strip_tags($menu, '<a>');
?>

   <a href="#">Accueil</a>
    <a href="#">La carte</a>
    <a href="#">Déconnexion</a>
