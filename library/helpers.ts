import { generalStore } from './items';

export function randomPicker(numberOfItems: Number) {
  const arrayOfNumbers = [];
  for (let i = 0; i < numberOfItems; i++) {
    let randomNumber = Math.floor(Math.random() * generalStore.length);
    arrayOfNumbers.push(randomNumber);
  }
  return arrayOfNumbers;
}
