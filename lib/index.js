/* eslint-disable new-cap */

export const Left = x => ({
  chain: f => Left(x),
  ap: other => Left(x),
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`,
});
Left.of = x => Left(x);

export const Right = x => ({
  chain: f => f(x),
  ap: other => other.map(x),
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`,
});
Right.of = x => Right(x);

export const fromNullable = x =>
  x != null ? Right(x) : Left(null);

export const tryCatch = (f) => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
};

export const Box = x => ({
  ap: b2 => b2.map(x),
  chain: f => f(x), // => Not sure!!
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`,
});
Box.of = x => Box(x);

export const LazyBox = g => ({
  map: f => LazyBox(() => f(g())),
  fold: f => f(g()),
});
LazyBox.of = g => LazyBox(g);

export const All = x => ({
  x,
  concat: ({ x: y }) =>
    All(x && y),
  inspect: () =>
    `All(${x})`,
});
All.empty = () => All(true);
All.of = x => All(x);

export const First = x => ({
  x,
  concat: () =>
    First(x),
  inspect: () =>
    `First(${x})`,
});
First.of = x => First(x);

export const Sum = x => ({
  x,
  concat: ({ x: y }) =>
    Sum(x + y),
  inspect: () =>
    `Sum(${x})`,
});
Sum.empty = () => Sum(0);
Sum.of = x => Sum(x);

// http://bit.ly/2gJRy7M
export const liftA2 = (f, fx, fy) =>
  fx.map(f).ap(fy);

export const liftA3 = (f, fx, fy, fz) =>
  fx.map(f).ap(fy).ap(fz);

export const Either = {
  of: Right,
};
