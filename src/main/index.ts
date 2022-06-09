import { Application, Router } from "../deps.ts";
import { OakHttpAdapter } from "../adapters/http/implementations/OakHttpAdapter.ts";
import { ReadAllTodosController } from "../usecases/get-all-todos/ReadAllTodos.controller.ts";
import { ReadAllTodosService } from "../usecases/get-all-todos/ReadAllTodos.service.ts";
import { InMemoryTodoRepository } from "../repositories/implementations/InMemoryTodoRepository.ts";
function useTodosControler() {
  const repository = new InMemoryTodoRepository();
  const findAllTodosController = new OakHttpAdapter(
    new ReadAllTodosController(new ReadAllTodosService(repository)),
  );
  return { findAllTodosController } as const;
}
export async function main() {
  const { findAllTodosController } = useTodosControler();
  const app = new Application();
  const router = new Router({ prefix: "/todos" });
  router.get("/:id", (ctx) => {
    ctx.params.id;
  });

  router.get("/", (ctx) => {
    //findAllTodosController.handle(ctx);
  });

  app.use((ctx) => {
    ctx.response.body = "Hello World!";
  });

  app.addEventListener("listen", () => {
    console.log("Listening on Port 8000");
  });
  await app.listen({ port: 8000 });
}
