"use client";
import Image from "next/image";
import { ReactNode } from "react";
import Button from "./Button";
import Triangle from "./Triangle";

type Props = {
  title: string;
  subtitle?: string;
  imageURL: string;
  imageAlt: string;
  href: string;
  children?: ReactNode;
  className?: string;
  disableMaxWidth?: boolean;
};

export default function LinkCard({
  title,
  subtitle,
  imageURL,
  imageAlt,
  href,
  children,
  className,
  disableMaxWidth = false,
}: Props) {
  return (
    <div className={className}>
      <div
        className={`${
          !disableMaxWidth && "max-w-80"
        } pt-[66px] flex flex-col h-full`}
      >
        <div className="-mb-[0.2px]">
          <Triangle color="offWhite" className="" flipHorizontal />
        </div>
        <div className="bg-offWhite p-10 grow h-full flex flex-col relative">
          {imageURL && (
            <Image
              src={imageURL}
              alt={imageAlt}
              height={1440}
              width={1440}
              className="-mt-48 relative z-10 mb-6 aspect-square object-cover"
            />
          )}
          <h3 className="text-2xl text-red font-bold">{title}</h3>
          {subtitle && (
            <h4 className="text-lg text-darkBlue-light font-sans my-2">
              {subtitle}
            </h4>
          )}
          <div className="leading-7 mb-6 grow">{children}</div>
          <Button
            className="w-full flex justify-center"
            color="darkBlue"
            href={href}
          >
            Mehr erfahren
          </Button>
        </div>
      </div>
    </div>
  );
}
