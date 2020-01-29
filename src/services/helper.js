export const getYear = (DateStringToTransform) => {
  const DateConverted = new Date(DateStringToTransform);
  return DateConverted.getFullYear();
};

export const checkWindowSize = (windowWidth) => {
  console.log("holla pas dedans"); 
  if (windowWidth < 617) {
    console.log("holla, DEDANS !!"); 
    return 2;
  }
};
