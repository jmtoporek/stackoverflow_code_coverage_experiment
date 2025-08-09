export const conditionIfElseSeparateThenReturn = (x, y, z) => {
  let response;
  if (x) {
    response = true;
  } else if (y) {
    response = true;
  } else if (z) {
    response = true;
  } else {
    response = false;
  }

  return response;
};
