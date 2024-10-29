import LinkCard from "@/components/LinkCard";
import Section from "@/components/Section";
import LinkCardData from "@/types/LinkCardData";

type Props = {
  linkCards: LinkCardData[];
};

export default function SectionCards({ linkCards }: Props) {
  return (
    <Section className="justify-items-center bg-red py-24">
      <div className="container grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {linkCards.map((linkCard) => (
          <LinkCard
            className="col-auto mx-auto"
            title={linkCard.title}
            imageURL={linkCard.image.url || ""}
            imageAlt={linkCard.title}
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
