import Image from "next/image";
import Section from "./components/Section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-offWhite">
      <Section>
        <div className="h-[500px] sm:h-[600px] md:h-[800px] w-full relative">
          <Image
            className="h-full w-full object-cover object-right-top"
            src="/header-image.jpg"
            alt="Header Image"
            width={1700}
            height={500}
          />

          <div className="w-full absolute bottom-0 left-0">
            <Image
              className="w-full object-cover object-right-top"
              src="/triangle_15deg.svg"
              alt=""
              height={100}
              width={373.205}
            />
            <div className="bg-darkBlue text-offWhite my-[-1px] px-10">
              <h1 className="italic font-bold text-5xl mb-6">
                DM in <br /> <span className="text-red">Uzelen</span>
              </h1>
              <a href="/" className="uppercase font-bold">
                Jetzt lesen!
              </a>
            </div>
          </div>
        </div>
        <Image
          className="w-full object-cover object-right-top scale-y-[-1]"
          src="/triangle_15deg.svg"
          alt=""
          height={100}
          width={373.205}
        />
      </Section>
      <Section className="px-10 pb-10">
        <div className="grid grid-cols-2 grid-flow-row gap-8">
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
      <Section className="bg-darkBlue p-10">
        <Image
          className="w-32 object-contain col-span-2"
          src="/logo.svg"
          width={102}
          height={118}
          alt=""
        />
        <h2 className="flex flex-col items-center text-offWhite text-4xl text-bold italic my-6">
          <span>Durch</span>
          <span className="text-red">Laufleidenschaft</span>{" "}
          <span>vereint</span>
        </h2>
        <p className="text-offWhite text-center">
          Das Laufteam Braunschweig ist ein Verbund ausgewählter Spitzensportler
          der Region Braunschweig und steht leistungsstarken und
          förderungswürdigen Athletinnen und Athleten offen, die in Vereinen der
          Startgemeinschaft LG Braunschweig Mitglied sind.
        </p>
      </Section>
      <Section>test</Section>
    </main>
  );
}
