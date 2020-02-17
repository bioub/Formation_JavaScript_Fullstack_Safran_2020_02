// const porteeGlobale = 'porteeGlobale';
// Dans Node.js
// (function () {
global.porteeGlobale = 'porteeGlobale';
const porteeClosureModule = 'porteeClosureModule';

function externe() {
  const porteeClosure = 'porteeClosure';
  function interne() {
    // debugger;
    const porteeLocale = 'porteeLocale';
    console.log(porteeLocale);
    console.log(porteeClosure);
    console.log(porteeClosureModule);
    console.log(porteeGlobale);
  }
  interne();
}

externe();

// });
