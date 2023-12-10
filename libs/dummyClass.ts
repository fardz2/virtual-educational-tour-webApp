type VirtualClassData = {
    id: number;
    title: string;
    description: string;
    tag: tagType;
    userType: string;
    image: string;
};

type tagType = {
    category: string;
    level: string;
    location: string;
};

const virtualClasses: VirtualClassData[] = [
    {
        id: 1,
        title: "Pengenalan Koding Dasar",
        description:
            "Pelajari dasar-dasar pemrograman melalui kelas virtual ini.",
        tag: {
            category: "",
            level: "",
            location: "",
        },
        userType: "",
        image: require("@/public/next.svg"),
    },
    {
        id: 2,
        title: "Seni Desain Grafis",
        description:
            "Tingkatkan keterampilan desain grafis Anda dengan kelas ini.",
        tag: {
            category: "",
            level: "",
            location: "",
        },
        userType: "",
        image: require("@/public/next.svg"),
    },
    {
        id: 3,
        title: "Strategi Pemasaran Digital",
        description:
            "Pelajari strategi pemasaran digital yang efektif melalui kelas ini.",
        tag: {
            category: "",
            level: "",
            location: "",
        },
        userType: "",
        image: require("@/public/next.svg"),
    },
    {
        id: 4,
        title: "Keterampilan Presentasi Efektif",
        description:
            "Perbaiki keterampilan presentasi Anda melalui kelas virtual ini.",
        tag: {
            category: "",
            level: "",
            location: "",
        },
        userType: "",
        image: require("@/public/next.svg"),
    },
    {
        id: 5,
        title: "Ekonomi untuk Pemula",
        description: "Pahami konsep dasar ekonomi melalui kelas virtual ini.",
        tag: {
            category: "",
            level: "",
            location: "",
        },
        userType: "",
        image: require("@/public/next.svg"),
    },
    // ... dan seterusnya
];

export default virtualClasses;
