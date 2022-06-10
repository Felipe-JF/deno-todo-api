import { InMemoryTodoRepository } from "./InMemoryTodoRepository.ts";
import { assertEquals } from "https://deno.land/std@0.142.0/testing/asserts.ts";

Deno.test("Should create a todo", async () => {
  const repository = new InMemoryTodoRepository();
  const todo = await repository.insert({ description: "Do tests..." });
  assertEquals(typeof todo?.id, "string");
});

Deno.test("Should delete a todo", async () => {
  const repository = new InMemoryTodoRepository();
  const todo = await repository.insert({ description: "Do tests..." });
  if (!todo) {
    throw new Error("Todo is not created");
  }
  const isDeleted = await repository.delete(todo.id);
  assertEquals(isDeleted, true);
});

Deno.test("Should get all todos", async () => {
  const repository = new InMemoryTodoRepository();
  const todo = await repository.insert({ description: "Do tests..." });
  if (!todo) {
    throw new Error("Todo is not created");
  }
  const todos = await repository.findAll();

  assertEquals(Array.from(todos).length, 1);
});
