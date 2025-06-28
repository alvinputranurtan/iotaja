<div class="container my-4">
    <div class="row g-4">

        <!-- 1. Tekan Untuk Hidupkan Sprayer -->
        <div class="col-md-6 col-12">
            <div class="card-custom-control text-center p-4">
                <h5 class="mb-4">Tekan Untuk Hidupkan Sprayer</h5>
                <div class="circle-button">Tekan</div>
            </div>
        </div>

        <!-- 2. Hidupkan Sprayer Menggunakan Timer -->
        <div class="col-md-6 col-12">
            <div class="card-custom-control p-4 text-center">
                <h5 class="mb-4">Hidupkan Sprayer Menggunakan Timer</h5>
                <div class="d-flex flex-column flex-md-row align-items-center justify-content-center">
                    <div class="bg-form-custom2 flex-grow-1 me-md-4 mb-4 mb-md-0">
                        <div class="input-group mb-3">
                            <input type="number" class="form-control form-control-custom fw-bold" value="5" min="1">
                            <span class="input-group-text" style="min-width: 70px;">Menit</span>
                        </div>
                        <button class="btn btn-primary w-100">Submit</button>
                    </div>
                    <div class="d-flex justify-content-center align-items-center flex-shrink-0">
                        <div class="circle-button">Proses</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 3. Hidupkan Sprayer Jika -->
        <div class="col-md-6 col-12">
            <div class="card-custom-control p-4 text-center">
                <h5 class="mb-4">Hidupkan Sprayer Jika</h5>
                <div class="d-flex flex-column flex-md-row align-items-center">
                    <div class="bg-form-custom2 flex-grow-1 me-md-4 mb-4 mb-md-0">
                        <div class="mb-3">
                            <label class="form-label">Kelembaban Tanah Dibawah</label>
                            <div class="input-group">
                                <input type="number" class="form-control form-control-custom fw-bold" value="50">
                                <span class="input-group-text" style="min-width: 70px;">%</span>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Hidupkan Selama</label>
                            <div class="input-group">
                                <input type="number" class="form-control form-control-custom fw-bold" value="5">
                                <span class="input-group-text" style="min-width: 70px;">Menit</span>
                            </div>
                        </div>
                        <button class="btn btn-primary w-100">Submit</button>
                    </div>
                    <div class="d-flex justify-content-center align-items-center flex-shrink-0">
                        <div class="circle-button">Tekan</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 4. Hidupkan Sprayer Berdasarkan Jam -->
        <div class="col-md-6 col-12">
            <div
                class="card-custom-control p-4 position-relative d-flex flex-column justify-content-center h-100 rounded">
                <h5 class="text-center mb-4">Hidupkan Sprayer Berdasarkan Jam</h5>

                <div class="d-flex flex-column flex-md-row align-items-center">
                    <!-- FORM JAM -->
                    <div class="bg-form-custom2 flex-grow-1 me-md-4 w-100" id="jamList">
                        <div class="d-flex align-items-center mb-3 jam-item">
                            <div class="me-2 w-100">
                                <label class="form-label small mb-1">Mulai</label>
                                <input type="time" class="form-control form-control-custom" name="mulai[]">
                            </div>

                            <div class="me-2 w-100">
                                <label class="form-label small mb-1">Selesai</label>
                                <input type="time" class="form-control form-control-custom" name="selesai[]">
                            </div>

                            <div class="ms-3">
                                <input type="checkbox" name="aktif[]" class="form-check-input mt-4" disabled>
                            </div>
                        </div>
                    </div>

                    <!-- TOMBOL -->
                    <div class="d-flex justify-content-center align-items-center flex-shrink-0 mt-4 mt-md-0">
                        <div class="circle-button">Hidup</div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</div>