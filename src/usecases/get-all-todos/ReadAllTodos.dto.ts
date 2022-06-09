import { Todo, Todos } from "../../models/Todo.ts";

export type ReadAllTodosRequestDTO = void;
export type ReadAllTodosResponseDTO = Iterable<Todo>;
