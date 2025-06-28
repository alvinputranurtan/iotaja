$(document).ready(function () {
  function loadPage(page, title, push = true) {
    $("#main-content").load("pages/" + page, function () {
      if (page === "grafik.php") {
        loadGrafik(); // dari grafik.js
      }
    });

    $(".toggle-title").text(title);
    $(".menu-link").removeClass("active");
    $('.menu-link[data-page="' + page + '"]').addClass("active");

    if (push) {
      history.pushState({ page: page, title: title }, "", "?page=" + page.replace(".php", ""));
    }

    if (window.innerWidth <= 768) {
      $("#sidebar").removeClass("active");
      $("#overlay").removeClass("active");
      $(".toggle-sidebar").removeClass("fa-times").addClass("fa-bars");
    }
  }

  $(".toggle-sidebar").click(function () {
    $("#sidebar").toggleClass("active");
    $("#overlay").toggleClass("active");
    $(".toggle-sidebar").toggleClass("fa-bars fa-times");
  });

  $(".close-sidebar, #overlay").click(function () {
    $("#sidebar").removeClass("active");
    $("#overlay").removeClass("active");
    $(".toggle-sidebar").removeClass("fa-times").addClass("fa-bars");
  });

  $(".menu-link").click(function (e) {
    e.preventDefault();
    const page = $(this).data("page");
    const title = $(this).data("title");
    loadPage(page, title);
  });

  // Handle back/forward browser
  window.onpopstate = function () {
    const params = new URLSearchParams(location.search);
    const page = (params.get("page") || "dashboard") + ".php";
    const title = $('.menu-link[data-page="' + page + '"]').data("title") || "Dashboard";
    loadPage(page, title, false);
  };

    // Cek kalau page awal adalah grafik → panggil fungsi manual
  const initialPage = new URLSearchParams(window.location.search).get("page") || "dashboard";
  if (initialPage === "grafik") {
    loadGrafik();
  }



// jam-script.js
function updateCheckboxStates() {
  $(".jam-item").each(function () {
    const mulai = $(this).find('input[name="mulai[]"]').val();
    const selesai = $(this).find('input[name="selesai[]"]').val();
    const checkbox = $(this).find('input[type="checkbox"]');

    let isValid = false;

    if (mulai && selesai) {
      const [jm, mm] = mulai.split(":").map(Number);
      const [js, ms] = selesai.split(":").map(Number);
      const waktuMulai = jm * 60 + mm;
      const waktuSelesai = js * 60 + ms;

      if (waktuSelesai > waktuMulai && waktuSelesai !== 0) {
        isValid = true;
      }
    }

    if (isValid) {
      checkbox.prop("disabled", false);
    } else {
      checkbox.prop("disabled", true).prop("checked", false);
    }
  });
}

function hapusListKosongKecualiSatu() {
  const kosongItems = $(".jam-item").filter(function () {
    const mulai = $(this).find('input[name="mulai[]"]').val();
    const selesai = $(this).find('input[name="selesai[]"]').val();
    const checked = $(this).find('input[type="checkbox"]').is(':checked');
    return !mulai && !selesai && !checked;
  });

  if (kosongItems.length > 1) {
    kosongItems.slice(1).remove();
  }
}

function tambahListJikaChecklistDicek() {
  const checkedItems = $(".jam-item").filter(function () {
    return $(this).find('input[type="checkbox"]').is(':checked');
  });

  const kosongItems = $(".jam-item").filter(function () {
    const mulai = $(this).find('input[name="mulai[]"]').val();
    const selesai = $(this).find('input[name="selesai[]"]').val();
    const checked = $(this).find('input[type="checkbox"]').is(':checked');
    return !mulai && !selesai && !checked;
  });

  if (checkedItems.length > 0 && kosongItems.length === 0) {
    const newItem = `
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
    `;
    $("#jamList").append(newItem);
  }
}

function handleFormLogic() {
  updateCheckboxStates();
  tambahListJikaChecklistDicek();
  hapusListKosongKecualiSatu();
}

$(document).ready(function () {
  handleFormLogic();
});

$(document).on("input change", 'input[name="mulai[]"], input[name="selesai[]"], input[type="checkbox"]', function () {
  handleFormLogic();
});




});
