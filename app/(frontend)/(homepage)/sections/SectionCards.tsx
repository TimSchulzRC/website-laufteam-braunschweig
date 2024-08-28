import LinkCard from "@/app/components/LinkCard";
import LinkCardData from "@/types/LinkCardData";
import Section from "../../../components/Section";

type Props = {
  linkCards: LinkCardData[];
};

export default function SectionCards({ linkCards }: Props) {
  return (
    <Section className="bg-red py-24 justify-items-center">
      <div className="container gap-10 grid sm:grid-cols-2 lg:grid-cols-3">
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
