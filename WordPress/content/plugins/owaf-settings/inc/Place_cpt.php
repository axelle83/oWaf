<?php

class Place_cpt
{
  public function __construct()
  {
    add_action('init', [$this, 'cpt_place_init']);
    add_action('init',array($this,'create_taxonomies'));
  }

  public function cpt_place_init()
  {
    $labels = array(
      'name'               => 'Lieux',
      'singular_name'      => 'Lieu',
      'menu_name'          => 'Lieux',
      'name_admin_bar'     => 'Lieu',
      'add_new'            => 'Ajouter un lieu',
      'add_new_item'       => 'Ajouter un nouveau lieu',
      'new_item'           => 'Nouveau lieu',
      'edit_item'          => 'Editer un lieu',
      'view_item'          => 'Voir le lieu',
      'all_items'          => 'Voir tous les lieux',
      'search_items'       => 'Rechercher un lieu',
      'not_found'          => 'Aucun lieu trouvé',
      'not_found_in_trash' => 'Aucun lieu trouvé dans la corbeille',
    );

    $args = array(
      'labels'             => $labels,
      'description'        => 'Lieu partagé sur la carte',
      'capability_type'    => 'post',
      'public'             => true,
      'publicly_queryable' => false,
      'show_ui'            => true,
      'show_in_menu'       => true,
      'show_in_nav_menus'  => true,
      'show_in_rest'       => true,
      'query_var'          => true,
      'has_archive'        => false,
      'hierarchical'       => false,
      'menu_position'      => null,
      'supports'           => [
        'title',
        'author',
        'custom-fields',
        'page-attributes',
        'thumbnail'
      ],
      'menu_icon' => 'dashicons-admin-post'
  );

    register_post_type('place', $args);
  }

public function create_taxonomies()
  {

    register_taxonomy(
      'type',
      'place',
      [
        'label' => 'Types',
        'hierarchical' => true,
        'public' => true
        ]
    );

  }

  public function activation()
  {
    $this->cpt_place_init();
    flush_rewrite_rules();
  }

  public function deactivation()
  {
    flush_rewrite_rules();
  }
}
