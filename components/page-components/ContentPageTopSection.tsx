import ImageData from "@/types/ImageData";
import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  image: ImageData;
};

export default function ContentPageTopSection({ image, children }: Props) {
  return (
    <section className="container relative mb-20 md:max-w-[800px]">
      {image.url && (
        <Image
          className="col aspect-square w-full object-cover object-center"
          src={image.url}
          alt={image.alt || ""}
          width={image.width || 800}
          height={image.height || 500}
        />
      )}
      <div className="container absolute bottom-0 left-1/2 -translate-x-1/2">
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
      {children}
    </section>
  );
}
