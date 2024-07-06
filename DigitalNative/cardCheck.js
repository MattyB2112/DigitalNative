export const cardCheck = (number) => {
  let array = [];
  let finalTotal = 0;
  const numberArray = number.split("");

  numberArray.map((num, i) => {
    if (i === 0 || i % 2 === 0) {
      array.push(Number(numberArray[i]));
    } else {
      const doubledNumber = num * 2;
      if (doubledNumber >= 10) {
        const doubledNumberAsString = doubledNumber.toString();
        console.log(doubledNumberAsString, "STRING");
        const splitArray = doubledNumberAsString.split("");
        const splitTotal = Number(splitArray[0]) + Number(splitArray[1]);
        array.push(splitTotal);
      } else {
        array.push(doubledNumber);
      }
    }
  });

  console.log(array, "FINAL ARRAY");

  for (let i = 0; i < array.length; i++) {
    finalTotal += array[i];
  }

  console.log(finalTotal, "FINAL TOTAL");

  if (finalTotal % 10 === 0) {
    return true;
  } else {
    return false;
  }
};
