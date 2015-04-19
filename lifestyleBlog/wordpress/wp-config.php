<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'lifestyleBlog');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'adminadmin');

/** MySQL hostname */
define('DB_HOST', 'localhost');

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
define('AUTH_KEY',         '[k@[~c`gv.gJM8jfSHYu!k=~`Vn}_6fI$L)[Z?Y-r:$&pbtY$K23}qAai0Z^2^w=');
define('SECURE_AUTH_KEY',  'aki3lx%|Jw[&U@HvP&$(Y`xvb7iU ?ge1mB3n}g$`2B$L.D2heBp26G=g_A8V&~#');
define('LOGGED_IN_KEY',    'iG(qF(k~ZJcKCA!ScfldVm+Hs~.@]9}]_ql?A+Jn2*0 [0SOtDU=*<G$!:k2uaRu');
define('NONCE_KEY',        '(gM!]+Ux*+%T]w<1R@y*Z@+EAigep_~u7V+&!jxfs(3eE>KEo(IgCmW1@T>/wJal');
define('AUTH_SALT',        '.`G3:p$!1o)Cwr$-5V?yjapCJj=ZVmu6Nc<A(jt*bdrnG%z4LOXuTD.t-[8oeOp.');
define('SECURE_AUTH_SALT', '3IGKkYpbsskm qqFn.7nI%n]SMx)>;z02*lMm:T>Ao, ;jaPx:v*/2UYK8cZ>MDz');
define('LOGGED_IN_SALT',   'PrZ3UA>vhjUI%yxG@w|_<tOITTal>fg DK S2F|qiP6x]&{T}/.<#uRg;tf1Efng');
define('NONCE_SALT',       '$G{:X>&syQ!=Djr577J#8]2)/@Ki)nQ7nJ9?NQ=uQxcQcW],MUU]kh+Cf!)YJh[-');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
