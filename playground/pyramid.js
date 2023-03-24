function makeRows(num, i) {
  return `${' '.repeat(num - i)}${'_'.repeat(i)}+${'_'.repeat(i)}`;
}

function makePyramid(num) {
  // Console log as many lines as num
  for (let i = 1; i <= num; i++) {
    console.log(makeRows(num, i));
  }
}

makePyramid(10);
