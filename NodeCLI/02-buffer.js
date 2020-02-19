
const buffer1 = Buffer.alloc(5, 'Hello');
const buffer2 = Buffer.alloc(3, '!!!');

console.log(buffer1);
console.log(buffer1.toString());
console.log(buffer1.toString('utf-8'));


console.log(Buffer.concat([buffer1, buffer2]));
