// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });
  return commonElements;
};
