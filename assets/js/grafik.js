function loadGrafik() {
    const mockData = {
        labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
        kelembabanTanah: [45, 48, 52, 50, 47, 49, 51],
        phTanah: [6.5, 6.7, 6.8, 6.6, 6.9, 6.5, 6.7],
        kelembabanUdara: [60, 62, 59, 63, 65, 61, 64],
        suhuUdara: [28, 29, 27, 30, 28, 29, 27]
    };

    function renderChart(canvasId, label, data, color) {
        const ctx = document.getElementById(canvasId).getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: mockData.labels,
                datasets: [{
                    label: label,
                    data: data,
                    backgroundColor: color + '33',
                    borderColor: color,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    }

    renderChart('chartKelembabanTanah', 'Kelembaban Tanah (%)', mockData.kelembabanTanah, '#00bcd4');
    renderChart('chartPHTanah', 'pH Tanah', mockData.phTanah, '#4caf50');
    renderChart('chartKelembabanUdara', 'Kelembaban Udara (%)', mockData.kelembabanUdara, '#ffc107');
    renderChart('chartSuhuUdara', 'Suhu Udara (°C)', mockData.suhuUdara, '#ff5722');
}
