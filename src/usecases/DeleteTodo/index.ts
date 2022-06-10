import { DeleteTodoService } from "./DeleteTodo.service.ts";
import { DeleteTodoMiddleware } from "./DeleteTodo.middleware.ts";
import { useTodoRepository } from "../../repositories/TodoRepository/index.ts";

const todoRepository = useTodoRepository();
const deleteTodoService = DeleteTodoService(todoRepository);
const deleteTodoController = DeleteTodoMiddleware(deleteTodoService);

export function useDeleteTodoMiddleware() {
  return deleteTodoController;
}
