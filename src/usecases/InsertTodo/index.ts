import { InsertTodoMiddleware } from "./InsertTodo.middleware.ts";
import { InsertTodoService } from "./InsertTodo.service.ts";
import { useTodoRepository } from "../../repositories/TodoRepository/index.ts";

const inMemoryTodoRepository = useTodoRepository();
const insertTodoService = InsertTodoService(inMemoryTodoRepository);
const insertTodoMiddleware = InsertTodoMiddleware(insertTodoService);

export function useInsertTodoMiddleware() {
  return insertTodoMiddleware;
}
