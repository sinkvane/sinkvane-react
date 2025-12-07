import { useContext } from "react";
import { ThemeContext } from "@/providers/themeContext";

export function useTheme() {
  return useContext(ThemeContext)
}