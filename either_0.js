// Enforce a null check with composable code branching using Either
// http://bit.ly/2gMgPvt

import { fromNullable } from './lib';

const findColor = name => {
  return fromNullable({
    red: '#ff4444',
    blue: '#3b5998',
    yellow: '#fff68f',
  }[name]);
};

const result = findColor('blue')
  .map(c => c.slice(1))
  .fold(e => 'no color',
        s => s.toUpperCase());

console.log(result);
