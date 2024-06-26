import Image from "next/image";
import Section from "../../../components/Section";

export default function SectionCTA() {
  return (
    <Section className="bg-darkBlue px-10 py-24">
      <div className="container max-w-lg flex items-center flex-col">
        <Image
          className="w-32 object-contain col-span-2"
          src="/svg/logo_no_text.svg"
          width={102}
          height={118}
          alt=""
        />
        <h2 className="flex flex-col items-center text-offWhite text-3xl text-bold italic my-6 uppercase font-bold">
          <span>Durch</span>
          <span className="text-red">Laufleidenschaft</span>{" "}
          <span>vereint</span>
        </h2>
        <p className="text-offWhite text-center mb-8">
          Das Laufteam Braunschweig ist ein Verbund ausgewählter Spitzensportler
          der Region Braunschweig und steht leistungsstarken und
          förderungswürdigen Athletinnen und Athleten offen, die in Vereinen der
          Startgemeinschaft LG Braunschweig Mitglied sind.
        </p>
        {/* <Button href="/" color="orange" skew>
          Mehr erfahren
        </Button> */}
      </div>
    </Section>
  );
}
