import { InsertTodoRequestDTO } from "./InsertTodo.dto.ts";
import { InsertTodoService } from "./InsertTodo.service.ts";
import {
  InMemoryTodoRepository,
} from "../../repositories/TodoRepository/InMemoryTodoRepository/InMemoryTodoRepository.ts";
import {
  assertEquals,
  assertObjectMatch,
} from "https://deno.land/std@0.142.0/testing/asserts.ts";

Deno.test("Should create a todo", async () => {
  const todosRepository = new InMemoryTodoRepository();
  const insertTodoService = InsertTodoService(todosRepository);

  const requestDTO: InsertTodoRequestDTO = {
    description: "Teste",
  };
  const responseDTO = await insertTodoService(requestDTO);

  assertObjectMatch(
    responseDTO,
    { done: { description: "Teste" } },
  );
});
