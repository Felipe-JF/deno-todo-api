import { Application } from "../deps.ts";
import { useTodosRouter } from "../routers/TodosRouter/index.ts";
import { PORT } from "../config/PORT.ts";

export async function main() {
  const app = new Application();
  const todoRouter = useTodosRouter();

  app.use(todoRouter.routes());
  app.use(todoRouter.allowedMethods());

  app.addEventListener("listen", ({ port }) => {
    console.log("Listening on Port:", port);
  });
  await app.listen({ port: PORT });
}
