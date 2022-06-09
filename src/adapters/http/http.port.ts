export type HttpRequest = {
  body: any;
  params: Record<string, string>;
};

export type HttpResponse =
  | Ok
  | BadRequest
  | InternalServerError
  | ContentCreated;

abstract class IHttpResponse {
  abstract readonly status: number;
}
export abstract class IFailureHttpResponse
  extends Error
  implements IHttpResponse
{
  abstract readonly status: number;
}

export abstract class ISuccessHttpResponse extends IHttpResponse {
  constructor(readonly body: any) {
    super();
  }
}

export class BadRequest extends IFailureHttpResponse {
  readonly status = 400;
}

export class Ok extends ISuccessHttpResponse {
  readonly status = 200;
}

export class ContentCreated extends ISuccessHttpResponse {
  readonly status = 201;
}

export class InternalServerError extends IFailureHttpResponse {
  readonly status = 500;
}
