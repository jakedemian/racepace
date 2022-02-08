const getKeyPressed = (oldValue, newValue) => {
  if (oldValue.length < newValue) {
    return "Backspace";
  }

  const key = newValue[newValue.length - 1];
  return key;
};

export default getKeyPressed;
