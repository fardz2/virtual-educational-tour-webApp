import user from "./dummyUser";

type articleData = {
    id: number;
    title: string;
    image: string;
    content: string;
    view: number;
    author: string;
    createdAt: string;
    updateAt: string;
};

const article: articleData[] = [
    {
        id: 1,
        title: "Belajar Bahasa Inggris Sambil Bermain",
        image: "",
        content: "Mengungkap kehidupan serangga yang menakjubkan di sekitar kita.",
        view: 0,
        author: user[1].username,
        //     id: 1,
        //     username: "PenjelajahSerangga",
        //     email: "",
        //     password: "",
        //     user_capt: "",
        //     user_image: "",
        // },
        createdAt: "5 Maret",
        updateAt: "",
    },
    {
        id: 2,
        title: "Belajar Bahasa Inggris Sambil Bermain",
        image: "",
        content: "Cara menyenangkan untuk belajar bahasa Inggris melalui permainan dan aktivitas.",
        view: 0,
        author: user[1].username,
        createdAt: "12 Juni",
        updateAt: "",
    },
    {
        id: 3,
        title: "Rahasia Alam Semesta: Bintang dan Planet",
        image: "",
        content: "Mengungkap misteri alam semesta dan keindahan bintang dan planet.",
        view: 0,
        author: user[1].username,
        createdAt: "20 September",
        updateAt: "",
    },
    {
        id: 1,
        title: "",
        image: "",
        content: "",
        view: 0,
        author: user[0].username,
        createdAt: "",
        updateAt: "",
    },
];

export default article