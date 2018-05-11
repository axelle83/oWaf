<?php
   /*
   Plugin Name: RestApi (RAR)
   Description: Créer une liaison BDD entre WP et React
   Version: 1.0
   Author: oWaf
   */

add_action( 'rest_api_init', 'owaf_register_rest_fields' );

function owaf_register_rest_fields() {

  register_rest_field(
    'lieu',
    'adresse',
    [
      'get_callback' => 'owaf_rest_api_adresse',
      'update_callback' => null,
      'schema'  => null
    ]
  );
function owaf_rest_api_adresse($lieu, $adresse, $request) {

    return get_post_meta($lieu['id'], 'adresse', true);
}


  register_rest_field(
    'lieu',
    'details',
    [
      'get_callback' => 'owaf_rest_api_details',
      'update_callback' => null,
      'schema' => null
    ]
  );
  function owaf_rest_api_details($lieu, $details, $request) {

      return get_post_meta($lieu['id'], 'details', true);
  }

  register_rest_field(
    'lieu',
    'commentaire',
    [
      'get_callback' => 'owaf_rest_api_commentaire',
      'update_callback' => null,
      'schema' => null
    ]
  );

  function owaf_rest_api_commentaire($lieu, $commentaire, $request) {

      return get_post_meta($lieu['id'], 'commentaire', true);
  }

  register_rest_field(
    'dog',
    'genre',
    [
      'get_callback' => 'owaf_rest_api_genre',
      'update_callback' => null,
      'schema' => null
    ]
  );


  function owaf_rest_api_genre($dog, $genre, $request) {

      return get_post_meta($dog['id'], 'genre', true);
  }

  register_rest_field(
    'dog',
    'naiss',
    [
      'get_callback' => 'owaf_rest_api_naiss',
      'update_callback' => null,
      'schema' => null
    ]
  );


  function owaf_rest_api_naiss($dog, $naiss, $request) {

      return get_post_meta($dog['id'], 'naiss', true);
  }

  register_rest_field(
    'dog',
    'dog_img',
    [
      'get_callback' => 'owaf_rest_api_dog_img',
      'update_callback' => null,
      'schema' => null
    ]
  );

}

function owaf_rest_api_dog_img($dog, $dog_img, $request) {

    return get_post_meta($dog['id'], 'dog_img', true);
}



// rajout des 3 champs qui sont joins dans la table $user

add_action( 'rest_api_init', 'dog_id_add_user_data' );

function dog_id_add_user_data() {

register_rest_field(
  'user',
  'dog_id',
    [
        'get_callback'  => 'rest_get_user_field',
        'update_callback'   => null,
        'schema'            => null,
     ]
);
}
function rest_get_user_field( $user, $dog_id, $request ) {
    return get_user_meta( $user[ 'id' ], $dog_id, true );
}



add_action( 'rest_api_init', 'adress_add_user_data' );

function adress_add_user_data() {
register_rest_field(
  'user',
  'ville',
    [
        'get_callback'  => 'rest_get_user_field',
        'update_callback'   => null,
        'schema'            => null,
     ]
);
}
function rest_get_user_field( $user, $ville, $request ) {
    return get_user_meta( $user[ 'id' ], $ville, true );
}


add_action( 'rest_api_init', 'mail_add_user_data' );

function mail_add_user_data() {
register_rest_field(
  'user',
  'mail',
    [
        'get_callback'  => 'rest_get_user_field',
        'update_callback'   => null,
        'schema'            => null,
     ]
);
}


function rest_get_user_field( $user, $mail, $request ) {
    return get_user_meta( $user[ 'id' ], $mail, true );
}



add_filter( 'rest_user_query' , 'custom_rest_user_query' );
function custom_rest_user_query( $prepared_args, $request = null ) {
 unset($prepared_args['has_published_posts']);
 return $prepared_args;
}
