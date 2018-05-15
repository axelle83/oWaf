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
define('AUTH_KEY',         '++A)O: 0aL~NhZS&k)U1f1M%R qaG@nTJlq|*N!]-7++jMqZPh:N+9$CIwb1-.]z');
define('SECURE_AUTH_KEY',  'ruk94oz9!D9G3mChlklOMX#DB (D6=$5{}B<gAg.Bgsf|wMUdQkoyKb 9K_B X%c');
define('LOGGED_IN_KEY',    'jSnen{]M}g/Pw#T9.X{ vS/.4Q`^x`c8OmD %Ko<^^+/?2p^U~&23XP_v{r[Sd C');
define('NONCE_KEY',        '5q{7Fj)I^J/C+57l~+2r{2.,-8W>*vif4jEWHj$+W?$9#u^[|jo+/2r4!z@*Ff()');
define('AUTH_SALT',        'k^%|~lSV0+q[?F4},-FU|p4I*yGang9l?gl^`z%|GV?$~Q5s;?oI9oE`~6}Qt<@h');
define('SECURE_AUTH_SALT', '(=E*d`yz!?fhO x}~;BHwZFy5 [f4+c+@nYO|R WT-QPd3*Vf-iTlw(QH1VPUyqk');
define('LOGGED_IN_SALT',   '#x3(>Hx}[$}(Jg&R^C~/im1K$-t0L<8-Zc`,jR;`p|?F-fUBV>JrAun]_&-metUP');
define('NONCE_SALT',       'Dpr?{H{|[^<4(7>u^`-A@V5>7|%OjkU9t#ZSv}|ZjN[QWhK3toSDP9rh& 7OelNO');

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

// define('WP_CONTENT_URL', 'http://localhost/oWaf/WordPress/content');
define('WP_CONTENT_URL', 'http://217.70.189.93/blog/content/');

define('WP_HOME','http://217.70.189.93/blog/wp');
define('WP_SITEURL','http://217.70.189.93/blog');
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
