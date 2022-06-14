import { Application, Router } from "../deps/oak.ts";
import { superoak } from "../deps/SuperOak.ts";

export function createRouterTest(fn: (router: Router) => Router) {
  const router = fn(new Router());
  const application = new Application()
    .use(router.routes()).use(router.allowedMethods());
  return superoak(application);
}
