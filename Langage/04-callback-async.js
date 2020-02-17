setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 1000);
setTimeout(() => console.log('C'), 0);
setTimeout(() => console.log('D'), 500);

console.log('E');

// E C A D B

// pile d'appel
// ^
// |
// |
// |                              lg        lg    lg         lg
// |st - st - st - st - lg ..⟳.. cbC ..⟳.. cbA - cbD ..⟳.. cbB
// +----------0-------------------4--------------------------------> temps
//                      E         C         A     D          B

// file d'attente (0ms) : cbC
// file d'attente (4ms) :
// file d'attente (500ms) : cbA - cbD
// file d'attente (501ms) :  cbD
// file d'attente (503ms) :
// file d'attente (1000ms) :  cbB
// file d'attente (1001ms) :

// Jake Archibald : JSConf Asia 2019
// In the loop
