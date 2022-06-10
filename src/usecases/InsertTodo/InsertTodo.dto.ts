import { Todo } from "../../models/Todo.ts";

export type InsertTodoRequestDTO = Omit<Todo, "id">;
export type InsertTodoResponseDTO = Todo;
