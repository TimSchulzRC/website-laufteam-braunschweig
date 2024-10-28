import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laufteam Braunschweig",
  description: "Laufteam Braunschweig",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="de">{children}</html>;
}
