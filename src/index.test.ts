import { sayHello } from "./index";

test("say hello", () => {
  expect(sayHello()).toBe("Hello!");
});
