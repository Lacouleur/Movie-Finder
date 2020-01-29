export const getYear = (DateStringToTransform) => {
  const DateConverted = new Date(DateStringToTransform);
  return DateConverted.getFullYear();
};

export const checkWindowSize = (width) => {
  if (width < 839) {
    return 2;
  } if (width > 840 && width < 1000) {
    return 3;
  } if (width > 1000) {
    return 4;
  }
};
