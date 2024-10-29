import LinkCard from "@/components/LinkCard";
import SubPageTopSections from "@/components/page-components/SubPageTopSections";
import { RUNNERS_QUERYResult, TEAM_PAGE_QUERYResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/client";
import { RUNNERS_QUERY, TEAM_PAGE_QUERY } from "@/sanity/queries";
import SubPageData from "@/types/SubPageData";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateMetadata() {
  const pageData = await sanityFetch<TEAM_PAGE_QUERYResult>({
    query: TEAM_PAGE_QUERY,
  });
  if (!pageData) return {};
  return {
    title: pageData.title,
    description: pageData.infotext,
  };
}

export default async function Team() {
  const members = await sanityFetch<RUNNERS_QUERYResult>({
    query: RUNNERS_QUERY,
  });
  const pageData = await sanityFetch<TEAM_PAGE_QUERYResult>({
    query: TEAM_PAGE_QUERY,
  });
  if (!pageData) return notFound();
  return (
    <>
      <SubPageTopSections pageData={pageData as SubPageData} />
      <section className="bg-red">
        <div className="container grid gap-10 py-24 sm:grid-cols-2 lg:grid-cols-3">
          {members
            .filter((m) => !m.hallOfFame)
            .map((member) => (
              <LinkCard
                className="col-auto mx-auto"
                key={member._id}
                title={member.name || ""}
                imageAlt={`Bild von  + ${member.name}`}
                imageURL={member.image.url || ""}
                href={`/team/${member.slug}`}
              />
            ))}
        </div>
      </section>
      <section id="hall-of-fame" className="py-24">
        <div className="container">
          <h1 className="text-5xl uppercase text-red">Hall of Fame</h1>
          <hr className="my-4" />
        </div>
        <div className="container grid gap-10 py-24 sm:grid-cols-2 lg:grid-cols-3">
          {members
            .filter((m) => m.hallOfFame)
            .map((member) => (
              <LinkCard
                className="col-auto mx-auto"
                key={member._id}
                title={member.name || ""}
                imageAlt={`Bild von ${member.name}`}
                imageURL={member.image.url || ""}
                href={`/team/${member.slug}`}
              />
            ))}
        </div>
      </section>
    </>
  );
}
