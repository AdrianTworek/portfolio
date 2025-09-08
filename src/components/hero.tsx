"use client";

import { Download, Mail } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-8 py-12 lg:py-16 gap-12">
      {/* Text section */}
      <motion.div
        className="flex-1 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
      >
        <motion.h1
          className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div>
            Hi there, I’m <span className="text-primary">Adrian</span>
          </div>
        </motion.h1>
        <motion.h2
          className="mt-2 text-lg font-medium lg:text-2xl xl:text-3xl text-secondary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Typewriter
            words={[
              "Insightful Software Engineer",
              "Full-Stack Developer",
              "Building the Future",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>
        <motion.p
          className="mt-6 max-w-lg mx-auto lg:mx-0 text-base text-muted leading-relaxed"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          I love building modern, scalable, and user-focused applications. This
          portfolio showcases my journey, projects, and experiences as a
          developer.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <Button
            type="button"
            leftIcon={<Mail size={16} />}
            size="md"
            className="w-full max-w-[360px]"
          >
            Get in touch
          </Button>
          <Button
            type="button"
            variant="accent"
            leftIcon={<Download size={16} />}
            size="md"
            className="w-full max-w-[360px]"
          >
            Download Resume
          </Button>
        </motion.div>
      </motion.div>

      {/* Image section */}
      <motion.div
        className="flex flex-1 justify-center relative"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src="/hero-image.png"
          alt="Adrian cartoon at Brooklyn Bridge"
          width={400}
          height={400}
          className="w-full max-w-[250px] md:max-w-[300px] lg:max-w-[400px] h-auto rounded-2xl shadow-xl border border-secondary drop-shadow-[0_0_30px_rgba(139,92,246,0.7)]"
          priority
        />
      </motion.div>
    </section>
  );
};
