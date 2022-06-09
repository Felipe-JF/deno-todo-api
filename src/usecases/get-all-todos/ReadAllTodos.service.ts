import { ITodoRepository } from "../../repositories/ITodoRepository.ts";
import { Result } from "../../shared/Result.ts";
import { ReadAllTodosResponseDTO } from "./ReadAllTodos.dto.ts";

export class ReadAllTodosService {
  constructor(private todosRepository: ITodoRepository) {}
  async execute(): Promise<Result<ReadAllTodosResponseDTO, Error>> {
    const todos = await this.todosRepository.findAll();
    return Result.done(todos);
  }
}
