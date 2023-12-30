import type { Metadata } from "next";
import { Aleo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const aleo = Aleo({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={aleo.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
