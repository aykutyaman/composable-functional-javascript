/* eslint-disable no-console, new-cap */

import { Sum, All } from './lib';

const resSum = Sum.empty().concat(Sum(1).concat(Sum(2)));
console.log(resSum);

const resBool = All(true).concat(All(true)).concat(All.empty());
console.log(resBool);

const sum = xs =>
  xs.reduce((acc, x) => acc + x, 0);

console.log(sum([1, 2, 3]));

const all = xs =>
  xs.reduce((acc, x) => acc && x, true);
console.log(all([true, false, true]));

const first = xs =>
  xs.reduce((acc) => acc);
console.log(first([1, 2, 3]));
