import { CreateTodoRequestDTO } from "./InsertTodo.dto.ts";
import { InsertTodoService } from "./InsertTodo.service.ts";
import {
  InMemoryTodoRepository,
} from "../../repositories/TodoRepository/InMemoryTodoRepository/InMemoryTodoRepository.ts";
import {
  assertEquals,
  assertObjectMatch,
} from "https://deno.land/std@0.142.0/testing/asserts.ts";

Deno.test("Should create a todo", async () => {
  const todos = new InMemoryTodoRepository();
  const service = new InsertTodoService(todos);
  const requestDTO: CreateTodoRequestDTO = {
    description: "Teste",
  };
  const responseDTO = await service.execute(requestDTO);

  assertObjectMatch(
    responseDTO,
    { done: { description: "Teste" } },
  );
});
