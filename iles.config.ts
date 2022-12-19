import { defineConfig } from "iles";
import WindiCSS from "vite-plugin-windicss";

export default defineConfig({
  svelte: true,
  vite: {
    optimizeDeps: {
      include: ["svelte"],
    },
    plugins: [WindiCSS()]
  },
});
