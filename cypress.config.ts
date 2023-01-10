import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
  },
  env: {
    USER_EMAIL: "test@mev.com",
    USER_PASSWORD: "testPassword"
  }
});

