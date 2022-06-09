import {
  BadRequest,
  ContentCreated,
  HttpRequest,
  HttpResponse,
  InternalServerError,
} from "../../adapters/http/http.port.ts";
import { IController } from "../../adapters/http/IController.ts";
import { Result } from "../../shared/Result.ts";
import {
  CreateTodoRequestDTO,
  CreateTodoResponseDTO,
} from "./CreateTodo.dto.ts";
import {
  CreateTodoService,
  CreateTodoServiceError,
} from "./CreateTodo.service.ts";

export class CreateTodoController implements IController {
  constructor(private todoService: CreateTodoService) {}

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { done: requestDTO, fail: validationError } = validateRequest(
      httpRequest,
    );

    if (validationError) {
      return new BadRequest();
    }

    const { done: responseDTO, fail: todoCreationError } = await this
      .todoService.execute(requestDTO);

    if (todoCreationError) {
      switch (todoCreationError) {
        case CreateTodoServiceError.RepositoryError: {
          return new BadRequest();
        }
        default: {
          return new InternalServerError();
        }
      }
    }

    return new ContentCreated(responseDTO);
  }
}

function validateRequest({
  body,
}: HttpRequest): Result<CreateTodoRequestDTO, Error> {
  const { description } = body as Partial<CreateTodoRequestDTO>;
  if (!description) {
    return Result.fail(Error("Request is not valid"));
  }
  return Result.done({ description });
}
