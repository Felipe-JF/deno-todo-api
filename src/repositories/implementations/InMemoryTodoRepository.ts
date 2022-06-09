import { Todo, Todos } from "../../models/Todo.ts";
import { ITodoRepository } from "../ITodoRepository.ts";

export class InMemoryTodoRepository implements ITodoRepository {
  database = new Map<Todo["id"], Todo>();
  async findAll(): Promise<Todos> {
    return await Array.from(this.database.values());
  }
  async insert(partial: Omit<Todo, "id">): Promise<Todo | undefined> {
    const id = crypto.randomUUID();
    const todo: Todo = new Todo(id, partial.description);

    this.database.set(todo.id, todo);
    return await todo;
  }
  async delete(id: Todo["id"]): Promise<boolean> {
    const isDeleted = this.database.delete(id);
    return await isDeleted;
  }
}
