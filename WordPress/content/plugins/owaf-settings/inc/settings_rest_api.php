<?php
   /*
   Plugin Name: RestApi (RAR)
   Description: Créer une liaison BDD entre WP et React
   Version: 1.0
   Author: oWaf
   */


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

  register_rest_field(
    'lieu',
    'details',
    [
      'get_callback' => 'owaf_rest_api_details',
      'update_callback' => null,
      'schema' => null
    ]
  );

  register_rest_field(
    'lieu',
    'commentaire',
    [
      'get_callback' => 'owaf_rest_api_commentaire',
      'update_callback' => null,
      'schema' => null
    ]
  );

  register_rest_field(
    'dog',
    'genre',
    [
      'get_callback' => 'owaf_rest_api_genre',
      'update_callback' => null,
      'schema' => null
    ]
  );

  register_rest_field(
    'dog',
    'naiss',
    [
      'get_callback' => 'owaf_rest_api_naiss',
      'update_callback' => null,
      'schema' => null
    ]
  );

  register_rest_field(
    'dog',
    'photo_du_chien',
    [
      'get_callback' => 'owaf_rest_api_dog_img',
      'update_callback' => null,
      'schema' => null
    ]
  );

}

function owaf_rest_api_adresse($lieu, $field_name, $request) {

    return get_post_meta($lieu['id'], 'adresse', true);
}

function owaf_rest_api_details($lieu, $field_name, $request) {

    return get_post_meta($lieu['id'], 'details', true);
}

function owaf_rest_api_commentaire($lieu, $field_name, $request) {

    return get_post_meta($lieu['id'], 'commentaire', true);
}

function owaf_rest_api_genre($dog, $field_name, $request) {

    return get_post_meta($dog['id'], 'genre', true);
}

function owaf_rest_api_naiss($dog, $field_name, $request) {

    return get_post_meta($dog['id'], 'naiss', true);
}

function owaf_rest_api_dog_img($dog, $field_name, $request) {

    return get_post_meta($dog['id'], 'dog_img', true);
}


add_action( 'rest_api_init', 'owaf_register_rest_fields' );
