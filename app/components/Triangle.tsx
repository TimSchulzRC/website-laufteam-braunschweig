import config from "@/tailwind.config";

export default function Triangle({
  color,
  flipVertical,
  flipHorizontal,
  className,
  rotated,
}: {
  color: DefaultColors;
  flipVertical?: boolean;
  flipHorizontal?: boolean;
  className?: string;
  rotated?: boolean;
}) {
  const colors = config.theme?.colors as Record<string, string>;
  return rotated ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 100 373.205"
      className={`${flipHorizontal && "scale-x-[-1]"} ${
        flipVertical && "scale-y-[-1]"
      } ${className}`}
      fill="none"
    >
      <polygon points="0,0 0,373 100,373.205" fill={colors?.[color]} />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 373.205 100"
      className={`${flipHorizontal && "scale-x-[-1]"} ${
        flipVertical && "scale-y-[-1]"
      } ${className}`}
      fill="none"
    >
      <polygon points="0,0 0,100 373.205,100" fill={colors?.[color]} />
    </svg>
  );
}
