"use client";

import clientConfig from "@/sanity/config/client-config";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

type Props = {
  image: SanityImageSource | null;
  imageAlt?: string;
  title: string | null;
  subtitle: string | null;
};

export default function SubPageTopSections({
  image,
  imageAlt,
  title,
  subtitle,
}: Props) {
  const imageProps = useNextSanityImage(clientConfig, image);

  return (
    <>
      <section className="relative">
        {image && imageProps && (
          <Image
            {...imageProps}
            alt={imageAlt || ""}
            className="h-[50vw] max-h-[50vh] w-full object-cover object-top"
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
