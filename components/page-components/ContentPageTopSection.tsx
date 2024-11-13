"use client";

import clientConfig from "@/sanity/config/client-config";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  image: SanityImageSource | null;
  imageAlt?: string;
  children?: ReactNode;
};

export default function ContentPageTopSection({
  image,
  imageAlt,
  children,
}: Props) {
  const imageProps = useNextSanityImage(clientConfig, image);
  return (
    <section className="container relative mb-20 max-w-[800px]">
      {image && imageProps && (
        <Image
          {...imageProps}
          alt={imageAlt || ""}
          className="col aspect-square w-full object-cover object-center"
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
