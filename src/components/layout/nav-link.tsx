"use client";

import Link from "next/link";
import { PropsWithChildren } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { cx } from "class-variance-authority";

interface NavLinkProps extends PropsWithChildren {
  href: string;
  className?: string;
}

export default function NavLink({ href, children, className }: NavLinkProps) {
  const segment = useSelectedLayoutSegment() || "";
  const active = href === `/${segment}`;

  return (
    <Link
      className={cx(
        className,
        active ? "before:scale-100" : "before:scale-0",
        `before:absolute before:bottom-0 before:h-[3px] before:w-[inherit] before:bg-white before:transition-transform 
        hover:before:block hover:before:scale-100`
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
