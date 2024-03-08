"use client";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";
import Image from "next/image";
import { useCallback, useContext, useEffect, useMemo, useRef } from "react";
import Button from "../components/Button";
import { LogoContext } from "../components/LogoContext";
import Section from "../components/Section";
import Triangle from "../components/Triangle";

export default function Header() {
  const logoRef = useRef<HTMLImageElement>(null);
  const [logoHidden, setLogoHidden] = useContext(LogoContext);

  const handelLeavingScreen = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          setLogoHidden(true);
        } else {
          setLogoHidden(false);
        }
      });
    },
    [setLogoHidden]
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
    <Section className="bg-darkBlue">
      <div className="h-[600px] sm:h-[600px] md:h-[800px] w-full relative md:container">
        <Image
          className="h-full w-full object-cover object-right-top"
          src="/images/img_3.webp"
          alt="Header Image"
          width={1440}
          height={1440}
        />
        <div className="absolute w-full h-full top-0 hidden md:flex">
          <div className="md:w-[250px] lg:w-[350px] h-full bg-darkBlue flex md:pt-16 lg:pt-20">
            <Image
              src="/images/logo.svg"
              height={67}
              width={274}
              alt={""}
              className={`h-auto hidden md:flex md:w-[300px] lg:w-[350px] z-20 absolute transition ease-in-out ${
                logoHidden && "opacity-0"
              }`}
              ref={logoRef}
            />

            <div className="absolute z-10 bottom-32 flex flex-col items-end">
              <h1 className="text-offWhite italic font-bold md:text-5xl lg:text-6xl mb-12 uppercase ms-[-5px]">
                DM in <br />
                <span className="text-red">Uzelen</span>
              </h1>
              <div className="w-full pe-6">
                <Button
                  color="orange"
                  className="w-full"
                  showIcon={false}
                  href="/"
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
          <div>
            <Triangle color="darkBlue" rotated flipVertical className="" />
          </div>
        </div>
        <div className="w-full absolute bottom-0 left-0 md:hidden">
          <div className="w-full">
            <Triangle color="darkBlue" />
          </div>
          <div className="bg-darkBlue text-offWhite my-[-1px] px-10 py-5 relative">
            <h1 className="cursive font-bold text-5xl mb-6 uppercase ms-[-5px]">
              DM in <br />
              <span className="text-red">Uzelen</span>
            </h1>
            <Button href="/" color="orange" skew className="w-44">
              Jetzt lesen!
            </Button>
            {/* <Link
              href="/"
              className="link uppercase font-bold text-xl flex items-center gap-3"
            >
              Jetzt lesen! <DoubleArrowSharpIcon />
            </Link> */}
          </div>
        </div>
      </div>
      <Triangle color="darkBlue" flipVertical className="md:hidden" />
    </Section>
  );
}
