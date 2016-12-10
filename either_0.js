// Enforce a null check with composable code branching using Either
// http://bit.ly/2gMgPvt

const right = x => ({
  map: f => right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`,
});

const left = x => ({
  map: f => left(x),
  fold: (f, g) => f(x),
  inspect: () => `left(${x})`,
});

const fromNullable = x =>
  x != null ? right(x) : left(null);

const findColor = name => {
  return fromNullable({
    red: '#ff4444',
    blue: '#3b5998',
    yellow: '#fff68f',
  }[name]);
};

const result = findColor('blue')
  .map(c => c.slice(1))
  .fold(e => 'no color',
        s => s.toUpperCase());

console.log(result);
