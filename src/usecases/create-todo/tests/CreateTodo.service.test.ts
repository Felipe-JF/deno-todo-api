import { CreateTodoRequestDTO } from "../CreateTodo.dto.ts";
import { CreateTodoService } from "../CreateTodo.service.ts";
import { Result } from "../../../shared/Result.ts";
import { Todo } from "../../../models/Todo.ts";
import {
  InMemoryTodoRepository,
} from "../../../repositories/implementations/InMemoryTodoRepository.ts";
import {
  assertEquals,
  assertObjectMatch,
} from "https://deno.land/std@0.142.0/testing/asserts.ts";
Deno.test("Should create a todo", async () => {
  const todos = new InMemoryTodoRepository();
  const service = new CreateTodoService(todos);
  const requestDTO: CreateTodoRequestDTO = {
    description: "Teste",
  };
  const responseDTO = await service.execute(requestDTO);

  assertObjectMatch(
    responseDTO,
    { done: { description: "Teste" } },
  );
});
