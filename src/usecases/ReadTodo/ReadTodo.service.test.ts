import {
  assertObjectMatch,
} from "https://deno.land/std@0.142.0/testing/asserts.ts";
import {
  InMemoryTodoRepository,
} from "../../repositories/TodoRepository/InMemoryTodoRepository/InMemoryTodoRepository.ts";
import { ReadTodoService, ReadTodoServiceError } from "./ReadTodo.service.ts";

Deno.test("ReadTodoService should read a todo", async () => {
  const repository = new InMemoryTodoRepository([{
    id: "Some id",
    description: "Some description",
  }]);
  const readTodoService = ReadTodoService(repository);
  const responseDTO = await readTodoService({ id: "Some id" });

  assertObjectMatch(responseDTO, {
    done: {
      id: "Some id",
      description: "Some description",
    },
  });
});

Deno.test("ReadTodoService should not read a todo", async () => {
  const repository = new InMemoryTodoRepository();
  const readTodoService = ReadTodoService(repository);
  const responseDTO = await readTodoService({ id: "Some id" });

  assertObjectMatch(responseDTO, {
    fail: ReadTodoServiceError.TodoNotFound,
  });
});
