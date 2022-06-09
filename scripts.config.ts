import { DenonConfig } from "https://deno.land/x/denon@2.5.0/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run ./src/index.ts",
      desc: "Run todo app",
      allow: ["net"],
    },
    test: {
      cmd: "deno test ./src",
    },
  },
};

export default config;
