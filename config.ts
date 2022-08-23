import { config as loadEnv } from "https://deno.land/x/dotenv/mod.ts";
/*const configData = await loadEnv({
  export: true,
  allowEmptyValues: true,
});*/

export const config = loadEnv();
console.log(config.GITHUB_CLIENT_ID);
console.log(`GITHUB_CLIENT_ID=${Deno.env.get("GITHUB_CLIENT_ID")}`);