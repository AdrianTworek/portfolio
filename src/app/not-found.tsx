"use client";

import { Home } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-8">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="inline-block text-8xl lg:text-9xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            404
          </h1>
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-20"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-2 -left-2 w-6 h-6 bg-secondary rounded-full opacity-30"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>

        <motion.h2
          className="text-2xl lg:text-3xl font-bold text-text mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Oops! Page not found
        </motion.h2>

        <motion.p
          className="text-lg text-muted mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          The page you're looking for seems to have wandered off into the
          digital void. Don't worry, even the best developers get lost
          sometimes!
        </motion.p>

        <Button
          type="button"
          leftIcon={<Home size={16} />}
          size="lg"
          className="w-full sm:w-auto"
          onClick={() => router.push("/")}
        >
          Go Home
        </Button>
      </motion.div>
    </div>
  );
}
