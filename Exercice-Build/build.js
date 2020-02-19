const fs = require('fs-extra');
const path = require('path');
const md5 = require('md5');
const Terser = require('terser');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function removeAndMkdir(distPath) {
  await fs.remove(distPath);
  await fs.mkdir(distPath);
  console.log('dist created');
}

async function buildJs() {
  // const buffer1 = await fs.readFile(horlogeJsPath);
  // const buffer2 = await fs.readFile(indexJsPath);
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  const buffer = Buffer.concat(buffers);
  await fs.writeFile(appJsDistPath, buffer);
  console.log('js built');
}

async function buildHtml() {
  let content = await fs.readFile(indexHtmlPath, { encoding: 'utf-8' });

  content = content.replace(
    /<script.*<\/script>/s,
    '<script src="./app.js"></script>',
  );

  await fs.writeFile(indexHtmlDistPath, content);
  console.log('html built');
  // fs.writeFile(indexHtmlDistPath, content).then(() => {
  //   console.log('html built');
  // })
}

async function build() {
  await removeAndMkdir(distPath);
  await buildJs();
  await buildHtml();
}

build();
