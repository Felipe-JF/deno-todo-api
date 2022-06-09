import { Todo } from "../models/Todo.ts";

export interface ITodoRepository {
  insert(todo: Omit<Todo, "id">): Promise<Todo | undefined>;
  delete(id: Todo["id"]): Promise<boolean>;
  findAll(): Promise<Iterable<Todo>>;
}
