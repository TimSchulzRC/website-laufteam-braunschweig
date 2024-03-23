import LinkCard from "@/app/components/LinkCard";
import { getRunners, getTeamPage } from "@/sanity/sanity-utils";
import SubPageTopSections from "../SubPageTopSections";

export default async function Team() {
  const members = await getRunners();
  const pageData = await getTeamPage();

  return (
    <>
      <SubPageTopSections pageData={pageData} />
      <section className="bg-red">
        <div className="container py-24 gap-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((member) => (
            <LinkCard
              className="col-auto mx-auto"
              key={member._id}
              title={member.name}
              imageAlt={`Bild von  + ${member.name}`}
              imageURL={member.imageURL}
              href=""
            >
              {member.infotext}
            </LinkCard>
          ))}
        </div>
      </section>
    </>
  );
}
