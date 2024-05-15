const range = (start, end) =>
  new Array(end - start).fill().map((d, i) => i + start);

export default range;
