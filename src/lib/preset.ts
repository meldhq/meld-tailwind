import type { Config } from "tailwindcss";
import { meldPlugin } from "./plugin";
import animate from "tailwindcss-animate";

export const meldPreset = (theme = "default") => {
  return {
    content: [],
    darkMode: ["class"],
    safelist: ["dark"],
    plugins: [animate, meldPlugin(theme)],
  } satisfies Config;
};
