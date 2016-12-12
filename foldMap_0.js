/* eslint-disable new-cap, no-console */

import Immutable from './lib/immutable-ext';
import { Sum } from './lib';

const { Map, List } = Immutable;

const resList = List.of(Sum(1), Sum(2), Sum(3))
                .fold(Sum.empty()); // Sum(6)
console.log(resList);


const resMap = List.of(1, 2, 3)
                   .foldMap(Sum, Sum.empty()); // Sum(8)
console.log(resMap);
