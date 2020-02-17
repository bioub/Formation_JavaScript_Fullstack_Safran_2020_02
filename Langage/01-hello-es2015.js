/**
 * Ma fonction hello
 * @param {string} name Le prénom
 * @returns {string} Le message
 */
function hello(name) {
  return `Hello ${name.toUpperCase()} !`;
}

const names = ['Jean', 'Eric', 'Pierre'];

for (const n of names) {
  console.log(hello(n));
}

