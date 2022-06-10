import { Todo } from "../../../models/Todo.ts";
import { ITodoRepository } from "../ITodoRepository.ts";

export class InMemoryTodoRepository implements ITodoRepository {
  async read(id: string): Promise<Todo | undefined> {
    return await this.database.get(id);
  }
  database = new Map<Todo["id"], Todo>();
  constructor(todos?: Iterable<Todo>) {
    if (todos) {
      for (const todo of todos) {
        this.database.set(todo.id, todo);
      }
    }
  }
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
