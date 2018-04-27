<?php
class Blog_cpt
{
  public function __construct()
  {
    add_action('init', [$this, 'create_cpt']);
    add_action('init', [$this, 'create_taxonomies']);
  }
  public function cpt_article_init()
  {
    $labels = [
      'name'                  => __('article', 'owaf'),
      'singular_name'         => 'Article',
      'menu_name'             => 'Articles',
      'name_admin_bar'        => 'Articles',
      'archives'              => 'Archives des article',
      'attributes'            => 'Attributs des article',
      'parent_item_colon'     => 'Element parent',
      'all_items'             => 'Tous les article',
      'add_new_item'          => 'Ajouter un nouvel article',
      'add_new'               => 'Ajouter un nouvel article',
      'new_item'              => 'Nouvel article',
      'edit_item'             => 'Editer l\'article',
      'update_item'           => 'Mettre à jour l\'article',
      'view_item'             => 'Voir l\'article',
      'view_items'            => 'Voir les articles',
      'search_items'          => 'Rechercher les articles',
      'not_found'             => 'Aucun article trouvé',
      'not_found_in_trash'    => 'Aucun article trouvé dans la corbeille',
      'featured_image'        => 'Image de l\'article',
      'set_featured_image'    => 'Ajouter une image à l\'article',
      'remove_featured_image' => 'Supprimer l\'image de l\'article',
      'use_featured_image'    => 'Utiliser une image pour l\'article',
      'insert_into_item'      => 'Inserer dans l\'article',
      'uploaded_to_this_item' => 'Televerser dans l\'article',
      'items_list'            => 'Liste des articles',
      'items_list_navigation' => 'Liste des articles',
      'filter_items_list'     => 'Filtrer la liste des articles',
    ];
    $args = [
      'label'                 => 'Article',
      'description'           => 'Article de Blog',
      'labels'                => $labels,
      'supports'              => [
        'title',
        'editor',
        'thumbnail',
        'custom-fields',
        'excerpt'
      ],
      'hierarchical'          => false,
      'public'                => true,
      'show_ui'               => true,
      'show_in_menu'          => true,
      'menu_position'         => 5,
      'show_in_admin_bar'     => true,
      'show_in_nav_menus'     => true,
      'can_export'            => true,
      'has_archive'           => true,
      'exclude_from_search'   => false,
      'publicly_queryable'    => true,
      'show_in_rest'          => true,
      'menu_icon'             => 'dashicons-format-aside'
    ];
    register_post_type( 'article', $args );
  }
  public function create_taxonomies()
  {
    $labels = [
      'name'                       => 'Catégorie',
      'singular_name'              => 'Catégorie',
      'menu_name'                  => 'Catégories',
      'all_items'                  => 'Toutes les catégories',
      'new_item_name'              => 'Nouvelle catégorie',
      'add_new_item'               => 'Ajouter une catégorie',
      'update_item'                => 'Mettre à jour une catégorie',
      'edit_item'                  => 'Editer une catégorie',
      'view_item'                  => 'Voir toutes les catégories',
      'add_or_remove_items'        => 'Ajouter une supprimer une catégorie',
      'choose_from_most_used'      => 'Choisir parmis les catégories les plus utilisés',
      'popular_items'              => 'Catégories populaires',
      'search_items'               => 'Rechercher une catégorie',
      'not_found'                  => 'Aucune catégorie trouvée',
      'items_list'                 => 'Lister les catégories',
      'items_list_navigation'      => 'Lister les catégories',
    ];
    $args = [
      'labels'                     => $labels,
      'hierarchical'               => false,
      'public'                     => true,
      'show_ui'                    => true,
      'show_admin_column'          => true,
      'show_in_nav_menus'          => true,
      'show_tagcloud'              => true,
      'show_in_rest'               => true,
    ];
    register_taxonomy( 'categorie', 'article', $args );

  }

    public function activation()
    {
      $this->cpt_article_init();
      flush_rewrite_rules();
    }

    public function deactivation()
    {
      flush_rewrite_rules();
    }
}
