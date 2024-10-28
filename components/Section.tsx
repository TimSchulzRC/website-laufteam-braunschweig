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
      className={`w-full flex items-center flex-col ${className}`}
    >
      {children}
    </section>
  );
}
