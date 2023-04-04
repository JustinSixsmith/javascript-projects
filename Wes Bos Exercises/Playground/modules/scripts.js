import { returnHi as sayHi } from './utils.js';
import person from './justin.js';
import { handleButtonClick } from './handlers.js';

const button = document.querySelector('button');

button.addEventListener('click', handleButtonClick);
