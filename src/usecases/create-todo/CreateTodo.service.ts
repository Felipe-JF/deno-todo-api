import { Todo } from "../../models/Todo.ts";
import { ITodoRepository } from "../../repositories/ITodoRepository.ts";
import { Result } from "../../shared/Result.ts";
import { CreateTodoRequestDTO } from "./CreateTodo.dto.ts";
export enum CreateTodoServiceError {
  RepositoryError = "RepositoryError",
}
export class CreateTodoService {
  constructor(private todoRepository: ITodoRepository) {}

  async execute(
    requestDTO: CreateTodoRequestDTO,
  ): Promise<Result<Todo, CreateTodoServiceError>> {
    const todo = await this.todoRepository.insert(requestDTO);

    if (!todo) {
      return Result.fail(CreateTodoServiceError.RepositoryError);
    }

    return Result.done(todo);
  }
}
