import { ITodoRepository } from "../../repositories/TodoRepository/ITodoRepository.ts";
import { Result } from "../../shared/Result.ts";
import { ReadTodoRequestDTO, ReadTodoResponseDTO } from "./ReadTodo.dto.ts";

export enum ReadTodoServiceError {
  TodoNotFound,
}

export type ReadTodoService = (
  requestDTO: ReadTodoRequestDTO,
) => Promise<Result<ReadTodoResponseDTO, ReadTodoServiceError>>;

export function ReadTodoService(
  todoRepository: ITodoRepository,
): ReadTodoService {
  return async (requestDTO) => {
    const todo = await todoRepository.read(requestDTO.id);

    if (!todo) {
      return Result.fail(ReadTodoServiceError.TodoNotFound);
    }

    return Result.done(todo);
  };
}
