import Image from "next/image";
import Link from "next/link";
import NavLink from "./navigation/NavLink";

export default function Footer() {
  return (
    <footer className="container grid grid-cols-1 py-20 text-white md:grid-cols-2">
      <hr className="col-span-1 md:col-span-2" />
      <Link
        id="nav-logo"
        href="/"
        className="my-4 flex items-start gap-2 font-display font-bold uppercase italic transition ease-in-out"
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
      <nav>
        <ul className="flex flex-col justify-end md:flex-row md:gap-8">
          <li>
            <NavLink href="/datenschutz">Datenschutzerklärung</NavLink>
          </li>
          <li>
            <NavLink href="/impressum">Impressum</NavLink>
          </li>
          <li>
            <NavLink href="/kontakt">Kontakt</NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
