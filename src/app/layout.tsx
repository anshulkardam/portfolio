import type { Metadata } from "next";
import {
    Babylonica,
    Geist,
    Geist_Mono,
    Inter,
    Noto_Sans_KR,
    Orbitron,
    Oxanium,
    Rubik,
} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik", display: "swap" });
const notoSansKr = Noto_Sans_KR({
    subsets: ["latin"],
    variable: "--font-noto-sans-kr",
    display: "swap",
});
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", display: "swap" });
const oxanium = Oxanium({ subsets: ["latin"], variable: "--font-oxanium", display: "swap" });
const babylonica = Babylonica({
    subsets: ["latin"],
    variable: "--font-babylonica",
    weight: "400",
    display: "swap",
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Anshul Kardam - Full Stack Developer",
    description: "Anshul Kardam",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`scroll-smooth ${geistSans.variable} ${geistMono.variable} ${inter.variable} ${rubik.variable} ${notoSansKr.variable} ${orbitron.variable} ${oxanium.variable} ${babylonica.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
