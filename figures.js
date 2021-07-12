//TODO: GEOMETRIC FIGURES

// Comment
// * CODE OF APPLICATION
//? general functions
roundValue = (value) => value.toFixed(2);

//? square code
console.group('SQUARE');
perimeterSquare = (side) => side * 4;
areaSquare = (side) => Math.pow(side, 2);
calcPerimeterSquare = () => {
  const inputSquare = document.getElementById('InputSquare');
  PerimeterSquare.innerHTML = roundValue(perimeterSquare(inputSquare.value));
};
calcAreaSquare = () => {
  const inputSquare = document.getElementById('InputSquare');
  AreaSquare.innerHTML = roundValue(areaSquare(inputSquare.value));
};
console.groupEnd();

//? triangle code
console.group('TRIANGLE');
perimeterTriangle = (sideA, sideB, baseTriangle) =>
  sideA + sideB + baseTriangle;
areaTriangle = (baseTriangle, sideA, sideB) => {
  const heightTriangle = calcHeightTriangle(sideA, sideB, baseTriangle);
  return (baseTriangle * heightTriangle) / 2;
};
calcHeightTriangle = (aSide, bSide, base) => {
  if (aSide !== bSide) {
    alert(`Triangle is not ISOSCELES`);
  } else {
    return Math.sqrt(Math.pow(aSide, 2) + Math.pow(base / 2, 2));
  }
};
getValuesTriangle = () => {
  return {
    A: parseFloat(document.getElementById('InputTriangleA').value),
    B: parseFloat(document.getElementById('InputTriangleB').value),
    base: parseFloat(document.getElementById('InputTriangleBase').value),
  };
};
calcPerimeterTriangle = () => {
  let values = getValuesTriangle();
  PerimeterTriangle.innerHTML = roundValue(
    perimeterTriangle(values['A'], values['B'], values['base'])
  );
};
calcAreaTriangle = () => {
  let values = getValuesTriangle();
  AreaTriangle.innerHTML = roundValue(
    areaTriangle(values['base'], values['A'], values['B'])
  );
};
console.groupEnd();

//? circle code
console.group('CIRCLE');
const piCircle = Math.PI;
diameterCirle = (radiusCircle) => radiusCircle * 2;
perimeterCircle = (radiusCircle) => diameterCirle(radiusCircle) * piCircle;
areaCircle = (radiusCircle) => Math.pow(radiusCircle, 2) * piCircle;
calcPerimeterCircle = () => {
  let radius = document.getElementById('InputCircle');
  PerimeterCircle.innerHTML = roundValue(perimeterCircle(radius.value));
};

calcAreaCircle = () => {
  let radius = document.getElementById('InputCircle');
  AreaCircle.innerHTML = roundValue(areaCircle(radius.value));
};

console.groupEnd();
