<?php
// Wajib pakai HTTPS di server produksi
// if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === 'off') {
//     die("Akses hanya boleh melalui HTTPS");
// }

// Koneksi DB
$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'iotaja';

$conn = new mysqli($host, $user, $password, $dbname);
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
$conn->set_charset('utf8mb4');

// Session aman
ini_set('session.cookie_httponly', 1);
ini_set('session.cookie_secure', 1);
session_start();
session_regenerate_id(true);
?>