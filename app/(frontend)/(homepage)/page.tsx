import { getHomepage, getMostRecentPosts } from "@/sanity/sanity-utils";
import Header from "./sections/Header";
import SectionCTA from "./sections/SectionCTA";
import SectionCards from "./sections/SectionCards";
import SectionSponsors from "./sections/SectionSponsors";

export const revalidate = 60;

export default async function Home() {
  const { linkCards } = await getHomepage();
  const recentPosts = await getMostRecentPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-offWhite">
      <h1 className="hidden">Laufteam Braunschweig</h1>
      <Header image={linkCards[0].image} />
      <SectionSponsors />
      <SectionCTA />
      <SectionCards linkCards={linkCards} />
    </main>
  );
}
