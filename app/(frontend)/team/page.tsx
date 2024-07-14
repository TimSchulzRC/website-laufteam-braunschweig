import LinkCard from "@/app/components/LinkCard";
import { getRunners, getTeamPage } from "@/sanity/sanity-utils";
import SubPageTopSections from "../SubPageTopSections";

export const revalidate = 60;

export default async function Team() {
  const members = await getRunners();
  const pageData = await getTeamPage();

  return (
    <>
      <SubPageTopSections pageData={pageData} />
      <section className="bg-red">
        <div className="container py-24 gap-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members
            .filter((m) => !m.hallOfFame)
            .map((member) => (
              <LinkCard
                className="col-auto mx-auto"
                key={member._id}
                title={member.name}
                imageAlt={`Bild von  + ${member.name}`}
                imageURL={member.image.url}
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
        <div className="container py-24 gap-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members
            .filter((m) => m.hallOfFame)
            .map((member) => (
              <LinkCard
                className="col-auto mx-auto"
                key={member._id}
                title={member.name}
                imageAlt={`Bild von  + ${member.name}`}
                imageURL={member.image.url}
                href={`/team/${member.slug}`}
              />
            ))}
        </div>
      </section>
    </>
  );
}
