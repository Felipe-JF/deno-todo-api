import { FindAllTodosController } from "./FindAllTodos.controller.ts";
import { FindAllTodosService } from "./FindAllTodos.service.ts";
import { useInMemoryTodoRepository } from "../../repositories/TodoRepository/index.ts";

const inMemoryTodoRepository = useInMemoryTodoRepository();
const findAllTodosService = new FindAllTodosService(inMemoryTodoRepository);
const findAllTodosController = FindAllTodosController(findAllTodosService);

export function useFindAllTodosController() {
  return findAllTodosController;
}
