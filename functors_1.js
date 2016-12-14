// Applicative Functors for multiple arguments
// http://bit.ly/2gJRy7M

/* eslint-disable no-console, new-cap */

import { Box, liftA2 } from './lib';


const add = x => y => x + y;
// const res = Box(add).ap(Box(2)).ap(Box(3));
const res = liftA2(add, Box(2), Box(3));

console.log(res);
