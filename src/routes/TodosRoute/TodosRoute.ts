import { Router } from "../../deps.ts";
import { useFindAllTodosController } from "../../usecases/FindAllTodos/index.ts";

export const TodosRoute = () =>
  (router: Router) => {
    const findAllTodosController = useFindAllTodosController();
    return router.get("/", findAllTodosController);
  };
