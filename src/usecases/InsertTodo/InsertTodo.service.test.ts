import {
  assertObjectMatch,
} from "https://deno.land/std@0.142.0/testing/asserts.ts";
import {
  InMemoryTodoRepository,
} from "../../repositories/TodoRepository/InMemoryTodoRepository/InMemoryTodoRepository.ts";
import { InsertTodoService } from "./InsertTodo.service.ts";

Deno.test("Should insert a todo", async () => {
  const todosRepository = new InMemoryTodoRepository();
  const insertTodoService = InsertTodoService(todosRepository);

  const responseDTO = await insertTodoService({ description: "Teste" });

  assertObjectMatch(responseDTO, {
    done: {
      description: "Teste",
    },
  });
});
