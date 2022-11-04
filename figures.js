//TODO: GEOMETRIC FIGURES

// Comment
// * CODE OF APPLICATION
//? general functions
roundValue = (value) => value.toFixed(2)

//? square code
console.group('SQUARE')
perimeterSquare = (side) => side * 4
areaSquare = (side) => Math.pow(side, 2)
calcPerimeterSquare = () => {
  const inputSquare = document.getElementById('InputSquare')
  PerimeterSquare.innerHTML = roundValue(perimeterSquare(inputSquare.value))
}
calcAreaSquare = () => {
  const inputSquare = document.getElementById('InputSquare')
  AreaSquare.innerHTML = roundValue(areaSquare(inputSquare.value))
}
console.groupEnd()

//? triangle code
console.group('TRIANGLE')
perimeterTriangle = (sideA, sideB, baseTriangle) => sideA + sideB + baseTriangle
areaTriangle = (baseTriangle, sideA, sideB) => {
  const heightTriangle = calcHeightTriangle(sideA, sideB, baseTriangle)
  return (baseTriangle * heightTriangle) / 2
}
calcHeightTriangle = (aSide, bSide, base) => {
  if (aSide !== bSide) {
    alert(`Triangle is not ISOSCELES`)
  } else {
    return Math.sqrt(Math.pow(aSide, 2) + Math.pow(base / 2, 2))
  }
}
getValuesTriangle = () => {
  return {
    A: parseFloat(document.getElementById('InputTriangleA').value),
    B: parseFloat(document.getElementById('InputTriangleB').value),
    base: parseFloat(document.getElementById('InputTriangleBase').value),
  }
}
calcPerimeterTriangle = () => {
  let values = getValuesTriangle()
  PerimeterTriangle.innerHTML = roundValue(
    perimeterTriangle(values['A'], values['B'], values['base']),
  )
}
calcAreaTriangle = () => {
  let values = getValuesTriangle()
  AreaTriangle.innerHTML = roundValue(areaTriangle(values['base'], values['A'], values['B']))
}
console.groupEnd()

//? circle code
console.group('CIRCLE')
const piCircle = Math.PI
diameterCirle = (radiusCircle) => radiusCircle * 2
perimeterCircle = (radiusCircle) => diameterCirle(radiusCircle) * piCircle
areaCircle = (radiusCircle) => Math.pow(radiusCircle, 2) * piCircle
calcPerimeterCircle = () => {
  let radius = document.getElementById('InputCircle')
  PerimeterCircle.innerHTML = roundValue(perimeterCircle(radius.value))
}

calcAreaCircle = () => {
  let radius = document.getElementById('InputCircle')
  AreaCircle.innerHTML = roundValue(areaCircle(radius.value))
}

console.groupEnd()

const figureTemplate = () => {
  return `
<header class="m-2">
<a class="m-4 underline text-blue-500" href="./index.html">Index</a>
<h1 class="text-red-500 text-center text-3xl">Geometric Figures</h1>
<h3 class="text-red-300 text-center">First WorkShop of the Practice Course of JavaScript</h3>
</header>
<div class="flex flex-wrap justify-center">
<section class="m-2 p-2 border-2 border-gray-300 shadow-xl">
  <div class="flex justify-center items-center">
    <img class="w-8 mr-2" src="./resources/images/square.svg" />
    <h2 class="text-center font-bold text-lg">Square</h2>
  </div>
  <form class="m-2 p-1 border border-gray-300 rounded-xl flex flex-col">
    <div class="m-1 flex">
      <label class="w-1/3 text-center"> Side: </label>
      <input
        class="bg-red-500font-sans border px-1 w-2/3 hover:border-blue-600 text-center text-red-300 border-gray-400"
        id="InputSquare"
        type="number"
        min="0" />
    </div>
    <button
      class="p-1 m-1 border-gray-300 bg-green-100 border rounded-xl"
      type="button"
      onclick="calcPerimeterSquare()">
      Perimeter
    </button>
    <button
      class="p-1 m-1 border-gray-300 bg-green-100 border rounded-xl"
      type="button"
      onclick="calcAreaSquare()">
      Area
    </button>
    <div class="flex justify-center">
      <label class="text-center text-green-500 ml-2" id="PerimeterSquare">Perimeter</label>
      <label class="text-center text-green-500 ml-2" id="AreaSquare">Area</label>
    </div>
  </form>
</section>
<section class="m-2 p-2 border-2 border-gray-300 shadow-xl">
  <div class="flex justify-center items-center">
    <img class="w-8 mr-2" src="./resources/images/oval.svg" />
    <h2 class="text-center font-bold text-lg">Circle</h2>
  </div>

  <form class="m-2 p-1 border border-gray-300 rounded-xl flex flex-col">
    <div class="m-1 flex">
      <label class="w-1/3 text-center">Radius: </label>
      <input
        class="bg-red-500font-sans border px-1 w-2/3 hover:border-blue-600 text-center text-red-300 border-gray-400"
        id="InputCircle"
        type="number"
        min="0" />
    </div>
    <button
      class="p-1 m-1 border-gray-300 bg-green-100 border rounded-xl"
      type="button"
      onclick="calcPerimeterCircle()">
      Perimeter
    </button>
    <button
      class="p-1 m-1 border-gray-300 bg-green-100 border rounded-xl"
      type="button"
      onclick="calcAreaCircle()">
      Area
    </button>
    <div class="flex m-1 justify-center">
      <label class="text-center text-green-500 ml-2" id="PerimeterCircle">Perimeter</label>
      <label class="text-center text-green-500 ml-2" id="AreaCircle">Area</label>
    </div>
  </form>
</section>
<section class="m-2 p-2 border-2 border-gray-300 shadow-xl">
  <div class="flex justify-center items-center">
    <img class="w-8 mr-2" src="./resources/images/triangle.svg" />
    <h2 class="text-center font-bold text-lg">Triangle</h2>
  </div>
  <form class="m-2 p-1 border border-gray-300 rounded-xl flex flex-col">
    <div class="m-1 flex">
      <label class="w-1/3 text-center">Side A: </label>
      <input
        class="bg-red-500font-sans border px-1 w-2/3 hover:border-blue-600 text-center text-red-300 border-gray-400"
        id="InputTriangleA"
        type="number"
        min="0" />
    </div>
    <div class="m-1 flex">
      <label class="w-1/3 text-center">Side B: </label>
      <input
        class="bg-red-500font-sans border px-1 w-2/3 hover:border-blue-600 text-center text-red-300 border-gray-400"
        id="InputTriangleB"
        type="number"
        min="0" />
    </div>
    <div class="m-1 flex">
      <label class="w-1/3 text-center">Base: </label>
      <input
        class="bg-red-500font-sans border px-1 w-2/3 hover:border-blue-600 text-center text-red-300 border-gray-400"
        id="InputTriangleBase"
        type="number"
        min="0" />
    </div>
    <button
      class="p-1 m-1 border-gray-300 bg-green-100 border rounded-xl"
      type="button"
      onclick="calcPerimeterTriangle()">
      Perimeter
    </button>
    <button
      class="p-1 m-1 border-gray-300 bg-green-100 border rounded-xl"
      type="button"
      onclick="calcAreaTriangle()">
      Area
    </button>
    <div class="flex m-1 justify-center">
      <label class="text-center text-green-500 ml-2" id="PerimeterTriangle">Perimeter</label>
      <label class="text-center text-green-500 ml-2" id="AreaTriangle">Area</label>
    </div>
  </form>
</section>
</div>

<script src="figures.js"></script>
`
}
export { figureTemplate }
