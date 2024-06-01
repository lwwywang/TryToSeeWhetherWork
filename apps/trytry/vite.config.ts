import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jotaiDebugLabel from "jotai/babel/plugin-debug-label";
import jotaiReactRefresh from "jotai/babel/plugin-react-refresh";

// @ts-ignore
import path from "path";
import replace from "@rollup/plugin-replace";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
      svgr(),
    ],
    resolve: {
      alias: {
        "@": path.join(__dirname, "src"),
      },
    },
    server: {
      host: true,
    },
    build: {
      outDir: `dist/${mode}`,
      rollupOptions: {
        output: {
          entryFileNames: "main.js",
          assetFileNames: "main.css",
        },
        plugins: [
          replace({
            'import { routeTree } from "@/routeTree.gen.ts"':
                mode === "space_confirm_dialog"
                    ? 'import { routeTree } from "@/routeTree.space-confirm.gen.ts"'
                    : 'import { routeTree } from "@/routeTree.space-onboarding.gen.ts"',
            delimiters: ["", ""],
          }),
        ],
      },
      assetsInlineLimit: Infinity,
    },
  };
});
