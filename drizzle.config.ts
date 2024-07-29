import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: process.env.NODE_ENV === "production" ? ".env" : ".env.local" });

export default defineConfig({
  schema: "./db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DB_URI!,
  },
});
