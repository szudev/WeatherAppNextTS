import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function useGetCurrentTheme() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setIsMounted(true), []);
  const toggleTheme = (): void => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const themeChecker = (): boolean => {
    return theme === "light" ? true : false;
  };

  return { toggleTheme, themeChecker, isMounted };
}
