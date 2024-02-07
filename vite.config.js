import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MeldTailwind",
      fileName: (format) => `meld-tailwind.${format}.js`,
    },
  },
});
