"use client";

import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  motionKey: string;
}

export default function SlideAnimation({
  children,
  className,
  motionKey,
}: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={className}
        key={motionKey}
        initial={{ left: 100, opacity: 0 }}
        animate={{ left: 0, opacity: 1 }}
        exit={{ left: -100, opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
