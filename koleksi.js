const books = [
    { title: "Laskar Pelangi", author: "Andrea Hirata", year: 2005, image: "bahan/laskar.jpg", description: "Novel tentang perjuangan anak-anak di Belitung untuk mendapatkan pendidikan." },
    { title: "Bumi Manusia", author: "Pramoedya Ananta Toer", year: 1980, image: "bahan/bumi.jpeg", description: "Novel sejarah yang mengisahkan perjuangan melawan kolonialisme Belanda." },
    { title: "Pulang", author: "Tere Liye", year: 2015, image: "bahan/pulang.jpeg", description: "Kisah perjalanan hidup seorang anak yang merantau dan akhirnya pulang ke kampung halamannya." },
    { title: "Ronggeng Dukuh Paruk", author: "Ahmad Tohari", year: 1982, image: "bahan/ronggeng.jpeg", description: "Novel yang mengangkat kehidupan penari ronggeng di sebuah desa kecil." },
    { title: "Sang Pemimpi", author: "Andrea Hirata", year: 2006, image: "bahan/pemimpi.jpeg", description: "Lanjutan dari Laskar Pelangi, mengisahkan perjuangan untuk menggapai mimpi." },
    { title: "Negeri 5 Menara", author: "Ahmad Fuadi", year: 2009, image: "bahan/negeri.jpeg", description: "Kisah inspiratif tentang perjuangan menuntut ilmu di pesantren." },
    { title: "Perahu Kertas", author: "Dee Lestari", year: 2009, image: "bahan/perahu.jpeg", description: "Novel romantis yang mengisahkan perjalanan cinta dua anak manusia." },
    { title: "Ayat-Ayat Cinta", author: "Habiburrahman El Shirazy", year: 2004, image: "bahan/ayat.jpeg", description: "Novel islami yang mengisahkan perjalanan cinta seorang mahasiswa di Mesir." },
    { title: "Cantik Itu Luka", author: "Eka Kurniawan", year: 2002, image: "bahan/cantik.jpeg", description: "Novel yang mengangkat sejarah Indonesia dengan unsur realisme magis." },
    { title: "Lelaki Harimau", author: "Eka Kurniawan", year: 2004, image: "bahan/lelaki.jpeg", description: "Novel yang menggabungkan realisme dengan cerita rakyat Indonesia." }
];

function displayBooks() {
    const bookCollection = document.querySelector('.book-collection');
    
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        
        bookItem.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <div class="book-info">
                <h3>${book.title}</h3>
                <p class="author">Penulis: ${book.author}</p>
                <p class="year">Tahun: ${book.year}</p>
                <p class="description">${book.description}</p>
            </div>
        `;
        
        bookCollection.appendChild(bookItem);
    });
}

document.addEventListener('DOMContentLoaded', displayBooks);
