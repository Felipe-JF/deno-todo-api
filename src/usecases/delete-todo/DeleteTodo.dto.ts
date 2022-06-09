import { Todo } from "../../models/Todo.ts";

export type DeleteTodoRequestDTO = { id: Todo["id"] };
export type DeleteTodoResponseDTO = void;
