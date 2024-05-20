import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import 'typeface-public-sans';

const public_sans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitter Clone",
  description: "Twiter / X Clone using Next Js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= {public_sans.className}>{children}</body>
    </html>
  );
}
