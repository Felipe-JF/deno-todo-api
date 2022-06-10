import { ReadTodoService } from "./ReadTodo.service.ts";
import { ReadTodoMiddleware } from "./ReadTodo.middleware.ts";
import { useTodoRepository } from "../../repositories/TodoRepository/index.ts";

const todoRepository = useTodoRepository();
const deleteTodoService = ReadTodoService(todoRepository);
const readTodoMiddleware = ReadTodoMiddleware(deleteTodoService);

export function useReadTodoMiddleware() {
  return readTodoMiddleware;
}
