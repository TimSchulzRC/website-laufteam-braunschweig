import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title: string | null;
};

export default function ContentPageContentSection({ children, title }: Props) {
  return (
    <section className="container md:max-w-[800px] text-offWhite mt-20">
      <div className="col flex flex-col justify-center">
        <h1 className="text-4xl uppercase text-red">{title}</h1>
        <hr className="my-5 border-offWhite" />
      </div>
      {children}
    </section>
  );
}
