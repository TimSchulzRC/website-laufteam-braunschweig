"use client";

import Button from "@/components/Button";
import Section from "@/components/Section";
import Triangle from "@/components/Triangle";
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
    [],
  );

  const options = useMemo(
    () => ({
      root: null,
      threshold: 0.7,
    }),
    [],
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
      <div className="relative flex h-[600px] w-full sm:h-[600px] md:h-[650px]">
        <div className="container hidden md:block">
          <div className="flex h-full w-1/2 flex-col justify-center space-y-20 bg-darkBlue">
            <Image
              src="/svg/logo_text.svg"
              height={67}
              width={274}
              alt="Laufteam Braunschweig Logo"
              className="w-full transition ease-in-out md:flex"
              style={{ transformOrigin: "top" }}
            />
            <div className="bottom-32 flex flex-col overflow-visible lg:max-w-80">
              <div className="w-full pe-6">
                <Button
                  color="orange"
                  className="w-full"
                  showIcon={false}
                  href={"news"}
                  skew
                >
                  <div className="flex w-full items-center justify-between">
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
            className="absolute right-0 h-full w-full object-cover object-left md:w-1/2"
            src={image.url}
            alt={image.alt || ""}
            width={image.width || 1920}
            height={image.height || 1080}
          />
        )}
        <div className="absolute left-1/2 hidden h-full md:block">
          <Triangle color="darkBlue" rotated flipVertical />
        </div>

        <div className="absolute bottom-0 left-0 w-full md:hidden">
          <Triangle
            color="darkBlue"
            className="z-10 -mb-[1px]"
            flipHorizontal
          />
          <div className="relative flex flex-col items-center justify-center bg-darkBlue p-10 text-offWhite">
            <div className="md:w-1/2">
              <Image
                src="/svg/logo_text.svg"
                height={67}
                width={274}
                alt="Laufteam Braunschweig Logo"
                className="z-20 mb-10 h-full w-full transition ease-in-out"
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
