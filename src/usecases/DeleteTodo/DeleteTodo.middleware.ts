import { RouterMiddleware } from "../../deps.ts";
import {
  DeleteTodoService,
  DeleteTodoServiceError,
} from "./DeleteTodo.service.ts";

export function DeleteTodoMiddleware(
  deleteTodoService: DeleteTodoService,
): RouterMiddleware<"/:id", { id: string }> {
  return async ({ response, params }) => {
    const { id } = params;

    const { done, fail } = await deleteTodoService({ id });

    switch (fail) {
      case DeleteTodoServiceError.TodoNotFound: {
        response.status = 400;
        response.body = "Bad Request";
        return;
      }
    }

    response.status = 200;
  };
}
