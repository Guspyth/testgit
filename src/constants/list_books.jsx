// list_books.jsx

const ListBook = [
  {
    id: 1,
    title: "Malin Kundang Anak Durhaka",
    img: require("../assets/avatars/malin_kundang.jpg"), // Sesuaikan dengan path file gambar lokal Anda
    author: "R. J. Palacio",
    rating: 5,
    views: 100,
    is_free: false,
    sinopsis: "R.J. Palacio's poignant novel tells the story of Auggie Pullman, a young boy with a facial deformity...",
    story: "Pada zaman dahulu di dekat pantai di Sumatra Barat, hiduplah seorang ibu dan anak lelakinya yang bernama Malin Kundang..."
  },
  {
    id: 2,
    title: "Lutung Kasarung",
    img: require("../assets/avatars/lutung_kasarung.jpg"),
    author: "Tim HHK Media",
    rating: 5,
    views: 180,
    is_free: true,
    sinopsis: "Cerita rakyat Jawa Barat yang mengisahkan perjalanan Sanghyang Gurinda yang dihukum turun ke bumi...",
    story: "Di sebuah kerajaan di Jawa Barat, hidup dua orang putri bernama Purbararang dan Purbasari yang memiliki sifat sangat bertolak belakang..."
  },
  {
    id: 3,
    title: "Kisah Konyol Sampai Ngompol",
    img: require("../assets/avatars/Kisah Konyol Sampai Ngompol.jpg"),
    author: "Jegung Wicaksono",
    rating: 5,
    views: 230,
    is_free: true,
    sinopsis: "Kumpulan cerita komedi jenaka kehidupan sehari-hari yang siap mengocok perut pembaca tanpa henti...",
    story: "Hari itu, Budi memutuskan untuk pergi ke pasar dengan celana yang terbalik, memicu serangkaian kejadian absurd..."
  },
  {
    id: 4,
    title: "Hikayat Hang Tuah",
    img: require("../assets/avatars/Hikayat Hang Tuah.jpg"),
    author: "Carol McCloud",
    rating: 5,
    views: null, // Menguji kondisi kondisional ( views tidak akan muncul jika bernilai null/falsy )
    is_free: false,
    sinopsis: "Sebuah mahakarya sastra Melayu klasik yang menceritakan kisah kepahlawanan, kesetiaan, dan kejayaan...",
    story: "Maka tersebutlah perkataan Hang Tuah pada zaman purbakala, seorang laksamana yang amat gagah berani berkali-kali membela negeri..."
  }
];

export { ListBook };

