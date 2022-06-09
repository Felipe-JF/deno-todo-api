import { InMemoryTodoRepository } from "./InMemoryTodoRepository/InMemoryTodoRepository.ts";
const inMemoryTodoRepository = new InMemoryTodoRepository();

export function useInMemoryTodoRepository() {
  return inMemoryTodoRepository;
}
