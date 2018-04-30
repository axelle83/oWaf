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
define('AUTH_KEY',         ',JOg4 t~.j}>Z`8bENSuXl>d@.&++-jfvI+b />H<%[HE,t|{f~;.iC*Kf$E_O~{');
define('SECURE_AUTH_KEY',  'L-02leX[!.:Pw{H_bl>2K0ZguKCnU?z4?9E7,-(R;]&7l:0U.BfD>/=_]|=+,AJl');
define('LOGGED_IN_KEY',    'T+X%Eq~kTu8j<vR%B$JU{z*1bw9,y?]=e1(|(f)M|-gp}cx+f?l`ZjN[9JHM.1V$');
define('NONCE_KEY',        ' Vq?~+L;I5Swl!ajA#MTU%]D6zM N&Xdww|P0NzH&B#P~?bUuF_i51=QuJSmqafj');
define('AUTH_SALT',        '>;SDg-?2os(Pq0)`m8@q`,$2K32f<^-e9$kP,}hNqp{5^VR4HavPW-s<k?C3]9.p');
define('SECURE_AUTH_SALT', 'h%o%-8k9h9U#(^k28b@W5kUZ40=aG-vc(80qkl`-)Wj~VW+a+[ 0td[.F<+th~zx');
define('LOGGED_IN_SALT',   'BbTi#7F_:l]1CmN+|Y-Z6-DoZ7I?Odn[l[+TSXDN531mK#)gn3lb]hZLs3%{}p6~');
define('NONCE_SALT',       '{o0]0j@Ip6-3(S+N+Wir.B+jwL/P@jaV}]ixWY~lY0R`]S:@l=|RupXu] Hd$f7s');

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
  define('WP_DEBUG_LOG', false);

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
