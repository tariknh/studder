import {ClerkProvider} from "@clerk/nextjs"
import { Inter } from "next/font/google"
import "../globals.css"

export const metadata = {
    title: "Studder",
    description: "En NextJS app"
}

const inter = Inter({subsets: ["latin"]})

export default function RootLayout({
     children
    }: {
        children: React.ReactNode
    }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} flex justify-center place-items-center`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}