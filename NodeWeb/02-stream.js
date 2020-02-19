const fs = require('fs');
const zlib = require('zlib');

// (async () => {
//   const content = await fs.readFile('.prettierrc');
//   console.log(content);
// })();

// ReadStream -> lecture (méthode read)
// WriteStream -> écriture (méthode write)
// DuplexStream -> ReadStream + WriteStream
// Transform -> DuplexStream + transform

fs.createReadStream('.prettierrc')
  .pipe(zlib.createGzip())
  .pipe(process.stdout);

// cat .prettierrc | gzip | echo
