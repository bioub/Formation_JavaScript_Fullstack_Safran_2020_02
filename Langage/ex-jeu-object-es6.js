'use strict';

const random = {
  get() {
    return Math.random();
  },

  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },

  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
}

// dépendance entre fichiers
const readline = require('readline');

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
        console.log('Erreur : il faut saisir un entier');
        return this.jouer();
      }
      this.essais.push(entierSaisi);
      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      }
      else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      }
      else {
        console.log('Gagné');
        this._rl.close();
      }
    });
  }
}


const game = new Jeu({
  max: 10
});
game.jouer();

// pile d'appel
// ^
// |                        question
// |question                loop
// |loop     ..⟳..         cb        ..⟳..
// +------------------------ENTREE---------------> temps
