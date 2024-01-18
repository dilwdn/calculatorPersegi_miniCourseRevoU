function hitungLuas() {
    const sisiInput = document.getElementById("sisi-luas");
    const sisi = sisiInput.value;
  
    // Periksa apakah input sisi telah diisi
    if (sisi.trim() === "") {
      alert("Silakan masukkan nilai sisi.");
      return;
    }
  
    // Konversi nilai sisi ke dalam tipe numerik
    const sisiNumerik = parseFloat(sisi);
  
    // Periksa apakah nilai sisi valid
    if (isNaN(sisiNumerik) || sisiNumerik <= 0) {
      alert("Nilai sisi harus berupa angka positif.");
      return;
    }
  
    // Hitung luas
    const luas = sisiNumerik * sisiNumerik;
  
    // Tampilkan hasil perhitungan
    const rumusLuas = document.getElementById("rumus-luas");
    const perhitunganLuas = document.getElementById("perhitungan-luas");
    const outputLuas = document.getElementById("output-luas");
    rumusLuas.textContent = `L = S x S`;
    perhitunganLuas.textContent = `L = ${sisiNumerik} x ${sisiNumerik}`;
    outputLuas.textContent = luas;
    rumusLuas.style.display = "block";
    perhitunganLuas.style.display = "block";
    outputLuas.style.display = "block";
  }
  
  function resetLuas() {
    const sisiInput = document.getElementById("sisi-luas");
    const rumusLuas = document.getElementById("rumus-luas");
    const perhitunganLuas = document.getElementById("perhitungan-luas");
    const outputLuas = document.getElementById("output-luas");
  
    sisiInput.value = ""; // Mengatur ulang nilai input sisi
    rumusLuas.style.display = "none"; // Menyembunyikan elemen rumus
    perhitunganLuas.style.display = "none"; // Menyembunyikan elemen perhitungan
    outputLuas.style.display = "none"; // Menyembunyikan elemen output
  }
  
  function hitungKeliling() {
    const sisiInput = document.getElementById("sisi-keliling");
    const sisi = sisiInput.value;
  
    // Periksa apakah input sisi telah diisi
    if (sisi.trim() === "") {
      alert("Silakan masukkan nilai sisi.");
      return;
    }
  
    // Konversi nilai sisi ke dalam tipe numerik
    const sisiNumerik = parseFloat(sisi);
  
    // Periksa apakah nilai sisi valid
    if (isNaN(sisiNumerik) || sisiNumerik <= 0) {
      alert("Nilai sisi harus berupa angka positif.");
      return;
    }
  
    // Hitung luas
    const keliling = 4 * sisiNumerik;
  
    // Tampilkan hasil perhitungan
    const rumusKeliling = document.getElementById("rumus-keliling");
    const perhitunganKeliling = document.getElementById("perhitungan-keliling");
    const outputKeliling = document.getElementById("output-keliling");
    rumusKeliling.textContent = `K = 4 x S`;
    perhitunganKeliling.textContent = `K = ${4} x ${sisiNumerik}`;
    outputKeliling.textContent = keliling;
    rumusKeliling.style.display = "block";
    perhitunganKeliling.style.display = "block";
    outputKeliling.style.display = "block";
  }
  function resetKeliling() {
    const sisiInput = document.getElementById("sisi-keliling");
    const rumusKeliling = document.getElementById("rumus-keliling");
    const perhitunganKeliling = document.getElementById("perhitungan-keliling");
    const outputKeliling = document.getElementById("output-keliling");
  
    sisiInput.value = ""; // Mengatur ulang nilai input sisi
    rumusKeliling.style.display = "none"; // Menyembunyikan elemen rumus
    perhitunganKeliling.style.display = "none"; // Menyembunyikan elemen perhitungan
    outputKeliling.style.display = "none"; // Menyembunyikan elemen output
  }