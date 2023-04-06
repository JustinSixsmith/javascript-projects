import { isValidColor } from './colors';

function logWords(results) {
  //   console.log(results[results.length - 1][0].transcript);
}

export function handleResult({ results }) {
  logWords(results);
  const words = results[results.length - 1][0].transcript;
  // Lowercase the words
  let color = words.toLowerCase();
  // Strip any spaces out
  color = color.replace(/\s/g, '');
  // Check if the words are a valid color
  if (!isValidColor(color)) return;
  // If so, show the UI for that
  const colorSpan = document.querySelector(`.${color}`);
  colorSpan.classList.add('got');
  // Change the background color
  document.body.style.backgroundColor = color;
}
