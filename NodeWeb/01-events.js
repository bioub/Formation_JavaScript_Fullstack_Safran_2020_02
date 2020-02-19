const { EventEmitter } = require("events");

const events = new EventEmitter();

function interval(delayMs) {
  setInterval(() => {
    events.emit('second', delayMs);
  }, delayMs);
}

events.on('second', (delayMs) => {
    console.log('1s');
})

interval(1000);

