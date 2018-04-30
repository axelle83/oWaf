<?php
   /*
   Plugin Name: RestApi (RAR)
   Description: Créer une liaison BDD entre WP et React
   Version: 1.0
   Author: IL

   */

    function owaf_register_rest_fields() {


        register_rest_field( 'post', 'nom_du_lieu', array(
            'get_callback' => function( $post ) {
                return get_field('nom_du_lieu');
            }
        ) );

        register_rest_field( 'post', 'coordonnees_gps', array(
            'get_callback' => function( $post ) {
                return get_field('coordonnees_gps');
            }
        ) );

        register_rest_field( 'post', 'adresse', array(
            'get_callback' => function( $post ) {
                return get_field('adresse');
            }
        ) );

        register_rest_field( 'post', 'laisse', array(
            'get_callback' => function( $post ) {
                return get_field('laisse');
            }
        ) );

        register_rest_field( 'post', 'fontaine', array(
            'get_callback' => function( $post ) {
                return get_field('fontaine');
            }
        ) );

        register_rest_field( 'post', 'sac', array(
            'get_callback' => function( $post ) {
                return get_field('sac');
            }
        ) );

        register_rest_field( 'post', 'commentaire', array(
            'get_callback' => function( $post ) {
                return get_field('commentaire');
            }
        ) );


    }


    add_action( 'rest_api_init', 'owaf_register_rest_fields' );



    fonction publique get_remote_posts() {
    $posts = get_transient ('remote_posts');
    if (vide ($posts)) {
        $ response = wp_remote_get ('http://217.70.189.93/wp-json/wp/v2/posts/');
        if (is_wp_error ($réponse)) {
            return array ();
        }

        $posts = json_decode (wp_remote_retrieve_body($response));

        if (vide ($posts)) {
            return array ();
        }

    }
}
