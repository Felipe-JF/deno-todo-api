import { Todo } from "../../models/Todo.ts";

export type CreateTodoRequestDTO = Omit<Todo, "id">;
export type CreateTodoResponseDTO = Todo;
