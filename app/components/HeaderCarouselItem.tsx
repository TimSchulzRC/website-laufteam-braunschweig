"use client";

import config from "@/tailwind.config";
import ImageData from "@/types/ImageData";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef } from "react";
import Button from "./Button";
import Triangle from "./Triangle";

type Props = {
  image: ImageData;
  title: string;
  postSlug: string;
};

export default function HeaderCarouselItem({ image, title, postSlug }: Props) {
  const colors = config.theme?.extend?.colors as Record<string, string>;
  const logoRef = useRef<HTMLImageElement>(null);

  const handelLeavingScreen = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const navLogo = document.getElementById("nav-logo");
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLogo?.classList.add("lg:opacity-0");
          if (logoRef.current) {
            logoRef.current.classList.remove("lg:opacity-0");
            logoRef.current.style.transformOrigin = "bottom";
          }
        } else {
          navLogo?.classList.remove("lg:opacity-0");
          if (logoRef.current) {
            logoRef.current.classList.add("lg:opacity-0");
          }
        }
      });
    },
    []
  );

  const options = useMemo(
    () => ({
      root: null,
      rootMargin: "0px",
      threshold: 1,
    }),
    []
  );

  useEffect(() => {
    const logo = logoRef.current;
    const observer = new IntersectionObserver(handelLeavingScreen, options);
    if (logo) observer.observe(logo);
    return () => {
      if (logo) observer.unobserve(logo);
    };
  }, [handelLeavingScreen, logoRef, options]);

  return (
    <div>
      <div className="h-[600px] sm:h-[600px] md:h-[650px] relative 2xl:container">
        <div className="absolute lg:ps-20 2xl:ps-0 w-full h-full top-0 left-1/2 hidden lg:flex mx-auto -translate-x-1/2">
          <div className="w-1/3 h-full bg-darkBlue flex flex-col gap-10 justify-between md:pb-32 md:pt-16 lg:pt-20">
            <Image
              src="/svg/logo_text.svg"
              height={67}
              width={274}
              alt={""}
              className="h-full md:flex md:w-[300px] lg:w-[350px] z-20 transition ease-in-out"
              style={{ transformOrigin: "top" }}
              ref={logoRef}
            />

            <div className="bottom-32 flex flex-col overflow-visible lg:max-w-72 ">
              <h1 className=" text-offWhite italic font-bold md:text-4xl lg:text-5xl mb-12 uppercase ms-[-5px] ">
                <div
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
                </div>
              </h1>
              <div className="w-full pe-6 ">
                <Button
                  color="orange"
                  className="w-full"
                  showIcon={false}
                  href={"news/" + postSlug}
                  skew
                >
                  <div className="flex items-center justify-between w-full">
                    <span>Jetzt lesen!</span>
                    <DoubleArrowSharpIcon fontSize="small" />
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex relative w-2/3">
            <div className="h-full absolute">
              <Triangle color="darkBlue" rotated flipVertical />
            </div>
            {image.url && (
              <Image
                className="h-full w-full object-cover object-left"
                src={image.url}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            )}
          </div>
        </div>
        {image.url && (
          <Image
            className="flex lg:hidden w-full h-[400px] md:h-[600px] object-cover"
            src={image.url}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        )}
        <div className="w-full absolute bottom-0 left-0 lg:hidden">
          <div className="w-full">
            <Triangle color="darkBlue" className="z-10" />
          </div>
          <div className="bg-darkBlue text-offWhite my-[-1px] px-10 py-5 relative h-52 flex flex-col justify-center">
            <h1 className="italic text-3xl mb-6 uppercase ms-[-5px] max-w-[80%]">
              <div
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
              </div>
            </h1>
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
