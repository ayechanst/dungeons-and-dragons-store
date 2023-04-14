import { useState } from 'react';
import { RandomPicker } from '../library/itemPicker';
import { generalStore } from '../library/items';

export default function Store() {
  function handleClick() {
    let randomNumbers = RandomPicker(4);
    console.log(randomNumbers);
  }

  function Item() {
    let item = generalStore[3];

    return (
      <div>
        <h4>{item.product}</h4>
        <p>{item.price}</p>
        <div>{item.description}</div>
      </div>
    );
  }

  return (
    <button onClick={handleClick}>Generate Store</button>
    // this should return a number of items
  );
}
