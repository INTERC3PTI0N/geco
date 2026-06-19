"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: (d) => ({ opacity: 0, y: d?.y ?? 28, x: d?.x ?? 0 }),
  show: { opacity: 1, y: 0, x: 0 },
};

export default function Reveal({ children, delay = 0, y, x, className, as = "div", once = true, amount = 0.2, ...rest }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      custom={{ y, x }}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
