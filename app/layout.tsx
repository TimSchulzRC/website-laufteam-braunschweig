import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laufteam Braunschweig",
  description: "Laufteam Braunschweig",
};

import cn from "@/util/classnames";
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
        className={cn(
          fontRoboto.variable,
          fontJosefinSans.variable,
          fontRoboto.className,
          "overflow-x-hidden hyphens-auto",
        )}
      >
        {children}
      </body>
    </html>
  );
}
