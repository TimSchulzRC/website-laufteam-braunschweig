"use client";

import Button from "@/app/components/Button";
import Section from "@/app/components/Section";
import Triangle from "@/app/components/Triangle";
import ImageData from "@/types/ImageData";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";
import Image from "next/image";
import { useCallback, useEffect, useMemo } from "react";

type Props = {
  image: ImageData;
};

export default function Header({ image }: Props) {
  const handelLeavingScreen = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const navLogo = document.getElementById("nav-logo");
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLogo?.classList.add("lg:opacity-0");
        } else {
          navLogo?.classList.remove("lg:opacity-0");
        }
      });
    },
    []
  );

  const options = useMemo(
    () => ({
      root: null,
      // rootMargin: "0px",
      threshold: 0.7,
    }),
    []
  );

  useEffect(() => {
    const toObserve = document.getElementById("homepage-header-section");
    const observer = new IntersectionObserver(handelLeavingScreen, options);
    if (toObserve) observer.observe(toObserve);
    return () => {
      if (toObserve) observer.unobserve(toObserve);
    };
  }, [handelLeavingScreen, options]);

  return (
    <Section className="bg-darkBlue" id="homepage-header-section">
      <div className="h-[600px] sm:h-[600px] md:h-[650px] w-full relative 2xl:container">
        <div className="absolute lg:ps-20 2xl:ps-0 w-full h-full top-0 left-1/2 hidden lg:flex mx-auto -translate-x-1/2">
          <div className="w-1/3 h-full bg-darkBlue flex flex-col gap-10 justify-between md:pb-32 md:pt-16 lg:pt-20">
            <Image
              src="/svg/logo_text.svg"
              height={67}
              width={274}
              alt="Laufteam Braunschweig Logo"
              className="h-full md:flex md:w-[300px] lg:w-[350px] z-20 transition ease-in-out"
              style={{ transformOrigin: "top" }}
            />

            <div className="bottom-32 flex flex-col overflow-visible lg:max-w-80 ">
              <div className="w-full pe-6 ">
                <Button
                  color="orange"
                  className="w-full"
                  showIcon={false}
                  href={"news"}
                  skew
                >
                  <div className="flex items-center justify-between w-full">
                    <span>Aktuelle Neuigkeiten</span>
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
          <Triangle color="darkBlue" className="z-10" flipHorizontal />

          <div className="bg-darkBlue text-offWhite p-10 relative flex flex-col justify-center">
            <Image
              src="/svg/logo_text.svg"
              height={67}
              width={274}
              alt="Laufteam Braunschweig Logo"
              className="h-full w-full z-20 transition ease-in-out mb-10"
              style={{ transformOrigin: "top" }}
            />
            <Button
              href={"news"}
              color="orange"
              skew
              className="flex justify-center"
            >
              Aktuelle Neuigkeiten
            </Button>
          </div>
        </div>
      </div>
      <Triangle color="offWhite" flipHorizontal className="lg:hidden" />
    </Section>
  );
}
