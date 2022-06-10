import { Todo } from "../../models/Todo.ts";
import { ITodoRepository } from "../../repositories/TodoRepository/ITodoRepository.ts";
import { Result } from "../../shared/Result.ts";
import { InsertTodoRequestDTO } from "./InsertTodo.dto.ts";

export enum InsertTodoServiceError {
  RepositoryError = "RepositoryError",
}

export type InsertTodoService = (
  requestDTO: InsertTodoRequestDTO,
) => Promise<Result<Todo, InsertTodoServiceError>>;

export function InsertTodoService(todos: ITodoRepository): InsertTodoService {
  return async (requestDTO) => {
    const todo = await todos.insert(requestDTO);

    if (!todo) {
      return Result.fail(InsertTodoServiceError.RepositoryError);
    }

    return Result.done(todo);
  };
}
