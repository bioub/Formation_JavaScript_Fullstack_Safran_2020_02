require('readline')

console.log(process.env.NODE_ENV)
console.log(process.env.PATH)

process.cwd()

// process.chdir()

console.log(process.argv.slice(2));

process.exit(0);
