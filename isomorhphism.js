// Isomorphisms and round trip data transformations
// http://bit.ly/2huPUFu

/* eslint-disable no-console, new-cap, semi, comma-dangle */

import { Right, Left, fromNullable, Box } from './lib';
import Task from 'data.task'
import Immutable from './lib/immutable-ext'

const { List, Map } = Immutable

// from(to(x)) == x
// to(from(y)) == y

// String ~ [Char]
const Iso = (to, from) => ({
  to,
  from
})

const chars = Iso(s => s.split(''), c => c.join(''))

const res = chars.from(chars.to('hello world'))
console.log(res);


const truncate = str =>
  chars.from(chars.to(str).slice(0, 3)).concat('...')

console.log(truncate('hello world'));

// [a] ~ Either null a
const singleton = Iso(e => e.fold(() => [], x => [x]),
                      ([x]) => x ? Right(x) : Left())

const filterEither = (e, pred) =>
  singleton.from(singleton.to(e).filter(pred))

const res1 = filterEither(Right('hello'), x => x.match(/h/ig))
  .map(x => x.toUpperCase())

console.log(res1);
