// Named Export (We can have multiple exports)
export async function fetchJoke(loader) {
  // Turn on the loader
  loader.classList.remove('hidden');
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  // Turn off the loader
  loader.classList.add('hidden');
  return data;
}
