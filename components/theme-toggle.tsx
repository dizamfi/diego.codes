"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark" || theme === undefined;
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="glass rounded-xl px-3 py-2 hover:bg-white/10 transition"
      aria-label="Cambiar tema"
      title="Cambiar tema"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
