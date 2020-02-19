const fs = require('fs-extra');

// fs-extra = fs + 15 fonctions supplémentaires
// https://github.com/jprichardson/node-fs-extra

// fs.readFileSync
// fs.readFile

// dans fs-extra on écrit pas
// fs.promises.readFile()
// mais
// fs.readFile() sans callback retourne une promise
// fs.readFile('.prettierrc', { encoding: 'utf-8'}).then((content) => {})

async function build() {
  // pas d'erreur si le dossier dist n'existe pas
  await fs.remove('dist');
}

build();
