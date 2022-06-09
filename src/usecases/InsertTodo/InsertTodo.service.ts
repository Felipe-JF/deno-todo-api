import { Todo } from "../../models/Todo.ts";
import { ITodoRepository } from "../../repositories/TodoRepository/ITodoRepository.ts";
import { Result } from "../../shared/Result.ts";
import { CreateTodoRequestDTO } from "./InsertTodo.dto.ts";

export enum InsertTodoServiceError {
  RepositoryError = "RepositoryError",
}
export class InsertTodoService {
  constructor(private todoRepository: ITodoRepository) {}

  async execute(
    requestDTO: CreateTodoRequestDTO,
  ): Promise<Result<Todo, InsertTodoServiceError>> {
    const todo = await this.todoRepository.insert(requestDTO);

    if (!todo) {
      return Result.fail(InsertTodoServiceError.RepositoryError);
    }

    return Result.done(todo);
  }
}
