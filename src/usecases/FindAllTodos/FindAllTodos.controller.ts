import { RouterMiddleware } from "../../deps.ts";
import { FindAllTodosService } from "./FindAllTodos.service.ts";

export const FindAllTodosController = (
  findAllTodosController: FindAllTodosService,
): RouterMiddleware<"/"> =>
  ({ response }) => {
    response.body = [{ description: "Test Todo" }];
  };
