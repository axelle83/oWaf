<?php
   /*
   Plugin Name: RestApi (RAR)
   Description: Créer une liaison BDD entre WP et React
   Version: 1.0
   Author: oWaf
   */


require plugin_dir_path(__FILE__) . 'rest_api/dog.php';
require plugin_dir_path(__FILE__) . 'rest_api/lieu.php';
require plugin_dir_path(__FILE__) . 'rest_api/user.php';



add_action( 'rest_api_init', 'owaf_dog_register_rest_fields' );
add_action( 'rest_api_init', 'owaf_lieu_register_rest_fields' );
add_action( 'rest_api_init', 'owaf_user_register_rest_fields' );




add_filter( 'rest_user_query' , 'custom_rest_user_query' );
    function custom_rest_user_query( $prepared_args, $request = null ) {
    unset($prepared_args['has_published_posts']);
    return $prepared_args;
}
