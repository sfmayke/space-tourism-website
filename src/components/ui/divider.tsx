"use client";

import * as Separator from "@radix-ui/react-separator";
import { cx } from "class-variance-authority";

interface Props {
  className?: string;
}

export default function Divider({ className }: Props) {
  return (
    <Separator.Root className={cx("my-8 h-[1px] bg-[#383B4B]", className)} />
  );
}
