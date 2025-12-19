"use client";

import { useTheme } from "next-themes";
import { MdModeNight } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() =>
        setTheme(currentTheme === "dark" ? "light" : "dark")
      }
    >
      {currentTheme === "dark" ? (
        <MdModeNight className="text-2xl" />
      ) : (
        <CiLight className="text-2xl" />
      )}
    </button>
  );
}
