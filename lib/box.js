export const left = x => ({
  chain: f => left(x),
  map: f => left(x),
  fold: (f, g) => f(x),
  inspect: () => `left(${x})`,
});

export const right = x => ({
  chain: f => f(x),
  map: f => right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`,
});

export const fromNullable = x =>
  x != null ? right(x) : left(null);

export const tryCatch = (f) => {
  try {
    return right(f());
  } catch (e) {
    return left(e);
  }
};

export const box = x => ({
  map: f => box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`,
});
