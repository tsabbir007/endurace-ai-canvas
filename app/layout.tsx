import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";


import "./globals.css";

const font = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Endurance",
    description: "Endurance is a tool for generating conversation, code, images, videos and music using GPT-3.5 and replicate.ai.",
};

export default async function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body className={font.className}>
            {children}
            </body>
            </html>
        </ClerkProvider>
    );
}