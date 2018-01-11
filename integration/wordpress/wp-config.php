<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'david');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'troiswa');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '!Av2j-er8t]t96l($W,1&rhJ<=g)8TzBjY~C)uxoMoB7@lQj4%]ms[(NGj$OncGP');
define('SECURE_AUTH_KEY',  'L9ZlRC4%dkfNdnY;mD#,Q{mW-SJgC7b.5E`~(e,8BzduTwgJie~=ye VVI~hC{k+');
define('LOGGED_IN_KEY',    '`6wZ-kE8zmMKOaW+4JXV@_x0SD)=f ppe7;#y|^lkC/2I/>ZLeYgZpb~he~0sW+G');
define('NONCE_KEY',        '{$@b9nIB&@(]5NnQmh45VS/4y3jc2wDxb--{vz#mOJ?Z8x+EI)fC(,SP](oa77[m');
define('AUTH_SALT',        '|hC$gKJh#xb%xSq%i&rJ:QSe1=PE]pL5qZL2VpRfsm>:2?3KKV`CB}6#<w1ra6ia');
define('SECURE_AUTH_SALT', '^1*$c3F;HaU$N)R6_Ev?Mk`sssSqJ4f&KG%c7D(ri!eo,4OarCd[Rx>[x/l~=L#*');
define('LOGGED_IN_SALT',   '~o2HHMp#8+_/rnpn7Yy,Hi.g4~rCl/C$]e|9v9(JE0324).Ld(:8;(@k-[9Q7m} ');
define('NONCE_SALT',       'Lv:oTR~F{NiJ]sW36gdlrM-Q<qg6eG[>a5(l.)Pj1RZ74r]JigQ|<vSPegOxI?@p');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');