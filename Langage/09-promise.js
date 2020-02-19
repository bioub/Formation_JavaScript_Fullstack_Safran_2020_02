// setTimeout(() => {
//   console.log('1s');
// }, 1000);

// timeout(1000)
//   .then(() => console.log('1s'));

function timeout(val) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val);
    }, Math.floor(Math.random() * 1000));
  });
}

Promise.all([
  timeout('A'),
  timeout('B'),
  timeout('C'),
  timeout('D'),
]).then((values) => {
  console.log(values);
});
