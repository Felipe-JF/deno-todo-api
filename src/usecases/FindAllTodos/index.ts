import { FindAllTodosMiddleware } from "./FindAllTodos.middleware.ts";
import { FindAllTodosService } from "./FindAllTodos.service.ts";
import { useTodoRepository } from "../../repositories/TodoRepository/index.ts";

const inMemoryTodoRepository = useTodoRepository();
const findAllTodosService = FindAllTodosService(inMemoryTodoRepository);
const findAllTodosMiddleware = FindAllTodosMiddleware(findAllTodosService);

export function useFindAllTodosMiddleware() {
  return findAllTodosMiddleware;
}
