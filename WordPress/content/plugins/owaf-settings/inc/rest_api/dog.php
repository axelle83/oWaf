<?php


// Fonction appelée lors du hook rest api init, champs
function owaf_dog_register_rest_fields() {


    register_rest_field(
    'dog',
    'genre',
    [
      'get_callback' => 'owaf_rest_api_genre',
      'update_callback' => 'owaf_rest_post_api_genre',
      'schema' => null
    ]
    );

    register_rest_field(
    'dog',
    'naiss',
    [
     'get_callback' => 'owaf_rest_api_naiss',
     'update_callback' => 'owaf_rest_post_api_naiss',
     'schema' => null
    ]
    );

    register_rest_field(
        'dog',
        'dog_img',
        [
         'get_callback' => 'owaf_rest_api_dog_img',
         'update_callback' => 'owaf_rest_post_api_dog_img',
         'schema' => null
        ]
    );

}

function owaf_rest_api_genre( $object, $field_name, $request) {

  return get_post_meta($object['id'], 'genre', true);
}

function owaf_rest_post_api_genre( $value, $object, $field_name) {

  return update_post_meta($object->ID, 'genre', $value);

}

function owaf_rest_api_naiss( $object, $field_name, $request) {

  return get_post_meta($object['id'], 'naiss', true);
}

function owaf_rest_post_api_naiss( $value, $object, $field_name) {

  return update_post_meta($object->ID, 'naiss', $value);

}


function owaf_rest_api_dog_img( $object, $field_name, $request) {

  return get_post_meta($object['id'], 'dog_img', true);
}

function owaf_rest_post_api_dog_img( $value, $object, $field_name) {

  return update_post_meta($object->ID, 'dog_img', $value);

}
