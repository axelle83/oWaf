<?php

class cpt_dog
{
  public function __construct()
  {
    add_action('init', [$this, 'cpt_dog_init']);


  }

  public function cpt_dog_init()
  {
    $labels = array(
      'name'               => 'Chien',
      'singular_name'      => 'Chien',
      'menu_name'          => 'Chien',
      'name_admin_bar'     => 'Chien',
      'add_new'            => 'Ajouter un nouveau chien',
      'add_new_item'       => 'Ajouter  un nouveau chien',
      'new_item'           => 'Nouveau chien',
      'edit_item'          => 'Editer un nouveau chien',
      'view_item'          => 'Voir le chien',
      'all_items'          => 'Voir tous les chiens',
      'search_items'       => 'Rechercher un chien',
      'not_found'          => 'Aucun chien trouvée',
      'not_found_in_trash' => 'Aucun chien trouvé dans la corbeille',
    );

    $args = array(
      'labels'             => $labels,
      'description'        => 'information sur le chien',
      'capability_type'    => 'post',
      'public'             => false,
      'publicly_queryable' => false,
      'show_ui'            => true,
      'show_tagcloud'      => true,
      'show_in_menu'       => true,
      'show_in_nav_menus'  => true,
      'show_in_rest'       => true,
      'query_var'          => true,
      'has_archive'        => false,
      'hierarchical'       => true,
      'menu_position'      => null,
      'supports'         => array('title', 'custom-fields'),

      'menu_icon' => 'dashicons-admin-page'
  );

    register_post_type('dog', $args);
  }

public function create_taxonomies()
  {

    $labels = [
      'name'                       => 'chien',
      'singular_name'              => 'chien',
      'menu_name'                  => 'chien',
      'all_items'                  => 'Tous les chiens',
      'new_item_name'              => 'Nouveau chien',
      'add_new_item'               => 'Ajouter un chien',
      'update_item'                => 'Mettre à jour un chien',
      'edit_item'                  => 'Editer un chien',
      'view_item'                  => 'Voir tous les chien',
      'add_or_remove_items'        => 'Ajouter une supprimer un chien',
      'search_items'               => 'Rechercher un chien',
      'not_found'                  => 'Aucun chien trouvé',
      'items_list'                 => 'Lister les chiens',
      'items_list_navigation'      => 'Lister les chiens',
    ];
    $args = [
      'labels'                     => $labels,
      'hierarchical'               => true,
      'public'                     => true,
      'show_in_rest'               => true,
      'supports'           => [
         'title',
        'custom-fields',
      ]
    ];
    register_taxonomy( 'dog', 'type', $args );

  }

  public function activation()
  {
    $this->cpt_dog_init();
    flush_rewrite_rules();
  }

  public function deactivation()
  {
    flush_rewrite_rules();
  }
}
