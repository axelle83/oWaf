<?php


// Fonction appelée lors du hook rest api init
function owaf_user_register_rest_fields() {

    register_rest_field(
      'user',
      'dog_id',
        [
            'get_callback'  => 'rest_get_dog_id_user_field',
            'update_callback'   => 'rest_post_dog_id_user_field',
            'schema'            => null,
         ]
    );

    register_rest_field(
      'user',
      'ville',
        [
            'get_callback'  => 'rest_get_ville_user_field',
            'update_callback'   => 'rest_post_ville_user_field',
            'schema'            => null,
         ]
    );

}

function rest_get_dog_id_user_field( $object, $field_name, $request ) {

    return get_user_meta( $object[ 'id' ], 'dog_id', true );
}

function rest_post_dog_id_user_field( $value, $object, $field_name) {

    return update_user_meta($object->id, 'dog_id', $value);
    
}

function rest_get_ville_user_field( $object, $field_name, $request ) {

    return get_user_meta( $object[ 'id' ], 'ville', true );
}

function rest_post_ville_user_field( $value, $object, $field_name ) {

    return update_user_meta($object->id, 'ville', $value);
}
