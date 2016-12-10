const box = x => ({
  map: f => box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`,
});

export default box;
