import {
  BadRequest,
  HttpRequest,
  HttpResponse,
  Ok,
} from "../../adapters/http/http.port.ts";
import { IController } from "../../adapters/http/IController.ts";
import { ReadAllTodosService } from "./ReadAllTodos.service.ts";

export class ReadAllTodosController implements IController {
  constructor(private todosService: ReadAllTodosService) {}
  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { done: responseDTO, fail: serviceError } = await this.todosService
      .execute();
    if (serviceError) {
      return new BadRequest();
    }
    return new Ok(Array.from(responseDTO));
  }
}
