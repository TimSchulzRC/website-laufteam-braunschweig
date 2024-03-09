"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  return (
    <nav className={`h-14 bg-darkBlue sticky top-0 z-20 w-full`}>
      <div
        className={`container h-full bg-darkBlue flex items-center justify-between`}
      >
        <Link
          id="nav-logo"
          href="/"
          className={`italic uppercase font-display font-bold flex items-center gap-2 transition ease-in-out ${
            isHomepage && "opacity-0"
          }`}
        >
          <Image
            className="h-full object-contain col-span-2"
            src="/svg/logo_no_text.svg"
            width={24}
            height={24}
            alt=""
          />
          <div className="pt-1">
            <span className="text-offWhite">Laufteam</span>{" "}
            <span className="text-red">Braunschweig</span>
          </div>
        </Link>

        <ul className="flex gap-20 uppercase text-offWhite">
          <li>
            <Link href="/" className="">
              News
            </Link>
          </li>
          <li>
            <Link href="/" className="">
              Über uns
            </Link>
          </li>
          <li>
            <Link href="/" className="">
              Team
            </Link>
          </li>
          <li>
            <Link href="/" className="">
              Kontakt
            </Link>
          </li>
        </ul>
        <button className="icon-button md:hidden">
          <Image
            src="/icon-menu.svg" // TODO: use icon with sharp corners
            alt="Menü Icon"
            height={24}
            width={24}
            className="invert"
          />
        </button>
      </div>
    </nav>
  );
}
