// orval.config.ts
import { defineConfig } from "orval";

export default defineConfig({
  store: {
    output: {
      mode: "tags-split",
      target: "generated/store.ts",
      client: "react-query",
      override: {
        mutator: {
          path: "./lib/custom-instance.ts",
          name: "customInstance",
        },
      },
      //mock: true,
    },
    input: {
      target: "./openapi.yaml",
    },
  },
});
