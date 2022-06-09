import { assertEquals } from "https://deno.land/std@0.142.0/testing/asserts.ts";

Deno.test("Meta test", () => {
  const greeting = "Hello World";
  assertEquals(greeting, "Hello World");
});
