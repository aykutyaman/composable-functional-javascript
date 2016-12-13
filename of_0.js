// Lift into a Pointed Functor with of
// http://bit.ly/2gvI4ty

import Task from 'data.task';

const r = Task.of('hello'); // Task('hello')

Task.of('hello').map(x => x + '!');
