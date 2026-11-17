
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "NextBites",
    description: "Discover delicious recipes with NextBites",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <nav className="navbar">
                    <h1>NextBites 🍴</h1>

                    <div>
                        <a href="/">Home</a>
                        <a href="/recipes">Recipes</a>
                    </div>
                </nav>

                {children}

            </body>
        </html>
    );
}
