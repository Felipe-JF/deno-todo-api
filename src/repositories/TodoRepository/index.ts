import { InMemoryTodoRepository } from "./InMemoryTodoRepository/InMemoryTodoRepository.ts";

const inMemoryTodoRepository = new InMemoryTodoRepository();

inMemoryTodoRepository.insert({ description: "For testing purporses!" });

export function useTodoRepository() {
  return inMemoryTodoRepository;
}
