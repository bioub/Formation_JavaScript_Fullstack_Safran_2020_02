function hello(name) {
  return 'Hello ' + name.toUpperCase() + ' !';
}

var names = ['Jean', 'Eric', 'Pierre'];

for (var i = 0; i < names.length; i++) {
  var n = names[i];
  console.log(hello(n));
}

