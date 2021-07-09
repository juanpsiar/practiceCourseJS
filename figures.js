//TODO: GEOMETRIC FIGURES

// Comment
// * CODE OF APPLICATION
//? function
function perimeterSquare(side) {
  return side * 4;
}

function areaSquare(side) {
  return side * side;
}

//? square code
console.group('SQUARE');
const sideSquare = 5;
// const perimeterSquare = perimeterSquare(sideSquare);
// const areaSquare = areaSquare(sideSquare);
console.log(`Square side metric ${sideSquare} cm`);
console.log(
  `Perimeter Square:  ${perimeterSquare} cm Area Square: ${areaSquare} cm²`
);
console.groupEnd();

//? triangle code
console.group('TRIANGLE');
const sideTriangleA = 6;
const sideTriangleB = 6;
const baseTriangle = 4;
const heightTriangle = Math.floor(
  Math.sqrt(Math.pow(sideTriangleA, 2) + Math.pow(baseTriangle / 2, 2))
);
const perimeterTriangle = sideTriangleA + sideTriangleB + baseTriangle;
const areaTriangle = (baseTriangle * heightTriangle) / 2;
console.log(
  `Triangle side ${sideTriangleA}cm ${sideTriangleB}cm ${baseTriangle}cm`
);
console.log(`Triangle height ${heightTriangle}cm`);
console.log(`Triangle perimeter ${perimeterTriangle}cm`);
console.log(`Triangle area ${areaTriangle}cm²`);

console.groupEnd();

//? circle code
console.group('CIRCLE');
const radiusCircle = 6;
const diameterCirle = radiusCircle * 2;
const piCircle = Math.PI;
console.log(
  `Circle radius ${radiusCircle}cm Circle diameter ${diameterCirle}cm`
);
console.log(`PI ${piCircle}`);
const perimeterCircle = piCircle * diameterCirle;
const areaCircle = Math.pow(radiusCircle, 2) * piCircle;
console.log(
  `Perimeter circle ${perimeterCircle} Area circle ${areaCircle}cm² `
);
console.groupEnd();
