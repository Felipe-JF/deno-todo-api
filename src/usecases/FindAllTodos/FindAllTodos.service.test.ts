import {
  assertArrayIncludes,
  assertObjectMatch,
} from "https://deno.land/std@0.142.0/testing/asserts.ts";
import {
  InMemoryTodoRepository,
} from "../../repositories/TodoRepository/InMemoryTodoRepository/InMemoryTodoRepository.ts";
import { FindAllTodosService } from "./FindAllTodos.service.ts";

Deno.test("ReadTodoService", async () => {
  const repository = new InMemoryTodoRepository([{
    id: "Some id",
    description: "Some description",
  }]);

  const findAllTodosService = FindAllTodosService(repository);
  const responseDTO = await findAllTodosService();

  assertObjectMatch(responseDTO, {
    done: [{
      id: "Some id",
      description: "Some description",
    }],
  });
});
