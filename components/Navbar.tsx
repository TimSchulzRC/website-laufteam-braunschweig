"use client";
import LionIcon from "@/components/LionIcon";
import cn from "@/util/classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavLink from "./navigation/NavLink";

export default function Navbar() {
  const pathname = usePathname();

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
  return (
    <header className="sticky top-0 z-20 w-full bg-darkBlue py-2">
      <nav>
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link
            id="nav-logo"
            href="/"
            className={cn(
              "flex max-w-[80%] items-center gap-2 font-display font-bold uppercase italic",
            )}
          >
            <LionIcon />
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
            <ul className="flex flex-col bg-darkBlue px-4 uppercase text-offWhite md:mt-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
              <li>
                <NavLink href="/news">News</NavLink>
              </li>
              <li>
                <NavLink href="/about-us">Über uns</NavLink>
              </li>
              <li>
                <NavLink href="/team">Team</NavLink>
              </li>
              <li>
                <NavLink href="/kontakt">Kontakt</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
