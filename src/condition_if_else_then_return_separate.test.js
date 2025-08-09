import { conditionIfElseSeparateThenReturn } from "./condition_if_else_then_return_separate";

describe("validate function conditionIfElse", () => {
  it("should return true when X is true and other params are false", () => {
    const xIsTrue = conditionIfElseSeparateThenReturn(true, false, false);
    expect(xIsTrue).toBe(true);
  });

  it("should return true when Y is true", () => {
    const yIsTrue = conditionIfElseSeparateThenReturn(false, true, false);
    expect(yIsTrue).toBe(true);
  });

  it("should return true when Z is true", () => {
    const zIsTrue = conditionIfElseSeparateThenReturn(false, false, true);
    expect(zIsTrue).toBe(true);
  });

  xit("should return false when all params are false", () => {
    const allFalse = conditionIfElseSeparateThenReturn(false, false, false);
    expect(allFalse).toBe(false);
  });
});
