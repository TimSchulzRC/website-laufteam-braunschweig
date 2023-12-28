export default function Button({
  children,
  className,
}: {
  children: string;
  className: string;
}) {
  return <button className={`${className}`}>{children}</button>;
}
