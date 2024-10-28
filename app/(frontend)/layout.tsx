import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body
      className={`${fontRoboto.variable} ${fontJosefinSans.variable} ${fontRoboto.className}`}
    >
      <header>
        <Navbar />
      </header>
      {children}
      <Footer />
    </body>
  );
}
