// Create linear data flow with container style types (Box)
// http://bit.ly/2gozUb7

import box from './lib/box';

const nextCharForNumberString = str =>
  box(str)
  .map(s => s.trim())
  .map(r => new Number(r))
  .map(i => i + 1)
  .map(i => String.fromCharCode(i))
  .fold(c => c.toLowerCase());


const result = nextCharForNumberString('  64   ');


console.log(result);
