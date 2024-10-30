import Section from "@/components/Section";
import Image from "next/image";

export default function SectionSponsors() {
  return (
    <Section className="px-10 pb-10 md:pt-10">
      <div className="grid grid-flow-row grid-cols-2 items-center gap-10 md:gap-20">
        <Image
          className="h-42 object-contain"
          src="/sponsors/mietens-logo.webp"
          width={512}
          height={128}
          alt="Logo von Mietens"
        />
        <Image
          className="h-42 object-contain"
          src="/sponsors/bw-Logo.png"
          width={512}
          height={128}
          alt="Logo von Bartel Wotschke Ingenieure"
        />
      </div>
    </Section>
  );
}
