import { Router } from "../../deps.ts";
import { useFindAllTodosMiddleware } from "../../usecases/FindAllTodos/index.ts";
import { useDeleteTodoMiddleware } from "../../usecases/DeleteTodo/index.ts";
import { useInsertTodoMiddleware } from "../../usecases/InsertTodo/index.ts";
import { useReadTodoMiddleware } from "../../usecases/ReadTodo/index.ts";

export function TodosRouter(prefix?: string) {
  const findAllTodosMiddleware = useFindAllTodosMiddleware();
  const deleteTodoMiddleware = useDeleteTodoMiddleware();
  const insertTodoMiddleware = useInsertTodoMiddleware();
  const readTodoMiddleware = useReadTodoMiddleware();

  return new Router({ prefix })
    .post("/", insertTodoMiddleware)
    .get("/", findAllTodosMiddleware)
    .get("/:id", readTodoMiddleware)
    .delete("/:id", deleteTodoMiddleware);
}
