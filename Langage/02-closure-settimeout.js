function externe(msg) {
  return function() {
    console.log(msg);
  }
}

// Sync : ..1s.. 0 ..1s.. 1 ..1s.. 2
// Async : ..1s.. 3 3 3
for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Async : ..1s.. 0 1 2
for (var i=0; i<3; i++) {
  setTimeout(externe(i), 1000);
}

// Async : ..1s.. 0 1 2
for (let i=0; i<3; i++) {
  // portée de closure
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Async : ..4ms.. 3 3 3
for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

