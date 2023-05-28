"use client";

import Link from "next/link";
import { PropsWithChildren } from "react";
import { useSelectedLayoutSegment } from "next/navigation";

interface NavLinkProps extends PropsWithChildren {
  href: string;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const segment = useSelectedLayoutSegment();

  console.log("segment -->", segment);

  return (
    <Link className="tablet:flex" href={href}>
      {children}
    </Link>
  );
}
