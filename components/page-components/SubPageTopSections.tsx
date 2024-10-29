import SubPageData from "@/types/SubPageData";
import Image from "next/image";

type Props = {
  pageData: SubPageData;
};

export default function SubPageTopSections({
  pageData: { image, title, subtitle },
}: Props) {
  return (
    <>
      <section className="relative">
        {image?.url && (
          <Image
            className="max-h-[600px] w-full object-cover object-top"
            width={image.width || 1920}
            height={image.height || 1080}
            src={image.url}
            alt={image.alt || ""}
          />
        )}
      </section>
      <section className="container py-24 text-offWhite">
        <div className="grid grid-cols-2">
          <h1 className="col-span-2 text-5xl uppercase text-red">{title}</h1>
          <hr className="col-span-2 my-4" />
          <h2 className="col-span-2 mb-2 text-2xl uppercase md:col-span-1 md:pe-10">
            {subtitle}
          </h2>
        </div>
      </section>
    </>
  );
}
