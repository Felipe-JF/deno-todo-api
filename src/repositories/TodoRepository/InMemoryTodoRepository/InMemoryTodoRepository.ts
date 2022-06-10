import { Todo } from "../../../models/Todo.ts";
import { ITodoRepository } from "../ITodoRepository.ts";

export class InMemoryTodoRepository implements ITodoRepository {
  database = new Map<Todo["id"], Todo>();
  async findAll(): Promise<Iterable<Todo>> {
    return await this.database.values();
  }
  async insert(partial: Omit<Todo, "id">): Promise<Todo | undefined> {
    const id = crypto.randomUUID();
    const todo: Todo = new Todo(id, partial.description);

    await this.database.set(todo.id, todo);
    return todo;
  }
  async delete(id: Todo["id"]): Promise<boolean> {
    const isDeleted = await this.database.delete(id);
    return isDeleted;
  }
}
