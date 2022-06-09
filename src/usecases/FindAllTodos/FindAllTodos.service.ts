import { ITodoRepository } from "../../repositories/TodoRepository/ITodoRepository.ts";
import { Result } from "../../shared/Result.ts";
import { ReadAllTodosResponseDTO } from "./FindAllTodos.dto.ts";

export class FindAllTodosService {
  constructor(private todosRepository: ITodoRepository) {}
  async execute(): Promise<Result<ReadAllTodosResponseDTO, Error>> {
    const todos = await this.todosRepository.findAll();
    return Result.done(todos);
  }
}
