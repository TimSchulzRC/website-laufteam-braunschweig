import LinkCard from "../../../components/LinkCard";
import Section from "../../../components/Section";

export default function SectionCards() {
  return (
    <Section className="bg-red py-24 justify-items-center">
      <div className="container gap-10 flex justify-around flex-wrap">
        <LinkCard
          title="Das Team"
          href="/"
          imageURL="/images/img_1.webp"
          imageAlt=""
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </LinkCard>
        <LinkCard
          title="Hall of Fame"
          href="/"
          imageURL="/images/img_2.webp"
          imageAlt=""
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </LinkCard>
        <LinkCard
          title="Zur Geschichte"
          href="/"
          imageURL="/images/img_3.webp"
          imageAlt=""
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </LinkCard>
      </div>
    </Section>
  );
}
