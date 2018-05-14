<?php

// Fonction appelée lors du hook rest api init
function owaf_lieu_register_rest_fields() {

    // J'ajoute un nouveau champ : adresse
    register_rest_field(
        'lieu',
        'adresse',
        [
            'get_callback' => 'owaf_rest_api_adresse',
            'update_callback' => 'owaf_post_rest_api_adresse',
            'schema'  => null
        ]
    );

    // J'ajoute un nouveau champ : details
      register_rest_field(
        'lieu',
        'details',
        [
          'get_callback' => 'owaf_rest_api_details',
          'update_callback' => 'owaf_post_rest_api_details',
          'schema' => null
        ]
    );

    // J'ajoute un nouveau champ : commentaire
      register_rest_field(
        'lieu',
        'commentaire',
        [
          'get_callback' => 'owaf_rest_api_commentaire',
          'update_callback' => 'owaf_post_rest_api_commentaire',
          'schema' => null
        ]
    );

}

// Fonction appelée Get en callback
function owaf_rest_api_adresse($lieu, $adresse, $request) {

  return get_post_meta($lieu['id'], 'adresse', true);
}
// Fonction appelée Psot en callback
function owaf_post_rest_api_adresse( $value, $object, $field_name) {

  return update_post_meta($object->ID, 'adresse', $value);
}

// Fonction appelée en callback
function owaf_rest_api_details($lieu, $details, $request) {

  return get_post_meta($lieu['id'], 'details', true);
}
// Fonction appelée Psot en callback
function owaf_post_rest_api_details( $value, $object, $field_name) {

  return update_post_meta($object->ID, 'details', $value);
}

// Fonction appelée en callback
function owaf_rest_api_commentaire($lieu, $commentaire, $request) {

  return get_post_meta($lieu['id'], 'commentaire', true);
}
// Fonction appelée Psot en callback
function owaf_post_rest_api_commentaire( $value, $object, $field_name) {

  return update_post_meta($object->ID, 'commentaire', $value);
}
