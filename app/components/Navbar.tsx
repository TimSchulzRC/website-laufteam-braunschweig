"use client";
import Image from "next/image";
import { useContext } from "react";
import { LogoContext } from "./LogoContext";

export default function Navbar() {
  const [logoHidden] = useContext(LogoContext);

  return (
    <nav className={`h-14 bg-darkBlue fixed z-20 w-full`}>
      <div
        className={`container h-full bg-darkBlue flex items-center ${
          !logoHidden ? "justify-end" : "justify-between"
        }`}
      >
        {logoHidden && (
          <a href="/" className={`italic uppercase font-display font-bold`}>
            <span className="text-offWhite">Laufteam</span>{" "}
            <span className="text-red">Braunschweig</span>
          </a>
        )}
        <button className="icon-button">
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
