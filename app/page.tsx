import Image from "next/image";
import Button from "./components/Button";
import Header from "./components/Header";
import LinkCard from "./components/LinkCard";
import Section from "./components/Section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-offWhite">
      <Header />
      <Section className="px-10 pb-10 md:pt-10">
        <div className="grid grid-cols-2 grid-flow-row gap-10 items-center md:grid-cols-4 md:gap-20">
          <Image
            className="h-full object-contain"
            src="/sponsors/mietens.png"
            width={88}
            height={58}
            alt=""
          />

          <Image
            className="h-full object-contain"
            src="/sponsors/body-med.png"
            width={134}
            height={107}
            alt=""
          />

          <Image
            className="w-full object-contain col-span-2"
            src="/sponsors/bw.png"
            width={308}
            height={62}
            alt=""
          />
        </div>
      </Section>
      <Section className="bg-darkBlue px-10 py-24">
        <div className="container max-w-lg flex items-center flex-col">
          <Image
            className="w-32 object-contain col-span-2"
            src="/logo.svg"
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
            Das Laufteam Braunschweig ist ein Verbund ausgewählter
            Spitzensportler der Region Braunschweig und steht leistungsstarken
            und förderungswürdigen Athletinnen und Athleten offen, die in
            Vereinen der Startgemeinschaft LG Braunschweig Mitglied sind.
          </p>
          <Button href="/" color="orange" skew>
            Mehr erfahren
          </Button>
        </div>
      </Section>
      <Section className="bg-red py-10 justify-items-center">
        <div className="container gap-10 flex justify-center flex-wrap">
          <LinkCard
            title="Das Team"
            href="/"
            image="/images/img_1.webp"
            imageAlt=""
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </LinkCard>
          <LinkCard
            title="Hall of Fame"
            href="/"
            image="/images/img_2.webp"
            imageAlt=""
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </LinkCard>
          <LinkCard
            title="Zur Geschichte"
            href="/"
            image="/images/img_3.webp"
            imageAlt=""
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </LinkCard>
        </div>
      </Section>
    </main>
  );
}
