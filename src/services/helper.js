/* eslint-disable import/prefer-default-export */

export const getYear = (DateStringToTransform) => {
  const DateConverted = new Date(DateStringToTransform);
  return DateConverted.getFullYear();
};
