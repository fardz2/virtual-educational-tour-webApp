import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    icons: {
        icon: `/vercel.svg`
    },
    title: "Beyond Your Inspiration! 🚀🌏",
    description:
        "EduVenturer works to maximize education method for better and new experiences",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} bg-gray-100 dark:bg-gray-900 `}>
                {children}
            </body>
        </html>
    );
}
