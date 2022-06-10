import {
  assertObjectMatch,
} from "https://deno.land/std@0.142.0/testing/asserts.ts";
import {
  InMemoryTodoRepository,
} from "../../repositories/TodoRepository/InMemoryTodoRepository/InMemoryTodoRepository.ts";
import {
  DeleteTodoService,
  DeleteTodoServiceError,
} from "./DeleteTodo.service.ts";

Deno.test("DeleteTodoService should delete a todo", async () => {
  const repository = new InMemoryTodoRepository([{
    id: "Some id",
    description: "Some description",
  }]);
  const deleteTodoService = DeleteTodoService(repository);
  const responseDTO = await deleteTodoService({ id: "Some id" });

  assertObjectMatch(responseDTO, {
    done: undefined,
  });
});

Deno.test("DeleteTodoService should not delete a todo", async () => {
  const repository = new InMemoryTodoRepository();
  const deleteTodoService = DeleteTodoService(repository);
  const responseDTO = await deleteTodoService({ id: "Some id" });

  assertObjectMatch(responseDTO, {
    fail: DeleteTodoServiceError.TodoNotFound,
  });
});
