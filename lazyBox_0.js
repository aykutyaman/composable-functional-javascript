//  Delay Evaluation with LazyBox
// http://bit.ly/2gGor4Y

/* eslint-disable no-console, new-cap */

import { LazyBox } from './lib';

const result = LazyBox(() => '   64      ')
  .map(s => s.trim())
  .map(r => new Number(r))
  .map(i => i + 1)
  .map(i => String.fromCharCode(i))
  .fold(c => c.toLowerCase());

console.log(result);
