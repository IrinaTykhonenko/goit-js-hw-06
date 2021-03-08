function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  const newArray = [];

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      number += value;
    }
    newArray.push(number);
  });
  return newArray;
  // Пиши код выше этой строки
}
