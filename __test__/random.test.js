const randomNumber = require('../../../Users/Franklyn Tavarez/Downloads/10.1/lib/random');

test('generates a random number between 1 and 10', () => {
  expect(randomNumber()).toBeGreaterThanOrEqual(1);
  expect(randomNumber()).toBeLessThanOrEqual(10);
});
 