// Write applicatives for concurrent actions
// http://bit.ly/2huzjkX

/* eslint-disable no-console, new-cap, semi, comma-dangle */

import Task from 'data.task'

const Db = ({
  find: id =>
    new Task((rej, res) =>
      setTimeout(() =>
        res({ id, title: `Project ${id}` }), 100))
})

const reportHeader = (p1, p2) =>
  console.log`Report: ${p1.title} compared to ${p2.title}`)

Db.find(20).chain(p1 =>
  Db.find(8).map(p2 =>
    reportHeader(p1, p2)))
