// function setTimeoutSync(callbackFn, delayMs) {
//   // pause delayMs
//   const debut = Date.now();
//   while (delayMs > Date.now() - debut) {}
//   callbackFn();
// }

// setTimeoutSync(() => console.log('A'), 1000);

// console.log('FIN');

function pause(delayMs) {
  // pause delayMs
  const debut = Date.now();
  while (delayMs > Date.now() - debut) {}
}

pause(1000);
console.log('A');

console.log('FIN');
