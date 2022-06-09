import { HttpRequest, HttpResponse } from "./http.port.ts";

export interface IController {
  execute(httpRequest: HttpRequest): Promise<HttpResponse>;
}
