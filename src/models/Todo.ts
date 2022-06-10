export class Todo {
  constructor(readonly id: string, readonly description: string) {}
}
export type Todos = readonly Todo[];
