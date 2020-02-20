/**
 * Ma fonction hello
 * @param {string} name Le prénom
 * @returns {string} Le message
 */
function hello(name) {
  return `Hello ${name.toUpperCase()} !`;
}

const names = ['Jean', 'Eric', 'Pierre'];

names.forEach(function cb(n) {
  console.log(hello(n));
});

// pile d'appel
// ^
// |lg   lg   lg
// |hel  hel  hel
// |cb - cb - cb
// |forEach
// +----------------------> temps

// Algo
// Afficher en majuscule les prénoms de 4 lettres

// Style de programmation (paradigme)
// Paradigme impératif
for (let i = 0; i < names.length; i++) {
  const n = names[i];
  if (n.length === 4) {
    const name4letter = n;
    const nameUpper = name4letter.toUpperCase();
    console.log(nameUpper);
  }
}

// (name4letter) => name4letter.toUpperCase()
// function (name4letter) { return name4letter.toUpperCase() }

// Depuis ES5
// Paradigme fonctionnel
names.filter((n) => n.length === 4)
     .map((name4letter) => name4letter.toUpperCase())
     .forEach((nameUpper) => console.log(nameUpper));

// ES6
// names.find((n) => n.length === 4)
// names.findIndex((n) => n.length === 4)

console.log('FIN');


const nbs = [3, 4, 5, 6];

const sum = nbs.reduce((acc, nb) => acc + nb, 0)
console.log(sum);

// acc: 0, nb: 3 => 3
// acc: 3, nb: 4 => 7
// acc: 7
