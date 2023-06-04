"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PropsWithChildren, useId } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

export default function PageAnimation({ children, className }: Props) {
  const key = useId();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
