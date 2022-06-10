import { ITodoRepository } from "../../repositories/TodoRepository/ITodoRepository.ts";
import { Result } from "../../shared/Result.ts";
import { FindAllTodosResponseDTO } from "./FindAllTodos.dto.ts";

export type FindAllTodosService = () => Promise<
  Result<FindAllTodosResponseDTO, never>
>;

export function FindAllTodosService(
  todosRepository: ITodoRepository,
): FindAllTodosService {
  return async () => {
    const todos = await todosRepository.findAll();

    return Result.done(Array.from(todos));
  };
}
