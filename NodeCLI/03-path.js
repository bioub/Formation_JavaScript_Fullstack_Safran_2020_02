const path = require('path');

const dir = 'image';
const file = 'image.png';

console.log(path.extname(file)); // .png
console.log(path.extname(__filename)); // .js

console.log(path.parse(__filename));

console.log(path.join(dir, file));
console.log(path.resolve(dir, file));

console.log(path.join(__dirname, '..', dir, file));
console.log(path.resolve(__dirname, '..', dir, file));
