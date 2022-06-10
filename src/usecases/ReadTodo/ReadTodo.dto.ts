import { Todo } from "../../models/Todo.ts";

export type ReadTodoRequestDTO = { id: Todo["id"] };
export type ReadTodoResponseDTO = Todo;
