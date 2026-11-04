function hitung() {
  // 1. Ambil nilai dari form
  var input1 = document.getElementById("angka1").value;
  var input2 = document.getElementById("angka2").value;
  var operasi = document.getElementById("operasi").value;
  var hasilEl = document.getElementById("hasil");

  // 2. Validasi: angka tidak boleh kosong
  if (input1 === "" || input2 === "") {
    hasilEl.innerText = "Isi kedua angka dulu ya!";
    return;
  }

  var a = Number(input1);
  var b = Number(input2);
  var hasil;

  // 3. Hitung sesuai operasi yang dipilih
  if (operasi === "tambah") {
    hasil = a + b;
  } else if (operasi === "kurang") {
    hasil = a - b;
  } else if (operasi === "kali") {
    hasil = a * b;
  } else if (operasi === "bagi") {
    if (b === 0) {
      hasilEl.innerText = "Tidak bisa dibagi dengan 0";
      return;
    }
    hasil = a / b;
  }

  // 4. Tampilkan hasil
  hasilEl.innerText = "Hasil: " + hasil;
}