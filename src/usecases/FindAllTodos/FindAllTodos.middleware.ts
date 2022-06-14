import { RouterMiddleware } from "../../deps/oak.ts";
import { FindAllTodosService } from "./FindAllTodos.service.ts";

export function FindAllTodosMiddleware(
  findAllTodosService: FindAllTodosService,
): RouterMiddleware<"/"> {
  return async ({ response }) => {
    const { done: responseDTO, fail } = await findAllTodosService();

    response.body = responseDTO;
  };
}
