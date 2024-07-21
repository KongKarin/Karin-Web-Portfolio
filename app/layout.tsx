import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karin Naprang",
  description: "Karin Naprang - Web Developer",
  // alternates: {
  //   canonical: `/`,
  // },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className} id="about">
        <Navbar />
        <div className="px-[5%]">{children}</div>
      </body>
    </html>
  );
}
