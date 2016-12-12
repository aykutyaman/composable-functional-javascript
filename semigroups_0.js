// Create types with Semigroups
// http://bit.ly/2huFpVT

/* eslint-disable no-console, new-cap */

const Sum = x => ({
  x,
  concat: ({ x: y }) =>
    Sum(x + y),
  inspect: () =>
    `Sum(${x})`,
});

const sumRes = Sum(1).concat(Sum(2));
console.log(sumRes);

const All = x => ({
  x,
  concat: ({ x: y }) =>
    All(x && y),
  inspect: () =>
    `All(${x})`,
});
const allRes = All(true).concat(All(false)); // All(false)
console.log(allRes);


const First = x => ({
  x,
  concat: () =>
    First(x),
  inspect: () =>
    `First(${x})`,
});
const firstRes = First('blah').concat(First('ice cream')); // First(false)
console.log(firstRes);
