// You've been using Functors
// http://bit.ly/2hofIpp

/* eslint-disable no-console, new-cap */

import Immutable from './lib/immutable-ext';
import { Left } from './lib';
const { List } = Immutable;

// fx.map(f).map(g) == fx.map(x => g(f(x)))
// fx.map(id) == id(fx)

const res1 =
  Left('squirrels')
    .map(s => s.substr(5))
    .map(s => s.toUpperCase());

const res2 =
  Left('squirrels')
    .map(s => s.substr(5).toUpperCase());

console.log(res1, res2);

const id = x => x;

const res3 = List.of('crayons').map(id);
const res4 = id(List.of('crayons'));
console.log(res3, res4);
