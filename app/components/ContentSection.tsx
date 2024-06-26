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

  console.log(bgColor, textColor);

  return (
    <Section className={`${bgColor} ${textColor} ${className || ""} `}>
      <div className="container grid grid-cols-2 py-10">
        <h2 className="text-xl uppercase col-span-2">{data.title}</h2>
        <hr className={`col-span-2 mt-2 ${borderColor}`} />
        <div />
        <div>
          <PortableText value={data.content} />
          <hr />
        </div>
      </div>
    </Section>
  );
}
