"use client";

import Button from "@/components/Button";
import Triangle from "@/components/Triangle";
import config from "@/tailwind.config";
import ImageData from "@/types/ImageData";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";
import Image from "next/image";

type Props = {
  image: ImageData;
  title: string;
  postSlug: string;
};

export default function HeaderCarouselItem({ image, title, postSlug }: Props) {
  const colors = config.theme?.extend?.colors as Record<string, string>;

  return (
    <div>
      <div className="relative h-[600px] 2xl:container sm:h-[600px] md:h-[650px]">
        <div className="absolute left-1/2 top-0 mx-auto hidden h-full w-full -translate-x-1/2 lg:flex lg:ps-20 2xl:ps-0">
          <div className="flex h-full w-1/3 flex-col justify-between gap-10 bg-darkBlue md:pb-32 md:pt-16 lg:pt-20">
            <Image
              src="/svg/logo_text.svg"
              height={67}
              width={274}
              alt="Laufteam Braunschweig Logo"
              className="z-20 h-full transition ease-in-out md:flex md:w-[300px] lg:w-[350px]"
              style={{ transformOrigin: "top" }}
            />

            <div className="bottom-32 flex max-w-80 flex-col overflow-visible">
              <h2
                className="mb-12 ms-[-5px] hyphens-auto text-wrap text-2xl font-bold uppercase italic text-offWhite md:text-3xl lg:text-4xl"
                style={{
                  backgroundColor: colors.red,
                  backgroundImage: "linear-gradient(white, white)",
                  backgroundSize: "100% calc(1em * 0.9)",
                  backgroundRepeat: "no-repeat",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  width: "100%",
                }}
              >
                {title}
              </h2>
              <div className="w-full pe-6">
                <Button
                  color="orange"
                  className="w-full"
                  showIcon={false}
                  href={"news/" + postSlug}
                  skew
                >
                  <div className="flex w-full items-center justify-between">
                    <span>Jetzt lesen!</span>
                    <DoubleArrowSharpIcon fontSize="small" />
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative flex w-2/3">
            <div className="absolute h-full">
              <Triangle color="darkBlue" rotated flipVertical />
            </div>
            {image.url && (
              <Image
                className="h-full w-full object-cover object-left"
                src={image.url}
                alt={image.alt || ""}
                width={image.width || 1920}
                height={image.height || 1080}
              />
            )}
          </div>
        </div>
        {image.url && (
          <Image
            className="flex h-[400px] w-full object-cover md:h-[600px] lg:hidden"
            src={image.url}
            alt={image.alt || ""}
            width={image.width || 1920}
            height={image.height || 1080}
          />
        )}
        <div className="absolute bottom-0 left-0 w-full lg:hidden">
          <div className="w-full">
            <Triangle color="darkBlue" className="z-10" />
          </div>
          <div className="relative my-[-1px] flex h-52 flex-col justify-center bg-darkBlue px-10 py-5 text-offWhite">
            <h2
              className="mb-6 ms-[-5px] max-w-[80%] text-2xl uppercase italic"
              style={{
                backgroundColor: colors.red,
                backgroundImage: "linear-gradient(white, white)",
                backgroundSize: "100% calc(1em * 0.9)",
                backgroundRepeat: "no-repeat",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {title}
            </h2>
            <Button
              href={"news/" + postSlug}
              color="orange"
              skew
              className="w-44"
            >
              Jetzt lesen!
            </Button>
          </div>
        </div>
      </div>
      <Triangle color="offWhite" flipHorizontal className="lg:hidden" />
    </div>
  );
}
