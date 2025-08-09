import { conditionControl } from "./condition_control";

describe("validate function conditionIfElse", () => {
  it("should return true when X is true and other params are false", () => {
    const xIsTrue = conditionControl(true, false, false);
    expect(xIsTrue).toBe(true);
  });

  it("should return true when Y is true", () => {
    const yIsTrue = conditionControl(false, true, false);
    expect(yIsTrue).toBe(true);
  });

  it("should return true when Z is true", () => {
    const zIsTrue = conditionControl(false, false, true);
    expect(zIsTrue).toBe(true);
  });

  xit("should return false when all params are false", () => {
    const allFalse = conditionControl(false, false, false);
    expect(allFalse).toBe(false);
  });
});
