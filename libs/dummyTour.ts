type TourData = {
    id: number;
    title: string;
    description: string;
    tag: tagType;
    image: string;
    href: string;
    author: string;
};

type tagType = {
    category: string;
    location: string;
    type: string;
};

const virtualTours: TourData[] = [
    {
        id: 1,
        title: "Jogjakarta, Solo, dan Semarang",
        author: "Wonderful Indonesia",
        description: `[WONDERFUL INDONESIA] : Jogjakarta, Solo, and Semarang (Joglosemar) merupakan kegiatan dari tim Wonderful Indonesia dalam mempresentasikan lokasi bersejarah yang ada di tiga tempat tersebut (Jogjakarta, Solo, dan Semarang) Pada Daerah Istimewa Yogyakarta ada Candi Prambanan yaitu lorem ipsum dolor sia met inni sectionnya candi prambanan.
        Pada Kota Semarang ada Lawang Semu sebuah bangunan peninggalan penjajahan kolonial belanda yang memiliki seribu pintu.`,
        tag: {
            category: "Historic",
            location: "indonesia",
            type: "Historical Building",
        },
        image: require("@/public/logo.svg"),
        href: "https://www.youtube-nocookie.com/embed/HLq-p1JJPvc?si=JXecEITMMEt_RtFh",
    },
    {
        id: 2,
        title: "Royal Tyrell Museum Rumahnya Dinosaurus",
        author: "Travel Alberta",
        description:
            "Selamat datang di Museum Palentologi Kerajaan Tyrrell! 🦖✨ Di sini, kalian akan menjelajahi dunia kuno di dalam bangunan super besar sepanjang 12.500 meter persegi. Museum ini seperti tempat ajaib yang penuh dengan tulang fosil dan cerita seru tentang makhluk-makhluk zaman prasejarah! Ceritanya dimulai pada tahun 1985, ketika museum ini pertama kali dibuka. Awalnya namanya hanya Tyrrell Museum of Palaeontology, tapi lalu diubah jadi Royal Tyrrell Museum of Palaeontology karena mendapat gelar 'kerajaan' dari Ratu Elizabeth II pada Juni 1990. Wow, keren banget, kan? Di dalam museum ini, ada lebih dari 160.000 fosil yang telah dicatat, termasuk lebih dari 350 fosil yang istimewa! Jadi, museum ini punya koleksi fosil terbesar di seluruh Kanada. Ada sekitar 800 fosil dari koleksi ini yang dipamerkan di sini. Kalian bakal melihat fosil-fosil seru yang pasti membuat mata kalian bersinar! Oh ya, jangan kaget kalau bangunan museum ini nambah dua kali, loh! Yang pertama selesai pada tahun 2003 dan yang kedua pada tahun 2019. Pastinya supaya kita bisa eksplorasi lebih banyak! Jangan lupa, selain buat pameran, koleksi fosil di sini juga digunakan untuk penelitian. Jadi, anak-anak, kita bisa belajar banyak tentang sejarah geologi dan palentologi di sini. Siapa tahu, mungkin kalian juga bisa jadi peneliti hebat suatu hari nanti! Yuk, ayo serbu Museum Palentologi Kerajaan Tyrrell, tempat seru untuk belajar dan bermimpi tentang masa lalu yang misterius! 🌍🔍",
        tag: {
            category: "Historic",
            location: "Kanada",
            type: "Museum",
        },
        image: require("@/public/logo.svg"),
        href: "https://www.youtube-nocookie.com/embed/3RPQwCxu5po?si=RVjZrhQKkir_d95g",
    },
    {
        id: 3,
        title: "Museum Louvre tempat Mona Lisa Berada",
        author: "Harrison Stengle",
        description:
            "Selamat datang di Musée du Louvre, teman-teman kecil yang suka seni! 🎨✨ Jadi, Louvre ini adalah museum seni super besar di Paris, Prancis. Bayangin aja, di sini ada karya seni terkenal banget, kayak lukisan Mona Lisa dan patung Venus de Milo. Semua karya seni itu kayak cerita dari zaman dulu yang dipamerin di Louvre. Museum ini rumahnya ada di dalam istana kuno bernama Louvre Palace, yang dibangun dari zaman abad ke-12 sampe ke-13 oleh Raja Philip II. Serunya, di bawah museum, masih ada sisa-sisa benteng zaman Medieval, lho! Dulu, benteng ini jadi tempat bertahan, tapi kemudian diubah jadi tempat tinggal Raja Prancis oleh Francis I. Awalnya, Louvre jadi rumah pameran koleksi raja, termasuk patung-patung kuno dari Yunani dan Romawi. Terus, selama Revolusi Prancis, mereka bikin keputusan keren buat ubah Louvre jadi museum buat nunjukin karya-karya terbaik Prancis. Louvre buka pertama kali tahun 1793 dengan pameran 537 lukisan. Tapi, karena masalah bangunan, sempet ditutup dari 1796 sampe 1801. Trus, koleksinya makin banyak pas zaman Napoleon, sampe namanya diubah jadi Musée Napoléon. Setelah itu, waktu Louis XVIII dan Charles X, dan zaman Kekaisaran Prancis Kedua, koleksinya makin bertambah. Sekarang, Louvre punya lebih dari 380,000 barang, termasuk patung, lukisan, dan masih banyak lagi. Gede banget, kan? Di sini, kalian bisa liat lebih dari 35,000 karya seni yang ditempatin di delapan bagian khusus. Tau nggak, tahun 2022 Louvre dikunjungi sama lebih dari 7.8 juta orang! Jadi, Louvre ini adalah museum paling ramai di dunia. Keren banget, kan? Jadi, ayo datang ke Louvre, tempat ajaib penuh kisah seni yang menakjubkan! 🏰🖼️",
        tag: {
            category: "Art",
            location: "Perancis",
            type: "Museum",
        },
        image: require("@/public/logo.svg"),
        href: "https://www.youtube-nocookie.com/embed/5J2prRQz6zM?si=SJVCNY7sNGNYhaC4",
    },
    {
        id: 4,
        title: "Masuk ke dalam Piramid Siapa Takut",
        author: "Sam Mayfair",
        description:
            "Selamat datang di Piramida Teti, teman-teman kecil penjelajah sejarah! 🏰✨ Jadi, Piramida Teti ini seperti rumah besar yang berbentuk segi empat yang mulus, lho! Tempatnya ada di Saqqara, Mesir, dan piramida ini spesial karena punya teks-teks piramida di dalamnya. Bayangin aja, ini piramida kedua yang punya teks-teks khusus! Kalo kita masuk, nanti kita bakal menemukan banyak rahasia yang tersembunyi. Ada piramida kecil lainnya, dua piramida untuk ratu, dengan bangunan-bangunan khusus buat upacara keagamaan, dan ada juga kuil pemakaman yang megah. Piramida ini pertama kali dibuka oleh seorang peneliti hebat bernama Gaston Maspero pada tahun 1882, dan kita terus menjelajahi keindahan dan misteri di dalamnya dari tahun 1907 sampai 1965. Awalnya, namanya adalah 'Tempat-tempat Teti Akan Abadi'. Tapi sekarang, sayangnya, bagian atasnya udah agak rusak, jadi keliatannya kaya bukit kecil. Tapi nih, yang seru, begitu kita masuk ke bawah tanah, ternyata ruangannya masih terawat banget! Jadi, kita bisa lihat lorong-lorong dan kamar-kamar yang masih bagus banget. Ayo, kita jadi penjelajah sejarah, eksplorasi Piramida Teti, dan temukan misteri di dalamnya! 🌍🔍",
        tag: {
            category: "Adventure",
            location: "Mesir",
            type: "Historical Building",
        },
        image: require("@/public/logo.svg"),
        href: "https://www.youtube-nocookie.com/embed/Ek5IjBIr3HA?si=QdKLvbT9SGBCdvtn",
    },
    {
        id: 5,
        title: "Main ke Peternakan Sapi",
        author: "Organic Valley",
        description:
            "Yuk ikut peternak Organic Valley, Kelly, sambil mengajak ternak sapi pergi merumput di padang hijau di Wisconsin! 🌿🐄 Lihat deh, coba temukan larik-larik panel surya yang ada di belakang peternakan Organic Valley ini, yang juga menjadi tempat belajar tentang pertanian yang ramah lingkungan.",
        tag: {
            category: "Nature",
            location: "Wisconsin",
            type: "Farm",
        },
        image: require("@/public/logo.svg"),
        href: "https://www.youtube-nocookie.com/embed/JoDAyzVO3QE?si=cRqzqOs9kq6Vd8hf",
    },
    {
        id: 6,
        title: "Ayo Jalan-Jalan di Kapal Luar Angkasa",
        author: "Vicinity360",
        description:
            "Siap-siap, teman-teman kecil, untuk meluncur jauh ke angkasa lewat VR yang luar biasa ini! 🚀✨ Terinspirasi dari program pelatihan NASA dan petualangan luar biasa astronotnya, Kami akan membawamu berlayar di ruang angkasa 250 mil di atas Bumi. Jadi begini, kamu bukan cuma penonton, tapi benar-benar jadi bintang utamanya. Kita bakal menjalani petualangan yang penuh emosi dan pribadi, sambil menghadirkan momen-momen indah, seru, dan tak terlupakan. Beneran deh, kamu akan merasa kayak lagi jalan-jalan di luar angkasa! Ceritanya bakal membuat hati kamu berdebar-debar, tapi pasti seru banget! Ayo, siapa yang mau mencoba VR luar biasa ini dan menjelajahi angkasa bersama kami? 🌌🌠",
        tag: {
            category: "Space",
            location: "Space",
            type: "Education",
        },
        image: require("@/public/logo.svg"),
        href: "https://www.youtube-nocookie.com/embed/hEdzv7D4CbQ?si=p4X8U0Kp3nQO_DN0",
    },
    {
        id: 7,
        title: "Title 7",
        author: "Sam Mayfair",
        description:
            "Selamat datang di Piramida Teti, teman-teman kecil penjelajah sejarah! 🏰✨ Jadi, Piramida Teti ini seperti rumah besar yang berbentuk segi empat yang mulus, lho! Tempatnya ada di Saqqara, Mesir, dan piramida ini spesial karena punya teks-teks piramida di dalamnya. Bayangin aja, ini piramida kedua yang punya teks-teks khusus! Kalo kita masuk, nanti kita bakal menemukan banyak rahasia yang tersembunyi. Ada piramida kecil lainnya, dua piramida untuk ratu, dengan bangunan-bangunan khusus buat upacara keagamaan, dan ada juga kuil pemakaman yang megah. Piramida ini pertama kali dibuka oleh seorang peneliti hebat bernama Gaston Maspero pada tahun 1882, dan kita terus menjelajahi keindahan dan misteri di dalamnya dari tahun 1907 sampai 1965. Awalnya, namanya adalah 'Tempat-tempat Teti Akan Abadi'. Tapi sekarang, sayangnya, bagian atasnya udah agak rusak, jadi keliatannya kaya bukit kecil. Tapi nih, yang seru, begitu kita masuk ke bawah tanah, ternyata ruangannya masih terawat banget! Jadi, kita bisa lihat lorong-lorong dan kamar-kamar yang masih bagus banget. Ayo, kita jadi penjelajah sejarah, eksplorasi Piramida Teti, dan temukan misteri di dalamnya! 🌍🔍",
        tag: {
            category: "Adventure",
            location: "Mesir",
            type: "Historical Building",
        },
        image: require("@/public/logo.svg"),
        href: "https://www.youtube-nocookie.com/embed/Ek5IjBIr3HA?si=QdKLvbT9SGBCdvtn",
    },
    {
        id: 8,
        title: "Title 8",
        author: "Organic Valley",
        description:
            "Yuk ikut peternak Organic Valley, Kelly, sambil mengajak ternak sapi pergi merumput di padang hijau di Wisconsin! 🌿🐄 Lihat deh, coba temukan larik-larik panel surya yang ada di belakang peternakan Organic Valley ini, yang juga menjadi tempat belajar tentang pertanian yang ramah lingkungan.",
        tag: {
            category: "Nature",
            location: "Wisconsin",
            type: "Farm",
        },
        image: require("@/public/logo.svg"),
        href: "https://www.youtube-nocookie.com/embed/JoDAyzVO3QE?si=cRqzqOs9kq6Vd8hf",
    },
    {
        id: 9,
        title: "Title 9",
        author: "Vicinity360",
        description:
            "Siap-siap, teman-teman kecil, untuk meluncur jauh ke angkasa lewat VR yang luar biasa ini! 🚀✨ Terinspirasi dari program pelatihan NASA dan petualangan luar biasa astronotnya, Kami akan membawamu berlayar di ruang angkasa 250 mil di atas Bumi. Jadi begini, kamu bukan cuma penonton, tapi benar-benar jadi bintang utamanya. Kita bakal menjalani petualangan yang penuh emosi dan pribadi, sambil menghadirkan momen-momen indah, seru, dan tak terlupakan. Beneran deh, kamu akan merasa kayak lagi jalan-jalan di luar angkasa! Ceritanya bakal membuat hati kamu berdebar-debar, tapi pasti seru banget! Ayo, siapa yang mau mencoba VR luar biasa ini dan menjelajahi angkasa bersama kami? 🌌🌠",
        tag: {
            category: "Space",
            location: "Space",
            type: "Education",
        },
        image: require("@/public/logo.svg"),
        href: "https://www.youtube-nocookie.com/embed/hEdzv7D4CbQ?si=p4X8U0Kp3nQO_DN0",
    },
    {
        id: 10,
        title: "Title 10",
        author: "Sam Mayfair",
        description:
            "Selamat datang di Piramida Teti, teman-teman kecil penjelajah sejarah! 🏰✨ Jadi, Piramida Teti ini seperti rumah besar yang berbentuk segi empat yang mulus, lho! Tempatnya ada di Saqqara, Mesir, dan piramida ini spesial karena punya teks-teks piramida di dalamnya. Bayangin aja, ini piramida kedua yang punya teks-teks khusus! Kalo kita masuk, nanti kita bakal menemukan banyak rahasia yang tersembunyi. Ada piramida kecil lainnya, dua piramida untuk ratu, dengan bangunan-bangunan khusus buat upacara keagamaan, dan ada juga kuil pemakaman yang megah. Piramida ini pertama kali dibuka oleh seorang peneliti hebat bernama Gaston Maspero pada tahun 1882, dan kita terus menjelajahi keindahan dan misteri di dalamnya dari tahun 1907 sampai 1965. Awalnya, namanya adalah 'Tempat-tempat Teti Akan Abadi'. Tapi sekarang, sayangnya, bagian atasnya udah agak rusak, jadi keliatannya kaya bukit kecil. Tapi nih, yang seru, begitu kita masuk ke bawah tanah, ternyata ruangannya masih terawat banget! Jadi, kita bisa lihat lorong-lorong dan kamar-kamar yang masih bagus banget. Ayo, kita jadi penjelajah sejarah, eksplorasi Piramida Teti, dan temukan misteri di dalamnya! 🌍🔍",
        tag: {
            category: "Adventure",
            location: "Mesir",
            type: "Historical Building",
        },
        image: require("@/public/logo.svg"),
        href: "https://www.youtube-nocookie.com/embed/Ek5IjBIr3HA?si=QdKLvbT9SGBCdvtn",
    },
    {
        id: 11,
        title: "Title 11",
        author: "Organic Valley",
        description:
            "Yuk ikut peternak Organic Valley, Kelly, sambil mengajak ternak sapi pergi merumput di padang hijau di Wisconsin! 🌿🐄 Lihat deh, coba temukan larik-larik panel surya yang ada di belakang peternakan Organic Valley ini, yang juga menjadi tempat belajar tentang pertanian yang ramah lingkungan.",
        tag: {
            category: "Nature",
            location: "Wisconsin",
            type: "Farm",
        },
        image: require("@/public/logo.svg"),
        href: "https://www.youtube-nocookie.com/embed/JoDAyzVO3QE?si=cRqzqOs9kq6Vd8hf",
    },
    {
        id: 12,
        title: "Title 9",
        author: "Vicinity360",
        description:
            "Siap-siap, teman-teman kecil, untuk meluncur jauh ke angkasa lewat VR yang luar biasa ini! 🚀✨ Terinspirasi dari program pelatihan NASA dan petualangan luar biasa astronotnya, Kami akan membawamu berlayar di ruang angkasa 250 mil di atas Bumi. Jadi begini, kamu bukan cuma penonton, tapi benar-benar jadi bintang utamanya. Kita bakal menjalani petualangan yang penuh emosi dan pribadi, sambil menghadirkan momen-momen indah, seru, dan tak terlupakan. Beneran deh, kamu akan merasa kayak lagi jalan-jalan di luar angkasa! Ceritanya bakal membuat hati kamu berdebar-debar, tapi pasti seru banget! Ayo, siapa yang mau mencoba VR luar biasa ini dan menjelajahi angkasa bersama kami? 🌌🌠",
        tag: {
            category: "Space",
            location: "Space",
            type: "Education",
        },
        image: require("@/public/logo.svg"),
        href: "https://www.youtube-nocookie.com/embed/hEdzv7D4CbQ?si=p4X8U0Kp3nQO_DN0",
    },
    // ... dan seterusnya
];

export default virtualTours;
