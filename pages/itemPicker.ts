// import { generalStore } from './items';

function RandomPicker(numberOfItems) {
  const arrayOfNumbers = [];
  for (let i = 0; i < numberOfItems; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    arrayOfNumbers.push(randomNumber);
  }
  return arrayOfNumbers;
}

console.log(RandomPicker(4));
