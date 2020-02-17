// dépendance entre fichiers
const readline = require('readline');

const rl = readline.createInterface(
  process.stdin,
  process.stdout,
);

function loop() {
  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);
    loop();

    // En fin de partie :
    // rl.close();
  });
}

loop();
