export const getYear = (DateStringToTransform) => {
    const DateConverted = new Date(DateStringToTransform);
    return DateConverted.getFullYear();
  };