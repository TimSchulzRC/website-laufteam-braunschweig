import Image from "next/image";
import Button from "./Button";
import Triangle from "./Triangle";

export default function LinkCard({
  title,
  imageURL,
  imageAlt,
  href,
  children,
  className,
}: {
  title: string;
  imageURL: string;
  imageAlt: string;
  href: string;
  children: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="max-w-80 pt-[66px] flex flex-col h-full">
        <div>
          <Triangle color="offWhite" flipHorizontal />
        </div>
        <div className="bg-offWhite p-10 grow h-full flex flex-col">
          <Image
            src={imageURL}
            alt={imageAlt}
            height={1440}
            width={1440}
            className="-mt-48 relative z-10 mb-6 aspect-square object-cover"
          />
          <h3 className="text-2xl text-red font-bold">{title}</h3>
          <p className="leading-7 mb-6 grow">{children}</p>
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
