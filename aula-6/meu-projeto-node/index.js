const chalk = require('chalk');
console.log(chalk.green('Servidor iniciado com sucesso!'));

const soma = require('./utils/soma');
const sub = require('./utils/subtracao');
const mult = require('./utils/multiplicacao');
const a = 10;
const b = 4;
console.log("Soma:", soma(a, b));
console.log("Subtração:", sub(a, b));
console.log("Multiplicação:", mult(a, b))