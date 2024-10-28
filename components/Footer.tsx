import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container py-20 text-white">
      <hr />
      <nav>
        <ul>
          <li>
            <Link href="/datenschutz">Datenschutzerklärung</Link>
          </li>
          <li>
            <Link href="/impressum">Impressum</Link>
          </li>
          <li>
            <Link href="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
