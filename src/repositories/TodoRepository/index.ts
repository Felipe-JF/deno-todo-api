import { InMemoryTodoRepository } from "./InMemoryTodoRepository/InMemoryTodoRepository.ts";

const inMemoryTodoRepository = new InMemoryTodoRepository();
inMemoryTodoRepository.insert({ description: "some" });
export function useInMemoryTodoRepository() {
  return inMemoryTodoRepository;
}
