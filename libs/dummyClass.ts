type VirtualClassData = {
    title: string;
    description: string;
    tag: string;
    id: number;
    image: string;
};

const virtualClasses: VirtualClassData[] = [
    {
        title: "Pengenalan Koding Dasar",
        description:
            "Pelajari dasar-dasar pemrograman melalui kelas virtual ini.",
        tag: "Pemrograman",
        id: 1,
        image: require("@/public/next.svg"),
    },
    {
        title: "Seni Desain Grafis",
        description:
            "Tingkatkan keterampilan desain grafis Anda dengan kelas ini.",
        tag: "Desain",
        id: 2,
        image: require("@/public/next.svg"),
    },
    {
        title: "Strategi Pemasaran Digital",
        description:
            "Pelajari strategi pemasaran digital yang efektif melalui kelas ini.",
        tag: "Pemasaran",
        id: 3,
        image: require("@/public/next.svg"),
    },
    {
        title: "Keterampilan Presentasi Efektif",
        description:
            "Perbaiki keterampilan presentasi Anda melalui kelas virtual ini.",
        tag: "Keterampilan",
        id: 4,
        image: require("@/public/next.svg"),
    },
    {
        title: "Ekonomi untuk Pemula",
        description: "Pahami konsep dasar ekonomi melalui kelas virtual ini.",
        tag: "Ekonomi",
        id: 5,
        image: require("@/public/next.svg"),
    },
    // ... dan seterusnya
];

export default virtualClasses