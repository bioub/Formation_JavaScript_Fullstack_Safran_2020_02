const net = require('net');

const server = net.createServer();

server.on('connection', (socket) => {
  console.log('client connected');
  socket.pipe(process.stdout);
});

// server.on('listening', () => {
//   console.log('server started');
// });

server.on('error', (err) => {
  console.log(err);
});

server.listen(8080, () => {
  console.log('server started');
});
