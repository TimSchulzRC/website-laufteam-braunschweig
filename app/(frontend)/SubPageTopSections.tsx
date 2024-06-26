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
      <section className="2xl:container relative">
        {image.url && (
          <Image
            className="w-full max-h-[600px] object-cover"
            width={image.width}
            height={image.height}
            src={image.url}
            alt={image.alt}
          />
        )}
        <div className="absolute bottom-0 z-10 w-full">
          <svg
            width="100%"
            viewBox="0 0 1500 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="crispEdges"
          >
            <path d="M0 100L1500 0V100H0Z" fill="#30313E" />
          </svg>
        </div>
      </section>
      <section className="text-offWhite container py-24">
        <div className="grid grid-cols-2">
          <h1 className="text-5xl col-span-2 uppercase text-red">{title}</h1>
          <hr className="my-4 col-span-2" />
          <h2 className="col-span-2 md:col-span-1 mb-2 text-2xl uppercase md:pe-10">
            {subtitle}
          </h2>
          <p className="col-span-2 md:col-span-1 m-0">{infotext}</p>
        </div>
      </section>
    </>
  );
}
