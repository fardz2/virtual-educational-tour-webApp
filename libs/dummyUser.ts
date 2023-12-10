interface userData {
    id: number;
    username: string;
    email: string;
    password: string;
    user_capt: string;
    user_image: string
}

const user: userData[] = [
    {
        id: 1,
        username: `example_user`,
        email: `example_user@example.com`,
        password:  `thisIsStrongPw1!`,
        user_capt: "",
        user_image: "",
    },
    {
        id: 1,
        username: `example_user`,
        email: `example_user@example.com`,
        password:  `thisIsStrongPw1!`,
        user_capt: "",
        user_image: "",
    },
]

export default user