/**
 */

import { conditionIfElseSeparate } from "./condition_if_else_separate";

describe("validate function conditionIfElse", () => {
  it("should return true when X is true and other params are false", () => {
    const xIsTrue = conditionIfElseSeparate(true, false, false);
    expect(xIsTrue).toBe(true);
  });

  it("should return true when Y is true", () => {
    const yIsTrue = conditionIfElseSeparate(false, true, false);
    expect(yIsTrue).toBe(true);
  });

  it("should return true when Z is true", () => {
    const zIsTrue = conditionIfElseSeparate(false, false, true);
    expect(zIsTrue).toBe(true);
  });

  it("should return false when all params are false", () => {
    const allFalse = conditionIfElseSeparate(false, false, false);
    expect(allFalse).toBe(false);
  });
});
