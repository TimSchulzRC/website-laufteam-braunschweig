"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    const button = document.querySelector(
      "button[aria-controls=navbar-default]",
    );
    if (button) {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
    }
  };

  useEffect(() => setMenuOpen(false), [pathname]);
  if (pathname.startsWith("/admin")) return null;
  return (
    <nav className="sticky top-0 z-20 w-full bg-darkBlue py-2">
      <div className="container mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
        <Link
          id="nav-logo"
          href="/"
          className={`flex max-w-[80%] items-center gap-2 font-display font-bold uppercase italic transition ease-in-out ${
            isHomepage && "lg:opacity-0"
          }`}
        >
          <Image
            src="/svg/logo_no_text.svg"
            width={24}
            height={24}
            alt="Laufteam Braunschweig"
          />
          <div className="pt-1">
            <span className="text-offWhite">Laufteam</span>{" "}
            <span className="text-red">Braunschweig</span>
          </div>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center p-2 text-sm text-offWhite focus:outline-none focus:ring-1 focus:ring-offWhite dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="square"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          hidden={!menuOpen}
          className="w-full py-2 md:block md:w-auto md:py-0"
          id="navbar-default"
        >
          <ul className="flex flex-col border border-offWhite bg-darkBlue px-4 uppercase text-offWhite md:mt-0 md:flex-row md:space-x-8 md:border-0 rtl:space-x-reverse">
            <li>
              <Link
                href="/news"
                className={`${pathname.startsWith("/news") && "font-bold underline"}`}
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className={`${pathname.startsWith("/about-us") && "font-bold underline"}`}
              >
                Über uns
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className={`${pathname.startsWith("/team") && "font-bold underline"}`}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${pathname.startsWith("/contact") && "font-bold underline"}`}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
