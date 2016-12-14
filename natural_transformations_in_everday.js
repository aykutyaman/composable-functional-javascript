// Apply Natural Transformations in everyday work
// http://bit.ly/2gA8DxI

/* eslint-disable no-console, new-cap, semi, comma-dangle */

import { Right, Left, fromNullable, Box } from './lib';
import Task from 'data.task'
import Immutable from './lib/immutable-ext'

const { List } = Immutable

const res = List(['hello', 'world'])
  .chain(x => List(x.split('')))

console.log(res);

const first = xs =>
  fromNullable(xs[0])

const largeNumbers = xs =>
  xs.filter(x => x > 100)

const larger = x =>
  x * 2

const app = xs =>
  first(largeNumbers(xs)).map(larger)

console.log(app([2, 400, 5, 1000]));

const fake = id =>
  ({ id, name: 'user1', best_friend_id: id + 1 })

const Db = ({
  find: id =>
    new Task((rej, res) =>
      res(id > 2 ? Right(fake(id)) : Left('not found')))
})

const eitherToTask = e =>
  e.fold(Task.rejected, Task.of)

Db.find(3) // Task(Right(user))
   .chain(eitherToTask)
   .chain(user =>
     Db.find(user.best_friend_id))
   .chain(eitherToTask)
   .fork(e => console.error(e),
         r => console.log(r))
