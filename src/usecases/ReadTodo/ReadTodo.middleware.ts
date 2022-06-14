import { RouterMiddleware } from "../../deps/oak.ts";
import { ReadTodoService, ReadTodoServiceError } from "./ReadTodo.service.ts";

export function ReadTodoMiddleware(
  readTodoService: ReadTodoService,
): RouterMiddleware<"/:id", { id: string }> {
  return async ({ response, params }) => {
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
}
