// REST PARAM
// liste de valeurs -> tableau
function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }
  // for (let i = 2; i < arguments.length; i++) {
  //   const nb = arguments[i];
  //   result += nb;
  // }

  return result;
}

console.log(sum(1, 2, 3, 4)) // 10

// SPREAD Operator
// tableau -> liste de valeurs

function multiply(a, b, c, d) {
  return a * b * c * d;
}

const nbs = [1, 2, 3, 4];

console.log(multiply(...nbs));

const coords = {x: 1, y: 2};

// REST PARAMS
const [one, two, ...numbers] = nbs;
console.log(numbers); // [3, 4]



// SPREAD Operator
const clone = [...nbs]; // nbs.slice()
const coords3d = {...coords, z: 3};

const {z, ...coords2d} = coords;
