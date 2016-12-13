/* eslint-disable new-cap */

export const Left = x => ({
  chain: f => Left(x),
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`,
});

export const Right = x => ({
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`,
});

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
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`,
});

export const LazyBox = g => ({
  map: f => LazyBox(() => f(g())),
  fold: f => f(g()),
});

export const All = x => ({
  x,
  concat: ({ x: y }) =>
    All(x && y),
  inspect: () =>
    `All(${x})`,
});
All.empty = () => All(true);

export const First = x => ({
  x,
  concat: () =>
    First(x),
  inspect: () =>
    `First(${x})`,
});

export const Sum = x => ({
  x,
  concat: ({ x: y }) =>
    Sum(x + y),
  inspect: () =>
    `Sum(${x})`,
});
Sum.empty = () => Sum(0);
