// setTimeout(function() {
//   console.log(this);
//   // Timeout {
//   //   _idleTimeout
//   // }
// }, 1000);

function hello() {

}

class Contact {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Hello ${this.name}`);
  }
  helloAsync() {
    setTimeout(() => {
      console.log(`Hello ${this.name}`);
    }, 100);
  }
}

const romain = new Contact('Romain');
romain.hello(); // Hello Romain
romain.helloAsync(); // Hello undefined
