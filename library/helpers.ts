import { gear } from './items';

export function randomPicker(numberOfItems: number) {
  const arrayOfNumbers: number[] = [];
  while (arrayOfNumbers.length < numberOfItems) {
    let randomNumber = Math.floor(Math.random() * gear.length);
    // randomNumber is determined by the size of the store specically the availability
    if (!arrayOfNumbers.includes(randomNumber)) {
      arrayOfNumbers.push(randomNumber);
    }
  }

  console.log(arrayOfNumbers);
  return arrayOfNumbers;
}

export function restock() {
  // depending on the type of item, there will be a different number in stock
}
