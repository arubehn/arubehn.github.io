import "./global.css";
import Navbar from "@/components/Navbar";

import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";

/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

export const metadata: Metadata = {
  title: "Arne Rubehn",
  description: "Arne Rubehn's personal website. Computational linguist and researcher.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={'antialiased'}
      >
        <Navbar/>
        <main className="pt-28">
          <div className="page-container">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
