import wait from 'waait';
import { faker } from '@faker-js/faker';
import { formatDistance, format } from 'date-fns';
import axios from 'axios';
import { intersection, difference, isEqual } from 'lodash';
import to from 'await-to-js';

const fakeNames = Array.from(
  { length: 10 },
  () => `${faker.name.firstName()} ${faker.name.lastName()}`
);

async function go() {
  console.log('going');
  await wait(1000);
  console.log('done');
}

const result = formatDistance(new Date(2020, 5, 1), new Date(2020, 2, 1));

console.log(result);

const date = new Date();

const formatted = format(date, `LLLL 'the' do, y`);

console.log(formatted);

async function getJoke() {
  const response = await axios.get('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  const { joke } = response.data;

  console.log(joke);
}

getJoke();

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [5, 3, 8, 3, 7, 453, 34];

const person1 = { name: 'John Doe', age: 30 };
const person2 = { name: 'John Doe', age: 30 };

console.log(intersection(a, b));

console.log(difference(a, b));

console.log(isEqual(person1, person2));

function checkIfNameIsCool(firstName) {
  return new Promise((resolve, reject) => {
    if (firstName === 'Justin') {
      resolve('Cool name');
      return;
    }
    reject(new Error('Not cool'));
  });
}

async function checkName() {
  const [error, successValue] = await to(checkIfNameIsCool('Jeremy'));
  if (error) {
    // Deal with the error
    console.log(error);
  } else {
    console.log(successValue);
  }
}

checkName();
