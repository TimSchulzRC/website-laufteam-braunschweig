import Image from "next/image";
import Button from "./Button";
import Triangle from "./Triangle";

export default function LinkCard({
  title,
  image,
  imageAlt,
  href,
  children,
  className,
}: {
  title: string;
  image: string;
  imageAlt: string;
  href: string;
  children: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="max-w-80 pt-[66px] flex flex-col ">
        <Triangle color="offWhite" flipHorizontal />
        <div className="bg-offWhite p-10">
          <Image
            src={image}
            alt={imageAlt}
            height={1440}
            width={1440}
            className="-mt-48 relative z-10 mb-6"
          />
          <h3 className="text-2xl text-red font-bold">{title}</h3>
          <p className="leading-7 mb-6">{children}</p>
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
