import { config } from "../deps/dotenv.ts";

await config({
  safe: true,
  export: true,
});

export const PORT = getPort();
function getPort() {
  try {
    const portString = Deno.env.get("PORT");
    if (!portString) {
      throw new Error("PORT was not defined in .env");
    }
    const port = parseInt(portString);
    return port;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`PORT in .env is not an integer`, error);
    }
    throw error;
  }
}
