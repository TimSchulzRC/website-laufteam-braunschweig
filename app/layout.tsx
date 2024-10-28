import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laufteam Braunschweig",
  description: "Laufteam Braunschweig",
};

import { Josefin_Sans, Roboto } from "next/font/google";

const fontRoboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});
const fontJosefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-josefin-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${fontRoboto.variable} ${fontJosefinSans.variable} ${fontRoboto.className}`}
      >
        {children}
      </body>
    </html>
  );
}
