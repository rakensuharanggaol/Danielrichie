// 1. Menampilkan data menggunakan innerHTML
function displayDataInnerHTML() {
    const dataDisplay = document.getElementById('data-display');
    const books = ['Harry Potter', 'Lord of the Rings', 'To Kill a Mockingbird'];
    
    let html = '<h3>Daftar Buku (innerHTML):</h3><ul>';
    for (let i = 0; i < books.length; i++) {
        html += `<li>${books[i]}</li>`;
    }
    html += '</ul>';
    
    dataDisplay.innerHTML = html;
}

// 2. Menampilkan data menggunakan createElement dan appendChild
function displayDataCreateElement() {
    const dataDisplay = document.getElementById('data-display');
    const authors = ['J.K. Rowling', 'J.R.R. Tolkien', 'Harper Lee'];
    
    const heading = document.createElement('h3');
    heading.textContent = 'Daftar Penulis (createElement):';
    dataDisplay.appendChild(heading);
    
    const list = document.createElement('ul');
    authors.forEach(author => {
        const item = document.createElement('li');
        item.textContent = author;
        list.appendChild(item);
    });
    
    dataDisplay.appendChild(list);
}

// 3. Menampilkan data menggunakan template literals dan insertAdjacentHTML
function displayDataTemplateString() {
    const dataDisplay = document.getElementById('data-display');
    const genres = ['Fiksi', 'Non-Fiksi', 'Sejarah', 'Sains'];
    
    const template = `
        <h3>Kategori Buku (template string):</h3>
        <ul>
            ${genres.map(genre => `<li>${genre}</li>`).join('')}
        </ul>
    `;
    
    dataDisplay.insertAdjacentHTML('beforeend', template);
}

// Implementasi variabel, operator, struktur kondisi, dan perulangan
function displayLibraryInfo() {
    const infoDisplay = document.getElementById('info-display');
    const libraryName = "Perpustakaan Digital";
    const bookCount = 1000;
    const isOpen = true;
    
    let message = `Selamat datang di ${libraryName}!\n`;
    message += `Kami memiliki lebih dari ${bookCount} buku.\n`;
    
    if (isOpen) {
        message += "Perpustakaan sedang buka. ";
        
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            message += "Selamat pagi!";
        } else if (currentHour < 18) {
            message += "Selamat siang!";
        } else {
            message += "Selamat malam!";
        }
    } else {
        message += "Maaf, perpustakaan sedang tutup.";
    }
    
    infoDisplay.innerHTML = `<p>${message}</p>`;
    
    // Menampilkan jam buka
    const openingHours = ["Senin-Jumat: 08:00 - 20:00", "Sabtu: 09:00 - 17:00", "Minggu: Tutup"];
    const hoursList = document.createElement('ul');
    
    for (let i = 0; i < openingHours.length; i++) {
        const item = document.createElement('li');
        item.textContent = openingHours[i];
        hoursList.appendChild(item);
    }
    
    infoDisplay.appendChild(document.createElement('h3').appendChild(document.createTextNode('Jam Buka:')));
    infoDisplay.appendChild(hoursList);
}

// Data buku pameran
const bukuPameran = [
    { judul: "Laskar Pelangi", penulis: "Andrea Hirata", deskripsi: "Novel tentang perjuangan anak-anak di Belitung untuk mendapatkan pendidikan.", gambar: "bahan/laskar.jpg" },
    { judul: "Bumi Manusia", penulis: "Pramoedya Ananta Toer", deskripsi: "Novel sejarah yang mengisahkan perjuangan melawan kolonialisme Belanda.", gambar: "bahan/bumi.jpeg" },
    { judul: "Pulang", penulis: "Tere Liye", deskripsi: "Kisah perjalanan hidup seorang anak yang merantau dan akhirnya pulang ke kampung halamannya.", gambar: "bahan/pulang.jpeg" },
    { judul: "Ronggeng Dukuh Paruk", penulis: "Ahmad Tohari", deskripsi: "Novel yang mengangkat kehidupan penari ronggeng di sebuah desa kecil.", gambar: "bahan/ronggeng.jpeg" },
    { judul: "Sang Pemimpi", penulis: "Andrea Hirata", deskripsi: "Lanjutan dari Laskar Pelangi, mengisahkan perjuangan untuk menggapai mimpi.", gambar: "bahan/pemimpi.jpeg" },
    { judul: "Negeri 5 Menara", penulis: "Ahmad Fuadi", deskripsi: "Kisah inspiratif tentang perjuangan menuntut ilmu di pesantren.", gambar: "bahan/negeri.jpeg" },
    { judul: "Perahu Kertas", penulis: "Dee Lestari", deskripsi: "Novel romantis yang mengisahkan perjalanan cinta dua anak manusia.", gambar: "bahan/perahu.jpeg" },
    { judul: "Ayat-Ayat Cinta", penulis: "Habiburrahman El Shirazy", deskripsi: "Novel islami yang mengisahkan perjalanan cinta seorang mahasiswa di Mesir.", gambar: "bahan/ayat.jpeg" },
    { judul: "Cantik Itu Luka", penulis: "Eka Kurniawan", deskripsi: "Novel yang mengangkat sejarah Indonesia dengan unsur realisme magis.", gambar: "bahan/cantik.jpeg" },
    { judul: "Lelaki Harimau", penulis: "Eka Kurniawan", deskripsi: "Novel yang menggabungkan realisme dengan cerita rakyat Indonesia.", gambar: "bahan/lelaki.jpeg" }
];

// Fungsi untuk menampilkan buku pameran
function displayBukuPameran() {
    const bukuPameranContainer = document.getElementById('bukuPameran');
    bukuPameranContainer.innerHTML = ''; // Bersihkan konten sebelumnya

    bukuPameran.forEach(buku => {
        const bukuElement = document.createElement('div');
        bukuElement.className = 'buku-item';
        bukuElement.innerHTML = `
            <img src="${buku.gambar}" alt="${buku.judul}" class="buku-gambar">
            <h4>${buku.judul}</h4>
            <p><strong>Penulis:</strong> ${buku.penulis}</p>
            <p>${buku.deskripsi}</p>
        `;
        bukuPameranContainer.appendChild(bukuElement);
    });
}

// Event listener untuk tombol Pameran Buku
document.getElementById('togglePameran').addEventListener('click', function() {
    const pameranInfo = document.getElementById('pameranInfo');
    if (pameranInfo.style.display === 'none') {
        pameranInfo.style.display = 'block';
        this.textContent = 'Sembunyikan Pameran';
        displayBukuPameran(); // Tampilkan buku-buku pameran
    } else {
        pameranInfo.style.display = 'none';
        this.textContent = 'Pamerkan Buku';
    }
});

// Memanggil fungsi-fungsi saat halaman dimuat
window.onload = function() {
    displayDataInnerHTML();
    displayDataCreateElement();
    displayDataTemplateString();
    displayLibraryInfo();
};
