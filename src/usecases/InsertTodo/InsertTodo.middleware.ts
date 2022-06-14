import { RouterMiddleware } from "../../deps/oak.ts";
import {
  InsertTodoService,
  InsertTodoServiceError,
} from "./InsertTodo.service.ts";

export function InsertTodoMiddleware(
  insertTodoService: InsertTodoService,
): RouterMiddleware<"/"> {
  return async ({ response, request }) => {
    const { description } = await request.body({ type: "json" }).value;

    if (!description) {
      response.status = 400;
      response.body = "Bad Request";
      return;
    }

    const { done: Todo, fail } = await insertTodoService({ description });

    switch (fail) {
      case InsertTodoServiceError.RepositoryInsertError: {
        response.status = 400;
        response.body = "Bad Request";
        return;
      }
    }

    response.status = 201;
    response.body = Todo;
  };
}
