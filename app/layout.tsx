import Navbar from "@/app/components/Navbar";
import type { Metadata } from "next";
import { Josefin_Sans, Roboto } from "next/font/google";
import { draftMode } from "next/headers";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Laufteam Braunschweig",
  description: "Laufteam Braunschweig",
};

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
        {draftMode().isEnabled && (
          <a
            className="fixed right-0 bottom-0 bg-blue-500 text-white p-4 m-4"
            href="/api/draft-mode/disable"
          >
            Disable preview mode
          </a>
        )}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
