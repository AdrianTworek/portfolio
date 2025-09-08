"use client";

import {
  type EasingDefinition,
  type HTMLMotionProps,
  motion,
  useInView,
  type Variants,
} from "motion/react";
import { useRef } from "react";

interface AnimatedSectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleIn";
  delay?: number;
  duration?: number;
  once?: boolean;
  ease?: EasingDefinition;
}

const animationVariants: Record<string, Variants> = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  },
  slideDown: {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
  },
  slideLeft: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  },
};

export const AnimatedSection = ({
  children,
  className,
  animation = "fadeIn",
  delay = 0,
  duration = 0.5,
  once = true,
  ease = "easeOut",
  ...props
}: AnimatedSectionProps) => {
  const variants = animationVariants[animation];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: once, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className={className}
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration, delay, ease }}
      {...props}
    >
      {children}
    </motion.section>
  );
};
