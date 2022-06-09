import { TodosRoute } from "./TodosRoute.ts";
const todoRoute = TodosRoute();

export function useTodosRoute() {
  return todoRoute;
}
