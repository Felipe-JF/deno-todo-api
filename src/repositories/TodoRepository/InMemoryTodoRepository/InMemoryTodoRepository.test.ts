import { InMemoryTodoRepository } from "./InMemoryTodoRepository.ts";
import { assertEquals } from "https://deno.land/std@0.142.0/testing/asserts.ts";

Deno.test("Should create a todo", async () => {
  const repository = new InMemoryTodoRepository();

  const todo = await repository.insert({ description: "Do tests..." });

  assertEquals(typeof todo?.id, "string");
});

Deno.test("Should delete a todo", async () => {
  const repository = new InMemoryTodoRepository([{
    id: "Some id",
    description: "Some description",
  }]);

  const isDeleted = await repository.delete("Some id");

  assertEquals(isDeleted, true);
});

Deno.test("Should get all todos", async () => {
  const repository = new InMemoryTodoRepository([{
    id: "Some id",
    description: "Some description",
  }]);

  const todos = await repository.findAll();

  assertEquals(Array.from(todos).length, 1);
});

Deno.test("Should read a todo", async () => {
  const repository = new InMemoryTodoRepository([{
    id: "Some id",
    description: "Some description",
  }]);

  const todos = await repository.read("Some id");

  assertEquals(todos?.id, "Some id");
});
