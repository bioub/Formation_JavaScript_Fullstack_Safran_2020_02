const readline = require('readline'); // binaire node
const chalk = require('chalk'); // npm
const random = require('./random'); // fichier locaux

class Jeu {
  constructor(options = {}) {
    // const min = options.min || 0;
    // const max = options.max !== undefined ? options.max : 100;

    const { min = 0, max = 100 } = options;
    // Object.assign(this, { min: 0, max: 100}, options);

    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.entierAlea = random.getInt(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log(`Vous avez déjà joué : ${this.essais.join(' - ')}`);
    }
    this._rl.question('Quel est le nombre ? ', (answer) => {
      const entierSaisi = Number.parseInt(answer, 10);
      if (Number.isNaN(entierSaisi)) {
        console.log(chalk.red('Erreur : il faut saisir un entier'));
        return this.jouer();
      }
      this.essais.push(entierSaisi);
      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else {
        console.log(chalk.green('Gagné'));
        this._rl.close();
      }
    });
  }
}

module.exports = Jeu;
