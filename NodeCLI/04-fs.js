const fs = require('fs');
const path = require('path');

const prettierRcPath = path.resolve(__dirname, '.prettierrc');
const prettierRcCopyPath = path.resolve(__dirname, '.prettierrc.copy');

// Sync
try {
  const content = fs.readFileSync(prettierRcPath, { encoding: 'utf-8' })
  fs.writeFileSync(prettierRcCopyPath, content);
  console.log('Copy Sync Done');
} catch (err) {
  console.log(err);
}

// Async
// Callback Hell / Pyramid of Doom
// callbackhell.com
fs.readFile(prettierRcPath, { encoding: 'utf-8' }, (err, content) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(prettierRcCopyPath, content, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Copy Async');
      }
    })
  }
});

// Async Promise (ES6) (fs Node 12)
fs.promises.readFile(prettierRcPath, { encoding: 'utf-8' })
  .then((content) => fs.promises.writeFile(prettierRcCopyPath, content))
  .then(() => console.log('Copy Async Promise Done'))
  .catch((err) => console.log(err))

// ES2017 async / await
async function copy() {
  try {
    const content = await fs.promises.readFile(prettierRcPath, { encoding: 'utf-8' })
    await fs.promises.writeFile(prettierRcCopyPath, content);
    console.log('Copy Sync Done');
  } catch (err) {
    console.log(err);
  }
}

copy();
