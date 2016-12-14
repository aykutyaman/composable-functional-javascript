// Principled type conversions with Natural Transformations
// http://bit.ly/2hkQCY2

/* eslint-disable no-console, new-cap, semi, comma-dangle */

import { Right, Left, fromNullable, Box } from './lib';
import Task from 'data.task'

// nt(x).map(f) == nt(x.map(f))

const first = xs =>
  fromNullable(xs[0])

const res1 = first([1, 2, 3]).map(x => x + 1)
const res2 = first([1, 2, 3].map(x => x + 1))
console.log(res1, res2);

const boxToEither = b =>
  b.fold(Right)

const eitherToTask = e =>
  e.fold(Task.rejected, Task.of)

/* eitherToTask(Left('nightingale'))
 *    .fork(e => console.error('err', e),
 *          r => console.log('res', r))*/
