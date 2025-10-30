<?php
// === DEBUG: Show all errors ===
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php-error.log');

// === Load PHPMailer ===
if (!file_exists(__DIR__ . '/PHPMailer/PHPMailer.php')) {
    die(json_encode(["error" => "PHPMailer.php not found!"]));
}
require_once 'PHPMailer/PHPMailer.php';
require_once 'PHPMailer/SMTP.php';
require_once 'PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// === Load .env ===
$EMAIL_ADDRESS = $EMAIL_PASSWORD = '';
if (file_exists(__DIR__ . '/.env')) {
    $lines = file(__DIR__ . '/.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) continue;
        if (strpos($line, '=') === false) continue;
        list($key, $value) = explode('=', $line, 2);
        $_ENV[trim($key)] = trim($value);
    }
    $EMAIL_ADDRESS  = $_ENV['EMAIL_ADDRESS'] ?? '';
    $EMAIL_PASSWORD = $_ENV['EMAIL_PASSWORD'] ?? '';
}

// === CORS ===
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// === Must be POST ===
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit();
}

// === Read JSON ===
$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON"]);
    exit();
}

// === Extract fields ===
$name     = $input['name'] ?? '';
$email    = $input['email'] ?? '';
$company  = $input['company'] ?? '';
$country  = $input['country'] ?? '';
$state    = $input['state'] ?? '';
$city     = $input['city'] ?? '';
$category = $input['category'] ?? '';
$message  = $input['message'] ?? '';

// === Validate ===
if (empty($name) || empty($email) || empty($company) || empty($country) || empty($state) || empty($city)) {
    http_response_code(400);
    echo json_encode(["error" => "All required fields must be filled"]);
    exit();
}

// === Send Email ===
try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = $EMAIL_ADDRESS;
    $mail->Password   = $EMAIL_PASSWORD;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom($EMAIL_ADDRESS, 'Contact Form');
    $mail->addAddress('vatan@ranganiindia.com');
    $mail->Subject = "New Contact - $category";
    $mail->Body    = "Name: $name\nEmail: $email\nCompany: $company\nCountry: $country\nState: $state\nCity: $city\nCategory: $category\n\nMessage:\n$message";

    $mail->send();
    echo json_encode(["message" => "Your message has been sent successfully!"]);

} catch (Exception $e) {
    error_log("PHPMailer Error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(["error" => "Email failed: " . $e->getMessage()]);
}
?>