/* eslint-disable no-console, new-cap */

// Create types with Semigroups
// http://bit.ly/2huFpVT
import { Sum, All, First } from './lib';
import Immutable from './lib/immutable-ext';
const { Map } = Immutable;

const sumRes = Sum(1).concat(Sum(2));
console.log(sumRes);

const allRes = All(true).concat(All(false)); // All(false)
console.log(allRes);

const firstRes = First('blah').concat(First('ice cream')); // First(false)
console.log(firstRes);

const acct1 = Map({
  name: First('Nico'), isPaid: All(true), points: Sum(10),
  friends: ['Franklin'],
});
const acct2 = Map({
  name: First('Nico'), isPaid: All(false), points: Sum(2),
  friends: ['Gatsby'],
});
const objRes = acct1.concat(acct2);
console.log(objRes.toJS());
