import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container">
      <nav>
        <ul>
          <li>
            <Link href="/datenschutz">Datenschutzerklärung</Link>
          </li>
          <li>
            <Link href="/impressum">Impressum</Link>
          </li>
          <li></li>
        </ul>
      </nav>
    </footer>
  );
}
