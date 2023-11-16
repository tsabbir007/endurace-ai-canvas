import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";

import "./globals.css";

const font = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "AI Canvas",
    description: "AI Platform"
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