import SubPageData from "@/types/SubPageData";
import Image from "next/image";

type Props = {
  pageData: SubPageData;
};

export default function SubPageTopSections({
  pageData: { image, title, subtitle, infotext },
}: Props) {
  return (
    <>
      <section className="relative">
        {image?.url && (
          <Image
            className="w-full max-h-[600px] object-cover object-top"
            width={image.width || 1920}
            height={image.height || 1080}
            src={image.url}
            alt={image.alt || ""}
          />
        )}
      </section>
      <section className="text-offWhite container py-24">
        <div className="grid grid-cols-2">
          <h1 className="text-5xl col-span-2 uppercase text-red">{title}</h1>
          <hr className="my-4 col-span-2" />
          <h2 className="col-span-2 md:col-span-1 mb-2 text-2xl uppercase md:pe-10">
            {subtitle}
          </h2>
        </div>
      </section>
    </>
  );
}
