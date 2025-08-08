export const conditionSwitchGrouped = (x, y, z) => {
  switch (true) {
    case x:
    case y:
    case z:
      return true;
    default:
      return false;
  }
};
