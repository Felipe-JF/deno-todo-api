import { ITodoRepository } from "../../repositories/TodoRepository/ITodoRepository.ts";
import { Result } from "../../shared/Result.ts";
import {
  DeleteTodoRequestDTO,
  DeleteTodoResponseDTO,
} from "./DeleteTodo.dto.ts";

export enum DeleteTodoServiceError {
  FailedToDeleteTodo,
}

export type DeleteTodoService = (
  requestDTO: DeleteTodoRequestDTO,
) => Promise<Result<DeleteTodoResponseDTO, DeleteTodoServiceError>>;

export function DeleteTodoService(
  todoRepository: ITodoRepository,
): DeleteTodoService {
  return async (requestDTO) => {
    const isDeleted = await todoRepository.delete(requestDTO.id);

    if (!isDeleted) {
      return Result.fail(DeleteTodoServiceError.FailedToDeleteTodo);
    }

    return Result.done(undefined);
  };
}
