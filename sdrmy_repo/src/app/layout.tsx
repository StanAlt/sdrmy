import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header"; // Import the Header component
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SD Army - AI Sales Development Agents",
  description: "Custom AI agents to supercharge your sales development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header /> {/* Add the Header component here */}
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        {/* Optional: Add a Footer component later */}
        <footer className="bg-muted text-muted-foreground py-4 text-center text-sm">
          © {new Date().getFullYear()} SD Army. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

