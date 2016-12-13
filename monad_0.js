// You've been using Monads
// http://bit.ly/2gGMBwc

/* eslint-disable no-console, new-cap */

import { Box } from './lib';

/* httpGet('/user')
 *   .chain(user =>
 *     httpGet(`/comments/${user.id}`)
 *     .chain(comments =>
 *       updateDOM(user, comments)))
 * */
const join = m =>
  m.chain(x => x);

const m = Box(Box(Box(3)));
const res1 = join(m.map(join));
const res2 = join(join(m));
console.log(res1, res2);

const m1 = Box('wonder');
const res3 = join(Box.of(m1));
const res4 = join(m1.map(Box.of));
console.log(res3, res4);
