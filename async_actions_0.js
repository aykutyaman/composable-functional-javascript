// Use Task for Asynchronous Actions
// http://bit.ly/2hsHqPm

/* eslint-disable no-console, new-cap */

import Task from 'data.task';
import fs from 'fs';

const readFile = name =>
  new Task((rej, res) =>
    fs.readFile(name, 'utf-8', (err, contents) =>
      err ? rej(err) : res(contents)));

const writeFile = (name, contents) =>
  new Task((rej, res) =>
    fs.writeFile(name, contents, (err, _) =>
      err ? rej(err) : res(contents)));

const app =
  readFile('./files/config.json')
    .map(contents => contents.replace(/8/g, '6'))
    .chain(replaced => writeFile('./files/config1.json', replaced));

app.fork(console.error, console.log);
