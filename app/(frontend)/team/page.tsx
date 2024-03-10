import LinkCard from "@/app/components/LinkCard";
import { getRunners, getTeamPage } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Team() {
  const members = await getRunners();
  const { image, title, subtitle, infotext } = await getTeamPage();

  return (
    <>
      <section className="2xl:container relative">
        <Image
          className="w-full"
          width={image.width}
          height={image.height}
          src={image.url}
          alt={image.alt}
        />
        <div className="absolute bottom-0 z-10 w-full">
          <svg
            width="1500"
            height="100"
            viewBox="0 0 1500 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 100L1500 0V100H0Z" fill="#30313E" />
          </svg>
        </div>
      </section>
      <section className="text-offWhite container py-24">
        <div className="grid grid-cols-2">
          <h1 className="text-5xl col-span-2 uppercase text-red">{title}</h1>
          <hr className="my-5 col-span-2" />
          <h2 className="col-span-2 md:col-span-1 mb-2 text-2xl uppercase md:pe-10">
            {subtitle}
          </h2>
          <p className="col-span-2 md:col-span-1">{infotext}</p>
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
