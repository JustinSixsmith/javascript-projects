const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

async function fetchJoke() {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

function randomItemfromArray(array, not) {
  const item = array[Math.floor(Math.random() * array.length)];
  if (item === not) {
    console.log('Oops, we already used that one');
    return randomItemfromArray(array, not);
  }
  return item;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeButton.textContent = randomItemfromArray(
    buttonText,
    jokeButton.textContent
  );
}

jokeButton.addEventListener('click', handleClick);
