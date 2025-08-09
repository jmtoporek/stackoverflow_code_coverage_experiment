/**
 */

import { conditionIfElseGrouped } from "./condition_if_else_grouped";

describe("validate function conditionIfElse", () => {
  it("should return true when X is true and other params are false", () => {
    const xIsTrue = conditionIfElseGrouped(true, false, false);
    expect(xIsTrue).toBe(true);
  });

  it("should return true when Y is true", () => {
    const yIsTrue = conditionIfElseGrouped(false, true, false);
    expect(yIsTrue).toBe(true);
  });

  it("should return true when Z is true", () => {
    const zIsTrue = conditionIfElseGrouped(false, false, true);
    expect(zIsTrue).toBe(true);
  });

  xit("should return false when all params are false", () => {
    const allFalse = conditionIfElseGrouped(false, false, false);
    expect(allFalse).toBe(false);
  });
});
