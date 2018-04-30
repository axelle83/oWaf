<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'owaf');

/** MySQL database username */
define('DB_USER', 'owaf');

/** MySQL database password */
define('DB_PASSWORD', 'owaf');

/** MySQL hostname */
// define('DB_HOST', 'localhost');
define('DB_HOST', '217.70.189.93');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'R)4@Q;ln,_?WY72dro)Y%1+6 /HR-v{3F)tk4!q9K }*R}e|CXY[<!ub Pk>Ye|Q');
define('SECURE_AUTH_KEY',  '{}05X20=Jf3(^AUQjrti|F5NH?L!BUi)srdQ,L+a$1/]lkc>i3q+0lCXDXS0+J#9');
define('LOGGED_IN_KEY',    'sz{*LNw+JhiL+j(QUjLavM3@z-.[UQ!7;4R5xc;K)T.+dH#50q;Je]8Tha.N18(/');
define('NONCE_KEY',        '(+qj#g]!:!F^v7X>[7I@U+$M.U`qzKUO,!MA2|Gcn/44dJc<l,?3T62IVR[la]n0');
define('AUTH_SALT',        '5ax,K9$y_b/;!i0Sc?~6O5Y)5,esk$Bqm*JQF-5~^ZFb1ww{fj%+50~b%Q=NH<7C');
define('SECURE_AUTH_SALT', ';875SZ|-Elt{F.$Q_[SBwG#nPLbf!aV_{@UnXb]OvI#|HeBJyFT-^mv|]?TSzo9o');
define('LOGGED_IN_SALT',   'j|Yo#dZS% `Fi_1:V5)yLc+W_4s,iq`hdR0PK9Ic<-E8x2+o}iW3|-i+a%Faf:r}');
define('NONCE_SALT',       '6B-v[g0J/:`zNj1|Pxdz0+2izgq<3tX<`hM5+i(e}XZtGEu?1=<zh7ivh[Q8|x>K');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * Déplacement du répertoire par défaut WP-CONTENT
 *
 * @link https://codex.wordpress.org/fr:Modifier_wp-config.php#D.C3.A9placer_le_R.C3.A9pertoire_wp-content
 */
// Chemin local du répertoire WP-CONTENT (déplacé)
define('WP_CONTENT_DIR', dirname(ABSPATH) . '/content');

// URL complete du répertoire WP-CONTENT (déplacé)
define('WP_CONTENT_URL', 'http://localhost/oWaf/WordPress/content');
// define('WP_CONTENT_URL', 'http://217.70.189.93/WordPress/content/');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

// Si je suis en DEV
if (WP_DEBUG) {

  // Je n'enregistre pas les erreurs dans un fichier de log
  define('WP_DEBUG_LOG', false);

  // J'affiche mes erreurs
  define('WP_DEBUG_DISPLAY', true);

  // Je laisse activé l'installation de plugins ou thèmes
  define('DISALLOW_FILE_MODS', false);

  // Force le téléchargement direct dans mon dossier sans FTP etc.
  define('FS_METHOD', 'direct');

  // Je vais limiter le nombre de version d'un contenu
  define('WP_POST_REVISIONS', 3);

// SI je suis en PROD
} else {

  // Je vais enregistrer mes erreurs dans un fichier
  define('WP_DEBUG_LOG', true);

  // Je n'affiche pas mes erreurs
  define('WP_DEBUG_DISPLAY', false);

  // Désactive l'installation de plugins ou thèmes
  define('DISALLOW_FILE_MODS', true);
}

// Bloque l'éditeur embarqué
define('DISALLOW_FILE_EDIT', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
    define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
