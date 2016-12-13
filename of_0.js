// Lift into a Pointed Functor with of
// http://bit.ly/2gvI4ty

import Task from 'data.task';
import { Box } from './lib';

Task.of('hello'); // Task('hello')

Task.of('hello').map(x => x + '!');

Box.of(100); // Box(100);
