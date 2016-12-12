const fs = require('fs');
import { tryCatch } from './lib/box';


const getPort = () =>
  tryCatch(() => fs.readFileSync('./files/config.json'))
  .chain(c => tryCatch(() => JSON.parse(c)))
  .fold(e => 3000,
        c => c.port);

console.log(getPort());
