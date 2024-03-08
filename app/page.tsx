import Header from "./sections/Header";
import SectionCTA from "./sections/SectionCTA";
import SectionCards from "./sections/SectionCards";
import SectionSponsors from "./sections/SectionSponsors";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-offWhite">
      <Header />
      <SectionSponsors />
      <SectionCTA />
      <SectionCards />
    </main>
  );
}
