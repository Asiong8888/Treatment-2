const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let data = JSON.parse(localStorage.getItem("pengajuan")) || [];

    data.push({
        nama: document.getElementById("nama").value,
        nim: document.getElementById("nim").value,
        layanan: document.getElementById("layanan").value,
        keterangan: document.getElementById("keterangan").value
    });

    localStorage.setItem("pengajuan", JSON.stringify(data));

    alert("Data berhasil disimpan");

    form.reset();
});