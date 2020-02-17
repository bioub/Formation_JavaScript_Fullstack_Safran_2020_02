// const porteeGlobale = 'porteeGlobale';
// Dans Node.js
// (function () {
global.porteeGlobale = 'porteeGlobale';
const porteeClosureModule = 'porteeClosureModule';

function externe() {
  const porteeClosure = 'porteeClosure';
  return function () {
    // debugger;
    const porteeLocale = 'porteeLocale';
    console.log(porteeLocale);
    console.log(porteeClosure);
    console.log(porteeClosureModule);
    console.log(porteeGlobale);
  }
}

const interne = externe();
interne();

// });

// pile d'appel
// ^
// |
// |
// |externe - interne
// +----------------------> temps
