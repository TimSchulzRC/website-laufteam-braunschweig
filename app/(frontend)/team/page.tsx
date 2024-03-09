import LinkCard from "@/app/components/LinkCard";
import { getRunners } from "@/sanity/sanity-utils";

export default async function Team() {
  const members = await getRunners();
  console.log(members);
  return (
    <>
      <section className="text-offWhite container py-24">
        <h1 className="text-5xl uppercase text-red">Das Team</h1>
        <hr className="my-5" />
        <div className="grid grid-cols-2">
          <h2 className="col-span-2 md:col-span-1 mb-2 text-2xl uppercase md:pe-10">
            Unsere passionierten Läufer im Rampenlicht
          </h2>
          <p className="col-span-2 md:col-span-1">
            Wir sind stolz darauf, eine Gemeinschaft zu repräsentieren, die
            Disziplin, Ambition und die Liebe zum Laufsport teilt. Auf dieser
            Seite möchten wir Ihnen die Herzen und Seelen unseres Teams
            vorstellen - unsere leidenschaftlichen Läufer, die mit jedem Schritt
            nicht nur ihre eigenen Grenzen überwinden, sondern auch die
            Laufkultur in Braunschweig prägen.
          </p>
        </div>
      </section>
      <section className="bg-red">
        <div className="container py-24 gap-10 grid sm:grid-cols-2 lg:grid-cols-3">
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
    </>
  );
}
