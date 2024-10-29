import cn from "@/util/classnames";

export default function Section({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("flex w-full flex-col items-center", className)}
    >
      {children}
    </section>
  );
}
