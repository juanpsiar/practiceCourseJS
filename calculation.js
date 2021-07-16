const inputAverageList = document.getElementById('InputAverageList');
const sortedList = document.getElementById('SortedList');
inputInArraySorted = (arr) => {
  let arrInput = arr.trim().split(/\W+/);
  arrInput.sort((a, b) => a - b);
  console.log(arrInput);
  sortedList.innerText = arrInput.reduce((x = '', y) => x + ' - ' + y);
  return arrInput;
};

averageFunction = (arr) => {
  let total = arr.reduce((sumValue = 0, neoValue) => {
    return (
      parseFloat(sumValue) +
      parseFloat(neoValue.trim().length > 0 ? neoValue : 0)
    );
  });
  return total / arr.length;
};

averageValues = () => {
  let average = 0;
  const arrValues = inputInArraySorted(inputAverageList.value);
  average = averageFunction(arrValues);

  AverageList.innerText = average.toFixed(2);
};

parArray = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

medianValues = () => {
  const arrValues = inputInArraySorted(inputAverageList.value);
  let medianIndex = parseInt(arrValues.length / 2);
  let medianValue = 0;
  if (parArray(arrValues.length)) {
    medianValue = averageFunction([
      arrValues[medianIndex],
      arrValues[medianIndex - 1],
    ]).toFixed(2);
  } else {
    medianValue = arrValues[medianIndex];
  }
  console.log('medianValue', medianValue);

  MedianList.innerText = medianValue;
};

modeValues = () => {
  const arrValues = inputInArraySorted(inputAverageList.value);
  const listObjects = {};
  let arrMode = [];
  arrValues.map((elemnt) => {
    if (listObjects[elemnt]) {
      listObjects[elemnt] += 1;
    } else {
      listObjects[elemnt] = 1;
    }
  });
  arrMode = Object.entries(listObjects).sort(
    (elementA, elementB) => elementA[1] - elementB[1]
  );

  console.log('listObjects', arrMode);
  ModeList.innerText = `Element: ${arrMode[arrMode.length - 1][0]} => ${
    arrMode[arrMode.length - 1][1]
  }`;
};
