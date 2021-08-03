//TODO SALARIES

const salariesPerson = persons.map((ppl) => ppl.salary);

//? Helpers
pairNumber = (number) => {
  return number % 2 === 0;
};

averageFunction = (arr) => {
  let total = arr.reduce((sumValue = 0, neoValue) => {
    return parseFloat(sumValue) + parseFloat(neoValue);
  });
  return total / arr.length;
};

//? Median Calculator
medianSalariesPerson = (listSal) => {
  const half = parseInt(listSal.length / 2);

  if (pairNumber(listSal.length)) {
    return averageFunction([listSal[half], listSal[half - 1]]).toFixed(2);
  } else {
    return listSal[half];
  }
};

//? General Median
const salariesPersonSorted = salariesPerson.sort(
  (salaryA, salaryB) => salaryA - salaryB
);

const generalMedian = medianSalariesPerson(salariesPersonSorted);

//? Top 10% Median
//variables for Splice
const spliceStart = salariesPersonSorted.length * 0.9;
const spliceCount = salariesPersonSorted.length - spliceStart;

const salaryPersonTop10 = salariesPersonSorted.splice(spliceStart, spliceCount);
const medianTop10 = medianSalariesPerson(salaryPersonTop10);

console.log({ generalMedian, medianTop10 });
