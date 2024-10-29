import Section from "@/components/Section";
import Image from "next/image";

export default function SectionCTA() {
  return (
    <Section className="bg-darkBlue px-10 py-24">
      <div className="container flex max-w-lg flex-col items-center">
        <Image
          className="col-span-2 w-32 object-contain"
          src="/svg/logo_no_text.svg"
          width={102}
          height={118}
          alt="Logo von Laufteam Braunschweig ohne Text, Roter Löwenkopf"
        />
        <h2 className="text-bold my-6 flex flex-col items-center hyphens-none text-3xl font-bold uppercase italic text-offWhite">
          <span>Durch</span>
          <span className="text-red">Laufleidenschaft</span>{" "}
          <span>vereint</span>
        </h2>
        <p className="mb-8 text-balance text-center text-offWhite">
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
