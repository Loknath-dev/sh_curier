import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev
export default defineConfig({
  base: "/sh_curier/", // 👈 Changed from "/sh_curier" to "/sh_curier/"
  plugins: [react(), tailwindcss()],
});
