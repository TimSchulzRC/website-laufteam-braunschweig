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
      <div className="h-[600px] sm:h-[600px] md:h-[650px] w-full relative flex">
        <div className="container hidden md:block">
          <div className="w-1/2  h-full bg-darkBlue flex flex-col justify-center space-y-20 ">
            <Image
              src="/svg/logo_text.svg"
              height={67}
              width={274}
              alt="Laufteam Braunschweig Logo"
              className="md:flex z-20 transition ease-in-out w-full"
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
        </div>
        {image.url && (
          <Image
            className="absolute right-0 w-full md:w-1/2 h-full object-cover object-left"
            src={image.url}
            alt={image.alt || ""}
            width={image.width || 1920}
            height={image.height || 1080}
          />
        )}
        <div className="h-full absolute left-1/2 hidden md:block ">
          <Triangle color="darkBlue" rotated flipVertical />
        </div>

        <div className="w-full absolute bottom-0 left-0 md:hidden">
          <Triangle
            color="darkBlue"
            className="z-10 -mb-[1px]"
            flipHorizontal
          />
          <div className="bg-darkBlue text-offWhite p-10 relative flex flex-col justify-center items-center">
            <div className="md:w-1/2">
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
      </div>
      <Triangle color="offWhite" flipHorizontal className="md:hidden" />
    </Section>
  );
}
