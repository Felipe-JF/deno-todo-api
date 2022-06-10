import { RouterMiddleware } from "../../deps.ts";
import { FindAllTodosService } from "./FindAllTodos.service.ts";

export const FindAllTodosMiddleware = (
  findAllTodosService: FindAllTodosService,
): RouterMiddleware<"/"> =>
  async ({ response }) => {
    const { done: responseDTO, fail } = await findAllTodosService();

    response.body = responseDTO;
  };
