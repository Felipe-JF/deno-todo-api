import { TodosRouter } from "./TodosRouter.ts";

const todoRouter = TodosRouter("/todos");

export function useTodosRouter() {
  return todoRouter;
}
