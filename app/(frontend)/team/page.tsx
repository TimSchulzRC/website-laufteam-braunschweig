import LinkCard from "@/app/components/LinkCard";
import { getRunners } from "@/sanity/sanity-utils";

export default async function Team() {
  const members = await getRunners();
  console.log(members);
  return (
    <section className="bg-red">
      <div className="container py-10 gap-10 grid sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <LinkCard
            className="col-auto mx-auto"
            key={member._id}
            title={member.name}
            imageAlt={`Bild von  + ${member.name}`}
            imageURL={member.imageURL}
            href=""
          >
            {member.bio}
          </LinkCard>
        ))}
      </div>
    </section>
  );
}
