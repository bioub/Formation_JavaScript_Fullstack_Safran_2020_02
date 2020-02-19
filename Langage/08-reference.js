const nb1 = 1;
const nb2 = nb1; // passage par valeur
nb2 = 2;
console.log(nb1); // 1

const o1 = { nb: 1 };
const o2 = o1; // passage par référence
o2.nb = 2;
// o2 = { nb: 2 };
console.log(o2.nb); // 2

const s1 = '1';
const s2 = s1;
s2 = '2';
console.log(s1); // 1

// Objet Muable (modifiable)
const prenoms = ['Romain'];
prenoms.push('Eric');

console.log(prenoms); // ['Romain', 'Eric']

// Objet Immuable (non-modifiable)
let prenom1 = 'Romain';
let prenom2 = prenom1.concat(', Eric');

console.log(prenom1); // Romain
