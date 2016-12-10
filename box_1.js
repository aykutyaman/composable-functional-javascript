// Refactor imperative code to a single composed expression using Box
// http://bit.ly/2hx1EWZ

import box from './lib/box';

const moneyToFloat = str =>
  box(str)
  .map(s => s.replace(/\$/g, ''))
  .map(r => parseFloat(r));

const percentToFloat = str =>
  box(str.replace(/%/g, ''))
  .map(replaced => parseFloat(replaced))
  .map(n => n * 0.01);


const applyDiscount = (price, discount) =>
  moneyToFloat(price)
  .fold(cost =>
    percentToFloat(discount)
    .fold(savings =>
      cost - cost * savings));


const result = applyDiscount('$5.00', '20%');

console.log(result);
