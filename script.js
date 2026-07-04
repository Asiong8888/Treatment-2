let form = document.getElementById("form");
let tabelData = document.getElementById("tabelData");

let nomor = 1;
let barisEdit = null;

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let nim = document.getElementById("nim").value;
    let layanan = document.getElementById("layanan").value;
    let keterangan = document.getElementById("keterangan").value;

    if (nama == "") {
        alert("Nama harus diisi!");
        document.getElementById("nama").focus();
        return;
    }

    if (nim == "") {
        alert("NIM harus diisi!");
        document.getElementById("nim").focus();
        return;
    }

    if (layanan == "") {
        alert("Pilih jenis layanan!");
        document.getElementById("layanan").focus();
        return;
    }

    if (keterangan == "") {
        alert("Keterangan harus diisi!");
        document.getElementById("keterangan").focus();
        return;
    }

    if (!isNaN(nama)) {
        alert("Nama hanya boleh berisi huruf!");
        document.getElementById("nama").focus();
        return;
    }

    if (isNaN(nim)) {
        alert("NIM hanya boleh berisi angka!");
        document.getElementById("nim").focus();
        return;
    }

    if (barisEdit == null) {

        let baris = tabelData.insertRow();

        baris.insertCell(0).innerHTML = nomor;
        baris.insertCell(1).innerHTML = nama;
        baris.insertCell(2).innerHTML = nim;
        baris.insertCell(3).innerHTML = layanan;
        baris.insertCell(4).innerHTML = keterangan;

        let aksi = baris.insertCell(5);

        aksi.innerHTML =
            "<button class='edit' onclick='editData(this)'>Edit</button> " +
            "<button class='hapus' onclick='hapusData(this)'>Hapus</button>";

        nomor++;

    }
    else {

        barisEdit.cells[1].innerHTML = nama;
        barisEdit.cells[2].innerHTML = nim;
        barisEdit.cells[3].innerHTML = layanan;
        barisEdit.cells[4].innerHTML = keterangan;

        barisEdit = null;

    }

    form.reset();

});


function editData(button) {

    barisEdit = button.parentNode.parentNode;

    document.getElementById("nama").value = barisEdit.cells[1].innerHTML;
    document.getElementById("nim").value = barisEdit.cells[2].innerHTML;
    document.getElementById("layanan").value = barisEdit.cells[3].innerHTML;
    document.getElementById("keterangan").value = barisEdit.cells[4].innerHTML;

}


function hapusData(button) {

    let konfirmasi = confirm("Apakah Anda yakin ingin menghapus data ini?");

    if (konfirmasi) {

        let baris = button.parentNode.parentNode;

        baris.remove();

    }

}