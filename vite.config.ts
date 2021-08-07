import { defineConfig, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import yaml from "@rollup/plugin-yaml";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config: UserConfig = {
    plugins: [vue(), yaml()],
    build: {
      chunkSizeWarningLimit: 1000,
    },
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
  };

  if (mode === "library") {
    config.build.lib = {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'ExampleProject',
      fileName: format => `example-project.${format}.js`  
    }
  }

  return config
});
