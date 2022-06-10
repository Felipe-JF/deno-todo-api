import { RouterMiddleware } from "../../deps.ts";
import { FindAllTodosService } from "./FindAllTodos.service.ts";

export const FindAllTodosController = (
  findAllTodosService: FindAllTodosService,
): RouterMiddleware<"/"> =>
  async ({ response }) => {
    const { done: todos, fail } = await findAllTodosService();

    if (fail) {
      response.status = 400;
      response.body = "Bad Request";
      return;
    }

    response.body = Array.from(todos);
  };
