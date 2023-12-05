import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                bluePrim: `#3a0ca3`,
                blueSec: `#4361ee`,
                blueTer: `#4cc9f0`,
                pinkPrim: `#f72585`,
                purpleSec: `#7209b7`,
            }
        },
    },
    plugins: [],
};
export default config;
