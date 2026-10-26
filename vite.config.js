import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Vite is the dev server + build tool.
// Plugins tell Vite how to handle extra things:
//   react()      -> understands .jsx files and enables hot reload
//   tailwindcss() -> scans our files and generates the CSS classes we actually use
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
