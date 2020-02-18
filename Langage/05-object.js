Math.PI // property
Math.random() // method

console['log'](Math['PI']);

// console.log(Math.sum(1, 2));

// Extensibilité

// ajout
Math.sum = function(a, b) {
  return a + b;
};

console.log(Math.sum('1', '2'));

// modifier
Math.sum = function(a, b) {
  return Number(a) + Number(b);
};

console.log(Math.sum('1', '2'));

// supprimer
delete Math.sum;


// Créer l'objet directement
// -> object literal

const coords = {
  x: 10,
  y: 20,
};

console.log(coords.x); // 10

// Les 2 opérateurs . et []
const key = 'z';
coords[key] = 30;
// coords.z = 30;

// Pour boucler sur les propriétés
for (const key in coords) {
  if (coords.hasOwnProperty(key)) {
    const value = coords[key];
    console.log(key, value);
  }
}

// Pour boucler sur les propriétés
for (const key of Object.keys(coords)) {
  if (coords.hasOwnProperty(key)) {
    const value = coords[key];
    console.log(key, value);
  }
}

// Simuler des classes
// -> constructor function
function Contact(name) {
  this.name = name;
  // pas une super pratique
  // this.hello = function() {
  //   return 'Hello ' + this.name;
  // }
}

Contact.instance = null;

Contact.prototype.hello = function() {
  return 'Hello ' + this.name;
};

// -> sucre syntaxique
// class Contact {
//
//   constructor(name) {
//     this.name = name;
//     // pas une super pratique
//     // this.hello = function() {
//     //   return 'Hello ' + this.name;
//     // }
//   }
//   hello() {
//     return 'Hello ' + this.name;
//   }
// }


const romain = new Contact('Romain');
console.log(typeof romain); // object

console.log(romain.name); // Romain
console.log(romain.hello()); // Hello Romain


const jean = new Contact('Jean');
console.log(jean.hello()); // Hello Jean

console.log(romain.hello === jean.hello); // true

// Tester si la property existe
console.log(romain.hasOwnProperty('name'));
console.log(romain.hasOwnProperty('hello'));

console.log(romain.name !== undefined);
console.log(romain.hello !== undefined);



// Object.defineProperty(Math, 'sum', {
//   value: function(a, b) {
//     return a + b;
//   },
//   configurable
// });
