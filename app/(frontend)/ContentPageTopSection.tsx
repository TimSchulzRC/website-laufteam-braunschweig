import ImageData from "@/types/ImageData";
import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  image: ImageData;
};

export default function ContentPageTopSection({ image, children }: Props) {
  return (
    <section className="container max-w-[800px] relative mb-20">
      <Image
        className="col aspect-auto max-h-[500px] object-cover"
        src={image.url}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
      <div className="absolute container bottom-0 left-1/2 -translate-x-1/2">
        <svg
          width="100%"
          height="auto"
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
