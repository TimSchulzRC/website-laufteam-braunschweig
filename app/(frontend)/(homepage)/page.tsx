import { HOMEPAGE_QUERYResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/client";
import { HOMEPAGE_QUERY } from "@/sanity/queries";
import LinkCardData from "@/types/LinkCardData";
import { notFound } from "next/navigation";
import Header from "./sections/Header";
import SectionCTA from "./sections/SectionCTA";
import SectionCards from "./sections/SectionCards";
import SectionSponsors from "./sections/SectionSponsors";

export const revalidate = 60;

export default async function Home() {
  const homepageData = await sanityFetch<HOMEPAGE_QUERYResult>({
    query: HOMEPAGE_QUERY,
  });

  // const recentPosts = await sanityFetch<MOST_RECENT_POSTS_QUERYResult>({
  //   query: MOST_RECENT_POSTS_QUERY,
  // });

  if (!homepageData) return notFound();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-offWhite">
      <h1 className="hidden">Laufteam Braunschweig</h1>
      <Header image={homepageData.headerImage} />
      <SectionSponsors />
      <SectionCTA />
      <SectionCards linkCards={homepageData.linkCards as LinkCardData[]} />
    </main>
  );
}
