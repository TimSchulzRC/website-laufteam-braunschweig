import { getHomepageLinkCards } from "@/sanity/sanity-utils";
import LinkCard from "../../../components/LinkCard";
import Section from "../../../components/Section";

export default async function SectionCards() {
  const linkCards = await getHomepageLinkCards();
  console.log(linkCards);
  return (
    <Section className="bg-red py-24 justify-items-center">
      <div className="container gap-10 grid sm:grid-cols-2 lg:grid-cols-3">
        {linkCards.map((linkCard) => (
          <LinkCard
            className="col-auto mx-auto"
            title={linkCard.title}
            imageURL={linkCard.imageURL}
            imageAlt=""
            href={linkCard.link}
            key={linkCard.title}
          >
            {linkCard.description}
          </LinkCard>
        ))}
      </div>
    </Section>
  );
}
