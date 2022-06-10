import { Application } from "../deps.ts";
import { useTodosRouter } from "../routers/TodosRouter/index.ts";

export async function main() {
  const app = new Application();
  const todoRouter = useTodosRouter();

  app.use(todoRouter.routes());
  app.use(todoRouter.allowedMethods());

  app.addEventListener("listen", () => {
    console.log("Listening on Port 8000");
  });
  await app.listen({ port: 8000 });
}
