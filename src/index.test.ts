import { decrement, increment, sayHello, sum } from "./index";

beforeEach(() => {
  console.log("beforeEach");
});

afterEach(() => {
  console.log("afterEach");
});

beforeAll(() => {
  console.log("beforeAll");
});

afterAll(() => {
  console.log("afterAll");
});

test("say hello", () => {
  expect(sayHello()).toBe("Hello!");
});

test("sum", () => {
  expect(sum(1, 2)).toBe(3);
});

test("increment", () => {
  expect(increment(1)).toBe(2);
});

test("decrement", () => {
  expect(decrement(1)).toBe(0);
});
