type TourData = {
    title: string;
    description: string;
    tag: string;
    id: number;
    image: string;
};

const virtualTours: TourData[] = [
    {
        title: "Eksplorasi Keajaiban Alam",
        description: "Nikmati keindahan alam dengan tur virtual yang memukau.",
        tag: "Alam",
        id: 1,
        image: require("@/public/logo.svg"),
    },
    {
        title: "Petualangan Sejarah Kuno",
        description: "Kembali dalam waktu dengan tur sejarah yang mendalam.",
        tag: "Sejarah",
        id: 2,
        image: require("@/public/logo.svg"),
    },
    {
        title: "Dunia Binatang yang Ajaib",
        description: "Temui kehidupan binatang dalam tur virtual ini.",
        tag: "Binatang",
        id: 3,
        image: require("@/public/logo.svg"),
    },
    {
        title: "Penjelajahan Budaya Lokal",
        description: "Temukan keberagaman budaya dalam tur virtual ini.",
        tag: "Budaya",
        id: 4,
        image: require("@/public/logo.svg"),
    },
    {
        title: "Pemandangan Kota Modern",
        description:
            "Saksikan keindahan arsitektur modern melalui tur virtual ini.",
        tag: "Kota",
        id: 5,
        image: require("@/public/logo.svg"),
    },
    {
        title: "Petualangan Dibawah Laut",
        description:
            "Telusuri kehidupan laut yang menakjubkan dalam tur virtual bawah air.",
        tag: "Laut",
        id: 6,
        image: require("@/public/logo.svg"),
    },
    // ... dan seterusnya
];

export default virtualTours;
