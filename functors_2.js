// Apply multiple functors as arguments to a function (Applicatives)
// http://bit.ly/2hrUmrp

/* eslint-disable no-console, new-cap, semi */

import { Either, liftA2 } from './lib'

const $ = selector =>
  Either.of({ selector, height: 10 })

const getScreenSize = screen => head => foot =>
  screen - (head.height + foot.height)

const res = liftA2(getScreenSize(800), $('header'), $('footer'))
console.log(res)
