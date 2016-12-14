// List comprehensions with Applicative Functors
// http://bit.ly/2gKn1GM

/* eslint-disable no-console, new-cap, semi */

import Immutable from './lib/immutable-ext'
const { List } = Immutable;

const merch = () =>
  List.of(x => y => z => `${x}-${y}-${z}`)
      .ap(List(['teeshirt', 'sweater']))
      .ap(List(['large', 'medium', 'small']))
      .ap(List(['black', 'white']))

console.log(merch());
