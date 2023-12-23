import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-100 h-14 bg-darkBlue flex items-center justify-between px-5">
      <a href="/" className="italic uppercase font-display">
        <span className="text-offWhite">Laufteam</span>{" "}
        <span className="text-red">Braunschweig</span>
      </a>
      <button className="icon-button">
        <Image
          src="/icon-menu.svg" // TODO: use icon with sharp corners
          alt="Menü Icon"
          height={24}
          width={24}
          className="invert"
        />
      </button>
    </nav>
  );
}
