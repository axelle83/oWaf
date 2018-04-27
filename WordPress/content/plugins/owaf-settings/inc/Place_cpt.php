<?php

class Place_cpt
{
  public function __construct()
  {
    add_action('init', [$this, 'cpt_place_init']);
    // add_action('init',array($this,'create_taxonomies'));
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
      'show_tagcloud'      => true,
      'show_in_menu'       => true,
      'show_in_nav_menus'  => true,
      'show_in_rest'       => true,
      'query_var'          => true,
      'has_archive'        => false,
      'hierarchical'       => false,
      'taxonomies'         => array('category'),
      'menu_position'      => null,
        'supports'           => [
        'title',
        'author',
        'custom-fields',
      ],

      'menu_icon' => 'dashicons-location-alt'
  );

    register_post_type('place', $args);
  }

public function create_taxonomies()
  {

    $labels = [
      'name'                       => 'type',
      'singular_name'              => 'type de lieu',
      'menu_name'                  => 'types de lieux',
      'all_items'                  => 'Tous les types',
      'new_item_name'              => 'Nouveau type',
      'add_new_item'               => 'Ajouter un type',
      'update_item'                => 'Mettre à jour un type',
      'edit_item'                  => 'Editer un type',
      'view_item'                  => 'Voir tous les type',
      'add_or_remove_items'        => 'Ajouter une supprimer un type',
      'search_items'               => 'Rechercher un type',
      'not_found'                  => 'Aucun type trouvé',
      'items_list'                 => 'Lister les type',
      'items_list_navigation'      => 'Lister les type',
    ];
    $args = [
      'labels'                     => $labels,
      'hierarchical'               => true,
      'public'                     => true,
      'show_in_rest'               => true,
      'supports'           => [
        'custom-fields',
      ]
    ];
    register_taxonomy( 'place', 'type', $args );

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
