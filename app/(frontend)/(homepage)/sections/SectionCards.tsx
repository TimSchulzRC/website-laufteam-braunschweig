import { getHomepageLinkCards } from "@/sanity/sanity-utils";
import LinkCard from "../../../components/LinkCard";
import Section from "../../../components/Section";

export default async function SectionCards() {
  const linkCards = await getHomepageLinkCards();
  console.log(linkCards);
  return (
    <Section className="bg-red py-24 justify-items-center">
      <div className="container gap-10 flex justify-around flex-wrap">
        {linkCards.map((linkCard) => (
          <LinkCard
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
