// deno-lint-ignore-file no-namespace
export class Done<T, E> {
  readonly fail = undefined;
  constructor(readonly done: T) {}
}
export class Fail<T, E> {
  readonly done = undefined;
  constructor(readonly fail: E) {}
}

export type Result<T, E> = Done<T, E> | Fail<T, E>;

export namespace Result {
  export function done<T, E>(done: T): Result<T, E> {
    return new Done(done);
  }
  export function fail<T, E>(reason: E): Result<T, E> {
    return new Fail(reason);
  }
}
