import {
  assertArrayIncludes,
  assertObjectMatch,
} from "https://deno.land/std@0.142.0/testing/asserts.ts";
import {
  InMemoryTodoRepository,
} from "../../repositories/TodoRepository/InMemoryTodoRepository/InMemoryTodoRepository.ts";
import { FindAllTodosService } from "./FindAllTodos.service.ts";
import { FindAllTodosMiddleware } from "./FindAllTodos.middleware.ts";
import { createRouterTest } from "../../shared/createRouterTest.ts";

Deno.test(
  "FindAllTodosMiddleware should get Todos",
  { permissions: { net: true } },
  async () => {
    const repository = new InMemoryTodoRepository([{
      id: "Some id",
      description: "Some description",
    }]);

    const findAllTodosService = FindAllTodosService(repository);
    const findAllTodosMiddleware = FindAllTodosMiddleware(findAllTodosService);

    const request = await createRouterTest((router) =>
      router.get("/", findAllTodosMiddleware)
    );

    const response = await request.get("/")
      .expect(200, [{
        id: "Some id",
        description: "Some description",
      }]);
  },
);
