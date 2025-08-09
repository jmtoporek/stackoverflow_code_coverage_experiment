import { conditionSwitchSeparate } from "./condition_switch_separate";

describe("validate function conditionIfElse", () => {
  it("should return true when X is true and other params are false", () => {
    const xIsTrue = conditionSwitchSeparate(true, false, false);
    expect(xIsTrue).toBe(true);
  });

  xit("should return true when Y is true", () => {
    const yIsTrue = conditionSwitchSeparate(false, true, false);
    expect(yIsTrue).toBe(true);
  });

  xit("should return true when Z is true", () => {
    const zIsTrue = conditionSwitchSeparate(false, false, true);
    expect(zIsTrue).toBe(true);
  });

  xit("should return false when all params are false", () => {
    const allFalse = conditionSwitchSeparate(false, false, false);
    expect(allFalse).toBe(false);
  });
});
