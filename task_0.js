//  Capture Side Effects in a Task
// http://bit.ly/2hphUtZ

/* eslint-disable no-console, new-cap */

import Task from 'data.task';

const launchMissiles = () =>
  new Task((rej, res) => {
    console.log('launch missiles');
    res('missile');
  });

const app = launchMissiles().map(x => x + '!');


app.map(x => x + '!').fork(e => console.log('err', e),
                           x => console.log('success', x));
