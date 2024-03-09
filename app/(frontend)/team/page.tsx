import LinkCard from "@/app/components/LinkCard";
import { getRunners } from "@/sanity/sanity-utils";

export default async function Team() {
  const members = await getRunners();
  console.log(members);
  return (
    <section className="bg-red">
      <div className="container py-10 flex flex-wrap gap-10">
        {members.map((member) => (
          <LinkCard
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
