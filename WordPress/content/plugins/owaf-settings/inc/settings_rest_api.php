<?php
   /*
   Plugin Name: RestApi (RAR)
   Description: Créer une liaison BDD entre WP et React
   Version: 1.0
   Author: oWaf
   */


function owaf_register_rest_fields() {

  // Thumbnail
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
}

function owaf_rest_api_adresse($lieu, $field_name, $request) {


  $output = array();
  foreach ($lieu['adresse'] as $adresse_id) {

    $term_details = get_term($adresse_id, 'adresse');

    $output[] = $adresse_name;
  }

  return $output;
}


add_action( 'rest_api_init', 'owaf_register_rest_fields' );
