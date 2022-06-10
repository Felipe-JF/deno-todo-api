import { Todo, Todos } from "../../models/Todo.ts";

export type FindAllTodosRequestDTO = void;
export type FindAllTodosResponseDTO = ReadonlyArray<Todo>;
