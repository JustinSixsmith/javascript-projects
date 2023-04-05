export function randomItemfromArray(array, not) {
  const item = array[Math.floor(Math.random() * array.length)];
  if (item === not) {
    console.log('Oops, we already used that one');
    return randomItemfromArray(array, not);
  }
  return item;
}
