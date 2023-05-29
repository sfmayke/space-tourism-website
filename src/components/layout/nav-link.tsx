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
        active &&
          "before:absolute before:bottom-0 before:h-[3px] before:w-[inherit] before:bg-white"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
