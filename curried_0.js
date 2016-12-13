// Build curried functions
// http://bit.ly/2gwiW5A

/* eslint-disable no-console */

const add = x => y => x + y;

const inc = add(1); // y => 1 + y

const modulo = dvr => dvd => dvd % dvr;

const isOdd = modulo(2);

const filter = pred => xs => xs.filter(pred);

const map = f => xs => xs.map(f);

const getAllOdds = filter(isOdd);

const replace = regex => repl => str =>
  str.replace(regex, repl);

const censor = replace(/[aeiou]/ig)('*');

const censorAll = map(censor);

const res1 = isOdd(21);

const res2 = inc(2);

const res3 = getAllOdds([1, 2, 3, 4]);

const res4 = censor('hello world');

const res5 = censorAll(['hello world', 'merhaba dunya']);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);
