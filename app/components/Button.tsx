export default function Button({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className="bg-orange text-offWhite p-2 -skew-x-[15deg]">
      <button className={`skew-x-[15deg] italic ${className}`}>
        {children}
      </button>
    </div>
  );
}
