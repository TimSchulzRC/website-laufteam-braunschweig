import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title: string | null;
  subtitle?: string;
};

export default function ContentPageContentSection({
  children,
  title,
  subtitle,
}: Props) {
  return (
    <section className="container prose prose-invert mt-20 max-w-[800px]">
      <div className="col mb-8 flex flex-col justify-center">
        <h1 className="mb-0 uppercase text-red">{title}</h1>
        <span>{subtitle}</span>
        <hr className="my-5 border-offWhite" />
      </div>
      {children}
    </section>
  );
}
