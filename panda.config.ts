import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{astro,js,ts}"],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          gray: {
            50: { value: "#f8f8f8" },
            100: { value: "#e5e5e5" },
            400: { value: "#999999" },
            500: { value: "#666666" },
            700: { value: "#333333" },
            800: { value: "#212121" },
            900: { value: "#1a1a1a" },
          },
        },
        fonts: {
          body: { value: "Inter, system-ui, sans-serif" },
        },
      },
      semanticTokens: {
        colors: {
          text: {
            DEFAULT: { value: "{colors.gray.800}" },
            secondary: { value: "{colors.gray.500}" },
            muted: { value: "{colors.gray.400}" },
          },
          bg: {
            DEFAULT: { value: "#ffffff" },
            alt: { value: "{colors.gray.50}" },
            dark: { value: "{colors.gray.900}" },
          },
          accent: {
            DEFAULT: { value: "{colors.gray.700}" },
            hover: { value: "{colors.gray.500}" },
          },
          border: {
            DEFAULT: { value: "{colors.gray.100}" },
            dark: { value: "{colors.gray.700}" },
          },
        },
      },
    },
  },
  outdir: "styled-system",
});
