"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ButtonTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const isDark = theme === "dark";

  const handleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleTheme}
      className="hover:cursor-pointer overflow-hidden relative"
    >
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
        <Sun
          className={`absolute transition-transform duration-300 ${
            isDark
              ? "opacity-0 scale-0 rotate-90"
              : "opacity-100 scale-100 rotate-0"
          }`}
        />
        <Moon
          className={`absolute transition-transform duration-300 ${
            isDark
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-0 rotate-90"
          }`}
        />
      </div>
    </Button>
  );
}
