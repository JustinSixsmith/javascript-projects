import { fromSelect, toSelect } from './elements.js';
import { generateOptions } from './utils.js';
import currencies from './currencies.js';
import { handleInput } from './handlers.js';

export function init() {
  // This runs when the page is loaded
  const form = document.querySelector('.app form');

  const optionsHTML = generateOptions(currencies);
  // Populate the options elements
  fromSelect.innerHTML = optionsHTML;
  toSelect.innerHTML = optionsHTML;

  form.addEventListener('input', handleInput);
}
