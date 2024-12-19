<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Replace contact@example.com with your real receiving email address
  // Dirección de correo donde se enviarán los reportes
$receiving_email_address = 'felipe.jeldestf01@gmail.com';

// Verificar si la librería PHP Email Form existe
if (file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php')) {
    include($php_email_form);
} else {
    die('No se pudo cargar la librería "PHP Email Form". Por favor, verifica su ubicación.');
}

// Crear instancia del formulario de correo
$contact = new PHP_Email_Form;
$contact->ajax = true;

// Configurar destinatario y datos enviados desde el formulario
$contact->to = $receiving_email_address;
$contact->from_name = isset($_POST['name']) ? $_POST['name'] : 'Anónimo';
$contact->from_email = isset($_POST['email']) ? $_POST['email'] : 'no-reply@turiF.com';
$contact->subject = isset($_POST['subject']) ? $_POST['subject'] : 'Reporte de error';

// Agregar contenido al mensaje
$contact->add_message($_POST['name'] ?? 'Sin nombre', 'Nombre');
$contact->add_message($_POST['email'] ?? 'Sin correo', 'Email');
$contact->add_message($_POST['message'] ?? 'Sin descripción', 'Mensaje', 10);

// Enviar el formulario y responder al cliente
echo $contact->send();
?>
