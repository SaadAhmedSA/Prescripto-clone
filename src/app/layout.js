// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/commom/Navbar";
import Footer from "@/components/commom/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadata should stay in the server component
export const metadata = {
  title: "Prescripto",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en"className="scroll-smooth">
      <body className={ `mx-2 sm:mx-[10%] ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}
