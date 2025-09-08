"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLMotionProps, motion } from "motion/react";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 hover:cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow hover:shadow-lg hover:opacity-90 focus:ring-primary",
        secondary:
          "bg-secondary text-primary-foreground shadow hover:shadow-lg hover:opacity-90 focus:ring-secondary",
        accent:
          "bg-accent text-primary-foreground shadow hover:shadow-lg hover:opacity-90 focus:ring-accent",
        outline:
          "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        ghost: "text-muted-foreground hover:text-primary hover:bg-muted/30",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "size" | "children">,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, leftIcon, rightIcon, children, ...props },
    ref,
  ) => (
    <motion.button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      whileHover={{ scale: 1.02 }}
      whileFocus={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {leftIcon && <span className="flex items-center mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="flex items-center ml-2">{rightIcon}</span>}
    </motion.button>
  ),
);

Button.displayName = "Button";
