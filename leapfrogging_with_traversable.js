// Leapfrogging types with Traversable
// http://bit.ly/2gHSZ8m

/* eslint-disable no-console, new-cap, semi, comma-dangle */

import fs from 'fs'
import Task from 'data.task'
import { futurize } from 'futurize'
import Immutable from './lib/immutable-ext'

const { List } = Immutable;
const future = futurize(Task)

const readFile = future(fs.readFile)

const files = List(['./box_0.js', './files/config.json'])

files.traverse(Task.of, fn => readFile(fn, 'utf-8'))
     .fork(console.error, console.log)
