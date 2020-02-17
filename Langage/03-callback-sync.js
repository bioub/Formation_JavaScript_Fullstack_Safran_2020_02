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

// Depuis ES5
// Paradigme fonctionnel
names.filter((n) => n.length === 4)
     .map((name4letter) => name4letter.toUpperCase())
     .forEach((nameUpper) => console.log(nameUpper));

console.log('FIN');


