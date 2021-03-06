const processDistanceInput = (key) => {
  if (key === "Backspace" || key === "Enter") {
    return key;
  }

  const match = key.match(/[0-9.]/g);

  return match ? match[0] : null;
};

export default processDistanceInput;
