/**
 * Ma fonction hello
 * @param {string} name Le prénom
 * @returns {string} Le message
 */
function bonjour(name: string) {
  return `Hello ${name.toUpperCase()} !`;
}

const prenoms = ['Jean', 'Eric', 'Pierre'];

for (const n of prenoms) {
  console.log(bonjour(n));
}

