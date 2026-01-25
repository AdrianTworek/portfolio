"use client";

import { Github, Heart, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export const Footer = () => {
  const launchYear = 2025;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-12 overflow-hidden bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-t border-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(109,40,217,0.1),transparent_50%)] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-5">
          {/* Main content */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground mb-2">
              Built with{" "}
              <motion.span
                className="inline-block text-accent"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-5 h-5 fill-current" />
              </motion.span>{" "}
              by{" "}
              <motion.span
                className="inline-flex font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Adrian Tworek
              </motion.span>
            </p>

            <p className="text-sm text-muted-foreground/80">
              &copy; {launchYear}-{currentYear}. All rights reserved.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.hr
          className="w-32 mx-auto border-muted/20 mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="https://www.linkedin.com/in/adrian-tworek-6b5096217/"
            target="_blank"
            title="LinkedIn"
            aria-label="Visit my LinkedIn profile"
          >
            <Linkedin
              className="w-5 h-5 text-muted-foreground hover:text-text transition-colors duration-300 hover:cursor-pointer"
              size={20}
            />
          </Link>
          <Link
            href="https://www.github.com/AdrianTworek/"
            target="_blank"
            title="GitHub"
            aria-label="Visit my GitHub profile"
          >
            <Github
              className="w-5 h-5 text-muted-foreground hover:text-text transition-colors duration-300 hover:cursor-pointer"
              size={20}
            />
          </Link>
          <Link
            href="mailto:adrian.tworek.it@gmail.com"
            title="Email"
            aria-label="Send me an email"
          >
            <Mail className="w-5 h-5 text-muted-foreground hover:text-text transition-colors duration-300 hover:cursor-pointer" />
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};
