import { fetchJoke } from './index.js';
import { loader, jokeHolder, jokeButtonSpan } from './elements.js';
import { randomItemfromArray } from './utils.js';
import buttonText from '../data/button-text.js';

// Named Export
export async function handleClick() {
  const { joke } = await fetchJoke(loader);
  jokeHolder.textContent = joke;
  jokeButtonSpan.textContent = randomItemfromArray(
    buttonText,
    jokeButtonSpan.textContent
  );
}
