"use client";

import { cx } from "class-variance-authority";
import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  backgroundImg?: ReactNode;
  motionClassName?: string;
}

export default function PageContainer({
  className,
  children,
  backgroundImg,
  motionClassName,
}: Props) {
  return (
    <div className={className}>
      {backgroundImg}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className={cx("w-full", motionClassName)}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
