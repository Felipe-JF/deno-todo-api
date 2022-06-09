import { IController } from "../IController.ts";
import {
  HttpRequest,
  HttpResponse,
  IFailureHttpResponse,
} from "../http.port.ts";
import { RouterContext } from "../../../deps.ts";
export class OakHttpAdapter {
  constructor(private controller: IController) {
  }
  async handle(ctx: RouterContext<string>) {
    const body = ctx.request.body();
    const httpRequest: HttpRequest = {
      body: await body.value,
      params: ctx.params,
    };
    console.log(await body.value);
    const responseDTO = await this.controller.execute(httpRequest);

    if (responseDTO instanceof IFailureHttpResponse) {
      console.log("Responseaaa");
      ctx.response.status = responseDTO.status;
      ctx.response.body = responseDTO.message;
      return;
    }
    ctx.response.status = responseDTO.status;
    ctx.response.body = JSON.stringify(responseDTO.body);
  }
}
