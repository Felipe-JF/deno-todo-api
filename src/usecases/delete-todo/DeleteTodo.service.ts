import { ITodoRepository } from "../../repositories/ITodoRepository.ts";
import { Result } from "../../shared/Result.ts";
import { DeleteTodoRequestDTO } from "./DeleteTodo.dto.ts";
export enum DeleteTodoServiceError {
  FailedToDeleteTodo,
}
export class DeleteTodoService {
  constructor(private todos: ITodoRepository) {}
  async execute(
    requestDTO: DeleteTodoRequestDTO,
  ): Promise<Result<undefined, DeleteTodoServiceError>> {
    const isDeleted = await this.todos.delete(requestDTO.id);

    if (!isDeleted) {
      return Result.fail(DeleteTodoServiceError.FailedToDeleteTodo);
    }

    return Result.done(undefined);
  }
}
