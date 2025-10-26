import { Monitor, Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import * as React from "react";
import { Button } from "./ui/button";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const themes = [
    { name: "light", icon: Sun, label: "Light" },
    { name: "dark", icon: Moon, label: "Dark" },
    { name: "system", icon: Monitor, label: "System" },
  ];

  const currentIndex = themes.findIndex((t) => t.name === theme);
  const nextTheme = themes[(currentIndex + 1) % themes.length];

  const renderIcon = () => {
    if (!mounted) {
      return (
        <div className="w-4 h-4 bg-primary/30 rounded-full animate-pulse" />
      );
    }

    const IconComponent = themes[currentIndex].icon;
    return <IconComponent size={16} className="text-primary" />;
  };

  return (
    <Button
      type="button"
      onClick={() => setTheme(nextTheme.name)}
      className="relative w-10 h-10 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileFocus={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${nextTheme.label} theme`}
      title={`Switch to ${nextTheme.label} theme`}
      suppressHydrationWarning
    >
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {renderIcon()}
      </motion.div>
    </Button>
  );
};
