"use client";

import cn from "@/util/classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type Props = {
  href: string;
  children: string;
};

export default function NavLink({ href, children }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        pathname.startsWith(href) && "border-b-2 font-bold",
        "transition-all ease-in-out hover:border-b-2 hover:border-orange hover:text-orange",
      )}
    >
      {children}
    </Link>
  );
}
