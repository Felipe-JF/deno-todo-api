import {
  BadRequest,
  HttpRequest,
  HttpResponse,
  InternalServerError,
  Ok,
} from "../../adapters/http/http.port.ts";
import { IController } from "../../adapters/http/IController.ts";
import { Result } from "../../shared/Result.ts";
import { DeleteTodoRequestDTO } from "./DeleteTodo.dto.ts";
import {
  DeleteTodoService,
  DeleteTodoServiceError,
} from "./DeleteTodo.service.ts";

export class DeleteTodoController implements IController {
  constructor(private service: DeleteTodoService) {}
  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { done: requestDTO, fail: validationError } = validadeRequest(
      httpRequest,
    );
    if (validationError) {
      return new BadRequest(validationError.message, {
        cause: validationError,
      });
    }
    const { done: responseDTO, fail: serviceError } = await this.service
      .execute(requestDTO);
    if (serviceError) {
      switch (serviceError) {
        case DeleteTodoServiceError.FailedToDeleteTodo: {
          return new BadRequest();
        }
        default: {
          return new InternalServerError();
        }
      }
    }
    return new Ok(responseDTO);
  }
}
function validadeRequest(
  httpRequest: HttpRequest,
): Result<DeleteTodoRequestDTO, Error> {
  const id = httpRequest.params["id"];

  if (typeof id !== "string") {
    return Result.fail(Error("Wrong Id field"));
  }
  return Result.done({ id });
}
