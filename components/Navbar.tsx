import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-100 h-14 bg-darkBlue flex items-center justify-between px-5">
      <a href="/" className="italic uppercase font-bold">
        <span className="text-offWhite">Laufteam</span>{" "}
        <span className="text-red">Braunschweig</span>
      </a>
      <Image
        src="/icon-menu.svg"
        alt="Menü Icon"
        height={24}
        width={24}
        className="invert"
      />
    </nav>
  );
}
