import { defineConfig } from "orval";

export default defineConfig({
  api: {
    output: {
      mode: "split",
      target: "src/services/queries.ts",
      schemas: "src/services/models",
      client: "react-query",
      prettier: true,
    },
    input: {
      target: "https://test.lotusfarm.online/swagger/json",
    },
  },
});
