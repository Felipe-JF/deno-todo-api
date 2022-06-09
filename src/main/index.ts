import { Application, Router } from "../deps.ts";
import { useTodosRoute } from "../routes/TodosRoute/index.ts";

function TodosRouter() {
  const router = new Router({ prefix: "/" });
  const todoRoute = useTodosRoute();
  return todoRoute(router);
}

export async function main() {
  const app = new Application();
  const router = TodosRouter();

  app.use(router.allowedMethods());
  app.use(router.routes());

  app.addEventListener("listen", () => {
    console.log("Listening on Port 8000");
  });
  await app.listen({ port: 8000 });
}
