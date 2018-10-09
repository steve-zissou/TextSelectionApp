// based on https://stackoverflow.com/questions/1484506/random-color-generator
/**
 * Get a random HEX colour.
 * @returns {string}
 */
export default function getRandomColour() {
  const letters = '789ABCD';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.round(Math.random() * 6)];
  }

  return color;
}
