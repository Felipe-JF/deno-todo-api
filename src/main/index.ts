import { Application, Router } from "../deps.ts";

export async function main() {
  const app = new Application();
  const router = new Router({ prefix: "/todos" });
  router.get("/", (ctx) => {
  });
  app.use((ctx) => {
    ctx.response.body = "Hello World!";
  });

  app.addEventListener("listen", () => {
    console.log("Listening on Port 8000");
  });
  await app.listen({ port: 8000 });
}
