function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomBetween(min, max, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min + 1)) + min;
}

function draw(element) {
  console.log(element);
}

document.querySelectorAll('[data-type]').forEach(draw);
