import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio - Dhananjoy Mahata",
    description:
        "I am Dhananjoy Mahata, a third-year college student currently pursuing B.E. from Jadavpur University. This is my personal  portfolio website showcasing my information, skills, projects and experiences. Built using NextJS.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
