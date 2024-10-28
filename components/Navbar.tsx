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
      "button[aria-controls=navbar-default]"
    );
    if (button) {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
    }
  };

  useEffect(() => setMenuOpen(false), [pathname]);
  if (pathname.startsWith("/admin")) return null;
  return (
    <nav className="bg-darkBlue sticky top-0 w-full z-20 py-2">
      <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto container">
        <Link
          id="nav-logo"
          href="/"
          className={`italic uppercase font-display font-bold flex items-center gap-2 transition ease-in-out max-w-[80%] ${
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
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-offWhite md:hidden focus:outline-none focus:ring-1 focus:ring-offWhite dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
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
          className="w-full md:block md:w-auto py-2 md:py-0"
          id="navbar-default"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 text-offWhite uppercase bg-darkBlue px-4 border md:border-0 border-offWhite ">
            <li>
              <Link
                href="/news"
                className={`${pathname.startsWith("/news") && "underline font-bold"}`}
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className={`${pathname.startsWith("/about-us") && "underline font-bold"}`}
              >
                Über uns
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className={`${pathname.startsWith("/team") && "underline font-bold"}`}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${pathname.startsWith("/contact") && "underline font-bold"}`}
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
