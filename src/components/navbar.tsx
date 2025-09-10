"use client";

import { Github, Linkedin, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

interface NavLinkItem {
  label: string;
  href: string;
}

const navLinks: NavLinkItem[] = [
  { label: "About Me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SCROLL_Y_THRESHOLD = 100;

const MotionLink = motion(Link);

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        return;
      }

      const currentScrollY = window.scrollY;

      // Always show navbar at the top
      if (currentScrollY <= SCROLL_Y_THRESHOLD) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current && isVisible) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current && !isVisible) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, isMobileMenuOpen]);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-30 bg-background/95 h-[80px] backdrop-blur-sm border-b border-primary/30 shadow-lg shadow-primary/10 transition-all duration-300 ease-in-out",
          isVisible ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <nav
          className="flex max-w-7xl mx-auto items-center justify-between px-8 py-6"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <MotionLink
            href="/"
            className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-2xl font-medium tracking-tight"
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            AT
          </MotionLink>

          {/* Desktop navigation */}
          <ul className="hidden lg:flex items-baseline space-x-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="relative text-muted-foreground hover:text-text px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 group"
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Social links */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="https://www.linkedin.com/in/adrian-tworek-6b5096217/"
              target="_blank"
              title="LinkedIn"
              aria-label="Visit my LinkedIn profile"
            >
              <Linkedin
                className="text-muted-foreground hover:text-text transition-colors duration-300 hover:cursor-pointer"
                size={20}
              />
            </Link>
            <Link
              href="https://github.com/AdrianTworek/"
              target="_blank"
              title="GitHub"
              aria-label="Visit my GitHub profile"
            >
              <Github
                className="text-muted-foreground hover:text-text transition-colors duration-300 hover:cursor-pointer"
                size={20}
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden rounded-md text-text hover:cursor-pointer z-50"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            <span className="sr-only">Toggle navigation</span>
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            id="mobile-menu"
            className={cn(
              "lg:hidden fixed top-20 left-0 right-0 bottom-0 z-40 bg-background/95 backdrop-blur-sm",
              isMobileMenuOpen ? "block" : "hidden",
            )}
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ul className="h-full flex flex-col items-center justify-center gap-6 text-xl font-medium text-text">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-500/20 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
