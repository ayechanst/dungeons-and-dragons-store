import { gear } from './items';

export function randomPicker(numberOfItems: Number) {
  const arrayOfNumbers = [];
  for (let i = 0; i < numberOfItems; i++) {
    let randomNumber = Math.floor(Math.random() * gear.length);
    // randomNumber is determined by the size of the store specically the availability
    arrayOfNumbers.push(randomNumber);
  }
  return arrayOfNumbers;
}

export function restock() {
  // depending on the type of item, there will be a different number in stock
}
