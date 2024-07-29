import ContentSectionData from "@/types/ContentSectionData";
import { PortableText } from "next-sanity";
import Section from "./Section";

type Props = {
  data: ContentSectionData;
  className?: string;
};

export default function ContentSection({ data, className }: Props) {
  const bgColors = {
    Rot: "bg-red",
    Orange: "bg-orange",
    Dunkelblau: "bg-darkBlue",
    Grau: "bg-grey",
    OffWhite: "bg-offWhite",
  };

  const textColors = {
    Rot: "text-red",
    Orange: "text-orange",
    Dunkelblau: "text-darkBlue",
    Grau: "text-grey",
    OffWhite: "text-offWhite",
  };

  const borderColors = {
    Rot: "border-red",
    Orange: "border-orange",
    Dunkelblau: "border-darkBlue",
    Grau: "border-grey",
    OffWhite: "border-offWhite",
  };

  const bgColor = data?.backgroundColor?.label
    ? bgColors[data.backgroundColor.label]
    : "";
  const textColor = data?.textColor?.label
    ? textColors[data.textColor.label]
    : "";

  const borderColor = data?.textColor?.label
    ? borderColors[data.textColor.label]
    : "";

  return data.disableTitle ? (
    <Section
      className={`container text-center ${bgColor} ${textColor} ${className || ""}`}
    >
      <div className="max-w-lg py-12">
        <PortableText value={data.content} />
      </div>
    </Section>
  ) : (
    <Section
      className={`container grid grid-cols-2 py-12 ${bgColor} ${textColor} ${className || ""}`}
    >
      <hr className={`col-span-2 mt-2 order-2 md:order-1 ${borderColor}`} />
      <div className="h-full order-1 md:order-2">
        <h2 className="text-xl uppercase col-span-2 mt-4">{data.title}</h2>
      </div>
      <div className="order-3 col-span-2 md:col-span-1">
        <PortableText value={data.content} />
        <hr />
      </div>
    </Section>
  );
}
