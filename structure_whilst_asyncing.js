// Maintaining structure whilst asyncing
// http://bit.ly/2hsuZWn

/* eslint-disable no-console, new-cap, semi, comma-dangle */

import fs from 'fs'
import Task from 'data.task'
import Immutable from './lib/immutable-ext'

const { List, Map } = Immutable;

const httpGet = (path, params) =>
  Task.of(`${path} result`)

Map({ home: ['/', '/home'], about: ['/about-us'] })
      .traverse(Task.of, routes =>
        List(routes)
        .traverse(Task.of, route => httpGet(route, {})))
      .fork(console.error, console.log)
