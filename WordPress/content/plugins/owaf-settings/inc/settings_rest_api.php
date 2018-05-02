<?php
   /*
   Plugin Name: RestApi (RAR)
   Description: Créer une liaison BDD entre WP et React
   Version: 1.0
   Author: oWaf

   */

    function restapi_add_json() {


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

        register_rest_field( 'post', 'nom_du_chien', array(
            'get_callback' => function( $post ) {
                return get_field('nom_du_chien');
            }
        ) );

        register_rest_field( 'post', 'annee_de_naissance', array(
            'get_callback' => function( $post ) {
                return get_field('annee_de_naissance');
            }
        ) );

        register_rest_field( 'post', 'photo_du_chien', array(
            'get_callback' => function( $post ) {
                return get_field('photo_du_chien');
            }
        ) );

        register_rest_field( 'post', 'male', array(
            'get_callback' => function( $post ) {
                return get_field('male');
            }
        ) );

        register_rest_field( 'post', 'femelle', array(
            'get_callback' => function( $post ) {
                return get_field('femelle');
            }
        ) );

        register_rest_field( 'post', 'ville', array(
            'get_callback' => function( $post ) {
                return get_field('ville');
            }
        ) );


    }

    add_action( 'rest_api_init', 'restapi_add_json' );
