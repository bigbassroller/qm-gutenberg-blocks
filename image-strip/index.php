<?php

/**
 * Plugin Name: Gutenberg Examples Basic EsNext
 * Plugin URI: https://github.com/WordPress/qm-gutenberg-blocks
 * Description: This is a plugin demonstrating how to register new blocks for the Gutenberg editor.
 * Version: 1.0.2
 * Author: the Gutenberg Team
 *
 * @package qm-gutenberg-blocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
*/
add_action( 'init', 'image_strip_load_textdomain' );

function image_strip_load_textdomain() {
	load_plugin_textdomain( 'qm-gutenberg-blocks', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function image_strip_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	wp_register_script(
		'qm-gutenberg-blocks-image-strip',
		plugins_url( 'build/index.js', __FILE__ ),
		array( 
      'wp-blocks', 
      'wp-i18n', 
      'wp-element',
      'wp-editor' 
    ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
	);

  wp_register_style(
      'qm-gutenberg-blocks-image-strip-editor',
      plugins_url( 'editor.css', __FILE__ ),
      array( 'wp-edit-blocks' ),
      filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
  );

  wp_register_style(
      'qm-gutenberg-blocks-image-strip',
      plugins_url( 'style.css', __FILE__ ),
      array( ),
      filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
  );


	register_block_type( 'qm-gutenberg-blocks/image-strip', array(
    'style' => 'qm-gutenberg-blocks-image-strip',
    'editor_style' => 'qm-gutenberg-blocks-image-strip-editor',
		'editor_script' => 'qm-gutenberg-blocks-image-strip',
	) );

  if ( function_exists( 'wp_set_script_translations' ) ) {
    /**
     * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
     * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
     * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
     */
    wp_set_script_translations( 'qm-gutenberg-blocks-image-strip', 'qm-gutenberg-blocks' );
  }

}
add_action( 'init', 'image_strip_register_block' );
