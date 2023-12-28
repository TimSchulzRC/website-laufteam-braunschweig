export default function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`w-full flex items-center flex-col ${className}`}>
      {children}
    </section>
  );
}
