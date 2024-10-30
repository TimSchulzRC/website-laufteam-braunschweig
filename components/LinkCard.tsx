"use client";
import Button from "@/components/Button";
import Triangle from "@/components/Triangle";
import cn from "@/util/classnames";
import Image from "next/image";
import { ReactNode } from "react";

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
        className={cn(
          !disableMaxWidth && "max-w-80",
          "flex h-full flex-col pt-[66px]",
        )}
      >
        <div className="-mb-[0.2px]">
          <Triangle color="offWhite" className="" flipHorizontal />
        </div>
        <div className="relative flex h-full grow flex-col bg-offWhite p-10">
          {imageURL && (
            <Image
              src={imageURL}
              alt={imageAlt}
              height={1440}
              width={1440}
              className="relative z-10 -mt-48 mb-6 aspect-square object-cover object-top"
            />
          )}
          <h3 className="text-2xl font-bold text-red">{title}</h3>
          {subtitle && (
            <h4 className="my-2 font-sans text-lg text-darkBlue-light">
              {subtitle}
            </h4>
          )}
          <div className="mb-6 grow leading-7">{children}</div>
          <Button
            className="flex w-full justify-center"
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
