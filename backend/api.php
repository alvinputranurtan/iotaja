<?php
header('Content-Type: application/json');

// Set zona waktu ke WIB
date_default_timezone_set("Asia/Jakarta");

// Lokasi file penyimpanan data
$data_file = 'data.json';

// Jika POST, simpan data dari ESP32
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    if (isset($input['kelembaban'])) {
        $kelembaban = intval($input['kelembaban']);
        $timestamp = date("Y-m-d H:i:s");

        // Format data yang akan disimpan
        $data = [
            'kelembaban' => $kelembaban,
            'timestamp' => $timestamp
        ];

        // Simpan ke file JSON
        file_put_contents($data_file, json_encode($data, JSON_PRETTY_PRINT));

        echo json_encode(['status' => 'success', 'message' => 'Data disimpan.']);
    } else {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Data kelembaban tidak ditemukan.']);
    }
}
// Jika GET, tampilkan data terakhir
elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($data_file)) {
        $data = file_get_contents($data_file);
        echo $data;
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Belum ada data.']);
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['status' => 'error', 'message' => 'Metode tidak diizinkan.']);
}
?>