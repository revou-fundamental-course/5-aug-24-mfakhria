function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let age = document.getElementById("age").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    if (weight == '' || height == '' || age == '') {
        alert("Semua kolom harus diisi!");
        return;
    }

    height = height / 100;

    let bmi = (weight / (height * height)).toFixed(1);

    let category = "";
    let description = "";

    if (bmi < 18.5) {
        category = "Kekurangan berat badan";
        description = "Anda berada dalam kategori kekurangan berat badan. Cobalah untuk menambah berat badan agar mencapai berat badan ideal.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal (Ideal)";
        description = "Anda memiliki berat badan ideal. Pertahankan pola makan dan gaya hidup sehat Anda.";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        category = "Kelebihan berat badan";
        description = "Anda berada dalam kategori kelebihan berat badan. Cobalah untuk menurunkan berat badan dengan mengatur pola makan dan olahraga.";
    } else {
        category = "Kegemukan (Obesitas)";
        description = "Anda berada dalam kategori kegemukan. Dianjurkan untuk menurunkan berat badan hingga batas normal.";
    }

    document.getElementById("result").style.display = "block";
    document.getElementById("category").innerText = category;
    document.getElementById("bmi").innerText = bmi;
    document.getElementById("bmi-description").innerText = description;
}
