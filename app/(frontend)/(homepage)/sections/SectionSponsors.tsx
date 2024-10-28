import Section from "@/components/Section";
import Image from "next/image";

export default function SectionSponsors() {
  return (
    <Section className="px-10 pb-10 md:pt-10">
      <div className="grid grid-cols-2 grid-flow-row gap-10 items-center md:grid-cols-4 md:gap-20">
        <Image
          className="h-full object-contain"
          src="/sponsors/mietens.png"
          width={88}
          height={58}
          alt="Logo von Mietens"
        />

        <Image
          className="h-full object-contain"
          src="/sponsors/body-med.png"
          width={134}
          height={107}
          alt="Logo von BodyMed"
        />

        <Image
          className="w-full object-contain col-span-2"
          src="/sponsors/bw.png"
          width={308}
          height={62}
          alt="Logo von Bartel Wotschke Ingenieure"
        />
      </div>
    </Section>
  );
}
