<?php

// Fonction appelée lors du hook rest api init
function owaf_lieu_register_rest_fields() {

    // J'ajoute un nouveau champ : adresse
    register_rest_field(
        'lieu',
        'adresse',
        [
            'get_callback' => 'owaf_rest_api_adresse',
            'update_callback' => null,
            'schema'  => null
        ]
    );

    // J'ajoute un nouveau champ : details
      register_rest_field(
        'lieu',
        'details',
        [
          'get_callback' => 'owaf_rest_api_details',
          'update_callback' => null,
          'schema' => null
        ]
    );

    // J'ajoute un nouveau champ : commentaire
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

// Fonction appelée en callback
function owaf_rest_api_adresse($lieu, $adresse, $request) {

  return get_post_meta($lieu['id'], 'adresse', true);
}

// Fonction appelée en callback
function owaf_rest_api_details($lieu, $details, $request) {

  return get_post_meta($lieu['id'], 'details', true);
}

// Fonction appelée en callback
function owaf_rest_api_commentaire($lieu, $commentaire, $request) {

  return get_post_meta($lieu['id'], 'commentaire', true);
}
