"use client";

import Section from "@/components/Section";
import Triangle from "@/components/Triangle";
import ImageData from "@/types/ImageData";
import Image from "next/image";

type Props = {
  image: ImageData;
};

export default function Header({ image }: Props) {
  return (
    <Section className="-mt-1 bg-darkBlue" id="homepage-header-section">
      <div className="relative flex w-full flex-col md:h-[60vw] md:max-h-[70vh] md:flex-row">
        <div className="container order-2 my-16 flex items-center justify-center md:order-1 md:my-0 md:justify-start">
          <div className="grid grid-cols-4 items-center justify-center gap-8 bg-darkBlue pe-4 md:w-1/2 lg:pe-16">
            <Image
              className="col-span-4 mx-auto h-auto w-full max-w-32 object-contain md:col-span-1"
              src="/svg/logo_no_text.svg"
              width={102}
              height={118}
              alt="Logo von Laufteam Braunschweig ohne Text, Roter Löwenkopf"
            />
            <h2 className="text-bold z-10 col-span-4 flex flex-col justify-center space-y-1 hyphens-none text-center text-3xl font-bold uppercase italic text-offWhite md:col-span-3 md:text-left md:text-2xl lg:text-3xl [&>span]:h-[1em]">
              <span>Durch</span>
              <span className="text-red">Laufleidenschaft</span>{" "}
              <span>vereint</span>
            </h2>

            <p className="col-span-4 max-w-md text-balance text-center text-offWhite md:text-left">
              Das Laufteam Braunschweig ist ein Verbund ausgewählter
              Spitzensportler der Region Braunschweig und steht leistungsstarken
              und förderungswürdigen Athletinnen und Athleten offen, die in
              Vereinen der Startgemeinschaft LG Braunschweig Mitglied sind.
            </p>
          </div>
        </div>
        <div className="relative md:static">
          <div className="absolute bottom-0 w-full md:hidden">
            <Triangle color="darkBlue" flipHorizontal />
          </div>
          {image.url && (
            <Image
              className="right-0 h-full w-full object-cover md:absolute md:w-1/2 md:object-left"
              src={image.url}
              alt={image.alt || ""}
              width={image.width || 1920}
              height={image.height || 1080}
            />
          )}
        </div>

        <div className="absolute left-1/2 hidden h-full md:block">
          <Triangle color="darkBlue" rotated flipVertical />
        </div>
      </div>
      <Triangle color="offWhite" flipHorizontal className="md:hidden" />
    </Section>
  );
}
