import { RouterMiddleware } from "../../deps.ts";
import { ReadTodoService, ReadTodoServiceError } from "./ReadTodo.service.ts";

export const ReadTodoMiddleware = (
  readTodoService: ReadTodoService,
): RouterMiddleware<"/:id", { id: string }> =>
  async ({ response, params }) => {
    const { id } = params;

    const { done: responseDTO, fail } = await readTodoService({ id });

    switch (fail) {
      case ReadTodoServiceError.TodoNotFound: {
        response.status = 400;
        response.body = "Bad Request";
        return;
      }
    }

    response.status = 200;
    response.body = responseDTO;
    return;
  };
