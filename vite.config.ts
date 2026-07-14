import { defineConfig, configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  envDir: "src",

  test: {
    exclude: [
      ...configDefaults.exclude,
      "e2e/**",
      "playwright-report/**",
      "test-results/**",
    ],
  },
});
