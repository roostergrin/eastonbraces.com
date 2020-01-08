<?php
// wp api custom endpoints
add_action('rest_api_init', 'rg_register_routes');
function rg_register_routes () {
  register_rest_route('rg-mail/v1', 'contact', array(
    'methods' => WP_REST_Server::CREATABLE,
    'callback' => 'rg_serve_route'
  ));
  register_rest_route('rg-mail/v1', 'free', array(
    'methods' => WP_REST_Server::CREATABLE,
    'callback' => 'rg_serve_route_free'
  ));
}
// function for handling post request to new api route
function rg_serve_route () {
  require('wp-load.php');

  global $wpdb;

  $data = json_decode(file_get_contents("php://input"), true);
  $from = 'info@wordpress.com';
  $to = 'info@eastonbraces.com';
  // $to = 'cooper.timmerman@roostergrin.com';
  $subject = 'Easton Contact Form';
  $headers = array('Content-Type: text/html; charset=UTF-8');
  $message = '<html><body>';
  $message .= '<p><h4><strong>Form Submission for: </strong></h4>' . $data['fullName'] . '</p>';
  $message .= '<p><h4><strong>Parent/Guardian: </strong></h4>' . $data['guardName'] . '</p>';
  $message .= '<p><h4><strong>Email: </strong></h4>' . $data['clientEmail'] . '</p>';
  $message .= '<p><h4><strong>Phone: </strong></h4>' . $data['clientPhone'] . '</p>';
  $message .= '<p><h4><strong>Additional Comments: </strong></h4>' . $data['additionalComments'] . '</p>';
  $message .= '</body></html>';

  $table_name = $wpdb->prefix . 'emails';

  $charset_collate = $wpdb->get_charset_collate();

  $sql = "CREATE TABLE IF NOT EXISTS $table_name (
    `id` mediumint(9) NOT NULL AUTO_INCREMENT,
    `email` text NOT NULL,
    `message` text NOT NULL,
    UNIQUE (`id`)
  ) $charset_collate;";

  require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );

  dbDelta( $sql );

  $wpdb->insert($table_name, array(
    'email' => (string)$data['email'],
    'message' => (string)$message
  ));

  $sent_message = wp_mail($to, $subject, $message, $headers);

  if ($sent_message) {
    echo 'Email has been received!';
  } else {
    echo 'Could not send email.';
  }
}
function rg_serve_route_free () {
  require('wp-load.php');

  global $wpdb;

  $data = json_decode(file_get_contents("php://input"), true);
  $from = 'info@wordpress.com';
  $to = 'info@eastonbraces.com';
  // $to = 'cooper.timmerman@roostergrin.com';
  $subject = 'Easton Free Consult Contact Form';
  $headers = array('Content-Type: text/html; charset=UTF-8');
  $message = '<html><body>';
  $message .= '<p><h4><strong>Form Submission for: </strong></h4>' . $data['fullName'] . '</p>';
  $message .= '<p><h4><strong>Parent/Guardian: </strong></h4>' . $data['guardName'] . '</p>';
  $message .= '<p><h4><strong>Email: </strong></h4>' . $data['clientEmail'] . '</p>';
  $message .= '<p><h4><strong>Phone: </strong></h4>' . $data['clientPhone'] . '</p>';
  $message .= '<p><h4><strong>Interested in: </strong></h4>' . $data['technology'] . '</p>';
  $message .= '<p><h4><strong>Additional Comments: </strong></h4>' . $data['additionalComments'] . '</p>';
  $message .= '</body></html>';

  $table_name = $wpdb->prefix . 'emails';

  $charset_collate = $wpdb->get_charset_collate();

  $sql = "CREATE TABLE IF NOT EXISTS $table_name (
    `id` mediumint(9) NOT NULL AUTO_INCREMENT,
    `email` text NOT NULL,
    `message` text NOT NULL,
    UNIQUE (`id`)
  ) $charset_collate;";

  require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );

  dbDelta( $sql );

  $wpdb->insert($table_name, array(
    'email' => (string)$data['email'],
    'message' => (string)$message
  ));

  $sent_message = wp_mail($to, $subject, $message, $headers);

  if ($sent_message) {
    echo 'Email has been received!';
  } else {
    echo 'Could not send email.';
  }
}
