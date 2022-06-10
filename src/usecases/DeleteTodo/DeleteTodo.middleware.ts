import { RouterMiddleware } from "../../deps.ts";
import {
  DeleteTodoService,
  DeleteTodoServiceError,
} from "./DeleteTodo.service.ts";

export const DeleteTodoMiddleware = (
  deleteTodoService: DeleteTodoService,
): RouterMiddleware<"/:id", { id: string }> =>
  async ({ response, params }) => {
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
