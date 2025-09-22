"use client";

import { AlertCircleIcon, CheckCircleIcon, Mail, SendIcon } from "lucide-react";
import { motion } from "motion/react";
import * as React from "react";
import {
  type SendContactEmailState,
  sendContactEmail,
} from "@/app/server/actions";
import { AnimatedSection } from "./animations/animated-section";
import { Button } from "./ui/button";
import { SectionHeader } from "./ui/section-header";

const initialState: SendContactEmailState = {
  success: false,
  error: null,
};

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const Contact = () => {
  const [formData, setFormData] = React.useState(initialFormData);

  const [state, action, pending] = React.useActionState(
    sendContactEmail,
    initialState,
  );

  const successMessageRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (state.success) {
      setFormData(initialFormData);

      const element = successMessageRef.current;
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100,
          behavior: "smooth",
        });
      }
    }
  }, [state.success]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatedSection
      id="contact"
      className="max-w-3xl min-h-screen mx-auto px-8 py-12 lg:py-16"
      animation="slideLeft"
    >
      <SectionHeader>&lt;contact /&gt;</SectionHeader>

      {/* Success message */}
      {state.success && (
        <motion.div
          ref={successMessageRef}
          className="flex flex-row items-start gap-2 mb-8 p-4 bg-primary/20 border-2 border-primary rounded-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex-shrink-0">
            <CheckCircleIcon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
          </div>
          <div>
            <h4 className="text-sm md:text-lg font-medium text-primary text-left">
              Message sent successfully! I'll get back to you as soon as
              possible.
            </h4>
          </div>
        </motion.div>
      )}

      {/* Contact form */}
      <div>
        <h3 className="inline-block text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          <span className="flex items-center gap-2">
            <Mail className="w-6 h-6 text-primary" /> Send me a message
          </span>
        </h3>
        <form action={action}>
          <div className="flex flex-col gap-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-muted font-medium mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border bg-background text-text placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-muted font-medium mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border bg-background text-text placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm text-muted font-medium mb-2"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border bg-background text-text placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-muted font-medium mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border bg-background text-text placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                placeholder="Tell me about your project or idea, or just say hi!"
              />
            </div>

            <div className="hidden">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
            </div>

            {state.error && (
              <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/30 rounded-lg">
                <div className="flex-shrink-0">
                  <AlertCircleIcon className="w-5 h-5 text-red-500" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-red-800 dark:text-red-200 mb-1">
                    {state.error}
                  </h4>
                </div>
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              leftIcon={<SendIcon className="w-5 h-5" />}
              disabled={pending}
            >
              {pending ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </AnimatedSection>
  );
};
