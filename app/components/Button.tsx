"use client";

import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";
import Link from "next/link";
import { ReactNode } from "react";

export default function Button({
  children,
  href,
  color,
  className,
  showIcon = true,
  skew = false,
}: {
  children: ReactNode;
  href?: string;
  color?: DefaultColors;
  className?: string;
  showIcon?: boolean;
  skew?: boolean;
}) {
  let btnColor = "";
  switch (color) {
    case "darkBlue":
      btnColor = "bg-darkBlue hover:bg-darkBlue-light";
      break;
    case "red":
      btnColor = "bg-red hover:bg-red-light";
      break;
    case "orange":
      btnColor = "bg-orange hover:bg-orange-light";
      break;
    case "offWhite":
      btnColor = "bg-offWhite hover:bg-[#ffffff]";
      break;
    default:
      btnColor = "bg-darkBlue hover:bg-darkBlue-light";
      break;
  }

  const containerClassName = `inline-block text-offWhite p-3 ${
    skew && "-skew-x-[15deg]"
  } ${href && "hover:underline"} ${btnColor} ${className}`;
  const childClassName = `${
    skew && "skew-x-[15deg]"
  } uppercase flex items-center gap-3 w-100`;
  return href ? (
    <Link href={href} className={containerClassName}>
      <div className={childClassName}>
        {children}
        {showIcon && <DoubleArrowSharpIcon fontSize="small" />}
      </div>
    </Link>
  ) : (
    <button className={containerClassName}>
      <div className={childClassName}>
        {children}
        {showIcon && <DoubleArrowSharpIcon fontSize="small" />}
      </div>
    </button>
  );
}
