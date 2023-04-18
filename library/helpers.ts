import { gear } from './items';

export function randomPicker(numberOfItems: number) {
  const arrayOfNumbers: number[] = [];
  while (arrayOfNumbers.length < numberOfItems) {
    let randomNumber = Math.floor(Math.random() * gear.length);
    if (!arrayOfNumbers.includes(randomNumber)) {
      arrayOfNumbers.push(randomNumber);
    }
  }
  return arrayOfNumbers;
}

export function restock() {
  // depending on the type of item, there will be a different number in stock
}
