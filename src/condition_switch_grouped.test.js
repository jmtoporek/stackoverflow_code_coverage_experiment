/**
 */

import { conditionSwitchGrouped } from "./condition_switch_grouped";

describe("validate function conditionISwitchSingle", () => {
  it("should return true when X is true and other params are false", () => {
    const xIsTrue = conditionSwitchGrouped(true, false, false);
    expect(xIsTrue).toBe(true);
  });

  it("should return true when Y is true", () => {
    const yIsTrue = conditionSwitchGrouped(false, true, false);
    expect(yIsTrue).toBe(true);
  });

  it("should return true when Z is true", () => {
    const zIsTrue = conditionSwitchGrouped(false, false, true);
    expect(zIsTrue).toBe(true);
  });

  xit("should return false when all params are false", () => {
    const allFalse = conditionSwitchGrouped(false, false, false);
    expect(allFalse).toBe(false);
  });
});
